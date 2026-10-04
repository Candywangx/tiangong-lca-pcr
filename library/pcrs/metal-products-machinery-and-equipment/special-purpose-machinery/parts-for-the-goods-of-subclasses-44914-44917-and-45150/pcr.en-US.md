---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclasses-44914-44917-and-45150
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Parts for industrial printing, binding, plate-making, standalone non-ADP copying machinery and office sheetfed-offset presses

## 1. Scope and Applicability

This methodology covers manufacture of NEW accepted dedicated parts and subassemblies for three complete host families: industrial bookbinding, typesetting/composition, printing-plate/cylinder preparation and auxiliary equipment and printing44914; standalone photocopying, printing or facsimile44917 that cannot connect to an automatic data-processing machine; and office-type sheetfed-offset45150. Industrial offset, letterpress, flexographic, gravure and screen architectures remain in scope where the actual host qualifies. The CPC44914 text lists repetitive warp-printing machines yet excludes textile/yarn printing44629: that special wording requires actual item review and cannot authorize all textile printers. Parts for ADP printers45263–65 and multifunction equipment45266, full hosts and unrelated mechanisms are excluded. Examples are configured ink-transfer/transport rollers, dedicated grippers/drive assemblies, binding stitching heads/clincher mounting assemblies, plate-preparation positioning auxiliaries and eligible standalone-copier fuser/pressure assemblies. General bearings/motors/fasteners retain their own product identities; an independent printing plate/prepared engraved cylinder, rubber blanket, unmounted knife, ceramic or technical-glass article is not automatically a machinery reference part. A complete dedicated metal/composite assembly may contain such ingredients without extending this exclusion to every material input. Confirm finished supply and actual dedicated interfaces from order/drawing/BOM. Replacement catalogues do not prove included delivery. Recoating returned rollers or repairing assemblies are distinct starting states and services, not silently NEW part manufacture. Customer printing/copying/bookbinding recipes, energy savings and lifetime consumables are excluded from manufacturing amounts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclasses-44914-44917-and-45150 |
| classification_refs | CPC3.0:44942 |
| covered_products | New dedicated parts for full44914, non-ADP standalone44917 and office-offset45150 hosts |
| excluded_products | Whole hosts; ADP/MFP/textile-yarn printer parts; independent plates/blankets/knives/ceramic/glass articles; generic components; undeclared repair |
| representative_product | Actual dedicated press roller, binding-head assembly, plate-making stage or eligible standalone-copier fuser assembly; no shared mass |
| production_route | Own evidenced blank machining, compounding/coating/curing/grinding/finishing or bought completed parts; actual assembly/inspection/acceptance/dispatch |
| market_state | New accepted dedicated part at declared factory gate; separate blanks, returned repair and extra spare stock |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted NEW dedicated part for the declared industrial printing/binding/plate-making, non-ADP standalone copier or office-offset host |
| How much | 1 kg |
| How well | Declared host principal function, dedicated part drawing/interface, new finished supply state, order/BOM, actual ink/solvent/thermal/electrical-contact compatibility where applicable and actual acceptance criteria |
| How long or cycle | One declared completed manufacture/acceptance period; no lifetime customer printing throughput |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts for the goods of subclasses 44914, 44917 and 45150 `556c46e2-b440-4e5b-bd3a-c3bd533e9f3d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual industrial printing/binding/plate-making/non-ADP standalone copier/office-offset host function and mechanism; dedicated part drawing/interface and new-versus-returned state; model/serial/order/configuration; actual included hardware/options/spares/fills and actual chemical/thermal contact scope; same-period accepted quantity/calibrated net mass; stock/alloy/purity/phase/chemical formula; make/buy/completion/local operations/acceptance media/rejects/rework; suppliers/geography/transport/receiver routes; native units/assays/state/returns/stocks/allocation/uncertainty and identity gaps |

Required qualifiers must be disclosed in the foreground package. Missing qualifiers make its reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect accepted configured net mass through cp_mass; exclude packaging, extra spare stock, rejects and consumed trial media. Retain actual included first fill. |
| native_amount | all inventory rows | actual native property | native unit | Retain each native numerator: cable Length/m, hydraulic fluid/compressed air/tap water Volume/m3 and Energy/kWh or MJ. Conversion requires own same-interface density/T/P/humidity/assay or cable kg/m; electricity3.6MJ/kWh. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received identified raw ingredients, blanks or completed bought compatible parts |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Dedicated parts for the three full named host families; actual principal function and dedicated interface review |
| recursive_input_rule | Bought complete parts embed upstream once; local manufacture uses measured ingredient/work; pair/cancel internal transfers |
| upstream_dataset_requirement | Matching completion/grade/phase/provider/geography/native quantity; raw powder is distinct from finished insert |
| disclosure | Host/model/drawing/order/new or returned state, accepted net part mass, makebuy/local routes/test media/retained fill |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| host_and_state | Actual44914/44917/45150host and dedicated drawing/interface/completed item review controls classification. Standalone44917 cannot connect ADP and excludes multifunction machines. HS8443broad computer/MFP parts never broaden CPC; independent prepared plates, knives, rubber blankets and ceramic/glass articles retain their own class. New versus repair starting state is explicit. | cpc; census84; muller-service |
| supplied_architecture | Horizon heads/clinchers/attaching kits/fold rollers follow actual order, with kits expressly excluding heads/clinchers where stated. Hohner availability is not BOM/material proof. Kinyo OA/SOLT and KB multilayers cover mixed copiers/printers/MFPs, so the actual eligible host must be demonstrated, with no universal included roller or energy saving factor. | horizon-stitch; hohner-heads; kinyo-oa; kinyo-solt; kb-materials |
| local_route | Bottcher custom compound straining/milling/calendering and KB sponge grinding/optional coatings are possible actual local routes, not fixed recipes. Keep uncured polymer/compound/finished sleeve/completed roller interfaces separate. NBR conventional-oil and EPDM UV compatibility are variant-specific; no PFA=PTFE, VMQ=silicone oil, PI=aramid, fixed filler or coating-thickness assumption. Measure local fabrication/joining/tests/rework/rejects and dispatch; upstream completed parts are counted once. | boettcher-compound; boettcher-faq; kb-materials; kb-sponges |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Local structural and compound part fabrication | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| assembly | Configured dedicated-part assembly | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| finish | Actual local joining cleaning and finishing | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| test | Actual factory inspection and acceptance trials | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| services | Unassigned common-period factory services | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| dispatch | Accepted part dispatch and packaging | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| residues | Measured waste transfers and direct emissions | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |

### Process: Local structural and compound part fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Bought machined steel roller core (`rollercore`)

Actual supplied bought machined steel roller core with own grade/form/dimensions/assay/actual supplied interface and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Bought machined steel roller core
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local uncured nitrile rubber base polymer (`nbr`)

Actual local local uncured nitrile rubber base polymer only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Uncured NBR cannot use36270vulcanized articles or acrylonitrile monomer. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local uncured nitrile rubber base polymer
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local uncured EPDM base polymer (`epdm`)

Actual local local uncured epdm base polymer only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Generic36270rubber articles and36220belt/hose intermediates do not establish uncured EPDM base polymer. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local uncured EPDM base polymer
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local vinyl-methyl silicone rubber base compound (`silicone`)

Actual local local vinyl-methyl silicone rubber base compound only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Reclaimed construction caulk or silicone spray do not establish vinyl-methyl silicone rubber compound. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local vinyl-methyl silicone rubber base compound
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local PFA fluoropolymer coating resin (`pfa`)

Actual local local pfa fluoropolymer coating resin only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Polyfoam, paint resin, polyester or PTFE cannot establish PFA chemistry and actual coating-resin form. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local PFA fluoropolymer coating resin
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local polyimide belt-base resin (`polyimide`)

Actual local local polyimide belt-base resin only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Kevlar/polyaramid English versus polyimide-fibre Chinese conflict; neither establishes PI resin. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local polyimide belt-base resin
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local cast polyurethane roller elastomer resin (`pu`)

Actual local local cast polyurethane roller elastomer resin only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. TPU film has nativeArea and supplied film state, not casting elastomer resin; genericPUfiller is not the supplied resin. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local cast polyurethane roller elastomer resin
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local carbon-black reinforcing powder (`carbonblack`)

Actual local local carbon-black reinforcing powder only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Initial37950carbon semimanufacture conflicts powder;34231alternatives are specifically hose/tube or conveyor-belt representative inputs, not this actual roller filler supplier interface. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local carbon-black reinforcing powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local silicon-dioxide filler powder (`silica`)

Only actual SiO2 filler powder, own CAS7631-86-9/phase/purity/particle treatment/provider and measured local batch formula/assay/moisture/stocks/returns/reaction/retained compound. Dataset does not establish precipitated versus fumed grade; neither glass article nor assumed recipe.

- Selected flow: Silicon dioxide `7a49705c-abee-4573-be50-a01a1e799ab3`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local zinc-oxide compounding ingredient (`zinc`)

Only actual ZnO powder with own CAS1314-13-2/purity/form/provider and local compound batch records. Native Mass refers to physical supplied ZnO, not contained zinc or every rubber recipe; own assay/moisture/reactions/stocks/returns/retention required.

- Selected flow: zinc oxide `1512d759-45f7-4cf2-a42c-d02a8f71a19f`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local industrial sulfur vulcanization ingredient (`sulfur`)

Actual local local industrial sulfur vulcanization ingredient only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Chemical-mineral candidates conflict industrial supplied sulfur;34520alternative is tyre-compound-specific, not roller ingredient. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local industrial sulfur vulcanization ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local dicumyl-peroxide curing ingredient (`peroxide`)

Actual local local dicumyl-peroxide curing ingredient only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. No actual DCP80-43-3 supplied curing ingredient; dichloropropene/propylene oxide/H2O2/ether are different chemicals. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local dicumyl-peroxide curing ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local AISI304 stainless steel sheet (`ss304`)

Actual supplied local aisi304 stainless steel sheet with own grade/form/dimensions/assay/actual supplied interface and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Local AISI304 stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local carbon-steel structural sheet (`ssteel`)

Actual supplied local carbon-steel structural sheet with own grade/form/dimensions/assay/actual supplied interface and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Local carbon-steel structural sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Bought cast-iron roller-housing casting (`castiron`)

Actual supplied bought cast-iron roller-housing casting with own grade/form/dimensions/assay/actual supplied interface and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Bought cast-iron roller-housing casting
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Aluminium structural sheet (`aluminium`)

Actual sheet thicker than0.2mm with own alloy/temper/finish/provider and local cut/form stock and returns; contact compatibility is not inferred from sheet identity.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### T2 copper rod for local conductor manufacture (`copper`)

Actual T2 copper rod, own grade/assay/dimensions/provider for local conductors; weigh receipts/cuts/retained rod and returns, excluding embedded complete-motor copper.

- Selected flow: copper rod `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local uncured hydrogenated-nitrile rubber compound (`hnbr`)

Actual local local uncured hydrogenated-nitrile rubber compound only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Acrylonitrile monomer is not hydrogenated-nitrile rubber compound. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local uncured hydrogenated-nitrile rubber compound
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

###### Local uncured FKM fluorocarbon rubber compound (`fkm`)

Actual local local uncured fkm fluorocarbon rubber compound only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Synthetic polymer sealing material covers several polymers and supplied seal state; it does not establish uncured FKM compound. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local uncured FKM fluorocarbon rubber compound
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-compound; boettcher-faq; kb-materials; kb-sponges

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Configured dedicated-part assembly (`assembly`)

#### Inputs

##### Product flows

###### Bought completed compatible dedicated machinery part (`boughtpart`)

Actually finished compatible dedicated part received for further integration, with own host/drawing/order/completion/provider/net hardware/remaining local work. Embed upstream materials and work once; do not relabel an already finished reference or add its embedded ingredients again.

- Selected flow: Parts for the goods of subclasses 44914, 44917 and 45150 `556c46e2-b440-4e5b-bd3a-c3bd533e9f3d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Bought completed printing-press rubber-covered roller (`pressroller`)

Actual supplied bought completed printing-press rubber-covered roller and its own completed configuration/material/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought completed printing-press rubber-covered roller
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Bought completed non-ADP standalone-copier fuser roller (`copierroller`)

Actual supplied bought completed non-adp standalone-copier fuser roller and its own completed configuration/material/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought completed non-ADP standalone-copier fuser roller
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Bought completed wire-stitching head (`bindinghead`)

Actual supplied bought completed wire-stitching head and its own completed configuration/material/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought completed wire-stitching head
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Bought completed printing-press sheet-gripper assembly (`gripper`)

Actual supplied bought completed printing-press sheet-gripper assembly and its own completed configuration/material/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought completed printing-press sheet-gripper assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Bought completed plate-making machine positioning stage (`ctpstage`)

Actual supplied bought completed plate-making machine positioning stage and its own completed configuration/material/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought completed plate-making machine positioning stage
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Bought completed dedicated printing-machine alloy-steel gear (`alloygear`)

Actual supplied bought completed dedicated printing-machine alloy-steel gear and its own completed configuration/material/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought completed dedicated printing-machine alloy-steel gear
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Local petroleum lubricating oil (`luboil`)

Only actual supplied petroleum-fraction industrial lubricating oil compatible with its >=70% petroleum-oil interface and provider/additives/viscosity/temperature. Weigh independent local charge/consumption/stock/returns; retained first fill separately. Dataset40.5MJ/kg is not default energy or density and customer maintenance is outside manufacture.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Local lithium-thickened mineral lubricating grease (`grease`)

Actual local local lithium-thickened mineral lubricating grease only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Wax-solvent lubricant, hydraulic oil, kerosene or sulfonated kerosene do not establish lithium-thickened grease. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local lithium-thickened mineral lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Supplied low-voltage power cable (`cable`)

Actual <=1000V power cable compatible with its construction/provider and supply standard; retain native Length/m receipts, installed lengths/cuts/returns. Physical reconciliation alone uses own same-construction kg/m.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Supplied roller bearing (`bearing`)

Actual completed roller-bearing subtype/size/finish/provider; weigh independent supplied bearings and returns, excluding bearings embedded in complete bought drives.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Supplied steel assembly screw (`screw`)

Actual completed steel assembly screw with own size/grade/finish/provider and installed/returned stock, not a default screw count or stainless special supplied grade.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Bought hydraulic cylinder (`actuator`)

Actual completed linear hydraulic cylinder under its own stroke/bore/seal/provider interface; weigh supplied module and distinguish local charging and factory stroke-test utilities.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Bought steel isolation valve (`valve`)

Actual bought completed steel isolation valve and supplier/alloy/pressure/supplied finish; this generic identity does not certify a special solvent-contact or special metering valve.

- Selected flow: Steel valve `3cb88a81-618f-4fa5-814e-46399b121622`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Local petroleum hydraulic-fluid charge (`hydfluid`)

Only actual compatible >=70% petroleum-oil hydraulic preparation for a non-ink/solvent contact drive circuit. Measure native Volume/m3 at actual temperature and own composition/density, receipts/stocks/returns/retained charge; no special service approval is inferred.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Factory treated process water (`water`)

Actual treated industrial process-water supplier/quality and own water fraction/temperature/density, receipts/returns/reacted water/stocks; distinct from DI and tap water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Retained supplied deionised water (`retained_di`)

Actual DI supply through compatible ion-exchange/RO interface, own conductivity/water fraction/temperature/density and measured factory-test receipts/stocks/returns; the equipment customer water rate is not a factory default. Record only actual measured charge retained in the accepted shipped part assembly, distinct from consumed trials and returns; empty circuits and catalogue options do not establish included fill.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

###### Retained supplied petroleum hydraulic-fluid charge (`retained_hydfluid`)

Only actual compatible >=70% petroleum-oil hydraulic preparation for a non-ink/solvent contact drive circuit. Measure native Volume/m3 at actual temperature and own composition/density, receipts/stocks/returns/retained charge; no special service approval is inferred. Record only actual measured charge retained in the accepted shipped part assembly, distinct from consumed trials and returns; empty circuits and catalogue options do not establish included fill.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: horizon-stitch; muller-service; hohner-heads; kinyo-oa; kinyo-solt

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual local joining cleaning and finishing (`finish`)

#### Inputs

##### Product flows

###### Local chromium-trioxide plating reagent (`chromic`)

Actual local local chromium-trioxide plating reagent only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. CrO3 candidate has organo-inorganic34160 conflict; molybdenum oxide/dichromate cannot replace chromium trioxide. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local chromium-trioxide plating reagent
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local nickel-sulfate-hexahydrate plating reagent (`nickel`)

Actual local local nickel-sulfate-hexahydrate plating reagent only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Nickel sulfate candidates use34290rare-earth or41421nickel intermediate classifications, incompatible supplied NiSO4·6H2O. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local nickel-sulfate-hexahydrate plating reagent
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local white-fused-alumina grinding abrasive (`alumina`)

Actual supplied local white-fused-alumina grinding abrasive and its own completed configuration/material/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local supplied oil-water machining emulsion (`cutfluid`)

Actual local local supplied oil-water machining emulsion only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Actual bounded correctly directed queries did not establish the named dedicated completed part, supplied grade or chemical form; retain own measured identity gap, no material/consumable proxy. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local supplied oil-water machining emulsion
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local undenatured rectified-ethanol cleaning solvent (`ethanol`)

Only actual undenatured rectified ethanol before denaturing, alcoholic strength >=80%vol, compatible CN at-plant supply/provider/own assay/water/temperature/density for local cleaning. Weigh physical solution, independent dilution/reaction/stock/returns/non-air fates; not denatured solvent or a dry-ethanol default.

- Selected flow: Rectified ethanol `276f1cf5-0aa1-4d57-ad95-9dada6e043a0`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local n-hexane process-cleaning solvent (`hexane`)

Actual local local n-hexane process-cleaning solvent only on an evidenced compatible route; measure its physical supplied amount, own chemical identity/CAS/phase/purity/formulation/assay/moisture/T/P/density, preparation/reaction/retention/recovery/stocks/returns and non-air fates. Hexane candidate specifically make-up for solvent extraction with recovery; no compatible actual process-cleaning supplier interface established. Bought completed rollers or assemblies embed these upstream once; catalogue architecture gives no recipe.

- Selected flow: Local n-hexane process-cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local equipment-cleaning isopropanol (`ipa`)

Actual compatible China at-plant isopropanol for local equipment cleaning; own purity/water/density/provider and measured preparation/stock/returns/reaction/retention. It is not the optical-assembly or assumed70%-antiseptic supply.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local surface-finishing50% nitric acid (`nitric`)

Actual50% aqueous nitric-acid industrial finishing/cleaning reagent CAS7697-37-2; own concentration/provider/density and reaction/dilution records. Measure physical solution, not anhydrous acid; no universal finishing recipe.

- Selected flow: Local surface-finishing50% nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local cleaning30% sodium hydroxide (`alkali`)

Actual30% aqueous NaOH CAS1310-73-2 and supplier/assay/density for documented local cleaning; record physical solution and dilution/reaction/returns separately. This is not automatic customer cleaning consumption.

- Selected flow: Local cleaning30% sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local stainless-steel welding filler wire (`weld`)

Actual supplied local stainless-steel welding filler wire and its own completed configuration/material/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Local stainless-steel welding filler wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

###### Local gaseous argon welding shield (`argon`)

Actual supplied local gaseous argon welding shield and its own completed configuration/material/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Local gaseous argon welding shield
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: boettcher-faq; kb-sponges

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual factory inspection and acceptance trials (`test`)

#### Inputs

##### Product flows

###### Actual factory-trial uncoated woodfree paper (`paper`)

Only measured actual attributed factory acceptance uses uncoated woodfree graphic paper matched to provider/form/moisture. Receive/return/reuse/reject/retained and discarded test sheets independently; customer throughput or whole printer duty cycle is not the part manufacturing amount.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: horizon-stitch; kinyo-oa

###### Actual factory-trial solvent-based offset ink (`ink`)

Only actually supplied solvent-based planographic ink compatible with provider/resin/pigment/solvent formula and documented attributable part factory acceptance. Measure physical ink, own water/solids/solvent assay/density/stocks/returns/reaction/residual fates; never generic water-based/UV/gravure ink or default black pigment loading.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources:

###### Actual factory-trial standalone-copier toner powder (`toner`)

Only actual powder supplied for a documented eligible standalone-copier part factory trial; own binder/pigment/additive formula, assay/moisture/particle state/provider and weighed receipts/stocks/returns/retained images/captured waste. A full ADP laser printer is not this chemical input; no customer cartridge consumption or default recipe.

- Selected flow: Actual factory-trial standalone-copier toner powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: horizon-stitch; kinyo-oa

###### Actual factory-trial thermoplastic solid hot-melt adhesive (`hotmelt`)

Only actual virgin thermoplastic solid hot-melt adhesive compatible with its supplier/base-polymer recipe and attributable factory acceptance trial or local joining. Weigh physical adhesive and own solids/moisture/reaction/stocks/returns/retained test residues. No EVA fraction, customer book production glue rate or molten circulating inventory is assumed.

- Selected flow: Adhesive (Solid Hot Melt) `33c968ac-4d9d-410c-bb6f-53d4e7b247f9`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources:

###### Actual factory-trial non-alloy steel stitching wire (`stitchwire`)

Only actual received non-alloy steel wire with own carbon/alloy assay/coating/diameter/spool/provider matching the selected wire interface and actual head trial. Measure consumed lengths/physical mass, retained staples, offcuts/stocks/returns; coated/alloy wire needs independent compatible identity. Catalogue head capability supplies no default trial count.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: horizon-stitch; kinyo-oa

###### Factory-test deionised water (`di`)

Actual DI supply through compatible ion-exchange/RO interface, own conductivity/water fraction/temperature/density and measured factory-test receipts/stocks/returns; the equipment customer water rate is not a factory default.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: horizon-stitch; kinyo-oa

###### Factory protective-atmosphere nitrogen (`nitrogen`)

Only actual factory protective-atmosphere nitrogen supply with matched purity/provider/gas phase/container and measured cylinder/line stocks/returns. Customer lifetime gas and electronic-grade supply are distinct.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: horizon-stitch; kinyo-oa

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Unassigned common-period factory services (`services`)

#### Inputs

##### Product flows

###### Factory low-voltage electricity (`electricity`)

Only actual compatible CN user-side grid-average AC <1kV supply; retain metered Energy/kWh and3.6MJ/kWh conversion. Allocated local work and trial meters take priority; shared service includes only unassigned common-period residual.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Factory compressed air (`air`)

Actual compressed-air supplier/pressure/purity and native Volume/m3 at stated T/P/wet-dry state; actual meter/density corrections only. Account shared residual once and exclude customer forming-air lifetime demand.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Purchased natural-gas industrial heat (`heat`)

Only actual compatible CN natural-gas industrial-heat supply and metered native Energy/MJ. Declare gross/net meter datum; subtract independently measured same-datum return once for gross heat, never subtract twice for net supply.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Service tap water (`tap`)

Only actual compatible Hong Kong treated-water production/supply interface; retain native Volume/m3 and own temperature/density/water fraction when reconciling mass. Unassigned service residual excludes already measured cleaning/trial water.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Accepted part dispatch and packaging (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated packaging board (`board`)

Actual C/E/F corrugated board with fibre>=80%, supplier/recycled content/moisture and weighed dispatch material/returns. Packing stays outside equipment net mass.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; horizon-stitch

###### LDPE packaging foil (`film`)

Actual non-cellular unreinforced non-adhesive LDPE foil supplier/thickness/moisture and dispatch/returned mass. This is not PVA, PET or structural resin.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; horizon-stitch

###### Dispatch wood pallet (`pallet`)

Actual wood pallet supplied for dispatch, own construction/moisture/receipts/reuse/return ledger. It is packaging outside Dnet and not an assumed EURO or one-pallet-per-part mass.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; horizon-stitch

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted new dedicated printing and standalone-copier machinery part (`finished`)

Only NEW accepted finished dedicated parts for industrial bookbinding/typesetting/plate-making auxiliaries/printing44914, non-ADP standalone copying/printing/fax44917 or office sheetfed-offset45150. Actual host/function/drawing/interface and completion review precede cp_mass. Computer printers/MFPs, textile/yarn printers, whole hosts and independent consumable articles are not qualified by vendor application.

- Selected flow: Parts for the goods of subclasses 44914, 44917 and 45150 `556c46e2-b440-4e5b-bd3a-c3bd533e9f3d`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_mass
- Sources: cpc; horizon-stitch

##### Waste flows

##### Elementary flows

### Process: Measured waste transfers and direct emissions (`residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Outgoing steel machining scrap (`wsteel`)

Measured outgoing unprocessed steel machining/forming scrap, own alloy/metal content/moisture/stocks/recovery/returns and actual receiver route; no avoided burden assumed.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing copper machining scrap (`wcu`)

Measured outgoing copper scrap with own contained-Cu/contaminant/moisture/stocks and receiver. Selected supply interface requires an actual hydrometallurgical recycling route; direct-remelt shipments require another identity.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing polyethylene process offcut waste (`wplastic`)

Only actual cleaned polyethylene machining waste handed over at the compatible mechanical-recycling interface; own polymer/additive/moisture/contamination/stocks/returns and receiver route. Untreated ink-soiled mixture is distinct.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing spent isopropanol solution (`spentipa`)

Measure actual transferred outgoing spent isopropanol solution independently, with own composition/assay/moisture, period stocks/returns/recovery and actual receiver/treatment route. The queried identity remains unresolved; no unrelated waste or direct-air proxy.

- Selected flow: Outgoing spent isopropanol solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing factory industrial wastewater (`wastewater`)

Measure actual transferred outgoing factory industrial wastewater independently, with own composition/assay/moisture, period stocks/returns/recovery and actual receiver/treatment route. The queried identity remains unresolved; no unrelated waste or direct-air proxy.

- Selected flow: Outgoing factory industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing metal-hydroxide finishing sludge (`sludge`)

Measure actual transferred outgoing metal-hydroxide finishing sludge independently, with own composition/assay/moisture, period stocks/returns/recovery and actual receiver/treatment route. The queried identity remains unresolved; no unrelated waste or direct-air proxy.

- Selected flow: Outgoing metal-hydroxide finishing sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing machining lubricating oil waste (`wasteoil`)

Measured spent lubricating/cutting oil from local machining or equipment-maintenance tests under compatible supply scope; own oil/water/metal assay, stocks/returns and treatment receiver. Rubber/ink-contaminated liquid and plating liquor require their own waste identities.

- Selected flow: Waste oil `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred captured metal grinding dust (`dust`)

Measure actual transferred transferred captured metal grinding dust independently, with own composition/assay/moisture, period stocks/returns/recovery and actual receiver/treatment route. The queried identity remains unresolved; no unrelated waste or direct-air proxy.

- Selected flow: Transferred captured metal grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing LDPE packaging waste (`wfilm`)

Only actual cleaned LDPE packaging waste at the compatible mechanical-recycling interface; independently weigh dispatch offcuts/returns, composition/moisture/stocks and receiver. No automatic recovery percentage.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing rubber roller-grinding waste (`wrubber`)

Measure actual discarded rubber grinding/cutting waste at transfer, own polymer/cured state/filler/metal/moisture/stocks/returns/recovery and receiver route. Captured rubber particulate is waste, never an air amount; liquid compound/plating sludge needs a separate identity. This UUID applies only to actual non-hard rubber scrap: hard rubber/ebonite and different composite coatings require independently reviewed identities and cannot be substituted by default.

- Selected flow: Waste rubber `b4818cb7-cbef-403a-9fc3-a12fe8baf092`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing discarded factory-test paper (`wpaper`)

Measure actual discarded test sheets as recovered paper waste, own paper/ink/toner/staple/glue contamination and moisture/stocks/returns/reuse/receiver route. Retain more specific identity if its actual paper grade/receiver requires one; saleable or returned test sheets are not waste by default.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing collected factory-trial toner waste (`wtoner`)

Measure actual transferred outgoing collected factory-trial toner waste independently, with own composition/assay/moisture, period stocks/returns/recovery and actual receiver/treatment route. The queried identity remains unresolved; no unrelated waste or direct-air proxy.

- Selected flow: Outgoing collected factory-trial toner waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to air (`co2`)

Only actual independently measured fossil carbon dioxide to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Fossil origin requires own fuel/carbon evidence; biogenic solvent/paper carbon is separate.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Isopropanol to air (`ipair`)

Only actual independently measured isopropanol to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Water vapour to air (`vapor`)

Only actual independently measured water vapour to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Molecular nitrogen dioxide to air (`no2`)

Only actual independently measured molecular nitrogen dioxide to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Molecular NO2 differs from NOx as NO2-equivalent.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### PM10 to air (`pm10`)

Only actual independently measured pm10 to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. PM10 includes finer fractions; avoid overlapping constituent-element/particle reporting.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Copper to air (`copperair`)

Only actual independently measured copper to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own contained element differs from gross oxide/salt/alloy. Generic metal-and-ion flow requires preference for separately matched individual species when the actual LCIA method differentiates them.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Hexavalent chromium to air (`chromiumair`)

Only actual independently measured hexavalent chromium to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own Cr(VI) assay, not total chromium or alloy mass, is required.

- Selected flow: chromium (vi) `08a91e70-3ddc-11dd-950b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Nickel to air (`nickelair`)

Only actual independently measured nickel to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own contained element differs from gross oxide/salt/alloy. Generic metal-and-ion flow requires preference for separately matched individual species when the actual LCIA method differentiates them.

- Selected flow: nickel `08a91e70-3ddc-11dd-96c8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Ethanol to ordinary unspecified air (`ethanolair`)

Only actual independently measured ethanol to ordinary unspecified air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: ethanol `08a91e70-3ddc-11dd-9349-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### n-Hexane to ordinary unspecified air (`hexaneair`)

Only actual independently measured n-hexane to ordinary unspecified air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: n-Hexane to ordinary unspecified air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:


## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_configuration | Separate actual configurations/site/process meters first. Allocate common-period residual by measured causal service demand or work, not catalogue printing throughput. Include attributable failed trials/rework/rejects in accepted-part burdens. Cancel paired internal transfers; disclose reusable returned test sheets, saleable co-products and receiver allocation/treatment without invented avoided burdens. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted part | foreground_record | model/configuration/serial; net mass; Naccepted; Dnet; included hardware/fills; excluded packing/spares | Calibrated traceable weighings reconcile accepted complete parts with actual order/BOM within one configuration/period. Sum accepted net mass excluding packing/spare stock/rejects/consumed trials. Include only actually retained shipped fill. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_materials | fabrication | local stock and chemical ingredients | foreground_record | Qattr; own gross mass/assay/moisture/density; alloy/formulation; stocks/returns/reactions/retained parts; actual local route | Weigh actual supplied stock and each local finishing/joining/cleaning ingredient; reconcile own-stream element/moisture/chemical contents with retained hardware, reaction products, baths/recovery/waste/stocks/returns. Actual contact alloy or polymer compatibility is specific to the contacted part, never every frame. Embedded complete-module materials stay upstream once. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_modules | assembly | completed hardware and retained fill | foreground_record | Qattr; BOM/completion/options; hardware mass/length; separate fill formula/assay/T/P/density; receipts/installed/returns/stocks | Hardware branch weighs actual completed received/installed/returned assemblies and cable lengths, documenting remaining local work. Chemical branch independently measures local fill/lubricant/gas in its own native units and own composition/moisture/T/P/density, stocks/reactions/retention/returns. Complete bought modules embed their chemicals upstream once; whole hardware mass never substitutes chemical amount. First retained supply fill is distinct from trial consumption and customer maintenance. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_tests | test | observed factory trial media | foreground_record | Qattr; actual acceptance order/trial/repeat/reject; water/paper/ink/gas receipts; own composition/state; returned/reused/sold/discarded stocks | Meter actual attributed factory tests and repeated/failed trials, using each paper/ink/adhesive/toner/wire/chemical/water/gas own measured amount and composition. Record returned/reused/recovered and saleable test sheets independently, never as disappearance. Exclude normal customer production, catalogue recipe/capacity, R&D demonstrations or customer commissioning unless an explicit declared manufacturing attribution is evidenced. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_utilities | services | each unassigned utility | foreground_record | Qattr; common period/site/import/self-generation/export/storage; assigned meters; gross/net heat datum; independent return; T/P/humidity/density | Reconcile each common-period imported and actually generated utility minus exports/storage with assigned local/test meters; allocate only residual once. Cable/energy/volume units remain native. Gross heat deducts separately measured same-datum return once; net heat never twice. Process water/DI/service water and internally circulated cooling flows are independent interfaces; paired returns cancel. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_dispatch | dispatch | each packaging item | foreground_record | Qattr; packing grade/moisture/dimensions; dispatch receipts; returns/reuse/stocks; packing outside Dnet | Weigh actual board/foil/pallet independently and reconcile dispatch/returns/reuse/stocks within the accepted configuration/period. No generic packaging ratio or catalogue shipping gross mass establishes net part mass. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_wastes | residues | each outgoing waste stream | foreground_record | Qattr; transfer weight; own composition/assay/moisture/density; stocks/returns/recovery; receiver/transport/treatment route | Measure each outgoing waste independently at its actual handover state; retain own-stream wet/dry/composition and chemical/metal contents, returned stock and receiver route. Wastewater/sludge/spent solvent/captured dust/paper/toner/rubber/oil remain separate. Treatment is distinct from direct environmental discharge; captured material is not air. Missing compatible identity remains a gap rather than wrong-origin waste proxy. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_emissions | residues | each direct emitted species | foreground_record | Qattr; CAS/species/origin/compartment; post-control concentration; simultaneous flow/time; T/P/wet-dry/O2 correction; fugitive sampling; capture/reaction/byproducts | Use independently observed post-control concentration times matched actual flow and time with unit/state correction plus separately sampled fugitives. Reconcile input/retained/recovered/destroyed/sludge/wastewater/stocks by own assays; capture is not destruction and non-air/unexplained residuals never infer air. Molecular NO2 differs from NOx-equivalent; contained Cr(VI)/Ni/Cu differs from total metal/oxide/salt/alloy and avoids PM overlap. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Within one actual configuration/period divide attributable native-unit total by the sum of calibrated accepted complete-part net masses. Retain per-part quantities and actual denominator evidence. | Qattr; Dnet; Naccepted; cp_mass | native-unit amount per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | Same configuration/period Qattr includes attributable manufacture/assembly/tests/reject/rework burden. Naccepted counts accepted parts; Dnet sums their calibrated net masses. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Catalogue empty/gross mass or printing throughput is not a denominator. | calibrated configuration-specific accepted ledger |
| quality_physical | all inventory rows | Every element/chemical term uses its own gross mass, assay/moisture/wet-dry basis, reactions/stocks/returns/retention. Alloy/sludge/solution mass differs from contained element/active chemical. Each water stream requires own water fraction/density at actual temperature, independent reaction/retained fill/evaporation/discharge/stocks; internal returns pair and cancel. | own-stream assays and state/stock/reaction records |
| quality_solvent | ipa; spentipa; ipair; wastewater | Reconcile each solvent own assay, stocks/reactions/retained/recovered/captured/destroyed/wastewater/spent-media terms against independently measured air. Capture differs from destruction; non-air and unexplained residual cannot become emitted IPA. | independent measured fate and air records |
| quality_scope | reference product | Maintain all three named host part families with actual host-function, dedicated-interface and NEW manufactured state review. Chemical/thermal/electrical-contact compatibility is component-specific, not a whole-frame claim. Catalogue option, empty/gross mass, customer recipe/yield/utility demand, marketing savings and maintenance consumables are not factory manufacture defaults. | actual order/BOM/acceptance and primary original technical body |
| quality_rubber_waste | wrubber | Apply the selected rubber-waste identity only to actual non-hard rubber scrap. Verify polymer/cured state, fillers, metals, coatings, moisture, stocks and receiver route at transfer. Hard rubber/ebonite and other composite-coating wastes require independently reviewed identities; cured state alone does not establish non-hard rubber. | actual composition and waste-transfer records |
| quality_identity | all inventory rows | Match actual published100/type/native reference internal ID/property/unitgroup and official bilingual names with full chemistry/CAS/grade/phase/provider/completion/compartment. Add every actual unlisted material, ingredient/fuel/fill/module/test media, transport, waste and emitted species as independently queried atomic measured exchanges. Unresolved identities remain gaps; missing differs from zero and not-applicable requires physical evidence. | own full direct and supplier/interface review |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Require the accepted dedicated new part, actual industrial printing/binding/plate-making/non-ADP standalone copier/office-offset host/function/drawing/interface, one-kg net reference and disclosed completion/new-versus-returned state. Reject whole-host, general machinery, ordinary material/tool or consumable proxies. | cpc; census84; horizon-stitch |
| validate_makebuy | Require actual supplied order/BOM, part-specific chemical/thermal/electrical-contact compatibility, exclusive raw-ingredient versus bought-complete branches and actual trial attribution. Reject catalogue alloy/binder recipes/weights/energy/customer yield/lifetime replacement defaults; include attributable rejects/rework/failed trials. | cpc; census84; boettcher-compound; boettcher-faq; kinyo-oa; kinyo-solt; kb-materials; kb-sponges; horizon-stitch; muller-service; hohner-heads |
| validate_balances | Require each stream own assay/water/density/stocks/returns/reactions and measured non-air solvent fates; each emission actual species/origin/compartment and post-control concentration times matched flow/time/state plus independent fugitives. Utility imports/actual generation/exports/storage reconcile assigned meters and residual once, with independent same-datum gross heat return deducted once. |  |
| validate_species | Require molecular NO2 not NOx-equivalent, Cr(VI) not total Cr, contained Ni/Cu not gross salts/oxides and non-overlapping PM. Prefer matched individual species where the actual LCIA method differentiates them. Fossil versus biogenic solvent/paper carbon and measured air versus captured/liquid fates remain separate. Report performed/skipped checks, findings and actual completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual accepted configured new industrial printing/binding/plate-making, non-ADP standalone copier and office-offset dedicated-part manufacture |
| excluded_use | Whole-host/general-component/material/customer-consumable proxies, catalogue mass/process recipe or universal factory assumption |
| required_metadata | All reference qualifiers; Qattr/Naccepted/Dnet; native units/own assays/state; order/BOM/makebuy/actual tests/providers/receiver/allocation/gaps |
| required_quality_disclosure | Measured/estimated/missing, calibration/sampling/uncertainty, residuals, identity/scope gaps and performed/skipped check completeness |
| update_trigger | Principal function/order/configuration/contact alloy/chemical phase/provider/makebuy/site/period/acceptance/treatment change |


## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | Central Product Classification Version 3.0, Explanatory Notes | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full44914industrial binding/typesetting/plate-making auxiliary and printing hosts, standalone non-ADP44917 and office sheetfed-offset45150 parts; actual exclusions outrank broad HS labels. |
| census84 | handbook | Schedule B Book - Chapter 84 | https://www.census.gov/foreign-trade/schedules/b/2022/c84.html | Supplementary HS8440.90/8442.40/8443parts versus prepared printingplates/cylinders8442.50, ADP/MFP parts and chapter-specific grindstone/ceramic/glass articles; cannot broaden CPC44917 or textile exclusions. |
| boettcher-compound | handbook | Bottcher Elastomer Compounds | https://boettcher-systems.se/cmsimages/Compounding_E.pdf | Actual custom compounds and straining/milling/calendering architecture; NBR/HNBR and supplied sheets/slabs differ from raw recipes and complete rollers. No catalogue mesh size, rate or composition default. |
| boettcher-faq | handbook | Bottcher Printing Technical FAQ | https://www.bottcher.com.br/faq/ | Conditional NBR oil-based versus EPDM UV compatibility and dedicated roller/sleeve interfaces; anilox engraving/ceramic surface and independent blanket articles need completed-item boundary review, no universal compound recipe. |
| kinyo-oa | handbook | OA Rollers | https://www.kinyo-j.co.jp/en/products/oarollers/ | Pressure/fuser rollers and belts are custom OA architectures covering copiers/MFP/printers; actual non-ADP standalone host required, not supplier catalogue automatic classification. |
| kinyo-solt | handbook | SOLT Roller | https://www.kinyo-j.co.jp/en/data/623.html | SOLT silicone-sponge through-hole pressure roller is one configured architecture; warm-up/feed claims are customer operation, not factory energy or a universal resin recipe. |
| kb-materials | handbook | KB RollerTech Materials | https://www.kbrt.de/en/applications/materials/ | VMQ silicone/sponge, FKM, PFA and polyimide multilayer architectures require actual supplier formula and uncured-compound/finished-sleeve/completed-roller interfaces. PI is not aramid and PFA is not genericPTFE. |
| kb-sponges | handbook | KB RollerTech Silicone Sponges | https://www.kbrt.de/en/applications/silicone-sponges/ | Grinding a silicone sponge and optional solid-silicone/fluoropolymer layers are actual routes; conductive variants and catalogue density/hardness are not fixed recipes or measurement factors. |
| horizon-stitch | handbook | Horizon iCE STITCHLINER Mark V | https://www.horizon.co.jp/products/catalog/e_pdf/e008di/05sl_pdf/iCE%20STITCHLINER%20Mark%20V_e.pdf | Actual stitching heads, clinchers/attaching kits, transport and urethane fold roller options; listed kits can exclude head/clincher. Complete host includes no default part BOM, wire count or part net mass. |
| muller-service | handbook | Muller Martini MMServices | https://mullermartini.com/wp-content/uploads/2026/02/Broschure_MMServices-EN.pdf | Original dedicated replacement supply is distinct from repair/rebuild service and does not establish delivered configuration, material recipe or factory test quantities;032021actual edition differs from upload date. |
| hohner-heads | handbook | Hohner Stitching Heads | https://www.hohner-postpress.com/en/products/stitching-heads/ | Actual manufacturer designs/manufactures stitching heads with named head families; homepage availability supports conditional dedicated interface only, no drawing/BOM/material/test-count proof. |
