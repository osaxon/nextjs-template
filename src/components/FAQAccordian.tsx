import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordian";

export default function FAQAccordian() {
  return (
    <section className="py-20">
      <h3 className="text-3xl">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you do xyz?</AccordionTrigger>
          <AccordionContent>Yes. we do xyz...</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you...?</AccordionTrigger>
          <AccordionContent>Details and answer to question</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I...?</AccordionTrigger>
          <AccordionContent>Details and answer to question</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
