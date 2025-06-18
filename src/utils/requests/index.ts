/** Pegar a requisição mandada pelo use usando metodo get.
 * @param url 
 * @param token 
 * @returns resporta de um json
 */

export async function getRequest(url: string, token?: string): Promise<any> {
  const headers: HeadersInit = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

/** Mesma coisa do acima porém com Post , aguardo a resposta da API linha 38 e renderizo ela em um json (minha resposta)
 * @param url 
 * @param body 
 * @param token 
 * @returns json
 */

export async function PostRequest(
  url: string,
  body: object,
  token?: string
): Promise<any> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };


  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

/** Basicamente mesma coisa do acima só que agora com o PUT outro metodo de mandar a requisição para a API e devolver
 * @param url 
 * @param body 
 * @param token 
 * @returns json
 */

export async function PutRequest(
  url: string,
  body: object,
  token?: string
): Promise<any> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

/** Metodo para deletar algo que nosso user queira (exmplo tirar algo da dieta)
 * @param url 
 * @param token 
 * @returns na teoria buscar em um json deletar e dar UPDATE já que não temos um BD ainda
 */

export async function DeleteRequest(url: string, token?: string): Promise<any> {
  const headers: HeadersInit = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
