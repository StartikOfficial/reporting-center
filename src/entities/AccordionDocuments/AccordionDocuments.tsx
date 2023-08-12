import { Accordion } from "@mantine/core";
import useStyles from "./AccordionDocuments.style";
import { ArrowRightSVG } from "@/shared/assets";

interface IAccordionDocuments {
  className?: string,
};

function AccordionDocuments({className}:IAccordionDocuments) {
  const { accordion } = useStyles().classes;

  type TFillAccordion = {
    itemValue: string,
    title: string,
    description: string,
  }

  const fillAccordion:Record<string, TFillAccordion> = {
    "1": {
      itemValue: "apartment-purchase",
      title: `
        Необходимые документы при имущественном вычете 
        при покупке квартиры
      `,
      description: `
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Dolorem, eligendi totam! 
        Animi repellat a delectus fuga non modi odio 
        assumenda ab sed vitae eum rem nisi, officia 
        consequuntur unde quasi.
      `,
    },
    "2": {
      itemValue: "property-sale",
      title: `
        Необходимые документы при продаже 
        квартиры/дома/дачи/автомобиля/гаража?
      `,
      description: `
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Dolorem, eligendi totam! 
        Animi repellat a delectus fuga non modi odio 
        assumenda ab sed vitae eum rem nisi, officia 
        consequuntur unde quasi.
      `,
    },
    "3": {
      itemValue: "rent",
      title: `
        Необходимые документы при сдаче имущества в аренду
      `,
      description: `
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Dolorem, eligendi totam! 
        Animi repellat a delectus fuga non modi odio 
        assumenda ab sed vitae eum rem nisi, officia 
        consequuntur unde quasi.
      `,
    },
    "4": {
      itemValue: "treatment",
      title: `
        Необходимые документы на вычет за лечение
      `,
      description: `
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Dolorem, eligendi totam! 
        Animi repellat a delectus fuga non modi odio 
        assumenda ab sed vitae eum rem nisi, officia 
        consequuntur unde quasi.
      `,
    },
    "5": {
      itemValue: "tuition",
      title: `
        Необходимые документы на вычет за обучение
      `,
      description: `
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Dolorem, eligendi totam! 
        Animi repellat a delectus fuga non modi odio 
        assumenda ab sed vitae eum rem nisi, officia 
        consequuntur unde quasi.
      `,
    },
    "6": {
      itemValue: "insurance",
      title: `
        Необходимые документы на вычет за оплату страхования жизни
      `,
      description: `
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Dolorem, eligendi totam! 
        Animi repellat a delectus fuga non modi odio 
        assumenda ab sed vitae eum rem nisi, officia 
        consequuntur unde quasi.
      `,
    },
    "7": {
      itemValue: "investment",
      title: `
        Необходимые документы на вычет за инвестиционный счет
      `,
      description: `
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Dolorem, eligendi totam! 
        Animi repellat a delectus fuga non modi odio 
        assumenda ab sed vitae eum rem nisi, officia 
        consequuntur unde quasi.
      `,
    },
  };

  return (
    <Accordion 
    className={`${accordion} ${className}`}
    chevron={<ArrowRightSVG/>}
    styles={{
      chevron: {
        "&[data-rotate]": {
          transform: "rotate(90deg)",
        },
      },
    }}
    >
      {
      Object.keys(fillAccordion).map((key) => (
        <Accordion.Item value={fillAccordion[key].itemValue} key={key}>
          <Accordion.Control>
            {fillAccordion[key].title}
          </Accordion.Control>
          <Accordion.Panel>
            {fillAccordion[key].description}
          </Accordion.Panel>
        </Accordion.Item>
      ))
      }
    </Accordion>
  );
}

export default AccordionDocuments;