import { Text, Select, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import useStyles from "./OrderForm.style";
import { ArrowDownSVG } from "@/shared/assets";
import { OrderButton, WhatsappButton } from "@/shared/ui";

interface IOrderFormProps {
    className?: string,
    formTitle: string,
    withWatsapp?: boolean,
}

function OrderForm({
    className, formTitle, withWatsapp
}
:IOrderFormProps
) {
  const { orderFormContainer, whatsappText } = useStyles().classes

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
      <form 
      onSubmit={form.onSubmit((values) => console.log(values))} 
      className={`${orderFormContainer} ${className}`}
      >
        <Text>{formTitle}</Text>

        <NumberInput
        hideControls
        label="Телефон для связи"
        parser={(value) => value.replace(/\D/g, "").replace(/-/g, "").slice(0, 11)}

        formatter={(value) => {
            const formattedValue = value.replace(/\D/g, "");
            const match = formattedValue.match(/^(\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})$/);

            if (match) {
                return `${match[1]} ${match[2]} ${match[3]}-${match[4]}-${match[5]}`;
            }

            return value;
        }}
        />

        <Select
          label="На что у Вас 3-НДФЛ"
          rightSection={<ArrowDownSVG/>}
          rightSectionWidth={30}
          styles={{ rightSection: { 
            pointerEvents: "none",
            width: "fit-content",
            height: "100%",
            right: "12px",
        } }}
          defaultValue="propertyDeducation"
          data={[
            { value: "propertyDeducation", label: "Имущественный вычет" },
            { value: "variant2", label: "Вариант 2" },
            { value: "variant3", label: "Вариант 3" },
            { value: "variant4", label: "Вариант 4" },
          ]}
        />

        <OrderButton
          type="submit"
          uppercase
        >Заказать</OrderButton>

        { 
          withWatsapp && 
          <Text className={whatsappText}>Напишите нам в WhatsApp</Text>
        }
        {
          withWatsapp && 
          <WhatsappButton/>
        }

      </form>
  );
}

export default OrderForm;