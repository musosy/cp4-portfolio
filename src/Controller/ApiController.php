<?php

namespace App\Controller;

use App\Entity\Project;
use App\Service\ProjectFormatingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="api_")
 */
class ApiController extends AbstractController
{
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
            $formatedProjects[] = (new ProjectFormatingService())->formatProject($project);
        }
        return $this->json($formatedProjects);
    }
    
}
