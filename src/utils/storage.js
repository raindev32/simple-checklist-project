import Cookies from 'js-cookie'

const getUserToken = () => {
  const token = Cookies.get('token')
  return token
}

const get = async (key) => {
  let data = []
  try {
    data = await localStorage.getItem(key)
    return data
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const set = async (key, data) => {
  try {
    await localStorage.setItem(key, data)
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const remove = async (key) => {
  try {
    const removeProgress = await localStorage.removeItem(key)
    return removeProgress
  } catch (error) {
    console.log('Storage Failed:', error)
  }
}

const setRegional = (id, name) => {
  const data = {
    storeId: id,
    cityName: name
  }
  return set('@regional', JSON.stringify(data))
}

const getCityId = async () => {
  const data = await get('@regional')
  const value = JSON.parse(data)
  return value.storeId
}

const getCityName = async () => {
  const data = await get('@regional')
  const value = JSON.parse(data)
  return value.cityName
}

export {
  getUserToken,
  get,
  set,
  remove,
  setRegional,
  getCityId,
  getCityName
}
