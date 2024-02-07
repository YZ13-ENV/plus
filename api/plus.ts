import { api_host } from "@/const/host"
import { DocPromoCode } from "@/types"
import { authorizationHeader } from "api"

export const plus = {
  promocode: {
    new: async(monthCount?: number): Promise<DocPromoCode | null> => {
      try {
        const stableMonthCount = monthCount ? monthCount : 1
        const headers = new Headers()
        const authHeader = authorizationHeader()
        headers.append('authorization', authHeader || '')
        const url = `${api_host}/plus/promocode?monthCount=${stableMonthCount}`
        const { json, ok } = await fetch(url, { method: "POST", headers: headers })
        if (ok) return await json() as DocPromoCode
        return null
      } catch (e) {
        return null
      }
    },
    get: async(id: string): Promise<DocPromoCode | null> => {
      try {
        const headers = new Headers()
        const authHeader = authorizationHeader()
        headers.append('authorization', authHeader || '')
        const url = `${api_host}/plus/promocode/${id}`
        const { json, ok } = await fetch(url, { method: "GET", headers: headers })
        if (ok) return await json() as DocPromoCode
        return null
      } catch (e) {
        return null
      }
    },
    delete: async(id: string): Promise<boolean> => {
      try {
        const headers = new Headers()
        const authHeader = authorizationHeader()
        headers.append('authorization', authHeader || '')
        const url = `${api_host}/plus/promocode/${id}`
        const { text, ok } = await fetch(url, { method: "DELETE", headers: headers })
        if (ok) return Boolean(await text())
        return false
      } catch (e) {
        return false
      }
    },
    apply: async(uid: string, id: string): Promise<boolean> => {
      try {
        const headers = new Headers()
        const authHeader = authorizationHeader()
        headers.append('authorization', authHeader || '')
        const url = `${api_host}/plus/${uid}/promocode/${id}/apply`
        const { text, ok } = await fetch(url, { method: "Post", headers: headers })
        if (ok) return Boolean(await text())
        return false
      } catch (e) {
        return false
      }
    }
  }
}