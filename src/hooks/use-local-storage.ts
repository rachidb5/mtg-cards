import { useState, useEffect } from "react";

export function setLocalStorage(key: string, item:string) {
  localStorage.setItem(key, item)
  return getLocalStorage(key)
}

export function getLocalStorage(key: string) {
 return localStorage.getItem(key)
}
