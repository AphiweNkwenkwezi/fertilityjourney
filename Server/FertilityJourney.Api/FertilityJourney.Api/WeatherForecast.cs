namespace FertilityJourney.Api
{
    public class User
    {
        public Guid Id { get; set; }

        public string FirstName { get; set; } = default!;

        public string LastName { get; set; } = default!;

        public string Email { get; set; } = default!;

        public DateOnly DateOfBirth { get; set; }

        public string? PhoneNumber { get; set; }

        public string? Gender { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    }
}
