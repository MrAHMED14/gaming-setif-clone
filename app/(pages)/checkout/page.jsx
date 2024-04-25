"use client";
import * as z from "zod";
import toast from "react-hot-toast";
import city from "./CitysName.json";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { placeOrder } from "@/lib/api/ServerAction";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { restCart } from "@/redux/slices/cartSlice";
import EmptyCart from "@/components/Global/Cart/EmptyCart";

const citys = city;
const cityArr = new Array();
citys?.city.filter((i) => {
  cityArr.push(i.value);
});

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  emailAddress: z.string().email(),
  phone: z
    .string()
    .max(10, { message: "Incorrect phone format" })
    .min(1, { message: "Required" }),
  city: z.enum(cityArr),
  address: z.string().min(1, { message: "Required" }),
  paymentType: z.enum([
    "Cash (Yalidine)",
    "Cash",
    "Check",
    "Credit Card",
    "Bank Transfer",
  ]),
  msg: z.string().optional(),
});

export default function Checkout() {
  console.log(cityArr);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const cartItem = useSelector((state) => state.cart.products);
  const totalPrice = cartItem.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.qty;
  }, 0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      address: "",
      msg: "",
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.emailAddress,
      phone: values.phone,
      address: values.address,
      msg: values.msg,
      paymentType: values.paymentType,
      city: values.city,
      cart: cartItem,
    };

    await placeOrder({ data });
    dispatch(restCart());
    setIsLoading(false);
    toast.success(
      "Thank you for placing your order. Our team will be contacting you shortly.",
      {
        duration: 5000,
        position: "top-center",
        style: {
          padding: "40px 20px",
          margin: "20px",
          fontWeight: "bold",
        },
      }
    );
  }

  return (
    <>
      <div className="container mx-auto mb-11">
        <div className="mt-6">
          <h1 className="font-bold text-[26px] md:text-4xl text-start my-3 w-fit">
            Checkout
          </h1>
          <p className="border-t-4 border-t-[#ff0000] w-28 mb-4"></p>
        </div>
      </div>
      {cartItem?.length > 0 ? (
        <>
          <div>
            <main className="flex flex-col-reverse  lg:flex-row items-start justify-between mx-5 md:mx-10 lg:mx-32 gap-3 p-5 bg-slate-100">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full flex flex-col gap-4"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>
                            <span className="text-red-500">*</span>First Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="First Name"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>
                            <span className="text-red-500 text-xs">*</span>Last
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Last Name"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      );
                    }}
                  />

                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <FormField
                      control={form.control}
                      name="emailAddress"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-full">
                            <FormLabel>
                              <span className="text-red-500">*</span>Email
                              address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Email address"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-full">
                            <FormLabel>
                              <span className="text-red-500">*</span>Phone
                              Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Phone Number"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        );
                      }}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-full">
                            <FormLabel>
                              <span className="text-red-500">*</span>City
                            </FormLabel>
                            <Select onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your city" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="">
                                {citys?.city.map((item) => (
                                  <SelectItem
                                    key={item.id}
                                    value={item.value}
                                    className="cursor-pointer"
                                  >
                                    {item.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-full">
                            <FormLabel>
                              <span className="text-red-500">*</span>Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Full address"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="paymentType"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>
                            <span className="text-red-500">*</span>Payment
                            method
                          </FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your payment method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="">
                              <SelectItem
                                value="Cash (Yalidine)"
                                className="cursor-pointer"
                              >
                                Cash (Yalidine)
                              </SelectItem>
                              <SelectItem
                                value="Cash"
                                className="cursor-pointer"
                              >
                                Cash
                              </SelectItem>
                              <SelectItem
                                value="Check"
                                className="cursor-pointer"
                              >
                                Check
                              </SelectItem>
                              <SelectItem
                                value="Credit Card"
                                className="cursor-pointer"
                              >
                                Credit Card
                              </SelectItem>
                              <SelectItem
                                value="Bank Transfer"
                                className="cursor-pointer"
                              >
                                Bank Transfer
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="msg"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Additional information</FormLabel>
                          <Textarea
                            placeholder="Type your message here."
                            {...field}
                          />
                        </FormItem>
                      );
                    }}
                  />
                  <Button disabled={isLoading} type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </Form>
              <section className="bg-slate-100 w-full  h-96 rounded-md flex flex-col ">
                <div>
                  <h1 className="mx-1 md:mx-6 text-2xl font-semibold">
                    Your Orders
                  </h1>
                  <div className="overflow-y-auto max-h-96 h-fit">
                    {cartItem?.map((item) => (
                      <div
                        key={item.id}
                        className="mt-3 mx-0 md:mx-6 bg-slate-200 h-10 rounded-md flex justify-between items-center"
                      >
                        <div className="flex items-center w-full">
                          <h1 className="text-xs sm:text-sm font-medium pl-[5px] sm:pl-5 line-clamp-1 w-[90%] md:w-[60%]">
                            {item.title}
                          </h1>
                          <span className="font-bold pl-2 text-[9px] sm:text-sm">
                            x{item.qty}
                          </span>
                        </div>
                        <h1 className="text-[9px] sm:text-sm font-medium pr-[5px] sm:pr-5 w-[50%] text-right">
                          {" "}
                          {item.price} DA (PU)
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between mx-6 py-5">
                  <div>
                    <h1 className="text-base sm:text-2xl text-slate-900 font-bold">
                      TOTAL: {totalPrice} DA
                    </h1>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </>
      ) : (
        <>
          <EmptyCart />
        </>
      )}
    </>
  );
}
