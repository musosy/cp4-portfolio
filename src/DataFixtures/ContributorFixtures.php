<?php

namespace App\DataFixtures;

use App\Entity\Contributor;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ContributorFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $kevin = (new Contributor())
            ->setFullname('Kevin Janson')
            ->setWebsite('')
            ->setLinkedin('https://www.linkedin.com/in/kévin-janson/')
            ->setGitHub('https://github.com/JANSONkevin')
        ;
        $colin = (new Contributor())
            ->setFullname('Colin Mora le Gac')
            ->setWebsite('')
            ->setLinkedin('https://www.linkedin.com/in/colin-mora-le-gac-b0077344/')
            ->setGitHub('https://github.com/clnmlg')
        ;
        $guillaume = (new Contributor())
            ->setFullname('Guillaume Joulia')
            ->setWebsite('')
            ->setLinkedin('https://www.linkedin.com/in/guillaume-joulia/')
            ->setGitHub('https://github.com/Keisuke-Joulia')
        ;
        $micka = (new Contributor())
            ->setFullname('Mickael Garatens')
            ->setWebsite('')
            ->setLinkedin('https://www.linkedin.com/in/mickael-garatens/')
            ->setGitHub('https://github.com/micka260583')
        ;
        $franck = (new Contributor())
            ->setFullname('Franck Bouchet')
            ->setWebsite('')
            ->setLinkedin('https://www.linkedin.com/in/franck-bouchet-585652110/')
            ->setGitHub('https://github.com/Franck1981-dev')
        ;
        $manager->persist($kevin);
        $manager->persist($colin);
        $manager->persist($guillaume);
        $manager->persist($micka);
        $manager->persist($franck);

        $this->addReference('kevin', $kevin);
        $this->addReference('colin', $colin);
        $this->addReference('guillaume', $guillaume);
        $this->addReference('micka', $micka);
        $this->addReference('franck', $franck);

        $manager->flush();
    }
}
