require "faker"

# Thing.destroy_all
# 5.times do |i|
#   Thing.create(name: Faker::Name.name)
# end

10.times do
  user = User.create(
  email: Faker::Internet.email,
  password: '123456',
  password_confirmation: '123456',
  # image: Faker::Avatar.image(slug: "#{first_name}", size: "300x300", format: "png", set: "set1"),
  first_name: Faker::Name.first_name,
  last_name:  Faker::Name.last_name,
  )

1.times do
b = Ballot.create(
  year: 2020,
  is_submitted: false,
  user_id: user.id,
)


8.times do
  Candidate.create(
    first_name: Faker::Name.first_name,
    last_name:  Faker::Name.last_name,
    party:  Faker::Science.element,
    policy: Faker::TvShows::MichaelScott.quote,
    age: rand(15..99),
    vote_total: rand(1..100000),
    ballot_id: b.id,

  )
end
end
end