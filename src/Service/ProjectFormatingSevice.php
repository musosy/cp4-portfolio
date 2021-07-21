<?php

namespace App\Service;

class ProjectFormatingService {
    public function formatProject($project) {
        $formatedProject = [
            'name' => $project->getName(),
            'description' => $project->getDescription(),
            'contibutors' => [],
            'technologies' => []
        ];
        $contributors = $project->getContributors();
        $technologies = $project->getTechnologies();
        foreach ($contributors as $contributor) {
            $formatedProject['contributors'][] = [
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
}