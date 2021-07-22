<?php

namespace App\Controller;

use App\Entity\Contributor;
use App\Entity\Project;
use App\Service\FormatingService;
use App\Service\MailingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="api_")
 */
class ApiController extends AbstractController
{
    private $formatingService;
    private $mailingService;
    public function __construct(FormatingService $formatingService, MailingService $mailingService)
    {
        $this->formatingService = $formatingService;
        $this->mailingService = $mailingService;
    }
    /**
     * @Route("/projects", name="projects", methods={"GET"})
     */
    public function projects(Request $request): Response
    {
        $projects = $this->getDoctrine()
            ->getRepository(Project::class)
            ->findAll();
        $formatedProjects = [];
        foreach ($projects as $project) {
            $formatedProjects[] = $this->formatingService->formatProject($project);
        }
        return $this->json($formatedProjects);
    }
    /**
     * @Route("/projects/show/{id}", name="projects_show", methods={"GET"})
     */
    public function projectsShow(Request $request, $id): Response
    {
        $project = $this->getDoctrine()
            ->getRepository(Project::class)
            ->find($id);
        return $this->json($this->formatingService->formatProject($project));
    }

    /**
     * @Route("/contributors/show/{id}", name="contributors_show", methods={"GET"})
     */
    public function contributorsShow(Request $request, $id): Response
    {
        $contributor = $this->getDoctrine()
            ->getRepository(Contributor::class)
            ->find($id)
        ;
        return $this->json($this->formatingService->formatContributor($contributor));
    }

    /**
     * @Route("/contact", name="contact", methods={"POST"})
     */
    public function contact(Request $request): Response
    {
        $res = $this->mailingService->sendMail(json_decode($request->getContent())->contact);
        return $this->json($res);
    }

    /**
     * @Route("/image/{id}", name="image", methods={"GET"})
     */
    public function image(Request $request, $id): Response
    {
        //send the image as a binary file for the browser to display
        $image = $this->getDoctrine()
            ->getRepository(Project::class)
            ->find($id)
        ;
        $path = 'build/images/' . $image->getImagePath();
        $response = new Response();
        $response->headers->set('Content-Type', 'image/jpeg');
        $response->headers->set('Content-Disposition', 'attachment; filename="'.basename($path).'"');
        $response->setContent(file_get_contents($path));
        return $response;
    }
}

