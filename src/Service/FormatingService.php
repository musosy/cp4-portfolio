<?php

namespace App\Service;

class FormatingService {
    public function formatProject($project) {
        $formatedProject = [
            'id' => $project->getId(),
            'name' => $project->getName(),
            'description' => $project->getDescription(),
            'contibutors' => [],
            'technologies' => []
        ];
        $contributors = $project->getContributors();
        $technologies = $project->getTechnologies();
        foreach ($contributors as $contributor) {
            $formatedProject['contributors'][] = [
                'id' => $contributor->getId(),
                'fullname' => $contributor->getFullname(),
                'website' => $contributor->getWebsite(),
                'linkedin' => $contributor->getLinkedin(),
                'github' => $contributor->getGithub()
            ];
        }
        foreach ($technologies as $technology) {
            $formatedProject['technologies'][] = [
                'id' => $technology->getId(),
                'name' => $technology->getName(),
            ];
        }
        return $formatedProject;
    }
    
    //format contributor
    public function formatContributor($contributor) {
        $formatedContributor = [
            'id' => $contributor->getId(),
            'fullname' => $contributor->getFullname(),
            'website' => $contributor->getWebsite(),
            'linkedin' => $contributor->getLinkedin(),
            'github' => $contributor->getGithub(),
            'projects' => [],
        ];
        $projects = $contributor->getProjects();
        foreach ($projects as $project) {
            $formatedContributor['projects'][] = [
                'id' => $project->getId(),
                'name' => $project->getName()
            ];
        }
        return $formatedContributor;
    }
}