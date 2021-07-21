<?php

namespace App\DataFixtures;

use App\Entity\Technology;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class TechnologyFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $php = (new Technology)->setName('PHP');
        $symfony = (new Technology)->setName('Symfony');
        $bootstrap = (new Technology)->setName('Bootstrap');
        $js = (new Technology)->setName('Javascript');
        $react = (new Technology)->setName('React');
        $sql = (new Technology)->setName('SQL');
        $github = (new Technology)->setName('GitHub');
        $twig = (new Technology)->setName('Twig');
        $axios = (new Technology)->setName('Axios');
        $mvc = (new Technology)->setName('MVC');

        $manager->persist($php);
        $manager->persist($symfony);
        $manager->persist($bootstrap);
        $manager->persist($js);
        $manager->persist($react);
        $manager->persist($sql);
        $manager->persist($github);
        $manager->persist($twig);
        $manager->persist($axios);
        $manager->persist($mvc);

        $this->addReference('php', $php);
        $this->addReference('symfony', $symfony);
        $this->addReference('bootstrap', $bootstrap);
        $this->addReference('js', $js);
        $this->addReference('react', $react);
        $this->addReference('sql', $sql);
        $this->addReference('github', $github);
        $this->addReference('twig', $twig);
        $this->addReference('axios', $axios);
        $this->addReference('mvc', $mvc);

        $manager->flush();
    }
}
