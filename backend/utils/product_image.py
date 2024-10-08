import requests

def get_product_image(name, brand):
    search_term = f"{name} {brand}".replace(' ', '+')
    url = f"https://world.openfoodfacts.org/cgi/search.pl?search_terms={search_term}&search_simple=1&action=process&json=1"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if data['products']:
            image_url = data['products'][0].get('image_front_url')
            if image_url:
                return image_url
            
            image_url = data['products'][0].get('image_url')
            if image_url:
                return image_url
    except Exception as e:
        print(f"Error al buscar la imagen: {str(e)}")
    
    return None