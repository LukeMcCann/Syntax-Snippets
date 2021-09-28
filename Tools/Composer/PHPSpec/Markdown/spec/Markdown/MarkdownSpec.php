<?php

// created via PHPSpec
// bin/phpspec desc Markdown

// PHPspec is a tool for writing clean
// and working PHP using Behaviour
// Driven Development.
namespace spec\Markdown;

use Markdown;
use PhpSpec\ObjectBehavior;

class MarkdownSpec extends ObjectBehavior
{
    // Here we tell PHPspec that the object
    // should be initializable. This will
    // let PHPspec know to look for a class
    // of the specified type. 
    function it_is_initializable()
    {
        $this->shouldHaveType(Markdown::class);
    }

    // Then we add our Examples
    // Examples are how we specify our behaviour,
    // in the below we are telling PHPspec that
    // the Markdown class should have a method called
    // toHtml, and PHPspec should pass the following 
    // argument "Hi, there" and expect the output
    // of "<p>Hi, there</p>".
    function it_converts_plain_text_to_html_paragraphs() 
    {
        $this->toHtml("Hi, there")->shouldReturn("<p>Hi, there</p>");
    }
}
