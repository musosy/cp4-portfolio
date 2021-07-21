<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\EnvVarProcessorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager)
    {
        $admin = (new User())
            ->setUsername('musosy')
            ->setRoles(['ROLE_ADMIN', 'ROLE_USER'])
        ;
        $admin->setPassword(
            $this->passwordHasher->hashPassword(
                $admin,
                'password'
            ));
        $manager->persist($admin);
        $manager->flush();
    }
}
