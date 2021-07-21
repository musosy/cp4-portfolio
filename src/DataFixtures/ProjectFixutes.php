<?php

namespace App\DataFixtures;

use App\Entity\Project;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ProjectFixutes extends Fixture  implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $figyua = (new Project())
            ->setName('Figyua')
            ->setDescription(
                'Le projet Figyua est un site de e-commerce destiné à la figurine manga.
                Il est possible de se créer un compte et de se connecter afin de procéder aux achats. Un système de paiment a été mis en place.
                Ainsi qu\'un panier dynamique qui permet de déposer des articles à l\'aide de boutons.
                Il a été réalisé en groupe de 5 en architecture MVC dans le cadre d\'une formation de développement web à la Wild Code School.'
                )
            ->addContributor($this->getReference('kevin'))
            ->addContributor($this->getReference('micka'))
            ->addContributor($this->getReference('guillaume'))
            ->addContributor($this->getReference('franck'))
            ->addTechnology($this->getReference('mvc'))
            ->addTechnology($this->getReference('php'))
            ->addTechnology($this->getReference('twig'))
            ->addTechnology($this->getReference('sql'))
            ->addTechnology($this->getReference('js'))
        ;
        $manager->persist($figyua);
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            ContributorFixtures::class,
            TechnologyFixtures::class,
        ];
    }
}
