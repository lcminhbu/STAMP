using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace STAMP2023.Pages
{
    public class HomeUserModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public HomeUserModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}