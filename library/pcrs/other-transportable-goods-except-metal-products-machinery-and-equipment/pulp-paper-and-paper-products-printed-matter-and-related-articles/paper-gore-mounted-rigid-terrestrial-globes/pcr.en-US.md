---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-gore-mounted-rigid-terrestrial-globes
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Paper-gore-mounted rigid terrestrial globes

## 1. Scope and Applicability

This PCR produces foreground assembly inventories for non-book physical terrestrial globes made by wet mounting printed paper gores on prepared rigid spheres, brush watercolour finishing and protective varnishing, and fitting complete wooden bearing stands. Receipt of prepared components defines the disclosed foreground start; actual upstream manufacture and printing remain required backgrounds. Producer originals establish the spherical mounting/support route, not a universal recipe or a claim that their own operations use purchased components. The maker explicitly prepares spheres, prints maps and fabricates/finishes bases in-house or through identified collaborators. This assembly unit represents the separable wet-mounting/finishing/fitting stages only. To model that maker or any integrated factory, the lifecyclemodel must also contain independently quantified and linked sphere-preparation, cartography/printing and wooden/metal stand-fabrication processes. Same-site ownership never removes those processes: their actual material, energy, loss and release inventories and matching component handoffs are required. A real externally sourced component needs verified supplier coverage instead. Missing any preparation process or actual supplier basis leaves the complete manufacturing LCI incomplete; this assembly unit alone cannot represent the whole maker.

Book-form atlases and planar paper maps are excluded. Conventional printed-paper bookkeeping can be shared with book/periodical methods, but printed content alone does not justify this identity: spherical wet stretching/adhesive mounting and complete globe/stand finishing require separate physical balances. Use of this candidate still requires independent applicability and methodology review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-gore-mounted-rigid-terrestrial-globes |
| classification_refs | CPC 3.0 32510; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Complete rigid paper-gore terrestrial globe with wooden bearing stand and brush protective finish, assembled from prepared components |
| excluded_products | Book-form atlases; flat/folded/wall maps; inflatable/direct-printed-plastic/illuminated/electronic/celestial/toy globes; in-house shell/printing/stand production without explicit foreground extension |
| representative_product | Paper-gore-mounted rigid terrestrial globes |
| production_route | Component receipt → gore cutting → brush washes and drying → wet adhesive mounting/stretching → further brush colouring → varnishing/drying → wooden bearing stand fitting → final QC → fitted case packing |
| market_state | Accepted complete non-illuminated globe with stand at factory gate; net reference excludes transport case |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete physical terrestrial cartographic display globe including its working stand |
| How much | 1 kg net accepted complete globe with stand |
| How well | Declared diameter, cartographic scale/resolution/edition, spherical alignment/seams, shell/material structure, brush finish and stand stability/rotation acceptance; no universal numerical quality threshold |
| How long or cycle | One declared production period normalized at factory gate; no assumed service lifetime or lifetime functional equivalence |
| reference_flow_link | `finished_globe` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Maps and hydrographic or similar charts of all kinds, including atlases, wall maps, topographical plans and globes, printed other than book form `ffbb7718-2cb6-4962-8dd4-93ef71ac9e0c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/period/model; diameter and net complete globe/stand mass; shell composition/cure; paper/printing provider, ink and moisture; cartography edition/scale/resolution; adhesive and each watercolour/varnish formula/CAS; wooden stand species/components/finish; component handoff and provider coverage; drying route; fitted case and excluded packing tare; quality acceptance and study boundary |

Declare every qualifier in dataset metadata or traceable collection records. The broad reference display does not authorize excluded forms or routes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg accepted complete globe and stand net mass; collect calibrated weighing through cp_output. Exclude case packaging and rejects. No per-globe mass is fixed. |
| `common_denominator` | all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the same measured accepted output mass for all rows over the same lot/period/configuration. Preserve raw numerator units; collection aggregation and normalized inventory are per 1 kg reference flow. Missing or zero accepted mass prevents normalization. |
| `formulated_mass` | formulations and water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record supplied wet mass and measured solids/constituents without substituting dry active material. Additional water is separate; obtain actual density/temperature for recorded volume conversion. The database secondary water mass coefficient is not a measured density. |
| `electricity_units` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the direct-read property and user-side below1kV supply; convert metered kWh using 1 kWh = 3.6 MJ. This identity is not heat, steam or fuel. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared rigid globe sphere, uncut printed paper gore sheets, complete wooden bearing stand, glue/paint/varnish and fitted flight case at the assembly handoff: verified external delivery or measured transfer from required linked preparation processes |
| starting_condition_role | Explicit prepared-component foreground handoff with actual upstream component manufacture/printing linked once |
| product_classification_scope | Narrower rigid paper-gore terrestrial-globe subset of CPC3.0:32510, excluding all book form |
| recursive_input_rule | Internal rework returns are physical circulation. Purchased previously completed globes require their actual prior production/background and restoration route assessment; never recurse through the finished-globe output or treat them as raw bare shells. |
| upstream_dataset_requirement | Actual amount-compatible shell, papermaking/printing, formulations, stand, case, utility and delivery providers; replacement rather than duplicate coverage if stages are brought into foreground |
| disclosure | Factory stages and suppliers; exclusions/extensions; provider geography/time; material/stock/emission gaps; primary/reference units; transport and downstream study assumptions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_scope` | physical applicability | Require a rigid non-illuminated terrestrial globe covered by printed paper gores, brush watercolour and a protective varnish, delivered complete with a wooden bearing stand. The adopted shape has genuine wet mounting and support/finish operations. Exclude flat/folded/wall maps, book-form atlases, printed-only sheets, inflatable globes, directly printed plastic shells, illuminated/electronic globes and non-terrestrial/toy variants. Map content, publication frequency or subject is not a new methodology boundary. | `unsd-cpc3-2025`; `bellerby-globe-route`; `bellerby-globe-faq` |
| `b_foreground` | selected component handoff | Include component receipt/QC, paper-gore cutting, initial watercolour wash/drying, paper wetting, adhesive mounting/stretching, additional brush colouring, varnishing/drying, complete stand fitting, final QC and case packing, plus attributable electricity, water, cleaning, waste and boundary emissions. Baseline drying is ambient or electric; direct fuel combustion, purchased heat/steam, spray finishing, shell sanding/casting and base fabrication are outside this prepared-component route and require an explicit assessed extension when actually present. | `bellerby-globe-route`; `bellerby-maker-interview` |
| `b_upstream` | all purchased components | Require complete actual backgrounds for shell fabrication, pulp/papermaking and actual printing of supplied gore sheets, mounting glue/paint/varnish formulation, complete stand and fitted case manufacture, utility supply and delivery. Paper supplier coverage includes applicable stock preparation, paper formation/drying/finishing, broke circuits, fuel/heat and effluent treatment. Use pulp/paper evidence for those steps, never sawmill/plywood recipes. Separate pre-existing ink/coatings in supplied parts from foreground additions. No component may be treated as burden-free because its UUID is unavailable. | `jrc-paper-bref-2015`; `epa-eiip-2002`; `bellerby-globe-route` |
| `b_handoff_truth` | reporting-site operations | Prepared-component receipt is a declared modelling handoff, not evidence that the cited maker buys spheres, printing or stands. If those steps occur at the reporting site, collect them as additional foreground units and replace the matching supplied-component background. Preserve actual paper/ink/plate and sphere/base material exchanges atomically; do not omit in-house work or count it twice. | `bellerby-globe-route` |
| `b_physical_links` | stage and environmental ledgers | Maintain one aggregated assembly unit with independent stage measurements. The same paper, shell and mounted globe cross adjacent stage ledgers at identical physical quantities and moisture/composition, including retained ink/glue/paint/varnish. Internal transfers/rework are circulation, not additional final outputs. Preserve unallocated material/water/carbon balances separately from the environmental burden allocation ledger. |  |
| `b_releases` | factory and nature boundary | Record outdoor post-collection/abatement species release, collected dust, segregated spent chemicals, contaminated cloth and aqueous washwater to treatment as distinct exchanges. Indoor exposure is not an outdoor LCI emission. Biogenic/fossil carbon retained in paper/ink/glue/finish is not emitted carbon; keep actual biogenic CO2 in upstream/waste-treatment LCI even when a reporting metric treats it differently. Do not assume zero VOC from a watercolour or water-based label. | `epa-eiip-2002`; `jrc-paper-bref-2015` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_globe_assembly` | Cutting, wet mounting, brush finishing, stand fitting and packing | required | declared prepared-component route | foreground | `finished_globe` |

Physical sequence: supplied sheets → cut gores → initially painted/dried gores → wetted adhesive-mounted sphere → further painted/varnished and dried globe → complete globe/stand → QC and case packing. Preserve stage meters and physical stock/transfer ledgers, while reporting one aggregated foreground inventory to avoid repeating the reference output UUID.

### Process: Globe assembly (`p_globe_assembly`)

#### Inputs

##### Product flows

###### Preformed rigid globe sphere (`sphere_shell`)

One supplied prepared rigid sphere ready for paper mounting. Record actual substrate/resin/filler, cure state, coatings, diameter, mass and supplier route. Glass beads, optical-glass segments and helmet shells are incompatible; no sphere chemistry or universal recipe is assumed.

- Selected flow: Preformed rigid globe sphere
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_materials normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `bellerby-globe-route`

###### Printed Matter (`printed_gores`)

Printed paper sheets bearing globe gores, before cutting or mounting, with actual ink and paper moisture included. This broad paper-substrate identity includes this physical subset; the 3D-prototype example in its comment is not the selected route. Provider coverage must include actual pulp/paper production, prepress, printing and delivery; a blank-paper or plastic-printing background is insufficient.

- Selected flow: Printed Matter `a07593ed-90ed-4236-b90d-7a41ec14871c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_materials normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `bellerby-globe-route`; `jrc-paper-bref-2015`; `epa-eiip-2002`

###### Adhesives (`mount_adhesive`)

One identified as-supplied paper-mounting glue formulation. The broad adhesive record expressly includes glue/paste without a conflicting route. Record binder/CAS, carrier, solids, density, supplier and actual wet mass; it does not establish starch, PVAc, animal glue or hot-melt use. Water already in the formulation is not a second purchase.

- Selected flow: Adhesives `279b6b7f-519f-4f32-aab0-99bb61cb90dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_materials normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `bellerby-maker-interview`

###### Watercolour paint, as supplied (`watercolour`)

One supplier formulation and colour used for a brush-applied wash. Record pigments/CAS, binder, carrier, solids and wet mass; each other colour/formulation requires its own atomic row and provider. Organic pigment alone is not finished paint, and an acrylic/alkyd architectural water-based paint is not evidence of artist watercolour.

The broad Coating identity includes decorative paints and protective lacquers across supplied phases; use only for this one complete actual formulation, with full supplier composition/SDS, phase, carrier/water/solids, actual application and compatible provider reference mass. It is not a pure pigment/resin or an architectural/UV/baked formulation default. Keep different formulations as separate exchanges and application charge, retention, stocks, returns and waste as distinct measured accounts.

- Selected flow: Coating `59808a77-a33c-493f-8e5f-c0eb3e837943`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_materials normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `bellerby-globe-route`

###### Clear protective globe varnish, as supplied (`clear_varnish`)

One identified brush-applied protective formulation for mounted paper. Require actual resin, solvent/CAS, solids, application, cure and supplier definition. The maker discloses gloss/matte resin or varnish finishing but not its exact application method or formula; confirm this selected brush route from actual factory records before use. A different actual application/cure needs its measured route, not an assumed brush or spray operation. The 87.5% water-free acrylic record, UV varnish and baking varnish are not generic substitutes. Additional finish formulations require separate rows.

The broad Coating identity includes decorative paints and protective lacquers across supplied phases; use only for this one complete actual formulation, with full supplier composition/SDS, phase, carrier/water/solids, actual application and compatible provider reference mass. It is not a pure pigment/resin or an architectural/UV/baked formulation default. Keep different formulations as separate exchanges and application charge, retention, stocks, returns and waste as distinct measured accounts.

- Selected flow: Coating `59808a77-a33c-493f-8e5f-c0eb3e837943`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_materials normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `bellerby-globe-route`

###### Finished wooden globe stand with bearing supports (`globe_stand`)

One complete supplied wooden stand including its actual bearing supports, finish and fasteners. Record species, material masses, finishes and supplier fabrication. It is not bare timber, furniture in general or a set of amusement-equipment modules; do not add components already included in a complete stand background.

- Selected flow: Finished wooden globe stand with bearing supports
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_materials normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `bellerby-globe-route`; `bellerby-globe-faq`

###### Tap water (`tap_water`)

Purchased treated tap water separately added for paper wetting, paint dilution and tool washing. Preserve direct-read reference property; obtain actual provider, meter basis and measured density/temperature when converting to mass. Exclude formulation-carried water; no database screening density is a foreground default.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_water normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `bellerby-globe-route`

###### Alternating current (`electricity`)

Conditional use of grid-average alternating-current supply below 1 kV at the user meter for cutting, lighting, ventilation or electric drying. Retain the recorded Net calorific value/MJ property and use 1 kWh = 3.6 MJ. Record actual voltage, region, period, provider and metered stage use. The raw record specifies CN supply; that geography and the below1kV user mix do not choose a London or other site background. Verify actual site/country/year/provider and delivery/loss compatibility independently before linking. Do not attach on-site generation or medium-voltage supply to this identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable exchange from cp_energy normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Ethanol (`ethanol_cleaning`)

Conditional separately purchased ethanol cleaning solvent only when its grade/assay and use are evidenced. Record purity, carbon origin and supplier background. Aqueous/denatured mixtures require a separate identified formulation rather than treating gross mixture mass as ethanol; do not re-add ethanol already carried in paint, glue or varnish.

- Selected flow: Ethanol `df7bb021-85c3-4d72-ad46-29e83afe64e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_materials normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`

###### Cotton wiping cloth (`clean_cloth`)

Conditional fresh cotton cloth used for wiping tools. Record fibre, grade, dry mass, reuse cycles and cleaning route. The otherwise cotton-named record is hard-qualified as water treatment chemical and is rejected for this role.

- Selected flow: Cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_materials normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Fitted protective globe flight case (`flight_case`)

One complete supplied fitted flight case including the actual lining and cushioning. Obtain material/BOM, gross and tare mass, supplier fabrication and delivery. A plane, generic glass product, wooden crate or standalone foam is not this case. Case manufacture is background; case mass is excluded from reference globe mass.

- Selected flow: Fitted protective globe flight case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_materials normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `bellerby-globe-route`; `bellerby-globe-faq`

#### Outputs

##### Product flows

###### Maps and hydrographic or similar charts of all kinds, including atlases, wall maps, topographical plans and globes, printed other than book form (`finished_globe`)

One final accepted complete physical terrestrial globe with mounted paper, retained paint/glue/finish and its wooden bearing stand; exclude flight-case transport packaging. Verify model/cartography edition, diameter, shell composition, net mass and QC. The broad reference record includes globes; its Chinese display is retained verbatim and does not expand this PCR to flat maps or book-form atlases.

- Selected flow: Maps and hydrographic or similar charts of all kinds, including atlases, wall maps, topographical plans and globes, printed other than book form `ffbb7718-2cb6-4962-8dd4-93ef71ac9e0c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `unsd-cpc3-2025`; `bellerby-globe-route`

##### Waste flows

###### waste paper (unspecified) (`paper_offcuts`)

Printed-paper trim and torn dry gores segregated before glue/finish contamination, dispatched as one characterized waste-paper stream. Record ink, moisture, recipient and treatment. Adhesive/varnish-coated composite scraps require a distinct characterized row; internal usable rework is circulation rather than export.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `bellerby-globe-route`; `jrc-paper-bref-2015`

###### Collected printed-paper cutting dust (`collected_paper_dust`)

If dust is collected, measure weighed dry solids and ink contamination, collector stocks and recipient; maintain separation from outdoor airborne particles. No generic boiler/sawmill or papermill dust factor applies to hand-cut gores.

Use this broad collected industrial-dust Waste identity only for actual captured printed-paper dust, with named cutting/collector stage, measured whole handoff mass, dry solids/moisture, ink/finish contamination, stocks and actual receiver compatibility. Dry solids are a subledger, not a replacement for delivered whole mass. No elementary air emission, boiler/sawmill source, default factor or recycling credit is inferred.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Spent globe-mounting glue (`waste_adhesive`)

One segregated spent glue formulation; collect wet mass, carrier/solid/species fractions, stock change and actual recipient. Do not merge tool-wash water or contaminated cloth into this row, or treat unused returned stock as waste.

Measure actual handoff phase and carrier/water/solids; a coating input or application device does not prove whether the removed waste is liquid, paste, semi-solid or solid. Retain the UUID gap until phase and actual receiver reference basis are compatible.

- Selected flow: Spent globe-mounting glue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Spent watercolour paint (`waste_watercolour`)

One segregated spent watercolour formulation; collect wet mass, carrier/solid/species fractions, stock change and actual recipient. Do not merge tool-wash water or contaminated cloth into this row, or treat unused returned stock as waste.

Measure actual handoff phase and carrier/water/solids; a coating input or application device does not prove whether the removed waste is liquid, paste, semi-solid or solid. Retain the UUID gap until phase and actual receiver reference basis are compatible.

- Selected flow: Spent watercolour paint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Spent protective globe varnish (`waste_varnish`)

One segregated spent varnish formulation; collect wet mass, carrier/solid/species fractions, stock change and actual recipient. Do not merge tool-wash water or contaminated cloth into this row, or treat unused returned stock as waste.

Measure actual handoff phase and carrier/water/solids; a coating input or application device does not prove whether the removed waste is liquid, paste, semi-solid or solid. Retain the UUID gap until phase and actual receiver reference basis are compatible.

- Selected flow: Spent protective globe varnish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Aqueous watercolour and glue tool-wash effluent (`aqueous_tool_wash`)

One actual mixed aqueous cleaning-effluent stream, kept separately from neat spent glue/paint/varnish. Measure water, suspended pigment/adhesive solids and dissolved organic species, receiving sewer/treatment and acceptance conditions. Paper-mill effluent, manganese-slag wash water and sludge are incompatible. Direct discharge to nature requires additional species-specific elementary rows and is outside this supplied-to-treatment route.

The broad industrial liquid-waste identity applies only to this one actual whole wet liquid stream sent to its named receiver. Verify handoff phase, water/ethanol/other species and suspended solids as applicable, measured whole wet mass or volume with representative measured density, stocks and acceptance/treatment. It is neither pure solvent mass nor an environmental release; H2O and contaminant subledgers do not create a second external exchange. No hazard class, receiver route or credit is defaulted.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_water normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### Spent cotton wiping cloth contaminated by globe varnish (`spent_cloth`)

Conditional single segregated contaminated cloth stream; collect total wet mass, cloth dry mass and retained coating/solvent by actual composition. Record recipient and hazardous/nonhazardous acceptance. A waste-solvent flow or clean reusable textile is not the contaminated cloth.

The broad industrial solid-waste identity applies only to this independently received actual solid stream. Verify the named stage, whole handoff mass, dry solids/moisture, full shell/paper/ink/glue/finish/cloth/stand composition as applicable, contamination and actual recipient acceptance/treatment. Keep separate streams and constituents as subledgers without exporting them twice; no hazard class, clean/recycled grade, disposal route or credit is inferred. Separately drained liquid needs its own actual stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Rejected bare rigid globe sphere (`rejected_shell`)

Bare supplied shell rejected before paper mounting; collect actual substrate/resin/filler, cure state, net mass and recipient. A finished mounted-globe reject needs a distinct composite row and full upstream burdens; no glass-scrap or generic toxic-waste substitution.

The broad industrial solid-waste identity applies only to this independently received actual solid stream. Verify the named stage, whole handoff mass, dry solids/moisture, full shell/paper/ink/glue/finish/cloth/stand composition as applicable, contamination and actual recipient acceptance/treatment. Keep separate streams and constituents as subledgers without exporting them twice; no hazard class, clean/recycled grade, disposal route or credit is inferred. Separately drained liquid needs its own actual stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Adhesive-contaminated printed-paper gore scrap (`contaminated_gore`)

One segregated paper-gore scrap stream from wet adhesive mounting. Record actual paper, ink, glue, moisture and recipient acceptance. It is not clean waste paper or neat spent adhesive; weigh gross material and reconcile retained constituents once.

The broad industrial solid-waste identity applies only to this independently received actual solid stream. Verify the named stage, whole handoff mass, dry solids/moisture, full shell/paper/ink/glue/finish/cloth/stand composition as applicable, contamination and actual recipient acceptance/treatment. Keep separate streams and constituents as subledgers without exporting them twice; no hazard class, clean/recycled grade, disposal route or credit is inferred. Separately drained liquid needs its own actual stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `bellerby-globe-route`

###### Rejected paper-mounted rigid globe sphere (`mounted_sphere_reject`)

Conditional external rejection after paper mounting and before stand fitting. Record rejection stage and actual shell, paper, ink, glue, paint/finish and moisture/cure state; retain upstream and failed-stage burdens. Internal stripped-shell reuse is circulation, with separate paper/chemical removal wastes, not simultaneous shell export.

The broad industrial solid-waste identity applies only to this independently received actual solid stream. Verify the named stage, whole handoff mass, dry solids/moisture, full shell/paper/ink/glue/finish/cloth/stand composition as applicable, contamination and actual recipient acceptance/treatment. Keep separate streams and constituents as subledgers without exporting them twice; no hazard class, clean/recycled grade, disposal route or credit is inferred. Separately drained liquid needs its own actual stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `bellerby-globe-route`

###### Rejected complete paper-gore globe with wooden stand (`complete_globe_reject`)

Conditional complete-unit reject dispatched after final fitting. Record the complete composition and net mass including its stand, actual recipient and salvage. No share of a burden allocation reduces the physical reject mass; it is not an accepted reference output.

The broad industrial solid-waste identity applies only to this independently received actual solid stream. Verify the named stage, whole handoff mass, dry solids/moisture, full shell/paper/ink/glue/finish/cloth/stand composition as applicable, contamination and actual recipient acceptance/treatment. Keep separate streams and constituents as subledgers without exporting them twice; no hazard class, clean/recycled grade, disposal route or credit is inferred. Separately drained liquid needs its own actual stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `bellerby-globe-route`

###### Spent ethanol tool-cleaning liquid (`spent_ethanol`)

Conditional segregated spent ethanol cleaning liquid, including actual dissolved varnish/paint constituents and water. Record wet mass, ethanol assay, other species, stocks and recipient conditions. Do not use pure ethanol mass as the gross waste mass or merge contaminated cloth into this liquid stream.

The broad industrial liquid-waste identity applies only to this one actual whole wet liquid stream sent to its named receiver. Verify handoff phase, water/ethanol/other species and suspended solids as applicable, measured whole wet mass or volume with representative measured density, stocks and acceptance/treatment. It is neither pure solvent mass nor an environmental release; H2O and contaminant subledgers do not create a second external exchange. No hazard class, receiver route or credit is defaulted.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_waste normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-eiip-2002`

##### Elementary flows

###### water vapour (`water_vapour`)

Water evaporated to outdoor air from wetting, watercolour, adhesive/varnish carriers and washing; use an actual water balance with stock/retention/effluent/humidity correction. Record air compartment; indoor vapour and freshwater liquid discharge are different exchanges. No growing-renewable evapotranspiration identity is used.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_water normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `bellerby-globe-route`

###### ethanol (`ethanol_air`)

Conditional outdoor release of CAS 64-17-5 only when actual formula/cleaning records and measurement demonstrate this species. Derive net boundary mass from calibrated species measurement or constituent input minus retention, outgoing wastes and stock change; never assign a positive default or a printing retention factor. The air-unspecified identity must not stand in for indoor exposure or freshwater release.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_emissions normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-eiip-2002`

###### isopropanol (`ipa_air`)

Conditional outdoor release of CAS 67-63-0 only when actual formula/cleaning records and measurement demonstrate this species. Derive net boundary mass from calibrated species measurement or constituent input minus retention, outgoing wastes and stock change; never assign a positive default or a printing retention factor. The air-unspecified identity must not stand in for indoor exposure or freshwater release.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_emissions normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-eiip-2002`

###### acetone (`acetone_air`)

Conditional outdoor release of CAS 67-64-1 only when actual formula/cleaning records and measurement demonstrate this species. Derive net boundary mass from calibrated species measurement or constituent input minus retention, outgoing wastes and stock change; never assign a positive default or a printing retention factor. The air-unspecified identity must not stand in for indoor exposure or freshwater release.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_emissions normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-eiip-2002`

###### particles (PM2.5) (`pm25`)

Conditional actual outdoor paper-cutting release in the disjoint PM2.5 size interval after collection. Measure matching size-resolved, filterable/condensable basis and boundary flow/time; do not multiply cut paper by an unverified factor or add a cumulative PM10/total-particle mass to these bins. Retained/collected solids are not outdoor emissions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_emissions normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-paper-bref-2015`

###### particles (PM2.5 - PM10) (`pmcoarse`)

Conditional actual outdoor paper-cutting release in the disjoint PM2.5–10 size interval after collection. Measure matching size-resolved, filterable/condensable basis and boundary flow/time; do not multiply cut paper by an unverified factor or add a cumulative PM10/total-particle mass to these bins. Retained/collected solids are not outdoor emissions.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_emissions normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-paper-bref-2015`

###### particles (> PM10) (`pmover10`)

Conditional actual outdoor paper-cutting release in the disjoint PM>10 size interval after collection. Measure matching size-resolved, filterable/condensable basis and boundary flow/time; do not multiply cut paper by an unverified factor or add a cumulative PM10/total-particle mass to these bins. Retained/collected solids are not outdoor emissions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable exchange from cp_emissions normalized to the common measured accepted output mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-paper-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_single_product` | selected output | The normal unit has one complete globe output and characterized outgoing wastes. First assign process/stage meters to the actual model/configuration; use observed causal resource drivers for shared energy/cleaning and disclose residual shared burdens. A measured complete-component input is not decomposed and charged again through its constituent backgrounds. |  |
| `a_physical_ledger` | allocation | Allocate environmental loads only after retaining full physical stocks, component/output masses and matching internal transfers. Never multiply actual globe/stand/waste physical output by a burden share. If a genuine saleable co-product arises, prefer subdivision; a residual allocation needs its actual basis, study-program justification and sensitivity before the dataset is complete. |  |
| `a_waste` | waste handling | Retain gross exported waste and actual recipient/treatment. Internal usable paper rework does not earn an avoided-production credit. Offsite treatment and recycling follow the declared study method in a separate load account; never silently net waste against purchased paper or grant a default substitution/flight-case reuse credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `p_globe_assembly` | accepted output and net reference mass | `foreground_record` | lot; configuration; globe id; diameter; cartography edition; shell/stand components; accepted net mass; moisture/cure; packing tare | Weigh accepted complete globes with stands on calibrated scales before case packing; reconcile acceptance list, removed samples, separately weighed accompanying case/packaging tare and the same configuration. Record shipped packaging and packing stock independently of the net globe denominator. Sum actual accepted net mass; no assumed per-globe weight. Aggregation procedure: sum accepted net mass; finished_globe = 1 kg per 1 kg reference flow | kg | each lot/stage; meters over the declared period | complete declared period, including start-up, scrap, drying and rework | one factory and consistent model/configuration | per 1 kg reference flow | calibration, invoices/BOM/SDS, QC, stage logs, transfer notes, uncertainty and gap register |
| `cp_materials` | `p_globe_assembly` | supplied component and formulation exchanges | `foreground_record` | lot; row_id; supplier; grade; formulation/CAS; wet/dry mass; stocks; stage; retained constituents; provider | Weigh receipts, use/returns and stocks by one formulation/component at a time; retain BOM/SDS and actual constituents. Record whether each prepared component is externally delivered or a measured internal handoff linked to its required preparation process. Screen actual attributable brushes, rags, abrasive/filter material, maintenance oils/greases and replacement consumables from issue/service/return records; document supported absence or add individually identified actual inputs and spent streams before completeness. No per-globe consumption default. Duplicate rows for distinct colours/grades. Record stage transfers with identical outgoing/incoming mass. Aggregation procedure: retain each raw attributable whole-period exchange total in its native unit; calc_batch_mass divides once by the matched accepted net mass. Include failed and reworked model activity, not just accepted lots. | kg | each lot/stage; meters over the declared period | complete declared period, including start-up, scrap, drying and rework | one factory and consistent model/configuration | per 1 kg reference flow | calibration, invoices/BOM/SDS, QC, stage logs, transfer notes, uncertainty and gap register |
| `cp_energy` | `p_globe_assembly` | purchased electricity and electric drying | `foreground_record` | meter; voltage; region/period; stage; kWh; active time; shared-meter driver; provider | Meter electric operations and attributable drying/ventilation; use logged actual operating drivers for shared meters. Preserve below1kV supply and provider basis. No drying duration, load or intensity default. Aggregation procedure: retain each raw attributable whole-period exchange total in its native unit; calc_batch_mass divides once by the matched accepted net mass. Include failed and reworked model activity, not just accepted lots. | kWh; MJ | each lot/stage; meters over the declared period | complete declared period, including start-up, scrap, drying and rework | one factory and consistent model/configuration | per 1 kg reference flow | calibration, invoices/BOM/SDS, QC, stage logs, transfer notes, uncertainty and gap register |
| `cp_water` | `p_globe_assembly` | added water, effluent and evaporation | `foreground_record` | water meter/mass; density/temperature; formulation water; moist stocks; retained water; effluent mass/composition; evaporation; uncertainty | Meter separately added treated water; weigh/measure outgoing washwater and characterize solids/dissolved constituents. Reconcile product moisture, formulation carriers and stock changes; net outdoor evaporation requires matching inlet/outlet humidity correction, leakage/path checks and uncertainty; an unexplained balance residual is not automatically a water-vapour exchange. Keep whole wet effluent and H2O/contaminants as subledgers without duplicate external water/waste exports. Aggregation procedure: retain each raw attributable whole-period exchange total in its native unit; calc_batch_mass divides once by the matched accepted net mass. Include failed and reworked model activity, not just accepted lots. | kg; source volume with measured conversion | each lot/stage; meters over the declared period | complete declared period, including start-up, scrap, drying and rework | one factory and consistent model/configuration | per 1 kg reference flow | calibration, invoices/BOM/SDS, QC, stage logs, transfer notes, uncertainty and gap register |
| `cp_waste` | `p_globe_assembly` | individual outgoing waste streams | `foreground_record` | row_id; wet/dry mass; composition; contamination; internal reuse; collector stock; transfer note; recipient; acceptance/treatment | Weigh each segregated external stream and record actual receiving conditions. Separate bare shell rejection, uncontaminated printed-paper scrap, collected dust, chemicals and cloth; new composite rejects require additional characterized rows. Aggregation procedure: retain each raw attributable whole-period exchange total in its native unit; calc_batch_mass divides once by the matched accepted net mass. Include failed and reworked model activity, not just accepted lots. | kg | each lot/stage; meters over the declared period | complete declared period, including start-up, scrap, drying and rework | one factory and consistent model/configuration | per 1 kg reference flow | calibration, invoices/BOM/SDS, QC, stage logs, transfer notes, uncertainty and gap register |
| `cp_emissions` | `p_globe_assembly` | outdoor constituent and particle releases | `foreground_record` | species/CAS; source formulation; source flow/time; background correction; capture; stocks/retention/wastes; calibration; particle cuts; medium; uncertainty | Use qualified species-specific sampling/analysis or a closed constituent balance for actual outdoor release. Record compound-specific response and outlet flow/time; PM needs size-matched sampling and after-control fate. Survey every actual formula; measured absence, detection limits and uncharacterized remainder stay distinct. Aggregation procedure: retain each raw attributable whole-period exchange total in its native unit; calc_batch_mass divides once by the matched accepted net mass. Include failed and reworked model activity, not just accepted lots. | kg | each lot/stage; meters over the declared period | complete declared period, including start-up, scrap, drying and rework | one factory and consistent model/configuration | per 1 kg reference flow | calibration, invoices/BOM/SDS, QC, stage logs, transfer notes, uncertainty and gap register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_batch_mass` | all inventory rows | For each row divide the attributable reporting-period exchange, in its recorded numerator unit, by the same reporting-period accepted complete globe/stand net mass in kg. Keep stock corrections and rejected production attributable; no per-item normalization or assumed item mass. Use one complete matched reporting-period pool for the same product, grade, route, site and reference state, including all attributable startup/shutdown, wholly failed or zero-output batches, rejects, work in progress and rework. Sum raw numerator totals before dividing once by the strictly positive accepted net output; count reworked product once only at final acceptance. Never average batch ratios or omit failed activity. A pool with no accepted output retains its absolute unnormalized inventory and requires review. | traceable row records; cp_output accepted net mass | recorded-unit amount per 1 kg reference flow |  |
| `calc_kwh` | `electricity` | 1 kWh = 3.6 MJ; normalize actual attributed MJ using calc_batch_mass. | `cp_energy`; `cp_output` | MJ/kg |  |
| `calc_constituent_balance` | individual water or solvent species | Species receipts plus beginning stock equal product retention, outgoing waste/treatment transfer, ending stock and net outdoor release. Account for control-device fate and measured humidity where relevant; measure and disclose residual uncertainty. Do not use regulatory printing retention percentages. | `cp_materials`; `cp_water`; `cp_waste`; `cp_emissions` | species kg before common output normalization | `epa-eiip-2002` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | configuration and period | Maintain declared physical subset, actual component handoff, stage observations and complete rejected/start-up production for the same period. Do not claim industry representativeness from one maker. | BOM, supplier and stage records; QC |
| `dq_identity` | all rows | Atomic actual exchanges and actual grade/CAS/medium/property/provider basis are required. Unknown UUID/provider/formula is a gap, never zero or a proxy. | supplier definitions, composition and amount records |
| `dq_uncertainty` | measurement and allocation | Retain calibration, sampling/detection limits, stocks, allocation drivers, uncertainty/residuals, and separate measured absence from missing data. No generic tolerances or emission defaults. | meter/test reports and gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | reference output | Require one final finished_globe output, the adopted broad finished-product identity plus all physical qualifiers and exactly 1 kg normalized net complete globe with its stand. Weigh after acceptance at recorded moisture/cure condition, excluding case packaging. Preserve cartographic resolution/edition, diameter and declared display quality; mass alone is not functional equivalence. | `unsd-cpc3-2025` |
| `v_material_balance` | physical stocks and losses | Reconcile beginning stocks plus receipts/transfers with net accepted complete globes, separately shipped case/packaging, external unused-material returns, exported wastes/emissions and ending stocks using actual composition/moisture. Retained paper/ink/glue/paint/finish/stand constituents are already inside complete product mass; constituent subledgers never add them again as outputs. Packaging receipts plus opening stock reconcile separately to shipped tare, scraps/returns and closing stock, all outside the net-globe denominator. Use receipts and stock movements consistently, not stock-adjusted consumption plus the same stocks twice. Keep measured/supplier-supported dry/wet, H2O and biogenic/fossil carbon fractions and sources for each actual material, formulation, stand and packing; unknown fractions remain unresolved. Reject unexplained residuals rather than force a yield or insert a hidden adjustment. Track paper tears, shell rejection and mounting/finishing rework separately. | `bellerby-globe-route` |
| `v_water_solvents` | constituents and boundary | Reconcile added water and formulation carriers with product retention, stocks, aqueous effluent, chemical/cloth wastes and outdoor vapour. Species air mass requires a defensible material balance or calibrated compound-specific monitoring; include capture and actual exit routes. Aggregate TVOC/carbon response is QA evidence, never a second sum alongside species or an identity for an unknown remainder. Actual formula/measurement may require additional atomic input/waste/elementary rows; missing constituents are incomplete coverage. | `epa-eiip-2002` |
| `v_particle_bins` | paper cutting | Review actual cutting equipment, dust collection and outdoor pathway; record disjoint PM2.5, PM2.5–10 and PM>10 only on matching measured size and filterable/condensable definitions. Collected dust is measured separately. Cumulative PM10 or total PM is a check, not an additional mass; there is no default cutting emission factor. | `jrc-paper-bref-2015` |
| `v_provider_completeness` | all exchange identities | Verify actual grade, formulation, supplier route, direct-read reference property/unit and medium. Blank UUID does not mean zero; do not insert generic proxies to claim complete provider coverage. Require all declared component manufacturing and delivery backgrounds, actual waste acceptance and complete stage observations. For the cited integrated maker or any same-site preparation, require quantified linked sphere-preparation, cartography/printing and wood/metal stand-making units with actual atomic inventories and conserved handoffs; a purchase label or a promise to extend later does not establish these units. This assembly dataset alone cannot pass complete-maker LCI acceptance without them. Conditional measured absence must have evidence; unknown is pending. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site/configuration-specific foreground assembly dataset for complete rigid paper-gore globes |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared globe-component supply-chain modelling and lifecyclemodel assembly after physical applicability, provider and quality checks; method review remains required |
| excluded_use | Automatic coverage of all CPC32510; book/flat-map/inflatable/plastic-print/electronic/celestial routes; lifetime comparisons from kg alone; claims of complete data with unresolved actual providers |
| required_metadata | All reference qualifiers; starting handoff; geography/period; component and formulation providers; actual mass/energy/medium and normalization; waste recipient and study assumptions |
| required_quality_disclosure | Identity and composition gaps; missing/not-applicable observations; calibration, uncertainty, proxies, allocation and completeness; author candidate status does not establish approved methodology |
| update_trigger | Changed sphere/stand/printing/material recipe, supplier, drying/finish route, energy supply, geography/period, cartography/quality or waste receiving conditions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | UNSD CPC Version3.0 Explanatory Notes,30June2025, PDF/printed p151,3251/32510; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Non-book form classification, including globes; no method or full-scope mapping proof |
| `bellerby-globe-route` | handbook | Bellerby & Co How They Are Made, dated publisher snapshot2026-10-12; https://bellerbyandco.com/how-theyre-made/ | Actual sphere/gores/wet mounting/brush watercolour/finish/base/packing stage structure. Maker example, not universal quantities, recipe or evidence of purchased sourcing. |
| `bellerby-globe-faq` | handbook | Bellerby & Co Globemakers FAQ, dated publisher snapshot2026-10-12, Mini Desk Globe/Albion, packing and care paragraphs; https://blog.bellerbyandco.com/faq/ | Real wooden/metal bearing stand variants, case and coated-paper product state; no fixed size, component count, service lifetime or packaging recipe |
| `bellerby-maker-interview` | literature | Merchant & Makers, Interview with Peter Bellerby: No Ordinary Orb, dated retrieved snapshot2026-10-12, globe-making challenges question; https://www.merchantandmakers.com/bellerby-and-co-globemakers/ | Primary maker statement confirming wet paper gore attachment with glue; historical case without adhesive chemistry or recipe |
| `jrc-paper-bref-2015` | official_guidance | European Commission JRC, Production of Pulp, Paper and Board BREF2015,7.1.4 printed665/PDF703 and7.1.10 printed670/PDF708; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Actual upstream papermill broke/water-loop and finishing/cutting dust coverage. Qualitative cutting hazard prompts site review; mill percentages/energy/moisture are not globe defaults. |
| `epa-eiip-2002` | official_guidance | US EPA EIIP VolumeII Chapter15, May2002,4.1/4.1.1/4.1.3 printed15.4-1–15.4-3,PDF31–33; https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Printing/graphic-arts volatile material balance and route-specific retention/capture limits; informs actual printing provider and species survey. No lithography factors transferred to globe finishing. |
