'use server'
import { revalidatePath } from 'next/cache';
import GlobalApi from './GlobalApi'

export async function getProduct() {
  try {
    const res = await GlobalApi.getProducts()
    return res.data.data
  } catch (error) {
    console.log('Products server are down');
  }
}

export async function getProduct2() {
  try {
    const res = await GlobalApi.getProducts2()
    return res.data.data
  } catch (error) {
    console.log('Products server are down');
  }
}

export async function getLatestProduct() {
  try {
    const res = await GlobalApi.latestProducts()
    return res.data.data
  } catch (error) {
    console.log('Products server are down');
  }
}


export async function getProductCategory(productId) {
  try {
    const res = await GlobalApi.getProductById(productId)
    const res2 = await GlobalApi.getCategory(encodeURI(res?.data?.data?.attributes?.sub_category?.data?.id))
    return res2.data.data[0]

  } catch (error) {
    console.log('error: getProductCategory()')
  }
}

export async function getProductByIds(productId) {
  try {
    const res = await GlobalApi.getProductById(productId)
    return res.data.data

  } catch (error) {
    console.log('error: getProductByIds()')
  }
}

export async function getUserByEmail(email) {
  try {
    return await GlobalApi.findUser(email)
  } catch (error) {
    console.log(error);
  }

}


export async function placeOrder(payload) {
  try {
    await GlobalApi.addOrder(payload)
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }

}


export async function getPopularProducts() {
  try {
    const res = await GlobalApi.popularProducts()
    return res.data.data
  } catch (error) {
    console.log('Products server are down');
  }

}
