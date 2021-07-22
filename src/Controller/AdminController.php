<?php

namespace App\Controller;

use App\Form\ImageType;

use App\Entity\Contributor;
use App\Entity\Image;
use App\Entity\Project;
use App\Entity\Technology;
use App\Form\ContributorType;
use App\Form\ProjectType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
/**
 * @Route("/admin", name="admin_")
 */
class AdminController extends AbstractController
{
    //the main route is dedicated to the projects
    // PROJECTS ROUTES //
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        $projects = $this->getDoctrine()
            ->getRepository(Project::class)
            ->findAll();
        return $this->render('admin/index.html.twig', [
            'projects' => $projects,
        ]);
    }

    /**
     * @Route("/project/new", name="project_new", methods={"GET", "POST"})
     */
    public function projectNew(Request $request): Response
    {
        $project = new Project();
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($project);
            $em->flush();
            return $this->redirectToRoute('admin_index');
        }
        return $this->render('admin/project_new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
    /**
     * @Route("/project/delete/{project}" , name="project_delete", methods={"GET", "POST"})
     * @ParamConverter("project", class="App\Entity\Project", options={"mapping":{"project":"id"}})
     */
    public function projectDelete(Project $project): Response
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($project);
        $em->flush();
        return $this->redirectToRoute('admin_index');
    }
    /**
     * @Route("/project/edit/{project}", name="project_edit", methods={"GET", "POST"})
     * @ParamConverter("project", class="App\Entity\Project", options={"mapping":{"project":"id"}})
     */
    public function projectEdit(Project $project, Request $request): Response
    {
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($project);
            $em->flush();
            return $this->redirectToRoute('admin_index');
        }
        return $this->render('admin/project_edit.html.twig', [
            'form' => $form->createView(),
            'project' => $project
        ]);
    }
    /**
     * @Route("/project/{project}", name="project_show")
     * @ParamConverter("project", class="App\Entity\Project", options={"mapping":{"project":"id"}})
     */
    public function projectShow(Project $project): Response
    {
        return $this->render('admin/project_show.html.twig', [
            'project' => $project,
        ]);
    }
    // END OF PROJECTS ROUTES //
    // TECHNOLOGIES ROUTES //
    /**
     * @Route("/technologies", name="technologies")
     */
    public function technologies(): Response
    {
        $technologies = $this->getDoctrine()
            ->getRepository(Technology::class)
            ->findAll();
        return $this->render('admin/technologies.html.twig', [
            'technologies' => $technologies,
        ]);
    }
    //new technology with modal
    /**
     * @Route("/technology/new", name="technology_new", methods={"POST"})
     */
    public function technologyNew(Request $request): Response
    {
        $techno = (new Technology())->setName($request->get('name'));
        $this->getDoctrine()->getManager()->persist($techno);
        $this->getDoctrine()->getManager()->flush();
        return $this->redirectToRoute('admin_technologies');
    }
    //A modal is used for this edit route
    /**
     * @Route("/technology/edit/", name="technology_edit", methods={"POST"})
    */
    public function editTechnology(Request $request): Response
    {
        $prevState = $this->getDoctrine()->getManager()->getRepository(Technology::class)->findOneBy(['id' => $request->get('id')]);
        $prevState->setName($request->get('name'));
        $this->getDoctrine()->getManager()->persist($prevState);
        $this->getDoctrine()->getManager()->flush();
        return $this->redirectToRoute('admin_technologies');
    }
    /* delete a technology */
    /**
     * @Route("/technology/delete/{technology}", name="technology_delete")
     * @ParamConverter("technology", class="App\Entity\Technology", options={"mapping":{"technology":"id"}})
     */
    public function deleteTechnology(Technology $technology): Response
    {
        $this->getDoctrine()->getManager()->remove($technology);
        $this->getDoctrine()->getManager()->flush();
        return $this->redirectToRoute('admin_technologies');
    }
    
    // END OF TECHNOLOGIES ROUTES //

    // CONTRIBUTORS ROUTES //
    /**
     * @Route("/contributors", name="contributors")
     */
    public function contributors(): Response
    {
        $contributors = $this->getDoctrine()
            ->getRepository(Contributor::class)
            ->findAll();
        return $this->render('admin/contributors.html.twig', [
            'contributors' => $contributors,
        ]);
    }
    /**
     * @Route("/contributors/new", name="contributor_new", methods={"POST", "GET"})
     */
    public function contributorNew(Request $request): Response
    {
        $contributor = new Contributor();
        $form = $this->createForm(ContributorType::class, $contributor);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($contributor);
            $em->flush();
            return $this->redirectToRoute('admin_contributors');
        }
        return $this->render('admin/contributor_new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
    /**
     * @Route("/contributor/{contributor}", name="contributor_edit", methods={"POST", "GET"})
     * @ParamConverter("contributor", class="App\Entity\Contributor", options={"mapping":{"contributor":"id"}})
    */
    public function contributorEdit(Contributor $contributor, Request $request): Response
    {
        $form = $this->createForm(ContributorType::class, $contributor);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('admin_contributors');
        }

        return $this->render('admin/contributor_edit.html.twig', [
            'contributor' => $contributor,
            'form' => $form->createView(),
        ]);
    }
    /**
     * @Route("/contributor/delete/{contributor}", name="contributor_delete" )
     * @ParamConverter("contributor", class="App\Entity\Contributor", options={"mapping":{"contributor":"id"}})
    */
    public function contributorDelete(Contributor $contributor): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($contributor);
        $entityManager->flush();
        return $this->redirectToRoute('admin_contributors');
    }
    // END CONTRIBUTORS ROUTES //

    // IMAGES ROUTES //
    /**
     * @Route("/images" , name="images")
     */
    public function images(): Response
    {
        $images = $this->getDoctrine()
            ->getRepository(Image::class)
            ->findAll();
        return $this->render('admin/images.html.twig', [
            'images' => $images,
        ]);
    }
    //upload a file and save the path in the database
    /**
     * @Route("/image/new", name="image_new", methods={"POST", "GET"})
     */
    public function imageNew(Request $request): Response
    {
        $image = new Image();
        $form = $this->createForm(ImageType::class, $image);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $uploadedImg = $form->get('url')->getData();
            if ($uploadedImg) {
                $newFileName = pathinfo((string) $uploadedImg->getClientOriginalName(), PATHINFO_FILENAME);
                $newFileName = str_replace(' ', '_', $newFileName);
                $newFileName = strtolower($form->get('project')->getData()->getName()) . '_' . $newFileName;

                try {
                    $uploadedImg->move(
                        $this->getParameter('upload_dir_back'),
                        $newFileName
                    );
                } catch (\Exception $e) {
                    return $this->redirectToRoute('admin_image_new', [
                        'error' => $e->getMessage(),
                        'form' => $form->createView()
                    ]);
                }
                $image->setUrl($newFileName);
                $this->getDoctrine()->getManager()->persist($image);
                $this->getDoctrine()->getManager()->flush();
                return $this->redirectToRoute('admin_images');
            }
        }
        return $this->render('admin/image_new.html.twig', [
            'form' => $form->createView(),
        ]); 
    }
        
    /**
     * @Route("/image/delete/{image}", name="image_delete" )
     * @ParamConverter("image", class="App\Entity\Image", options={"mapping":{"image":"id"}})
     */
    public function imageDelete(Image $image): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($image);
        $entityManager->flush();
        //remove the file from the folder
        $path = $this->getParameter('upload_dir_back') . '/' . $image->getUrl();
        unlink($path);
        
        return $this->redirectToRoute('admin_images');
    }

    // END IMAGES ROUTES //
}
