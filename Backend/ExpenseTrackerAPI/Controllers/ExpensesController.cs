using ExpenseTrackerAPI.Data;
using ExpenseTrackerAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseTrackerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        private readonly ExpensetrackerContext _context;
        public ExpensesController(ExpensetrackerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Expenses>>> GetExpenses()
        {
            return await _context.Expenses.OrderByDescending(e => e.Date).ToListAsync();
        }

        [HttpPost]
        //[EnableCors("AllowOrigin")]
        public async Task<ActionResult<Expenses>> Expenses(Expenses expense)
        {
            _context.Expenses.Add(expense);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Expenses), new { id = expense.ExpenseId }, expense);
        }
    }
}
