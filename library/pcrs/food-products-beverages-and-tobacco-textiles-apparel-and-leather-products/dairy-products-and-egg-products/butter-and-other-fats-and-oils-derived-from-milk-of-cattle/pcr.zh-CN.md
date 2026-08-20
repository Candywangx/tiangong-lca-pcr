---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-cattle
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 牛乳制黄油及其他乳脂和乳油

## 1. 范围与适用性

本 PCR 规定完全源自牛乳的黄油和浓缩乳脂产品的前景数据生产方法。涵盖甜奶油黄油和发酵黄油、有盐和无盐黄油、乳脂、分提乳脂、无水乳脂、无水黄油油、黄油油、酥油，以及在所声明产品仍属于乳源脂肪产品时的牛乳乳脂涂抹制品。适用于以接收的牛乳、牛乳奶油或牛乳黄油为原料的批次和连续生产，终点为乳品加工厂门口的可销售产品。

不包括水牛乳、绵羊乳、山羊乳、骆驼乳或其他非牛乳来源的乳脂；植物脂肪和植物/乳脂混合涂抹制品；人造黄油；作为最终产品销售的奶油；作为参考产品销售的酪乳；下游食品配制；以及零售、使用和生命终期阶段，除非研究范围另行纳入。声称符合本 PCR 的数据集应选择一个明确产品形态和一条生产路线，不得在未披露的情况下平均化方法上存在实质差异的产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-cattle |
| classification_refs | CPC 3.0 22241，精确分类语境 |
| covered_products | 牛乳制黄油；乳脂；分提乳脂；无水乳脂；无水黄油油；黄油油；酥油；不含非乳脂肪的牛乳乳脂涂抹制品 |
| excluded_products | 非牛动物乳脂；人造黄油；植物/乳脂混合物；作为最终产品的奶油；作为最终产品的酪乳；含黄油或乳脂的配制食品 |
| representative_product | 加工厂门口的牛乳制成品无水乳脂 |
| production_route | 接收牛乳或奶油，经奶油制备、巴氏杀菌、可选发酵成熟、搅拌成脂、揉炼和可选加盐制成黄油；或接收奶油或黄油，经脂肪浓缩、相分离和除水制成浓缩乳脂；随后灌装或包装和储存 |
| market_state | 乳品加工厂门口可销售的散装或包装产品，并声明产品形态、乳脂和水分规格、盐或发酵状态、包装状态、地域、技术和参考期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完全源自牛乳并按所声明路线生产的可销售黄油或其他乳脂产品 |
| How much | 加工厂门口 1 kg 净产品质量 |
| How well | 符合所声明产品规格；黄油应符合适用的 CXS 279-1971 身份和组成要求，无水乳脂、乳脂、黄油油或酥油应符合适用的 CXS 280-1973 身份和组成要求 |
| How long or cycle | 所声明参考期内一个完整生产批次或连续生产周期；不赋予使用寿命 |
| reference_flow_link | 定量参考为 `product_packaging_and_storage` 的净可销售产品输出；由于所选 Tiangong 流表示无水乳脂，因此精确产品形态是必需限定信息 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净可销售产品 |
| 参考产品流 | 无水乳脂 `7f8eef6e-3ea0-4f74-bf72-c6f95af2c3fc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；牛乳来源；乳脂分数和水分规格；有盐或无盐状态；适用时的发酵或甜奶油状态；生产路线；散装或包装状态；包装材料和净质量；地域；技术；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。所选 Tiangong 参考流可直接用于该身份所表示的无水乳脂、酥油、澄清黄油和黄油油形态。普通黄油或其他涵盖形态仍采用相同质量基准，但在发布前必须解析并披露形态专属产品流身份；不得静默地将无水乳脂 UUID 改称为其他产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和所有按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量不含包装的净可销售产品质量，并将所有报告的前景数量归一化到所声明产品形态的整 1 kg。 |
| `milkfat_and_moisture_basis` | 产品身份和得率校验 | 质量分数 | % m/m | 采用代表性产品检测，按质量基准报告乳脂、水分和非脂乳固体；应用所声明 CXS 279 或 CXS 280 产品限值，并保留检测方法和批次结果。 |
| `energy_carrier_accounting` | 电力、燃料、蒸汽和制冷 | 能量 | kWh 或 MJ | 保留计量的能源载体和单位；仅用已披露换算因子转换，避免重复计算外购蒸汽及其制备燃料，并归一化到相同净产品质量。 |
| `water_and_wastewater_accounting` | 工艺水、清洗水和废水 | 质量或体积 | kg 或 m3 | 记录实测体积，换算质量时注明温度或密度假设；回用水应单独识别，不得再次计作新鲜水取用。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂门口接收的牛乳、牛乳奶油或牛乳黄油，并声明质量、乳脂含量、来源、既往处理、温度和上游数据集引用 |
| starting_condition_role | 前景加工投入；上游奶牛养殖、乳收集、奶油生产或黄油生产由关联上游数据集表示，除非报告场址实际运营这些过程 |
| product_classification_scope | 仅限牛乳黄油和乳脂产品；路线选择必须区分普通黄油和浓缩乳脂产品 |
| recursive_input_rule | 同类别的接收黄油或乳脂投入，按技术圈产品投入记录，并有其自身上游数据集和所声明产品形态；除非场址实际执行其上游生产，否则不得在当前前景过程中重复创建 |
| upstream_dataset_requirement | 为跨越所选边界的牛乳、奶油、黄油、电力、热能载体、水处理、配料、包装和运输提供地域与时间具有代表性的上游数据集 |
| disclosure | 声明起始物料、所纳入现场操作、路线、共产品处理、分配因子、循环回用、截断、包装状态、储存条件、地域、参考期，以及任何排除的资本品或下游阶段 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_selection` | 前景过程选择 | 纳入接收与制备、恰好一条适用的产品形成路线，以及灌装或包装与储存。仅当有证据表明某项操作位于上游、未使用或不属于所声明产品规格时，方可排除。 | `tetrapak-butter-handbook`; `tetrapak-amf-handbook` |
| `boundary_upstream_linkage` | 接收的乳、奶油或黄油 | 将接收的乳品物料和其他采购投入关联至上游数据集，不得视为无负荷。如果奶牛养殖、乳收集或奶油分离属于报告组织但不在前景单元过程内，仍应保留为关联上游过程。 | `fao-idf-dairy-lca-2010` |
| `boundary_on_site_completeness` | 乳品加工厂 | 纳入与所含操作相关的现场电力、燃料或外购热能、制冷、水、清洗和卫生、配料、产品和共产品输出、产品损失、废水和固体废物。 | `fao-idf-dairy-lca-2010`; `codex-cxc-57-2004`; `tetrapak-dairy-effluent` |
| `boundary_downstream_exclusion` | 加工厂门口数据集 | 排除加工厂门口之后的配送、零售、消费者储存和使用以及生命终期，除非研究明确扩展边界并将这些模块单独报告。 | `fao-idf-dairy-lca-2010` |
| `boundary_cutoff_disclosure` | 清单完整性 | 不得仅因缺少 UUID 或次级数据集而遗漏已知质量或能量流。记录数量、说明身份缺口，并披露任何有理由的截断及其对质量、能量和环境完整性的影响。 | `fao-idf-dairy-lca-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `reception_and_cream_preparation` | 接收和奶油制备 | required | 始终纳入；接收全脂牛乳而不是奶油时，分离为条件操作 | 前景物料接收、储存、适用时分离、巴氏杀菌和温度制备 | 转入产品形成过程的 kg 制备奶油或所声明乳脂原料 |
| `butter_manufacture` | 搅拌和揉炼黄油制造 | conditional | 普通黄油、发酵黄油、有盐黄油或通过奶油搅拌制得乳脂时纳入 | 前景黄油形成和酪乳分离 | 转入后处理的 kg 未包装黄油或乳脂 |
| `concentrated_milkfat_manufacture` | 浓缩乳脂制造 | conditional | 无水乳脂、乳脂、无水黄油油、黄油油或酥油时纳入 | 由奶油或黄油进行的前景脂肪浓缩、相分离和除水 | 转入后处理的 kg 未包装浓缩乳脂 |
| `product_packaging_and_storage` | 产品灌装、包装和储存 | required | 始终纳入；无包装散装转移时包装材料为条件投入 | 前景后处理至可销售加工厂门口产品 | 1 kg 净可销售所声明产品 |

至少应纳入 `butter_manufacture` 和 `concentrated_milkfat_manufacture` 之一。仅当前景数据集明确建模相连的中间产品生产，或分别报告实测路线份额时，方可同时纳入两者。

### 过程：接收和奶油制备 (`reception_and_cream_preparation`)

#### 输入

##### 产品流

###### 接收牛乳 (`cattle_milk_received`)

在加工厂门验收的牛乳与奶油和黄油分开记录。

- 选定流：Cattle milk
- 流属性/单位：Mass / kg
- 数量规则：接收批次验收牛乳的实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dairy_material_receipt`
- 来源：`codex-cxs-279-1971`; `codex-cxs-280-1973`

###### 接收牛乳奶油 (`cattle_milk_cream_received`)

在加工厂门验收的牛乳奶油作为独立乳品输入记录。

- 选定流：Cattle-milk cream
- 流属性/单位：Mass / kg
- 数量规则：接收批次验收牛乳奶油的实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dairy_material_receipt`
- 来源：`codex-cxs-279-1971`; `codex-cxs-280-1973`

###### 接收牛乳黄油 (`cattle_milk_butter_received`)

接收牛乳黄油仅在返工或浓缩乳脂路线适用，并且不与牛乳或奶油合并。

- 选定流：Cattle-milk butter
- 流属性/单位：Mass / kg
- 数量规则：使用该输入时验收牛乳黄油的实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dairy_material_receipt`
- 来源：`codex-cxs-279-1971`; `codex-cxs-280-1973`

###### 接收阶段电力 (`reception_electricity`)

接收、泵送、分离、巴氏杀菌辅助和冷却用电仅在本阶段记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：实测或分表分配电力
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`; `tetrapak-amf-handbook`

###### 接收阶段外购蒸汽 (`reception_purchased_steam`)

制备使用的外购蒸汽与热水和燃料分开计量。

- 选定流：外购蒸汽
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至接收和奶油制备的外购蒸汽实测量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`; `tetrapak-amf-handbook`

###### 接收阶段外购热水 (`reception_purchased_hot_water`)

外购热水记录供水条件，并与蒸汽分开。

- 选定流：外购热水
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至本阶段的外购热水实测量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`; `tetrapak-amf-handbook`

###### 接收阶段天然气 (`reception_natural_gas`)

制备供热燃烧的天然气与柴油和 LPG 分开记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：使用时计量天然气用量及有记录的热值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`; `tetrapak-amf-handbook`

###### 接收阶段柴油 (`reception_diesel`)

直接运营制备设备或供热使用的柴油单独记录。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：适用时计量或库存核对的柴油用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 接收阶段 LPG (`reception_lpg`)

制备供热使用的 LPG 与天然气和柴油分开记录。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：适用时库存核对的 LPG 用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 接收阶段工艺水 (`reception_process_water`)

制备和冷却补水使用的新鲜工艺水与内部循环水分开计量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：分配至本阶段的新鲜工艺水实测取用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_and_wastewater`
- 来源：`codex-cxc-57-2004`

###### 接收阶段 R-717 制冷剂补充 (`reception_r717_makeup`)

氨制冷剂补充仅适用于 R-717 系统，并与 R-134a 分开平衡。

- 选定流：氨制冷剂（R-717）
- 流属性/单位：Mass / kg
- 数量规则：根据库存和维修记录计算分配至本阶段的 R-717 净补充量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 接收阶段 R-134a 制冷剂补充 (`reception_r134a_makeup`)

R-134a 制冷剂补充仅适用于使用该物质的设备，并与 R-717 分开平衡。

- 选定流：1,1,1,2-四氟乙烷制冷剂（R-134a）
- 流属性/单位：Mass / kg
- 数量规则：根据库存和维修记录计算分配至本阶段的 R-134a 净补充量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 接收阶段氢氧化钠 CIP 溶液 (`reception_sodium_hydroxide_cip`)

接收和制备线使用的氢氧化钠清洗液与酸和消毒剂分开记录。

- 选定流：氢氧化钠清洗液
- 流属性/单位：Mass / kg formulated product
- 数量规则：清洗液实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_and_wastewater`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### 接收阶段硝酸 CIP 溶液 (`reception_nitric_acid_cip`)

硝酸清洗液作为独立 CIP 化学品记录。

- 选定流：Nitric acid cleaning solution
- 流属性/单位：Mass / kg formulated product
- 数量规则：清洗液实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_and_wastewater`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### 接收阶段过氧乙酸消毒剂 (`reception_peracetic_acid_cip`)

过氧乙酸消毒剂与碱性和酸性清洗剂分开记录。

- 选定流：过氧乙酸消毒剂
- 流属性/单位：Mass / kg formulated product
- 数量规则：消毒剂实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_and_wastewater`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备牛乳奶油 (`prepared_cattle_milk_cream`)

转入产品形成过程的制备牛乳奶油作为单一中间产品计量。

- 选定流：Prepared cattle-milk cream
- 流属性/单位：Mass / kg
- 数量规则：与库存、接收量、拒收和损失核对的实测转移质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每个制备周期
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_mass_balance`
- 来源：`fao-dairy-accounting`

###### 制备牛乳黄油 (`prepared_cattle_milk_butter`)

转入浓缩乳脂路线的制备牛乳黄油与奶油分开记录。

- 选定流：Prepared cattle-milk butter
- 流属性/单位：Mass / kg
- 数量规则：使用黄油原料路线时的实测转移质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每个制备周期
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_mass_balance`
- 来源：`fao-dairy-accounting`; `tetrapak-amf-handbook`

###### 分离牛脱脂乳 (`separated_cattle_skim_milk`)

接收全脂牛乳时分离的脱脂乳作为独立共产品计量。

- 选定流：Cattle skim milk
- 流属性/单位：Mass / kg
- 数量规则：转入有记录产品去向的脱脂乳实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每个制备周期
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_mass_balance`
- 来源：`fao-idf-dairy-lca-2010`; `fao-dairy-accounting`

##### 废物流

###### 被拒牛乳 (`rejected_cattle_milk`)

被拒牛乳与被拒奶油、黄油和废水分开称重。

- 选定流：Rejected cattle milk
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的被拒牛乳实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_mass_balance`
- 来源：`tetrapak-dairy-effluent`

###### 被拒牛乳奶油 (`rejected_cattle_milk_cream`)

被拒牛乳奶油作为独立废物流记录。

- 选定流：Rejected cattle-milk cream
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的被拒奶油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_mass_balance`
- 来源：`tetrapak-dairy-effluent`

###### 被拒牛乳黄油 (`rejected_cattle_milk_butter`)

使用黄油原料路线时，被拒牛乳黄油单独记录。

- 选定流：Rejected cattle-milk butter
- 流属性/单位：Mass / kg
- 数量规则：送往有记录去向的被拒黄油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_mass_balance`
- 来源：`tetrapak-dairy-effluent`

###### 接收与奶油制备废水 (`reception_wastewater`)

离开接收与奶油制备的废水与产品拒收物和固体残渣分开计量。

- 选定流：Dairy reception and cream-preparation wastewater
- 流属性/单位：Volume / m3
- 数量规则：按有记录内部回用调整的实测排水量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_and_wastewater`
- 来源：`tetrapak-dairy-effluent`

###### 接收阶段过滤残渣 (`reception_filter_residue`)

接收或奶油制备过滤去除的固体作为一种具体固体废物称重。

- 选定流：Dairy reception filter residue
- 流属性/单位：Mass / kg
- 数量规则：送往有记录处理路线的过滤残渣实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_mass_balance`
- 来源：`tetrapak-dairy-effluent`

##### 基本流

###### 接收阶段化石二氧化碳排放 (`reception_carbon_dioxide_air`)

分配至本阶段的现场燃料燃烧直接化石二氧化碳单独报告。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据每种实测燃料量及有记录的物质特定因子计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 接收阶段氮氧化物排放 (`reception_nitrogen_oxides_air`)

纳入燃烧设备的直接氮氧化物作为独立空气排放记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据燃料和设备特定记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 接收阶段二氧化硫排放 (`reception_sulfur_dioxide_air`)

纳入燃料燃烧的直接二氧化硫与氮氧化物分开记录。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据燃料硫含量和设备记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 接收阶段细颗粒物排放 (`reception_pm25_air`)

纳入燃烧产生的细颗粒物作为粒径特定空气交换报告。

- 选定流：颗粒物（<2.5微米），排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据设备特定运行记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 接收阶段 R-717 排放 (`reception_r717_air`)

分配至接收与奶油制备的未回收 R-717 单独报告。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡计算未回收 R-717
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 接收阶段 R-134a 排放 (`reception_r134a_air`)

分配至本阶段的未回收 R-134a 与 R-717 分开报告。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡计算未回收 R-134a
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 制备乳脂原料
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

### 过程：搅拌和揉炼黄油制造 (`butter_manufacture`)

#### 输入

##### 产品流

###### 制备牛乳奶油输入 (`butter_cream_input`)

进入搅拌机或连续制黄油机的制备牛乳奶油按批次记录。

- 选定流：Prepared cattle-milk cream
- 流属性/单位：Mass / kg
- 数量规则：进入黄油制造的奶油实测投料质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`fao-dairy-accounting`; `tetrapak-butter-handbook`

###### 黄油发酵剂 (`butter_starter_culture`)

发酵剂仅在发酵黄油适用，并与盐、水和着色剂分开记录。

- 选定流：Lactic acid starter culture
- 流属性/单位：Mass / kg
- 数量规则：批次发酵剂实测领用质量减有记录的退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`codex-cxs-279-1971`

###### 黄油氯化钠 (`butter_sodium_chloride`)

食品级氯化钠仅在有盐黄油适用，并与其他配料分开计量。

- 选定流：Sodium chloride, food grade
- 流属性/单位：Mass / kg
- 数量规则：批次食盐实测领用质量减有记录的退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`codex-cxs-279-1971`

###### 黄油配方水 (`butter_formulation_water`)

有意加入配方的饮用水与工艺水和 CIP 用水分开计量。

- 选定流：Potable formulation water
- 流属性/单位：Mass / kg
- 数量规则：批次加入配方水的实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`codex-cxs-279-1971`; `codex-cxc-57-2004`

###### 黄油 β-胡萝卜素着色制剂 (`butter_beta_carotene`)

β-胡萝卜素着色制剂仅在使用时记录，并且不与发酵剂或盐合并。

- 选定流：Beta-carotene color preparation
- 流属性/单位：Mass / kg formulated product
- 数量规则：批次着色制剂实测领用质量减有记录的退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`codex-cxs-279-1971`

###### 黄油路线电力 (`butter_electricity`)

熟化、搅拌、揉炼、泵送和控制用电在黄油路线记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：实测或分表分配的黄油路线电力
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`

###### 黄油路线外购蒸汽 (`butter_purchased_steam`)

外购蒸汽与热水和直接燃烧燃料分开记录。

- 选定流：外购蒸汽
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至黄油路线的外购蒸汽实测量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`

###### 黄油路线外购热水 (`butter_purchased_hot_water`)

外购热水记录供水条件，并作为独立载体。

- 选定流：外购热水
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至黄油路线的外购热水实测量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`

###### 黄油路线天然气 (`butter_natural_gas`)

黄油路线供热燃烧的天然气与柴油和 LPG 分开记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：使用时计量天然气用量及有记录的热值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`

###### 黄油路线柴油 (`butter_diesel`)

纳入黄油路线设备或供热使用的柴油单独记录。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：适用时计量或库存核对的黄油路线柴油用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 黄油路线 LPG (`butter_lpg`)

黄油路线供热使用的 LPG 与天然气和柴油分开记录。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：适用时库存核对的黄油路线 LPG 用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 黄油路线工艺水 (`butter_process_water`)

黄油洗涤或生产线运行使用的工艺水与配方水和 CIP 化学品分开计量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用时黄油路线工艺水实测取用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_and_wastewater`
- 来源：`codex-cxc-57-2004`; `tetrapak-butter-handbook`

###### 黄油路线 R-717 制冷剂补充 (`butter_r717_makeup`)

R-717 补充仅在氨制冷服务黄油路线时适用。

- 选定流：氨制冷剂（R-717）
- 流属性/单位：Mass / kg
- 数量规则：分配至黄油路线的 R-717 净补充量计算值
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 黄油路线 R-134a 制冷剂补充 (`butter_r134a_makeup`)

R-134a 补充仅适用于使用该物质的设备，并与 R-717 分开平衡。

- 选定流：1,1,1,2-四氟乙烷制冷剂（R-134a）
- 流属性/单位：Mass / kg
- 数量规则：分配至黄油路线的 R-134a 净补充量计算值
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 黄油路线氢氧化钠 CIP 溶液 (`butter_sodium_hydroxide_cip`)

黄油生产线使用的氢氧化钠清洗液单独记录。

- 选定流：氢氧化钠清洗液
- 流属性/单位：Mass / kg formulated product
- 数量规则：清洗液实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### 黄油路线硝酸 CIP 溶液 (`butter_nitric_acid_cip`)

黄油生产线使用的硝酸清洗液与碱性清洗剂分开记录。

- 选定流：Nitric acid cleaning solution
- 流属性/单位：Mass / kg formulated product
- 数量规则：清洗液实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### 黄油路线过氧乙酸消毒剂 (`butter_peracetic_acid_cip`)

过氧乙酸消毒剂与两种 CIP 清洗剂分开记录。

- 选定流：过氧乙酸消毒剂
- 流属性/单位：Mass / kg formulated product
- 数量规则：消毒剂实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未包装牛乳黄油 (`unpacked_cattle_milk_butter`)

合格未包装牛乳黄油在搅拌、排液和揉炼后计量。

- 选定流：Cattle-milk butter
- 流属性/单位：Mass / kg
- 数量规则：通过声明规格的未包装黄油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每个黄油生产周期
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`codex-cxs-279-1971`; `fao-dairy-accounting`

###### 未包装牛乳黄油脂 (`unpacked_cattle_milk_butterfat`)

声明搅拌路线生产的黄油脂与普通黄油分开记录。

- 选定流：Cattle-milk butterfat
- 流属性/单位：Mass / kg
- 数量规则：通过声明规格的未包装黄油脂实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每个黄油生产周期
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`codex-cxs-279-1971`; `fao-dairy-accounting`

###### 酪乳共产品 (`buttermilk_coproduct`)

具有产品状态记录的酪乳作为具体共产品称重。

- 选定流：Buttermilk
- 流属性/单位：Mass / kg
- 数量规则：转入有记录产品去向的酪乳实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`fao-dairy-accounting`; `tetrapak-butter-handbook`

##### 废物流

###### 黄油制造废水 (`butter_wastewater`)

黄油洗涤、清洗和产品接触损失形成的废水与固体废物分开计量。

- 选定流：Butter-manufacturing wastewater
- 流属性/单位：Volume / m3
- 数量规则：按有记录内部回用调整的实测排水量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_and_wastewater`
- 来源：`tetrapak-dairy-effluent`

###### 不合格牛乳黄油废物 (`offspec_butter_waste`)

以废物管理义务离开过程的不合格黄油与酪乳分开称重。

- 选定流：Off-spec cattle-milk butter waste
- 流属性/单位：Mass / kg
- 数量规则：送往有记录处理路线的不合格黄油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`tetrapak-dairy-effluent`

###### 黄油过滤残渣 (`butter_filter_residue`)

黄油生产线去除的产品接触固体作为独立固体废物记录。

- 选定流：Butter product-contact filter residue
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的过滤残渣实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_butter_batch`
- 来源：`tetrapak-dairy-effluent`

##### 基本流

###### 黄油路线化石二氧化碳排放 (`butter_carbon_dioxide_air`)

分配至黄油路线的燃料燃烧直接化石二氧化碳单独报告。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据每种实测燃料量及有记录的物质特定因子计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 黄油路线氮氧化物排放 (`butter_nitrogen_oxides_air`)

纳入黄油路线燃烧的氮氧化物作为独立空气交换记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据燃料和设备特定记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 黄油路线二氧化硫排放 (`butter_sulfur_dioxide_air`)

纳入燃料燃烧的二氧化硫与氮氧化物分开报告。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据燃料硫含量和设备记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 黄油路线细颗粒物排放 (`butter_pm25_air`)

纳入黄油路线燃烧产生的细颗粒物按粒径报告。

- 选定流：颗粒物（<2.5微米），排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据设备特定运行记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 黄油路线 R-717 排放 (`butter_r717_air`)

分配至黄油路线的未回收 R-717 单独报告。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡计算未回收 R-717
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 黄油路线 R-134a 排放 (`butter_r134a_air`)

分配至黄油路线的未回收 R-134a 与 R-717 分开报告。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡计算未回收 R-134a
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装黄油路线产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

### 过程：浓缩乳脂制造 (`concentrated_milkfat_manufacture`)

#### 输入

##### 产品流

###### 牛乳奶油输入 (`concentrated_cream_input`)

进入浓缩过程的牛乳奶油与黄油原料分开计量。

- 选定流：Cattle-milk cream
- 流属性/单位：Mass / kg
- 数量规则：进入浓缩生产周期的奶油实测投料质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`codex-cxs-280-1973`; `tetrapak-amf-handbook`

###### 牛乳黄油输入 (`concentrated_butter_input`)

进入浓缩过程的牛乳黄油作为独立原料流记录。

- 选定流：Cattle-milk butter
- 流属性/单位：Mass / kg
- 数量规则：进入浓缩生产周期的黄油实测投料质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`codex-cxs-280-1973`; `tetrapak-amf-handbook`

###### 浓缩路线电力 (`concentrated_electricity`)

分离、浓缩、真空、泵送和控制用电在本路线记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：实测或分表分配的浓缩路线电力
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-amf-handbook`

###### 浓缩路线外购蒸汽 (`concentrated_purchased_steam`)

外购蒸汽与热水和直接燃烧燃料分开记录。

- 选定流：外购蒸汽
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至浓缩过程的外购蒸汽实测量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-amf-handbook`

###### 浓缩路线外购热水 (`concentrated_purchased_hot_water`)

外购热水记录供水条件，并作为独立载体。

- 选定流：外购热水
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至浓缩过程的外购热水实测量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-amf-handbook`

###### 浓缩路线天然气 (`concentrated_natural_gas`)

浓缩供热燃烧的天然气与柴油和 LPG 分开记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：使用时计量天然气用量及有记录的热值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-amf-handbook`

###### 浓缩路线柴油 (`concentrated_diesel`)

纳入浓缩设备或供热使用的柴油单独记录。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：适用时计量或库存核对的柴油用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 浓缩路线 LPG (`concentrated_lpg`)

浓缩供热使用的 LPG 与天然气和柴油分开记录。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：适用时库存核对的 LPG 用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 浓缩路线工艺水 (`concentrated_process_water`)

浓缩过程使用的工艺水与清洗化学品和冷凝水分开计量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：分配至浓缩过程的工艺水实测取用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_and_wastewater`
- 来源：`codex-cxc-57-2004`; `tetrapak-amf-handbook`

###### 浓缩过滤助剂 (`concentrated_diatomaceous_earth`)

用于精滤的硅藻土仅在适用时记录，并与 CIP 化学品分开。

- 选定流：Diatomaceous earth filter aid
- 流属性/单位：Mass / kg
- 数量规则：浓缩生产周期过滤助剂的实测领用质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`tetrapak-amf-handbook`

###### 浓缩路线 R-717 制冷剂补充 (`concentrated_r717_makeup`)

R-717 补充仅在氨制冷服务浓缩路线时适用。

- 选定流：氨制冷剂（R-717）
- 流属性/单位：Mass / kg
- 数量规则：分配至浓缩路线的 R-717 净补充量计算值
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 浓缩路线 R-134a 制冷剂补充 (`concentrated_r134a_makeup`)

R-134a 补充仅适用于使用该物质的设备，并与 R-717 分开平衡。

- 选定流：1,1,1,2-四氟乙烷制冷剂（R-134a）
- 流属性/单位：Mass / kg
- 数量规则：分配至浓缩路线的 R-134a 净补充量计算值
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 浓缩路线氢氧化钠 CIP 溶液 (`concentrated_sodium_hydroxide_cip`)

浓缩生产线使用的氢氧化钠清洗液单独记录。

- 选定流：氢氧化钠清洗液
- 流属性/单位：Mass / kg formulated product
- 数量规则：清洗液实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### 浓缩路线硝酸 CIP 溶液 (`concentrated_nitric_acid_cip`)

硝酸清洗液与碱性清洗剂分开记录。

- 选定流：Nitric acid cleaning solution
- 流属性/单位：Mass / kg formulated product
- 数量规则：清洗液实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### 浓缩路线过氧乙酸消毒剂 (`concentrated_peracetic_acid_cip`)

过氧乙酸消毒剂与两种 CIP 清洗剂分开记录。

- 选定流：过氧乙酸消毒剂
- 流属性/单位：Mass / kg formulated product
- 数量规则：消毒剂实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未包装无水乳脂 (`unpacked_anhydrous_milkfat`)

通过声明 CXS 280 规格的无水乳脂在灌装前计量。

- 选定流：Anhydrous milk fat
- 流属性/单位：Mass / kg
- 数量规则：通过声明规格的未包装无水乳脂实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每个浓缩生产周期
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`codex-cxs-280-1973`

###### 未包装黄油油 (`unpacked_butter_oil`)

浓缩路线生产的黄油油与无水乳脂和酥油分开记录。

- 选定流：Cattle-milk butter oil
- 流属性/单位：Mass / kg
- 数量规则：通过声明规格的未包装黄油油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每个浓缩生产周期
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`codex-cxs-280-1973`; `tetrapak-amf-handbook`

###### 未包装酥油 (`unpacked_ghee`)

牛乳制酥油作为独立产品形态记录。

- 选定流：Ghee from cattle milk
- 流属性/单位：Mass / kg
- 数量规则：通过声明规格的未包装酥油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每个浓缩生产周期
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`codex-cxs-280-1973`; `tetrapak-amf-handbook`

###### 分离牛乳非脂相 (`separated_nonfat_cattle_milk_phase`)

具有产品状态记录的分离非脂乳相与冷凝水和废水分开计量。

- 选定流：Separated non-fat cattle-milk phase
- 流属性/单位：Mass / kg
- 数量规则：送往有记录产品去向的分离非脂相实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`codex-cxs-280-1973`; `tetrapak-amf-handbook`

##### 废物流

###### 乳脂浓缩冷凝水 (`concentration_condensate`)

水分去除过程回收的冷凝水与清洗废水分开计量。

- 选定流：Milkfat-concentration condensate
- 流属性/单位：Volume / m3
- 数量规则：送往有记录回用或处理路线的冷凝水实测量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`tetrapak-amf-handbook`

###### 浓缩乳脂废水 (`concentrated_wastewater`)

浓缩和生产线清洗产生的废水作为独立液体废物计量。

- 选定流：Concentrated-milkfat processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：按有记录内部回用调整的实测排水量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_and_wastewater`
- 来源：`tetrapak-amf-handbook`; `tetrapak-dairy-effluent`

###### 浓缩乳脂过滤残渣 (`concentrated_filter_residue`)

废过滤助剂及截留固体作为一种具体过滤残渣废物称重。

- 选定流：Spent diatomaceous-earth filter residue
- 流属性/单位：Mass / kg
- 数量规则：送往有记录处理路线的过滤残渣实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`tetrapak-amf-handbook`; `tetrapak-dairy-effluent`

###### 不合格浓缩乳脂废物 (`offspec_concentrated_milkfat_waste`)

以废物管理义务离开的不合格浓缩乳脂单独称重。

- 选定流：Off-spec concentrated milkfat waste
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的不合格乳脂实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_concentrated_milkfat_batch`
- 来源：`tetrapak-dairy-effluent`

##### 基本流

###### 浓缩路线化石二氧化碳排放 (`concentrated_carbon_dioxide_air`)

分配至浓缩路线的燃料燃烧直接化石二氧化碳单独报告。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据每种实测燃料量及有记录的物质特定因子计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 浓缩路线氮氧化物排放 (`concentrated_nitrogen_oxides_air`)

纳入燃烧的氮氧化物作为独立空气交换记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据燃料和设备特定记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 浓缩路线二氧化硫排放 (`concentrated_sulfur_dioxide_air`)

纳入燃烧的二氧化硫与氮氧化物分开报告。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据燃料硫含量和设备记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 浓缩路线细颗粒物排放 (`concentrated_pm25_air`)

纳入燃烧产生的细颗粒物按粒径报告。

- 选定流：颗粒物（<2.5微米），排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据设备特定运行记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 浓缩路线 R-717 排放 (`concentrated_r717_air`)

分配至浓缩路线的未回收 R-717 单独报告。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡计算未回收 R-717
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 浓缩路线 R-134a 排放 (`concentrated_r134a_air`)

分配至浓缩路线的未回收 R-134a 与 R-717 分开报告。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡计算未回收 R-134a
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 未包装浓缩乳脂产品
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

### 过程：产品灌装、包装和储存 (`product_packaging_and_storage`)

#### 输入

##### 产品流

###### 未包装牛乳黄油输入 (`unpacked_cattle_milk_butter_input`)

进入灌装的未包装牛乳黄油与浓缩乳脂形态分开记录。

- 选定流：Cattle-milk butter
- 流属性/单位：Mass / kg
- 数量规则：灌装接收的未包装黄油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxs-279-1971`; `fao-dairy-accounting`

###### 未包装无水乳脂输入 (`unpacked_anhydrous_milkfat_input`)

进入灌装的未包装无水乳脂作为独立产品输入记录。

- 选定流：Anhydrous milk fat
- 流属性/单位：Mass / kg
- 数量规则：灌装接收的未包装无水乳脂实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxs-280-1973`

###### 未包装黄油油输入 (`unpacked_butter_oil_input`)

未包装牛乳黄油油与无水乳脂和酥油分开记录。

- 选定流：Cattle-milk butter oil
- 流属性/单位：Mass / kg
- 数量规则：灌装接收的未包装黄油油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxs-280-1973`

###### 未包装酥油输入 (`unpacked_ghee_input`)

未包装牛乳酥油作为独立输入产品形态记录。

- 选定流：Ghee from cattle milk
- 流属性/单位：Mass / kg
- 数量规则：灌装接收的未包装酥油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxs-280-1973`

###### 铝箔包装 (`aluminium_foil_wrapper`)

声明包装使用的铝箔与纸板和塑料分开记录。

- 选定流：Aluminium foil butter wrapper
- 流属性/单位：Mass / kg
- 数量规则：铝箔领用质量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`fao-idf-dairy-lca-2010`; `tetrapak-butter-handbook`

###### 纸板箱 (`paperboard_carton`)

纸板箱作为独立包装交换计量。

- 选定流：Bleached paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：纸板箱领用质量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`fao-idf-dairy-lca-2010`; `tetrapak-butter-handbook`

###### LDPE 包装膜 (`ldpe_packaging_film`)

低密度聚乙烯膜与硬质塑料包装分开记录。

- 选定流：低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：LDPE 膜领用质量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`fao-idf-dairy-lca-2010`; `tetrapak-butter-handbook`

###### HDPE 包装桶 (`hdpe_packaging_pail`)

使用高密度聚乙烯桶时，将其作为一个硬质包装组件记录。

- 选定流：High-density polyethylene packaging pail
- 流属性/单位：Mass / kg
- 数量规则：HDPE 桶领用质量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`fao-idf-dairy-lca-2010`; `tetrapak-butter-handbook`

###### 钢制包装桶 (`steel_packaging_drum`)

散装乳脂使用的钢桶与聚合物桶分开记录。

- 选定流：Steel packaging drum
- 流属性/单位：Mass / kg
- 数量规则：钢桶领用质量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`fao-idf-dairy-lca-2010`; `tetrapak-amf-handbook`

###### 包装与储存电力 (`packaging_electricity`)

灌装、封口、搬运和冷藏用电在本阶段记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：实测或按时间和吞吐量分配的电力
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`

###### 包装阶段外购蒸汽 (`packaging_purchased_steam`)

灌装或清洗消毒使用的外购蒸汽与热水和燃料分开记录。

- 选定流：外购蒸汽
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至本阶段的外购蒸汽实测量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`

###### 包装阶段外购热水 (`packaging_purchased_hot_water`)

外购热水记录供水条件，并作为独立载体。

- 选定流：外购热水
- 流属性/单位：Mass / kg
- 数量规则：使用时分配至本阶段的外购热水实测量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`tetrapak-butter-handbook`

###### 包装阶段天然气 (`packaging_natural_gas`)

灌装或储存辅助燃烧的天然气与柴油和 LPG 分开记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：使用时计量天然气用量及有记录的热值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 包装阶段柴油 (`packaging_diesel`)

直接运营搬运或备用设备使用的柴油单独记录。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：适用时计量或库存核对的柴油用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 包装阶段 LPG (`packaging_lpg`)

纳入灌装或储存设备使用的 LPG 单独记录。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：适用时库存核对的 LPG 用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 包装阶段工艺水 (`packaging_process_water`)

灌装和储存区作业使用的工艺水与 CIP 化学品分开记录。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：分配至本阶段的工艺水实测取用量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxc-57-2004`

###### 包装与储存 R-717 制冷剂补充 (`packaging_r717_makeup`)

R-717 补充仅在氨制冷服务产品储存时适用。

- 选定流：氨制冷剂（R-717）
- 流属性/单位：Mass / kg
- 数量规则：分配至包装和储存的 R-717 净补充量计算值
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 包装与储存 R-134a 制冷剂补充 (`packaging_r134a_makeup`)

R-134a 补充仅适用于使用该物质的设备，并与 R-717 分开平衡。

- 选定流：1,1,1,2-四氟乙烷制冷剂（R-134a）
- 流属性/单位：Mass / kg
- 数量规则：分配至包装和储存的 R-134a 净补充量计算值
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 包装阶段氢氧化钠 CIP 溶液 (`packaging_sodium_hydroxide_cip`)

灌装线使用的氢氧化钠清洗液单独记录。

- 选定流：氢氧化钠清洗液
- 流属性/单位：Mass / kg formulated product
- 数量规则：清洗液实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### 包装阶段硝酸 CIP 溶液 (`packaging_nitric_acid_cip`)

硝酸清洗液与碱性清洗剂分开记录。

- 选定流：Nitric acid cleaning solution
- 流属性/单位：Mass / kg formulated product
- 数量规则：清洗液实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

###### 包装阶段过氧乙酸消毒剂 (`packaging_peracetic_acid_cip`)

过氧乙酸消毒剂与两种 CIP 清洗剂分开记录。

- 选定流：过氧乙酸消毒剂
- 流属性/单位：Mass / kg formulated product
- 数量规则：消毒剂实测领用量减有记录的未用退回量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxc-57-2004`; `tetrapak-dairy-effluent`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净可销售无水乳脂参考产品 (`reference_product_output`)

这是加工厂门已核验参考产品流，按不含包装的净质量计量。

- 选定流：无水乳脂 `7f8eef6e-3ea0-4f74-bf72-c6f95af2c3fc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 净合格可销售产品，不含包装
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：PCR 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：身份引用 (`identity_reference`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`codex-cxs-280-1973`

##### 废物流

###### 不合格包装黄油废物 (`offspec_packaged_butter_waste`)

以废物管理义务离开的不合格包装黄油与乳脂产品分开称重。

- 选定流：Off-spec packaged cattle-milk butter waste
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的不合格包装黄油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

###### 不合格包装无水乳脂废物 (`offspec_packaged_anhydrous_milkfat_waste`)

不合格包装无水乳脂作为独立废物流记录。

- 选定流：Off-spec packaged anhydrous milkfat waste
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的不合格无水乳脂实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

###### 不合格包装黄油油废物 (`offspec_packaged_butter_oil_waste`)

不合格包装黄油油与其他产品损失分开记录。

- 选定流：Off-spec packaged cattle-milk butter-oil waste
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的不合格黄油油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

###### 不合格包装酥油废物 (`offspec_packaged_ghee_waste`)

不合格包装酥油作为独立产品损失废物记录。

- 选定流：Off-spec packaged cattle-milk ghee waste
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的不合格酥油实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

###### 废铝箔 (`waste_aluminium_foil`)

废铝箔与纸板和塑料包装废物分开称重。

- 选定流：Waste aluminium foil butter wrapper
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的废铝箔实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

###### 废纸板箱 (`waste_paperboard_carton`)

废纸板箱作为独立包装废物记录。

- 选定流：Waste bleached paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的废纸板箱实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

###### 废 LDPE 包装膜 (`waste_ldpe_packaging_film`)

废 LDPE 膜与硬质塑料包装废物分开称重。

- 选定流：废低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的废 LDPE 膜实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

###### 废 HDPE 包装桶 (`waste_hdpe_packaging_pail`)

废 HDPE 桶与薄膜和金属桶分开记录。

- 选定流：Waste high-density polyethylene packaging pail
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的废 HDPE 桶实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

###### 废钢制包装桶 (`waste_steel_packaging_drum`)

废钢桶作为独立金属包装废物记录。

- 选定流：Waste steel packaging drum
- 流属性/单位：Mass / kg
- 数量规则：送往有记录路线的废钢桶实测质量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

###### 包装与储存废水 (`packaging_storage_wastewater`)

灌装线清洗废水与产品和包装损失分开计量。

- 选定流：Milkfat filling-line wastewater
- 流属性/单位：Volume / m3
- 数量规则：按有记录内部回用调整的实测排水量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_packaging_and_storage`
- 来源：`tetrapak-dairy-effluent`

##### 基本流

###### 包装阶段化石二氧化碳排放 (`packaging_carbon_dioxide_air`)

分配至包装与储存的燃料燃烧直接化石二氧化碳单独报告。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据每种实测燃料量及有记录的物质特定因子计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：`fao-idf-dairy-lca-2010`

###### 包装阶段氮氧化物排放 (`packaging_nitrogen_oxides_air`)

纳入燃烧的氮氧化物作为独立空气交换记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg NO2-equivalent
- 数量规则：根据燃料和设备特定记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 包装阶段二氧化硫排放 (`packaging_sulfur_dioxide_air`)

纳入燃烧的二氧化硫与氮氧化物分开报告。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据燃料硫含量和设备记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 包装阶段细颗粒物排放 (`packaging_pm25_air`)

纳入燃烧产生的细颗粒物按粒径报告。

- 选定流：颗粒物（<2.5微米），排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据设备特定运行记录实测或计算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_process_utilities`
- 来源：

###### 包装与储存 R-717 排放 (`packaging_r717_air`)

分配至包装与储存的未回收 R-717 单独报告。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡计算未回收 R-717
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`

###### 包装与储存 R-134a 排放 (`packaging_r134a_air`)

分配至包装与储存的未回收 R-134a 与 R-717 分开报告。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据物质特定库存平衡计算未回收 R-134a
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净可销售所声明产品
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集记录计算 (`calculated_from_collection`)
- 采集协议：`cp_refrigerant_records`
- 来源：`fao-idf-dairy-lca-2010`


## 7. 分配规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多产品乳品加工 | 首先利用过程仪表、批次记录和转移测量，将接收、奶油制备、黄油制造、浓缩乳脂制造和包装细分，以便直接归属的投入和输出无需分配。 | `fao-idf-dairy-lca-2010`; `fao-dairy-accounting` |
| `allocation_internal_recycle` | 返工以及回用水或产品 | 将内部循环物料保留在系统内，只记录净外部投入和输出；不得为内部回用赋予替代产品抵扣。 | `fao-dairy-accounting`; `tetrapak-dairy-effluent` |
| `allocation_buttermilk_and_nonfat_coproducts` | 具有产品状态的酪乳和分离非脂相 | 细分后仅在可销售共产品之间分配剩余共享负荷。有适用项目方法时采用该方法；否则采用反映生产关系且有记录的物理关系，并在选择具有实质影响时检验经济分配替代方案。报告数量、因子基准、价格或组成数据、参考期和敏感性。 | `fao-idf-dairy-lca-2010` |
| `allocation_waste_boundary` | 废水、不合格物料和残渣 | 物料仅在具有有记录的有益用途和产品状态时才是共产品。否则按废物建模其处理，不得仅用收入消除处理负荷。 | `tetrapak-dairy-effluent` |
| `allocation_upstream_consistency` | 上游牛乳或奶油数据集 | 保留上游乳品数据集披露的分配方法和共产品边界；无完整底层清单和明确敏感性情景时，不得在本前景数据集中重新分配上游负荷。 | `fao-idf-dairy-lca-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_dairy_material_receipt` | `reception_and_cream_preparation` | 牛乳；牛乳奶油；牛乳黄油 | 地磅、校准罐或质量流量记录及分析证书 | 时间戳；供应商和来源；精确物料身份；毛重和皮重或仪表质量；乳脂；水分或总固体；温度；验收状态；上游数据集 id | 将牛乳、牛乳奶油和牛乳黄油记录为三个独立接收序列，并将每种验收数量与储罐移动核对 | kg 和 % m/m | 每次接收 | 至少一个有代表性的连续 12 个月，或已披露较短季节生产期内的全部生产周期 | 每个纳入场址和物料来源 | 每种精确物料分别合计；仅在同一物料身份内质量加权组成；每种拒收物料另行保留 | 仪表校准；供应商证书；实验室结果；接收和储罐核对 |
| `cp_process_utilities` | `reception_and_cream_preparation` | 电力；外购蒸汽；外购热水；天然气；柴油；LPG；二氧化碳；氮氧化物；二氧化硫；PM2.5 | 分表、账单、燃料库存、运行日志以及排放测量或计算记录 | process_id；精确能源或排放身份；仪表起止值或库存变动；数量；单位；使用燃料时的净热值；使用蒸汽时的蒸汽条件；运行时间；生产线吞吐量；分配驱动；使用时的排放因子或测量基准 | 按过程分别记录电力、外购蒸汽、外购热水、天然气、柴油和 LPG；将二氧化碳、氮氧化物、二氧化硫和 PM2.5 记录为四个独立空气排放序列 | kWh、MJ、kg 燃料、kg 蒸汽或 kg 排放 | 每批或至少每月 | 与产品输出相同期间 | 每条纳入过程线和共享公用工程中心 | 每种能源身份分别换算；扣除外输；仅分配剩余共享用量；每种具名排放分别计算；归一化到合格输出 | 仪表校准；账单；库存核对；换算来源；分配工作表；排放测量或因子记录 |
| `cp_water_and_wastewater` | `reception_and_cream_preparation` | 工艺水；氢氧化钠；硝酸；过氧乙酸；废水 | 水表、排水表、化学品领用记录和处理日志 | process_id；精确交换身份；取水或领用；内部回用；排放；数量；单位；每种 CIP 化学品的浓度；采样点；去向 | 对每个纳入过程，将工艺水、氢氧化钠、硝酸、过氧乙酸和废水记录为五个独立序列 | kg 或 m3 | 每日或每个生产周期 | 与产品输出相同期间 | 整个纳入乳品场址及过程分配 | 保持每种水或化学品身份及每个过程废水相互独立；不得重复计算回用；共享排放仅按实测体积或有记录负荷驱动分配 | 仪表校准；化学品领用核对；水平衡；实验室报告；处理运营记录 |
| `cp_process_mass_balance` | `reception_and_cream_preparation` | 制备牛乳奶油；制备牛乳黄油；牛脱脂乳；拒收牛乳；拒收牛乳奶油；拒收牛乳黄油；过滤残渣 | 储罐、批次和转移记录 | 精确交换身份；期初库存；接收；转移质量；期末库存；拒收质量；残渣质量；乳脂；水分 | 对每个生产周期及月度总量逐一核对每种具名物料 | kg 和 % m/m | 每次转移和生产周期 | 与产品输出相同期间 | 每个纳入场址和生产线 | 为制备奶油、制备黄油、脱脂乳、每种拒收乳品物料和过滤残渣保留独立平衡；调查而不是合并未解释损失 | 校准仪表；签署批次记录；核对残差及调查 |
| `cp_butter_batch` | `butter_manufacture` | 牛乳奶油；发酵剂；氯化钠；配方用水；β-胡萝卜素；牛乳黄油；牛乳乳脂；酪乳；不合格黄油；过滤残渣 | 搅拌器或连续线批次记录、配料领用记录和实验室结果 | 精确交换身份；投入质量；批次开始和结束；产品或共产品质量；乳脂；水分；拒收或残渣质量 | 对每个批次或连续生产周期分别记录每种具名黄油投入和输出，并保留组成检测 | kg 和 % m/m | 每个批次或生产周期 | 与产品输出相同期间 | 每条黄油线 | 核对总质量和乳脂，同时为每种具名投入、产品、共产品、废物和残渣保留一个序列 | 校准仪表和秤；配料证书；组成方法；放行记录；质量和脂肪闭合 |
| `cp_concentrated_milkfat_batch` | `concentrated_milkfat_manufacture` | 牛乳奶油；牛乳黄油；硅藻土；无水乳脂；黄油油；酥油；牛乳非脂相；冷凝液；废水；过滤残渣；不合格浓缩乳脂 | 生产周期流量计、储罐、蒸发器或分离器记录、过滤助剂领用记录和产品实验室结果 | 精确交换身份；投入质量和组成；产品质量、乳脂和水分；分离相质量；冷凝液；拒收；残渣；运行时间 | 对每个生产周期和实验室放行批次分别记录每种具名投入和输出 | kg 和 % m/m | 每个生产周期或批次 | 与产品输出相同期间 | 每条浓缩线 | 核对总质量和乳脂，同时将无水乳脂、黄油油、酥油、非脂相、冷凝液、废水、过滤残渣和拒收保持为独立序列 | 流量计和秤校准；实验室结果；生产周期日志；领用记录；质量和脂肪闭合 |
| `cp_packaging_and_storage` | `product_packaging_and_storage` | 未包装黄油；未包装无水乳脂；未包装黄油油；未包装酥油；铝箔；纸板；LDPE 薄膜；HDPE 桶；钢桶；放行参考产品；每种不合格产品；每种包装废物 | 灌装机计数器或秤、包装领用、仓库和废品记录 | 精确产品或包装身份；未包装投入；包装净输出；领用包装质量；未用退回；废物质量；拒收质量；返工；储存时间和温度 | 将每种具名产品、包装投入、不合格产品和包装废物记录为独立序列，并将每个生产批次与放行仓库数量核对 | kg 产品、kg 包装、小时和摄氏度 | 每个批次 | 与产品输出相同期间 | 每条纳入灌装线和现场仓库 | 净产品不含包装；分别计算铝箔、纸板、LDPE 薄膜、HDPE 桶和钢桶的消耗及废物；每种产品形态保持独立 | 秤校准；包装规格；批次放行；仓库移动和废物处置 |
| `cp_refrigerant_records` | `product_packaging_and_storage` | R717 补充；R717 排放；R134a 补充；R134a 排放 | 维护和制冷剂库存记录 | 精确制冷剂；设备；期初库存；采购；补充；回收；期末库存；未回收损失；服务区域；process_id；期间 | 分别计算 R717 和 R134a 补充，并根据核对库存和维护事件分别计算未回收的 R717 和 R134a 排放 | kg 具名制冷剂 | 每次维护及年度核对 | 与产品输出相同期间 | 服务于纳入过程的所有制冷系统 | 按制冷剂及补充或排放方向分别保留一个序列；共享设备仅按有记录冷负荷或运行时间驱动分配 | 技师记录；采购和回收证书；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景清单 | 归一化数量 = 期间数量 / 净合格可销售产品质量；分母不含包装质量 | 期间流数量；放行净产品质量 | 每 1 kg 参考产品的数量 | `fao-dairy-accounting` |
| `calc_mass_balance` | 每个过程和路线 | 期初库存 + 外部投入 + 内部转入 = 期末库存 + 产品输出 + 共产品 + 废物 + 内部转出 + 量化损失；报告残差和测量不确定度 | 库存；投入；输出；转移；废品和损失记录 | 过程质量平衡残差 | `fao-dairy-accounting` |
| `calc_milkfat_balance` | 接收、黄油和浓缩乳脂路线 | 输入质量 × 输入乳脂分数之和 = 输出质量 × 输出乳脂分数之和 + 废物和损失中的实测脂肪；报告未解释残差 | 所有物料流的质量和乳脂检测结果 | 乳脂平衡残差 | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `fao-dairy-accounting` |
| `calc_energy_conversion` | 燃料、蒸汽和外购热 | 用已披露低位或高位热值或焓约定换算每种实测载体；同一报告序列不得混用约定，且将交付热转为有用热时才采用效率 | 载体数量；热值或蒸汽焓；适用时效率 | 按载体和过程的 MJ 或 kWh | `fao-idf-dairy-lca-2010` |
| `calc_coproduct_allocation` | 细分后的剩余共享负荷 | 产品 i 的分配负荷 = 剩余共享负荷 × 所声明分配因子 i；各共产品因子之和应为 1，方法具有实质影响时报告替代分配敏感性 | 剩余共享负荷；产品数量；物理关系或经济价值；参考期 | 分配后的剩余负荷和敏感性结果 | `fao-idf-dairy-lca-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考流和接收乳品物料 | 对每个所代表产品批次证明牛乳来源、产品形态和适用 CXS 279 或 CXS 280 组成；未解析形态专属身份时，不得将无水乳脂 UUID 用于普通黄油。 | 产品规格；供应商声明；批次放行；乳脂和水分检测；所选 Tiangong UUID |
| `dq_temporal_representativeness` | 所有前景记录 | 全年生产时采用有代表性的连续 12 个月；仅当涵盖完整的所声明季节生产周期且披露季节性时，方可采用较短期间。 | 仪表和批次日期覆盖；生产日历；缺口登记 |
| `dq_geographic_and_technical_scope` | 场址和上游数据集 | 匹配实际国家或地区、牛乳供应和生产技术；披露代理并评估重大不匹配。 | 场址元数据；供应商来源；设备和路线记录；数据集地域和技术 |
| `dq_completeness` | 质量、乳脂、能量、水和废物清单 | 核对过程质量和乳脂平衡、全部公用工程仪表及废物去向；调查未解释残差，而不是强制闭合。 | 签署平衡工作表；仪表核对；残差说明；废物转移证据 |
| `dq_hygiene_and_measurement_controls` | 产品接触水、配料和过程控制 | 保留证据证明水和配料符合规格，且对所声明路线的卫生控制措施、监测和纠正行动已验证。 | 饮用水检测；配料证书；HACCP 或等效记录；校准和纠正行动日志 |
| `dq_allocation_transparency` | 多产品操作 | 报告细分、剩余共享负荷、分配方法、因子、数据年份和敏感性；上游分配另行披露。 | 过程图；分表证据；分配工作簿；价格或组成证据；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 数据集应声明一个涵盖的产品形态、牛乳来源和全部必需限定信息。UUID `7f8eef6e-3ea0-4f74-bf72-c6f95af2c3fc` 仅可用于无水乳脂或明确等义的浓缩形态；普通黄油需要形态专属且已解析的 UUID。 | `codex-cxs-279-1971`; `codex-cxs-280-1973` |
| `validation_reference_amount` | 定量参考 | 净参考输出应恰好为 1 kg，采用 Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66` 和单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 的 kg，且不含包装。 |  |
| `validation_product_composition` | 成品 | 黄油乳脂应不低于 80% m/m，水分不高于 16% m/m，非脂乳固体不高于 2% m/m。无水乳脂或无水黄油油乳脂应不低于 99.8% m/m，水分不高于 0.1% m/m；其他 CXS 280 形态应满足所声明的适用限值。 | `codex-cxs-279-1971`; `codex-cxs-280-1973` |
| `validation_process_selection` | 过程图 | 应纳入 `reception_and_cream_preparation` 和 `product_packaging_and_storage`，并至少纳入 `butter_manufacture` 或 `concentrated_milkfat_manufacture` 之一，且与所声明产品形态一致。 | `tetrapak-butter-handbook`; `tetrapak-amf-handbook` |
| `validation_mass_and_fat_closure` | 前景过程记录 | 每个纳入过程应报告质量平衡和乳脂平衡残差、测量不确定度及重大残差说明；不得通过插入未测量损失来伪造平衡闭合。 | `fao-dairy-accounting` |
| `validation_inventory_coverage` | 前景清单 | 对每种使用或产生的身份要求一张原子交换卡：牛乳、牛乳奶油、牛乳黄油、工艺水、每种具名配料或加工助剂、每种 CIP 化学品、电力、外购蒸汽、外购热水、天然气、柴油、LPG、R717 补充、R134a 补充、每种具名产品和共产品、废水、每种固体或包装废物、二氧化碳、氮氧化物、二氧化硫、PM2.5、R717 排放和 R134a 排放。选择器或组合流名称应导致校验失败；确实不存在的交换应记录为不适用，而不得用聚合卡表示。 | `fao-idf-dairy-lca-2010`; `codex-cxc-57-2004`; `tetrapak-dairy-effluent` |
| `validation_collection_links` | 采集和计算清单行 | 每个证据为 `collected_record` 或 `calculated_from_collection` 的行应引用已实施采集协议，每个计算行应识别其计算规则或可复现工作表。 |  |
| `validation_allocation` | 共产品和共享操作 | 分配前应细分直接负荷；剩余分配因子之和应为 1，在报告期采用一种已披露基准，并在方法实质影响产品结果时给出敏感性结果。 | `fao-idf-dairy-lca-2010` |
| `validation_no_double_counting` | 公用工程、回用和上游过程 | 验证外购蒸汽与锅炉燃料、回用水与新鲜水、返工与新投入、制冷剂损失分配以及上游乳品生产各自只计算一次。 | `fao-idf-dairy-lca-2010`; `fao-dairy-accounting` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明牛乳黄油或乳脂产品的场址特定前景数据包，经审核后可发布为单元过程或汇总的门到门数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 归因型产品 LCA、供应链建模、相同产品形态的经验证加工厂门口比较、热点分析，以及在地域、技术、分配和产品规格相容时的下游食品系统模型 |
| excluded_use | 不同黄油和浓缩乳脂形态之间的比较性声明；营养或食品安全认证；未作代表性审查即用于所代表地域或期间之外；未明确重构的后果型市场建模 |
| required_metadata | PCR id 和版本状态；产品形态和 Tiangong 流身份；牛乳来源；CXS 产品规格；工厂和地域；技术和路线；参考期；系统边界；上游数据集；分配方法和因子；包装和储存状态；数据所有者和审核状态 |
| required_quality_disclosure | 一手数据覆盖；仪表和检测方法；质量和乳脂残差；缺失流 UUID；代理数据集；时间、地域和技术局限；截断；共产品敏感性；不确定度和审核发现 |
| update_trigger | 产品形态或路线改变；供应商或牛乳来源改变；乳脂或水分规格、能源系统、包装、共产品用途或分配发生重大改变；出现新的形态专属 Tiangong 流身份；参考数据过期；获得更具代表性的 12 个月前景记录；纠正质量或乳脂闭合 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-279-1971` | 标准（`standard`） | Codex Alimentarius Commission. CXS 279-1971, Standard for Butter, adopted 1971, amended through 2022. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B279-1971%252FCXS_279e.pdf. 检索于 2026-08-10。 | 黄油身份、允许配料、组成和产品质量校验 |
| `codex-cxs-280-1973` | 标准（`standard`） | Codex Alimentarius Commission. CXS 280-1973, Standard for Milkfat Products, adopted 1973, amended through 2022. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B280-1973%252FCXS_280e.pdf. 检索于 2026-08-10。 | 无水乳脂、乳脂、黄油油和酥油身份、组成与校验 |
| `codex-cxc-57-2004` | 标准（`standard`） | Codex Alimentarius Commission. CXC 57-2004, Code of Hygienic Practice for Milk and Milk Products, revised 2009. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B57-2004%252FCXC_057e.pdf. 检索于 2026-08-10。 | 经验证卫生控制、配料规格、饮用水和回用水控制、质量证据 |
| `fao-idf-dairy-lca-2010` | 官方指南（`official_guidance`） | FAO. 2010. Greenhouse Gas Emissions from the Dairy Sector: A Life Cycle Assessment. https://www.fao.org/4/k7930e/k7930e00.pdf. 检索于 2026-08-10。 | 乳品供应链边界、功能单位语境、清单完整性、共产品分配和敏感性 |
| `fao-dairy-accounting` | 官方指南（`official_guidance`） | FAO. Guideline for Dairy Accounting, Butter Section. https://www.fao.org/4/x6523e/X6523E01.htm. 检索于 2026-08-10。 | 奶油成熟、搅拌和包装记录结构；批次数量、黄油和酪乳得率及质量核对 |
| `tetrapak-butter-handbook` | 手册（`handbook`） | Tetra Pak. Dairy Processing Handbook, Butter. https://dairyprocessinghandbook.tetrapak.com/chapter/butter. 检索于 2026-08-10。 | 黄油过程分解：奶油制备、巴氏杀菌、成熟、搅拌、揉炼、加盐、包装和冷藏 |
| `tetrapak-amf-handbook` | 手册（`handbook`） | Tetra Pak. Dairy Processing Handbook, Anhydrous Milk Fat and Butter Oil. https://dairyprocessinghandbook.tetrapak.com/chapter/anhydrous-milk-fat-amf-and-butter-oil. 检索于 2026-08-10。 | 由奶油或返工黄油进行的浓缩乳脂路线分解、相分离和除水 |
| `tetrapak-dairy-effluent` | 手册（`handbook`） | Tetra Pak. Dairy Processing Handbook, Dairy Effluent. https://dairyprocessinghandbook.tetrapak.com/chapter/dairy-effluent. 检索于 2026-08-10。 | 产品损失预防、黄油和奶油残留物分流、废水和废物去向记录 |
