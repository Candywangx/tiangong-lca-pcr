---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.textile-wall-coverings
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Paper-backed plain-woven linen wallcovering conversion

## 1. Scope and Applicability

This method covers factory conversion of purchased, wet-processed, plain-woven pure flax/linen face fabric and purchased cellulosic paper backing into unprinted decorative textile wallcovering rolls using one purchased premixed waterborne laminating adhesive. Purchased fabric may already carry a declared dye or impregnation/repellent finish: its production and complete chemical treatment belong in the linked upstream fabric inventory. The visible face is actual woven linen, not a linen-effect print. Paper backing may include disclosed polyester reinforcement; its actual fibre and binder fractions require supplier evidence. No universal blend, adhesive chemistry, solids, coat weight, grammage, moisture, heat consumption or roll length is prescribed. Sources: `innovations-confluence`, `desima-manufacture`, `jrc-textiles-bref-2023`.

The foreground starts with finished fabric and backing receipt and includes aqueous adhesive preparation/dilution, tension-controlled bonding, actual drying, cooling, precision trimming, inspection, reeling, packaging, water-only cleaning, collected residues and actual utilities. This is a conversion method, not a claim that Confluence or Desima uses a particular adhesive recipe or energy system. Confluence establishes the pure-linen/paper-backed market product; Desima establishes adhesive lamination and upstream textile operations, while its polyester-warp variants are not evidence of pure-linen composition. Sources: `innovations-confluence`, `desima-manufacture`.

Exclude paper-faced printed wallpaper, wallpaper base paper sold before conversion, PVC-faced or polymer-film-faced wallcovering, glass fibre, silk, wool, cotton or linen-blend faces, loose warp-string rather than woven faces, decorative flock/metallic/printing applied at the converter, flame/hot-melt/solvent lamination, on-site dyeing or impregnation, and nonaqueous cleaning. On-site steam-boiler generation, biological effluent treatment, waste incineration, biomass fuel and self-generated power need separately supported extensions. Installation paste, hanging, use, replacement and end-of-life are downstream; no wall-service lifetime or fire/acoustic performance default is established.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.textile-wall-coverings |
| classification_refs | CPC 3.0 32195; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unprinted, paper-backed plain-woven pure linen face wallcovering rolls; premixed aqueous adhesive bonding of purchased finished constituents |
| excluded_products | Other faces, printed/decorative-layer wallpaper, unconverted base paper, loose yarn warps, flame/hot-melt/solvent routes and on-site textile wet finishing |
| representative_product | Paper-backed basic-weave pure-linen wallcovering, illustrated by Innovations Confluence; no representative recipe or quantitative factory dataset |
| production_route | Purchased wet-processed woven linen and paper backing → aqueous adhesive application and controlled-tension lamination → actual drying/cooling → inspection, edge trimming, reeling and packaging; water-only cleaning and external waste handover |
| market_state | Accepted finished rolls at converter gate; width, roll length, moisture, retained treatments and package configuration declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Decorative woven-linen wall-surface covering delivered for installation; no quantified installed-wall service |
| How much | 1 kg net accepted finished wallcovering at measured delivery moisture, excluding roll core and protective packaging |
| How well | Meet declared width, dimensional stability, bond/peel strength, colour/appearance, seam/fraying and applicable end-product performance acceptance criteria; no universal thresholds |
| How long or cycle | One factory-gate delivery; installed service life is outside this reference quantity |
| reference_flow_link | finished_wallcovering |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Textile wall coverings `8612229d-3bb2-42b7-98f6-678ca8a398a4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pure flax/linen woven face; upstream wet processing and any dye/impregnation/repellent treatment; actual paper backing fibre/PET/binder composition and forming route; adhesive trade grade, polymer/CAS, supplied wet mass, solids, residuals and supplier reference basis; measured finished areal mass and delivery moisture; width and accepted roll lengths; net product mass and measured core/package tare; drying heat route, gas/steam state and actual electricity voltage; utilities/provider gates; waste composition and external receiver; site, acceptance criteria and common reporting period |

The broad finished textile-wallcovering identity has no opposed face, backing or manufacturing restriction. Use it only with the physical qualifiers above. A successful flow identity lookup does not establish an actual quantity or compatible supplier/background dataset. Declare all qualifiers in the data package; omissions leave applicability incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished_wallcovering | Mass | kg | S is the sum of accepted net wallcovering mass from calibrated gross-minus-measured-tare weighings for the reporting period. Exclude core, wrap, box and end caps; retain actual delivery moisture. Every exchange uses the same S. |
| area_mass | finished_wallcovering; linen_face; paper_backing | Mass | kg | Measure width, length and areal mass at matching conditioning/moisture. Area times measured kg/m2 gives kg; never use a catalogue grammage or standard roll length as production mass. Area is supplementary, not a second functional unit. |
| supplied_dry_basis | linen_face; paper_backing; laminating_adhesive; adhesive_waste; laminate_trim; collected_dust; cleaning_effluent | Mass | kg | Retain supplied wet mass, measured water/dry solids and each known constituent separately. Map to supplier reference quantity only after verifying wet/dry/concentration state. One adhesive row is one purchased formulation; internally mixing extra chemicals requires individual new atomic rows. |
| utility_basis | electricity; process_water; natural_gas; steam | Native reference property | MJ; kg; m3 | Electricity native Net calorific value/MJ uses measured kWh × 3.6; no combustion heating value is inferred. Tap water native Mass/kg requires actual density if metered in m3. Gas native Volume/m3 requires matched T/P, wet/dry composition, Z and provider volume definition. Steam mass/state and net heat are separate; no MJ/GCV label proves net delivered heat. |
| particle_basis | pm_fine; pm_coarse; pm_over10; collected_dust | Mass | kg | Report escaped atmospheric PM2.5, PM2.5–PM10 and >PM10 as disjoint measured bins. Captured dust, internal return and exported dust are separate physical records; never add nested TSP/PM10/PM2.5 totals. |
| emission_basis | co2_fossil; co2_biogenic; co; methane; n2o; nox; so2; ammonia; vinyl_acetate; nmvoc; water_vapour | Mass | kg | Preserve actual chemical species, fossil/biogenic origin, phase and release compartment. NOx mass versus NO2-equivalent requires monitoring/provider/LCIA agreement and excludes N2O. NMVOC is a documented sum-indicator remainder and cannot duplicate speciated VOC or methane. Water vapour is emitted H2O, not withdrawal. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished wet-processed woven linen, paper backing, one premixed aqueous laminating adhesive and separate utility/packaging supplies |
| starting_condition_role | Foreground conversion starting condition; not an upstream life-cycle cut-off |
| product_classification_scope | The paper-backed plain-woven pure-linen subset of textile wall coverings; CPC label does not establish full coverage |
| recursive_input_rule | Internal laminate, adhesive, condensate and recovered dust transfers have identical quantities at sending and receiving stages and are counted only once at the external boundary. Purchased same-category material needs a declared compatible upstream gate; do not recurse indefinitely or duplicate final product outputs. |
| upstream_dataset_requirement | Require flax cultivation/retting/fibre preparation, yarn spinning, weaving and actual wet processing/finishes in the fabric chain; actual backing pulping/papermaking, PET reinforcement/binders where used; adhesive, packaging, utilities and external waste treatment. Match material, quantities, geography/year and supplier boundaries. |
| disclosure | Declare separate stage meters, upstream links, transport coverage, utility gates, waste receivers, gaps and capital-equipment treatment. A source or process outside the foreground is not assumed zero. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_conversion | wallcovering_converter | Include receipt losses, adhesive preparation/dilution, lamination/drying, cooling, inspection/trimming/reeling, packaging, water-only cleaning and attributable auxiliary operations in one converter unit; retain separately measured stages. Do not emit an intermediate laminate under the final reference UUID a second time. | desima-manufacture; jrc-textiles-bref-2023 |
| boundary_upstream | linen_face; paper_backing; laminating_adhesive | A purchased fabric carries spinning/weaving and all actual dye/pretreatment/impregnation burdens through upstream links. Backing manufacture requires actual pulp/paper and reinforcement evidence; the unreinforced wallpaper-base route is not a proxy for cellulose/PET nonwoven backing. No sawmill or plywood survey supplies papermaking evidence. | jrc-textiles-bref-2023; jrc-paper-bref-2015 |
| boundary_treatment | cleaning_effluent; laminate_trim; adhesive_waste; collected_dust | Handover to an external receiver is a waste exchange plus linked transport/treatment. It is not also a foreground elemental water/pollutant release. Document any real split branch; on-site effluent treatment needs an extension including its chemicals, sludge and direct releases. | jrc-paper-bref-2015; jrc-textiles-bref-2023 |
| boundary_finish | linen_face; laminating_adhesive | Purchased retained treatments require declared supplier chemistry and mass/state evidence. Converter-applied stain repellents, FR or decorative coatings, onsite dyeing and additional mixed chemicals are outside this selected route; do not omit them if actually performed. | innovations-confluence; jrc-textiles-bref-2023 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| wallcovering_converter | Aggregated paper-backed woven-linen converter, cleaning and gate delivery | required | Declared purchased-constituent aqueous lamination route; actual stages metered separately | foreground production | 1 kg net accepted delivered wallcovering |

### Process: Lamination, trimming and roll delivery (`wallcovering_converter`)

#### Inputs

##### Product flows

###### Finished textile fabric (`linen_face`)

Purchased plain-woven pure linen, already wet-processed. Retain supplier batch, weaving/desizing/dyeing and every impregnation/repellent/anti-fray treatment; colour and surface hand do not identify chemistry. Use delivered wet mass with measured moisture and actual treatment solids. Do not charge upstream treatment chemicals a second time at this converter.

- Selected flow: Finished textile fabric `4225514e-73b6-4dfa-90a6-804ad42f2d00`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_supplies; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`
- Sources: `desima-manufacture`, `jrc-textiles-bref-2023`

###### Wallpaper base (`paper_backing`)

Only actual paper backing used beneath the woven linen. Declare wet-laid/nonwoven forming route, cellulose source, measured PET reinforcement and each binder if present. Broad wallpaper-base identity permits this physical subset but is not evidence for an unreinforced kraft-furnish background. Record the whole purchased backing once, including its retained constituents.

- Selected flow: Wallpaper base `df6968ae-6d39-4a15-b20e-233c83d9f785`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_supplies; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`
- Sources: `jrc-textiles-bref-2023`, `jrc-paper-bref-2015`

###### Water-based film adhesive (`laminating_adhesive`)

One premixed supplied aqueous textile-to-paper laminating adhesive, not installation paste and not neat PVAc/PVOH. Record manufacturer/grade, polymer and CAS evidence, all known additives/residual monomers, actual water/solids, wet issue/return/stock and supplier wet/dry reference. The broad record gives no formulation or coat-weight default. Reject an actual solvent/hot-melt grade; separately identify extra chemicals if mixed at the site.

The source has no CAS or full formulation; its isolated CPC48341 photographic-film classification conflicts with the aqueous-adhesive name/comment and remains a disclosed metadata defect pending source/provider clarification. Match the complete Physical mixing and mild chemical modification route and actual supplier formulation; the comment does not prove zero organic content or emissions.

- Selected flow: Water-based film adhesive `226b0b51-78bf-446d-89f2-dbfc6740c312`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_supplies; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`
- Sources: `desima-manufacture`, `jrc-textiles-bref-2023`

###### Tap water (`process_water`)

Actual treated tap water for adhesive dilution and water-only equipment cleaning; split purpose submeter records but one external input. Native Mass/kg requires measured density for volume-meter readings; the database secondary coefficient is not site density. Water already in supplied adhesive is not another tap-water input. Direct abstraction and chemical-cleaning routes require extensions.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_utilities; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jrc-textiles-bref-2023`

###### Alternating current (`electricity`)

Use this consumer-side <1 kV grid-average AC identity only where actual receipt is low voltage; the source geography is CN. Verify actual country/regional grid, year, consumer mix, voltage, supplier gate and included losses independently; use a different compatible provider for a non-CN supply rather than transferring the CN background. The native reference is Net calorific value/MJ, not evidence of generation technology; metered electricity kWh × 3.6 supplies energy MJ after provider-basis verification. Include line drives, actual electric drying, ventilation/capture, cooling and packaging with separate stage meters. An actual other-voltage/onsite-generation route needs its own compatible identity; no renewable mix is assumed from marketing.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value (`93a60a56-a3c8-11da-a746-0800200c9a66`); unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual native-unit records using cp_utilities; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jrc-textiles-bref-2023`

###### Purchased process steam for indirect laminate drying (`steam`)

Conditional purchased industrial-boiler steam carrying heat for indirect laminate drying. The broad physical locator has native Mass/kg, despite its Heat name; it supplies no pressure, temperature, dryness, fuel, delivery gate or definition of that kg. Before a quantitative provider link, obtain explicit confirmation that the provider kg is delivered steam mass, with its actual supply/generation/return boundary; a successful UUID lookup is not that confirmation. Collect actual supply/return kg, gauge/absolute P, T, dryness, condensate and drain/blowdown states; retain the mass and water ledger separately from the measured delivery-minus-return enthalpy heat ledger. Do not infer MJ from Heat, equate GCV with net heat, invent a steam pressure or replace actual delivery mass by net heat. If the provider kg interface is unsupported, keep the dataset linkage unresolved while retaining measured steam and all return amounts. The original GCV/MJ and pressure-specific candidate rejections remain evidence history. Record each actual external condensate/drain handover as its own compatible atomic outgoing exchange, preserving measured return mass/state and an explicit UUID gap where unresolved; do not reuse the incoming steam UUID for liquid condensate or duplicate one physical return in water/emission branches. Equal internal steam transfers are not a second purchase; on-site steam-boiler generation requires a supported extension.

- Selected flow: Heat, from steam, in industrial boiler `f80f700c-a9ca-47bf-b3f0-f0c435b291d7`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_utilities; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jrc-textiles-bref-2023`

###### natural gas in the gaseous state (`natural_gas`)

Conditional actual compressed pipeline natural gas for on-site gas-fired heater/furnace drying heat. Record meter T/P, wet/dry composition, compression factor Z, stock/line-pack and supplier reference volume. Native reference is Volume/m3, not Mass/kg; the secondary mass factor is not gas density. Gas-derived heat is an internal transfer; do not also purchase it under steam. Heater/furnace size, burner, control and load are required for an actual emission method.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect actual native-unit records using cp_utilities; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-gas`

###### Polyethylene film (`pe_wrap`)

Conditional actual unbacked, non-self-adhesive, non-laminated PE protective film. A multilayer/barrier laminate or adhesive film is a different actual component with its own compatible row and retained amount. Weigh issued, retained, returned and scrapped film and declare PE grade/thickness/provider. Name/CAS9002-88-4/comments support the film; source CPC29220 classification is inconsistent and requires supplier/source clarification. Do not treat the classification defect as a verified recipe or substitute PET/TPT film.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_supplies; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

###### Cardboard tube or Paper core (`paper_core`)

Actual cardboard cylindrical roll core; weigh representative cores of the same specification and reconcile counts and tare, rather than treating roll gross mass as product. Reusable-core circuits separately reconcile opening stock + receipts/customer returns = dispatched cores + final stock + actual damage/loss/discard, by matched core specification, count and measured mass. Trace ownership/custody, replacement manufacture, collection/return transport, cleaning and waste handover; assess actual reuse without a default number of cycles or charging every circulating core as newly manufactured. No automatic recycling credit.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_supplies; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

###### Paper box (`corrugated_box`)

Conditional actual cut/fold/laminated paperboard outer carton matching the complete source route. Confirm actual laminated construction and supplier compatibility rather than asserting lamination from the generic carton name; a contrary plain-board construction needs a separately compatible identity with its actual mass retained. Record board construction, measured mass, recycled/virgin composition and supplier; this Paper box identity is not evidence for a particular corrugated-board fibre recipe. A non-folding tube or plastic crate is a different exchange.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_supplies; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

###### Moulded paperboard protective roll end cap (`end_caps`)

Conditional actual cellulose-pulp-moulded paperboard roll-end protector used as a protective packaging insert. This broad insert identity is not an exact end-cap shape or recipe. Confirm the actual moulded-pulp construction, fibre/binder/additive fractions, moisture, finish, measured per-cap mass/counts and supplier reference state/region/year. Its source comment excludes packaging from a historic balance for lack of quantities; that historic exclusion supplies no exemption here: collect and reconcile all actual end-cap mass in the separate packaging ledger, excluding it only from net wallcovering S. A die-cut/assembled board disc, plastic cap or metal closure needs its own compatible atomic identity and retained quantity; do not change its physical construction to fit this locator.

- Selected flow: Packaging insert, moulded pulp `75ec26b8-f2ed-4a61-8a46-0ceaf1008ace`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_supplies; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

#### Outputs

##### Product flows

###### Textile wall coverings (`finished_wallcovering`)

Only final accepted paper-backed plain-woven pure-linen wallcovering rolls, at measured delivery moisture. Weigh each roll gross and actual core/package tare, reconcile warehouse and acceptance records. Keep stage-level laminate transfers in the physical ledger without a second product output here. Delivered package mass is retained separately in the gross physical ledger.

- Selected flow: Textile wall coverings `8612229d-3bb2-42b7-98f6-678ca8a398a4`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `innovations-confluence`, `desima-manufacture`

##### Waste flows

###### Linen-paper adhesive laminate cutting scrap (`laminate_trim`)

Actual solid bonded linen/paper/adhesive edge trims and rejected laminate exported independently to a receiver. This broad industrial-solid-waste locator contains no contrary material or treatment route and is not an exact composite recipe or receiver dataset. Measure each actual wet/dry mass, water, linen/cellulose/PET/binder/adhesive/finish fractions, particle/coarse state, hazard status and receiver acceptance; obtain provider reference moisture/composition and gate compatibility. Keep these composite solids separate from captured dust, liquid adhesive residue and cleaning effluent. Internal reused offcuts are equal transfers and not exported waste; no default paper-mill broke recycling or avoided-material credit. Garment-only scraps, unknown fast-fashion blends and pure-paper waste remain rejected specific alternatives.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_waste; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-textiles-bref-2023`, `jrc-paper-bref-2015`

###### Spent aqueous textile-to-paper laminating adhesive (`adhesive_waste`)

Separately exported actual liquid spent aqueous laminating adhesive or liquid unreusable pot residue, distinct from water-only cleaning effluent even though both use the broad industrial-liquid locator. Record whole wet liquid mass, water/solids, actual polymer/additives/residuals, physical flowability, hazard status, stocks and receiver/provider reference moisture/composition/gate compatibility. If measured by volume, use the actual stream density at the measured T/state to obtain whole liquid kg; its H2O component remains wet kg times independently measured water fraction. A gel, semi-solid or dried residue is not this Liquid identity: retain its actual amount in a separately verified state-specific atomic row, with explicit UUID gap if necessary; never relabel or discard it. The source's generic hazard claim and list mentioning solids/gases do not establish actual hazard or permit incompatible states. Do not duplicate residue already included in cleaning effluent, transport or external treatment. Wafer-production glue residue remains rejected for its contrary origin.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_waste; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-textiles-bref-2023`

###### Waste liquid (`cleaning_effluent`)

Only whole untreated aqueous adhesive/textile cleaning liquid handed to an external treatment operator. Use weighed whole wet mass or measured whole volume times the actual stream density at its measured T/state, yielding native kg. Separately quantify carrier H2O = whole wet kg × independently measured water fraction and non-water solids/liquids; whole wastewater volume is not automatically pure-water volume and COD/BOD indicators are not extra physical constituents; keep water/solids/COD/BOD/chemical composition and receiver acceptance as separate evidence. The broad industrial Waste liquid identity supports liquid handover, not a pure-water, pharmaceutical or electrolytic-manganese wastewater substitute. No direct elemental water/pollutant discharge is added for this same branch.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_waste; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-textiles-bref-2023`, `jrc-paper-bref-2015`

###### Dust (`collected_dust`)

Actual captured dry cutting/reeling dust exported separately: linen and paper fibres plus actual PET, retained adhesive/finish solids and moisture. Weigh captured, internally returned, stocks and exported amounts independently. The broad industrial collector Waste/Mass identity is compatible but establishes neither particle share nor receiver treatment. Its housekeeping comment is not a sampling frequency. Captured dust is not escaped atmospheric PM.

The Chinese source comment describes generic poor degradability and a weekly cleaning suggestion; neither determines the actual biodegradability, composition, cleaning frequency or waste route of collected linen/cellulose/adhesive dust. Actual receiver/provider acceptance remains necessary.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_waste; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-textiles-bref-2023`, `jrc-paper-bref-2015`

##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Post-control escaped PM2.5 from actual dry trimming/reeling and any applicable combustion. Quantify sampling and exhaust/operating coverage for this exclusive fine bin; unknown size distribution remains a data gap.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-textiles-bref-2023`, `jrc-paper-bref-2015`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Post-control escaped particles above 2.5 µm through PM10 from the same assessed operations; obtain the exclusive interval by compatible simultaneous fraction measurements. Do not add a nested PM10 total.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-textiles-bref-2023`, `jrc-paper-bref-2015`

###### particles (> PM10) (`pm_over10`)

Post-control escaped particles >PM10 from dry trimming/reeling and applicable combustion, kept separate from captured dust. Broad outdoor-air unspecified is not indoor worker exposure or freshwater particles. No default total-to-bin split.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-textiles-bref-2023`, `jrc-paper-bref-2015`

###### water vapour (`water_vapour`)

Actual H2O evaporated to outdoor air during adhesive drying and, where used, combustion. Reconcile measured inlet water/solids, product water, effluent, condensate, vapour and stocks; steam return is not atmospheric water. No assumed drying fraction.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-textiles-bref-2023`, `jrc-paper-bref-2015`

###### carbon dioxide (fossil) (`co2_fossil`)

Conditional actual fossil CO2 from on-site natural-gas oxidation and evidenced fossil organic losses. Reconcile fuel carbon, non-CO2 emissions and stored/product/waste carbon. Do not copy a fuel heating value or assume all supplied polymer is emitted.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas`

###### carbon dioxide (biogenic) (`co2_biogenic`)

Record any actual biogenic CO2 released within the converter boundary separately from fossil CO2. Linen/paper carbon retained in product or sent to external treatment is not this emission. Normally absent oxidation requires documented non-use, not a GHG convention deleting LCI. Biomass combustion and on-site biological treatment are outside this route and require extension.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-textiles-bref-2023`

###### carbon monoxide (fossil) (`co`)

Conditional actual fossil CO from natural-gas combustion, after controls. Use measured CO mass, source origin and outdoor release; no biogenic or land-use-change correction identity.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas`

###### Nitrogen oxides (`nox`)

Conditional NOx from actual natural-gas combustion. Native Mass/kg and CAS11104-93-1 identify an aggregate but do not establish NO2-equivalent. Document analyser/speciation, oxygen correction, exhaust basis and LCIA/provider mass convention; until consistent, quantitative linkage remains pending. Exclude N2O and do not characterize NO/NO2 twice.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas`

###### methane (fossil) (`methane`)

Conditional actual fossil methane leakage and combustion slip inside the gate. Gas purchase is not itself a methane emission; retain leak/stack measurement or a reviewed source-specific method, not a correction flow.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas`

###### nitrous oxide (`n2o`)

Conditional actual N2O from natural-gas combustion; this species is not NOx. Record molecular N2O mass and outdoor-air release; no factor is prescribed.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas`

###### sulfur dioxide (`so2`)

Conditional actual SO2 from gas sulfur oxidation. CAS7446-09-5 and outdoor-air release are specific; sulfur-oxides sum or a water-compartment SO2 row is not substituted. Require actual sulfur/stack basis, not a generic positive default.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas`

###### ammonia (`ammonia`)

Conditional actual NH3 released from an ammoniated supplied adhesive or retained textile treatment during drying. Review grade chemistry, temperature and sampled exhaust. A BREF discussion is not proof every aqueous glue contains ammonia; ammonium is another species.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-textiles-bref-2023`

###### vinyl acetate (`vinyl_acetate`)

Conditional actual residual vinyl-acetate monomer released during drying, only if supplier/CAS and measurement support presence. CAS108-05-4 is not PVAc polymer or PVOH. Record remaining residual in product/waste and avoid duplicate NMVOC characterization.

- Selected flow: vinyl acetate `4d9a8790-3ddd-11dd-8dc4-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `jrc-textiles-bref-2023`

###### non-methane volatile organic compounds (`nmvoc`)

Conditional measured non-methane VOC remainder from actual combustion or adhesive drying. Inventory individual substances wherever possible; disclose analytical species coverage and mass/carbon convention. Highly impacting species cannot be hidden. Methane and already represented vinyl acetate/other VOC are excluded from this characterized remainder; a reported raw total is a reconciliation record, not an extra emission.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual native-unit records using cp_air; divide the attributable period total by accepted net wallcovering S in cp_output. Record applicability and uncertainty; absent evidence is a gap, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-ap42-gas`

Every listed elementary row is an applicability check, not a default positive emission. UUID-bearing rows use outdoor air, unspecified, Mass/kg; record the actual release location/height and verify LCIA subcompartment compatibility. No indoor, soil, freshwater, delayed-emission or correction-flow identity is substituted. Survey the actual supplied formulation, retained textile treatments, drying/ventilation and controls; add each other actual chemical release as its own atomic row with direct identity and quantitative evidence. No unknown formulation or missing monitor justifies zero emissions.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_separate | wallcovering_converter | Retain the complete physical process graph and unallocated mass/water/carbon ledger separately from the allocated environmental burden ledger. Internal sending/receiving transfers remain equal; actual product, packaging and waste masses are not multiplied by burden shares. | ec-ef-2021 |
| allocation_hierarchy | wallcovering_converter | First investigate direct subdivision or justified system expansion; use a demonstrated causal physical relationship if allocation cannot be avoided. Other relationships, including economic allocation, require explaining why prior options fail, period/gate-consistent values and sensitivity. No fixed allocation share is given. | ec-ef-2021 |
| allocation_quality | finished_wallcovering; laminate_trim; collected_dust | Allocate common line demand across actual grades using measured causally relevant drivers and retain their totals. Rejected laminate and waste do not become saleable co-products merely because sold; determine actual status and receiver function. No automatic avoided virgin-material or energy credit. | ec-ef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The protocols below are required future site collection specifications, not claims that a factory has already been surveyed. Collect one common representative reporting period with batches, starts/stops, rejected output, stocks and shared-line operations. Record actual frequencies/coverage and justify their representativeness; no historical single-factory amounts or catalogue recipes become defaults.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | wallcovering_converter | Accepted final delivery | calibrated measurement | article; batch/roll; acceptance; gross kg; actual core/package tare kg; net kg; width/length; measured kg/m2; actual water fraction; opening/closing finished stocks | Weigh accepted rolls with calibrated scales and measured matching tare; reconcile production/warehouse records. Use a validated water-specific method with disclosed composite/finish interference, not unverified drying loss as water. Aggregation: Sum accepted net wallcovering kg S; report per 1 kg reference flow | kg; m; m2; kg/m2 | Each roll/batch and period reconciliation | Same declared common reporting period | One converter site and defined pure-linen article family | per 1 kg reference flow | Scale calibration; tare logs; water-method uncertainty; acceptance and stock reconciliation |
| cp_supplies | wallcovering_converter | Each purchased constituent, packaging and actual maintenance component | measured receipt/issue/return | row_id; supplier/grade; invoice; batch; wet kg; solids/water; polymer/CAS/residuals; backing fibre/PET/binders; fabric dye/finish; opening/closing stock; delivered package tare | Weigh receipt, issue and returns; reconcile actual stock movements and supplier composition/test records. Count-to-mass packaging conversion uses measured same-grade pieces. Verify upstream gate/reference quantity independently. Aggregation: Net attributable native-unit consumption divided by S; per 1 kg reference flow | kg; actual count; mass fraction | Each batch/lot and stock period | Same cp_output period, including rejected runs | Supplies physically attributable to selected converter articles | per 1 kg reference flow | Supplier grade/SDS/primary records; scales; measured solids; transaction/stock checks |
| cp_utilities | wallcovering_converter | Each water, electricity, gas and steam row | metered native quantities/state | stage; meter start/end; electricity kWh and voltage; water m3/density/T; gas m3/T/P/wet-dry composition/Z/provider conditions; steam supply/return kg/P/T/dryness/enthalpy; drains; condensate; downtime; shared-line drivers | Calibrated stage meters and state sampling; distinguish purchased utility from internal generated/returned transfer. Match provider reference basis and loss/generation gate before linking, retaining raw physical quantities separately. Aggregation: Each attributable native-unit amount divided by S; per 1 kg reference flow | kWh; MJ; kg; m3; state units | Meter intervals/state changes plus each batch attribution | Same cp_output period with operating/load coverage | Converter and attributable on-site utility equipment only | per 1 kg reference flow | Meter calibration; supply contract/reference definition; enthalpy and volume-convention reconciliation |
| cp_waste | wallcovering_converter | Each independent exported waste | weighed external handover | row_id; wet kg; dry solids; water; linen/cellulose/PET/adhesive/finish fractions; COD/BOD/chemistry for liquid; generated/captured; returned; stock; exported; receiver; transport and treatment | Weigh external handover separately from internal reuse and generation; use measured density for liquid volumes. Test actual composition and acceptance/hazard state with receiver evidence; do not infer recipe from broad waste name. Aggregation: Each attributable exported native-unit quantity divided by S; per 1 kg reference flow | kg; m3; concentration and fraction units | Each consignment and representative composition sampling | Same cp_output period with stocks reconciled | Converter external waste gate | per 1 kg reference flow | Weighbridge/receiver receipts; sampled composition and density; waste classification; equal internal transfer records |
| cp_air | wallcovering_converter | Each species or exclusive particle bin | sampled/continuously monitored emission | row_id/species/CAS; fossil/biogenic origin; stack/fugitive point; raw concentration; gas flow; T/P; wet/dry; O2 correction; sampling duration; hours/load/control; PM fractions; residual-monomer screening; NOx and NMVOC mass conventions; detection limit | Measure representative post-control emissions and simultaneous compatible exhaust volume/operating coverage; include starts/stops and fugitive sources. Estimate unmeasured components only with a reviewed applicable method and uncertainty. Verify raw analytical and database/LCIA conventions. Aggregation: Each attributable species or exclusive-bin emitted kg divided by S; per 1 kg reference flow | kg; mg/Nm3; Nm3; h; state units | Actual representative operating/load intervals with declared coverage | Same cp_output period; disclose unsampled conditions | Actual outside-air releases from converter and on-site gas-fired heater/furnace only | per 1 kg reference flow | Sampling/calibration reports; concentration-volume state agreement; controls/load records; speciation/particle reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| net_product | finished_wallcovering | S = sum(accepted roll gross kg - corresponding measured core and packaging tare kg); S must be positive and stock-consistent in the common period. | cp_output | Net accepted product S in kg | |
| normalize_period | all inventory rows | Each inventory amount = its measured attributable native-unit period total / S; final reference output = 1 kg. Preserve the unnormalized physical ledger. Do not average batch ratios without weighting by accepted net mass. | cp_output; cp_supplies; cp_utilities; cp_waste; cp_air | Native unit per 1 kg reference flow | |
| dry_components | linen_face; paper_backing; laminating_adhesive; finished_wallcovering; laminate_trim; adhesive_waste; collected_dust; cleaning_effluent | Dry solids = measured wet mass × measured dry-solids fraction; water = measured wet mass × independently measured water fraction; other retained constituents = wet mass - dry solids - water. Quantify non-water volatile/liquid components separately and verify no overlapping fractions; drying loss is not all water. Reconcile each species retained, emitted or exported. Map actual constituent quantity to provider supply state; no assumed fibre/solids ratios. | cp_output; cp_supplies; cp_waste | Separate wet, dry and water ledgers | |
| energy_conversion | electricity; natural_gas; steam | Electricity MJ = metered kWh × 3.6. Convert gas measured volume to provider reference T/P/wet-dry/Z conditions with a documented thermodynamic method. Net steam heat = incoming mass×specific enthalpy - all outgoing mass×specific enthalpy, in matched units; losses/state uncertainty retained. This net heat does not equal an unverified GCV reference quantity. | cp_utilities | Compatible native-reference utility quantity and separate physical heat ledger | |
| emission_load | pm_fine; pm_coarse; pm_over10; co2_fossil; co2_biogenic; co; nox; methane; n2o; so2; ammonia; vinyl_acetate; nmvoc | Emitted kg = sum(matched concentration mg/Nm3 × exhaust Nm3)/1000000, plus separately measured fugitive kg. If using rate, integrate over measured covered hours. Preserve matching wet/dry/T/P/O2 states; a permit concentration or detection limit is not measured total load. | cp_air | Actual period species/bin kg before division by S | jrc-paper-bref-2015 |
| balance_ledgers | wallcovering_converter | Reconcile incoming constituents, finished product including retained treatments, exported waste, actual water evaporation and stock change in wet/dry/water/carbon units. Record actual packaging delivery separately. Combustion carbon and air/oxygen accounting are a separate physical balance; retain fossil and biogenic origins. Equal internal transfers cancel at the outer gate. Do not force closure by inventing emissions or scaling physical co-products by burden shares. | cp_output; cp_supplies; cp_utilities; cp_waste; cp_air | Reconciled physical ledgers with residuals and uncertainty; separate allocated burden ledger | ec-ef-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_grade | all inventory rows | Investigate actual maintenance components separately: laminating/drive belts, rollers and replacement covers, trimming blades, dust filters, lubricants and any cleaning consumables. Record actual composition/state, stocks, service life/use allocation, measured mass, route/gate and spent material receiver; add compatible atomic input/output rows for actual use and disclose missing identities/amounts, without an invented bundle or assumed zero. Each adopted UUID must match actual substance/material, route/state, medium and native property. Broad identity remains distinct from supplier dataset representativeness and reference-quantity compatibility. Blank UUIDs and provider/convention gaps remain explicit. | Original identity fields and actual supplier/receiver records |
| textile_and_backing | linen_face; paper_backing | Confirm pure woven linen face and actual cellulosic backing structure. Retained finishing, PET reinforcement and binder data are mandatory when present; no paper-wallpaper furnish or textile blend default. | Upstream chain, batch grade and primary composition/route evidence |
| completeness | wallcovering_converter | Review every row for applicable/measured/not_applicable/missing status. Document proof of absence; add separate actual chemicals, packaging, wastes and emissions outside the minimum rows with method review where scope changes. | Site process walkdown, recipe/SDS, meter and receiver register |
| physical_vs_burden | wallcovering_converter | Preserve unallocated physical balances, equal internal transfers, output acceptance and stocks independently from allocated burdens; disclose residuals, detection limits and uncertainty. | Separate linked physical and environmental ledgers |
| temporal_provider | all inventory rows | Match one foreground reporting period and actual supplier region/year/technology and supply gate; disclose upstream transport, utility loss and waste treatment gaps. | Dated primary records and verified provider definitions |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_wallcovering | Exactly one product output represents the reference object and declares 1 kg net delivered product. All applicable rows and collection aggregation use the same accepted net S; area/moisture or a package gross mass cannot replace it. | |
| validation_scope | linen_face; paper_backing; laminating_adhesive | Verify the selected physical face/backing, supplied-grade route and upstream dye/impregnation/finishes. Reject unverified conversions or contrary CAS/material/route; actual additional finishing or treatment requires supported scope extension. | innovations-confluence; jrc-textiles-bref-2023 |
| validation_balance | wallcovering_converter | Require independent wet/dry/water/carbon and packaging ledgers, acceptance/stock reconciliation and same-amount internal links. Assess residuals against actual measurement uncertainty; allocation cannot repair an inconsistent physical balance. | ec-ef-2021 |
| validation_release | pm_fine; pm_coarse; pm_over10; collected_dust; nox; nmvoc; cleaning_effluent | No nested PM double counting, captured-dust duplication, NOx/N2O conflation, VOC-species/total duplication or external-treatment/direct-water branch duplication. An unknown NOx/steam/provider basis is a pending linkage, not a validation pass for that dataset. | jrc-paper-bref-2015; jrc-textiles-bref-2023; epa-ap42-gas |
| validation_carbon | co2_fossil; co2_biogenic; methane | Keep actual fossil and biogenic releases in LCI regardless of a downstream GHG reporting convention; do not count retained linen/paper carbon as a release or import an external receiver's emissions into this converter twice. | |
| validation_evidence | all inventory rows | Identity success, a source discussion, missing monitor or blank UUID does not supply an amount. Require real collected records or an applicable reviewed calculation; expose missing rows/coverage, unsupported relationships and uncertainty before dataset use. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset, only after actual data completion and separate dataset review |
| downstream_use | Gate-delivered paper-backed woven-linen wallcovering input with verified upstream material/utility and external-treatment links |
| allowed_use | The declared pure-linen/paper-backed aqueous lamination route and actual article, provider and reporting-period conditions |
| excluded_use | Other faces/lamination/finishing routes; paper wallpaper recipe; unconverted backing; installed-wall service equivalence; automatic fire/acoustic or lifetime claim |
| required_metadata | Article and full qualifiers; net reference/area/moisture; constituent formulations/retained treatments; process-stage and utility gates; supplier/receiver/transport boundaries; source period/region; allocation and dataset identifiers |
| required_quality_disclosure | Measured coverage, non-use evidence, uncertainty, physical/burden ledgers, blanks, unresolved provider/convention links, source classification defects and scientific-review status |
| update_trigger | Face/backing/finish/adhesive or supplied solids change; utility pressure/voltage/mix or gate change; new waste receiver/control; new period or corrected source identity/quantity evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| innovations-confluence | literature | Innovations, Confluence, manufacturer product specification; https://www.innovationsusa.com/item/confluence ; product description and Specifications, accessed 2026-10-11 |Market example of basic-weave pure linen face and paper backing; Limitations: Manufacturer qualitative structure only; no adhesive/dye/finish recipe, quantity default or factory heat-route claim |
| desima-manufacture | literature | Desima, Textile Wallcoverings; https://www.desima.com/textile-wallcoverings/ ; Manufacture: raw materials, dyeing, weaving and wallcovering manufacturing, accessed 2026-10-11 |Actual yarn/fabric/backing and adhesive lamination, trimming and upstream textile distinction; Limitations: Single producer; polyester-warp variants and yarn-bath/loom case quantities are not this pure-linen recipe or sector defaults |
| jrc-textiles-bref-2023 | official_guidance | JRC, Best Available Techniques Reference Document for the Textiles Industry, EUR 31316 EN, 2023; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf ; §§2.1.1.12,2.5.1,2.10.1,2.10.3, printed20,35–36,116,125–126 (PDF55,70–71,151,160–161) |Flax/fabric upstream context, lamination/drying and formulation-dependent release screening; Limitations: Technical sector descriptions only; no guarantee of any producer formulation, chemical presence, process temperature or emission amount |
| jrc-paper-bref-2015 | official_guidance | JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board, 2015; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf ; §§2.2.2.1,2.2.2.2,7.1.10, printed48–50,670 (PDF86–88,708) |Upstream paper/manufactured net-output distinction, matched concentration-flow-period monitoring, paper-layer cutting dust screening; Limitations: Not a textile-wallcovering or PET nonwoven recipe; paper broke recycling cannot be assumed for bonded composite scrap; no mill case quantities or BAT-AEL factors transferred |
| epa-ap42-gas | official_guidance | US EPA, AP-42 §1.4 Natural Gas Combustion; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf ; §§1.4.1–1.4.3, PDF1–2, original printed footer10/26 |Conditional external natural-gas boiler/furnace emission species and measurement priority; Limitations: Preserve actual publisher footer edition marking without inferring chronology; no default gas composition/heating value, emission factor or permit/compliance limit; not electric/steam/biomass emissions |
| ec-ef-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I §4.5, 2021; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf ; PDF63–64 |Subdivision/system-expansion and justified physical/other allocation hierarchy; Limitations: Method hierarchy only; no PEF-conformity, sector allocation share, recycling default or avoided-product credit claimed |
