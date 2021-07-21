<?php

namespace App\Form;

use App\Entity\Contributor;
use App\Entity\Project;
use App\Entity\Technology;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'attr' => [
                    'class' => 'text-center',
                    'style' => 'width: 80%',
                ]
            ])
            ->add('description', TextareaType::class, [
                'attr' => [
                    'class' => 'text-center',
                    'style' => 'width: 80%',
                ]
            ])
            ->add('contributors', EntityType::class, [
                'class' => Contributor::class,
                'choice_label' => 'fullname',
                'multiple' => true,
                'expanded' => true,
                'by_reference' => false,
                'attr' => [
                    'class' => 'd-flex justify-content-evenly flex-wrap'
                ]
            ])
            ->add('technologies', EntityType::class, [
                'class' => Technology::class,
                'choice_label' => 'name',
                'multiple' => true,
                'expanded' => true,
                'by_reference' => false,
                'attr' => [
                    'class' => 'd-flex justify-content-evenly flex-wrap'
                ]
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Project::class,
        ]);
    }
}
