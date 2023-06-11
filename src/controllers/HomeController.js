class HomeController {
  index(request, response) {
    response.json({ tudo: "OK" });
  }
}

export default new HomeController();
