const Profile = require("../model/Profile")

module.exports = {
    async index(req, res) {
        return res.render("profile", { profile: await Profile.get() })
    },

    async update(req, res) {
        const data = req.body

        const weeksPerYear = 52

        // quantas semanas estou trabalhando no mês
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12

        // quantas horas estou trabalhando na semana
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]

        // quantas horas estou trabalhando no mês
        const monthlyTotalHours = weeksPerMonth * weekTotalHours

        // qual será o valor da minha hora?
        const valuePerHour = data["monthly-budget"] / monthlyTotalHours

        const profile = await Profile.get()

        await Profile.update({
            ...profile,
            ...req.body,
            "value-per-hour": valuePerHour
        })

        return res.redirect("/profile")
    },
}