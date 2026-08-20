---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.soy-milk
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 豆奶

## 1. 范围与适用性

本 PCR 规范制造工厂大门处成品非发酵豆奶的前景数据生产。其范围包括以大豆和/或大豆衍生物与水制成的豆类饮料；当产品归入豆奶类别时，包括原味、复合或调味豆类饮料以及蛋白质含量较低的大豆基饮料。具体产品须声明 Codex 产品亚型、蛋白质含量、配方、热处理路线、包装形式和储存条件。

前景边界始于大豆、大豆衍生物、水、配料、加工助剂、清洗材料、燃料、电力和包装材料进入制造场址。边界包括原料准备、水相提取或复配、实施时的分离、配方与标准化、均质、热处理、灌装与包装、场内成品处理、卫生清洗、公用工程、产品损失、残余物、废水、直接排放和共产品。收到的材料和能源的上游生产应通过链接的上游数据集表示，不在前景过程中重复构建。

发酵豆类饮料、豆腐或其他大豆凝乳、压制或脱水豆制品、作为配料销售的大豆蛋白配料、未完成豆基料、乳制奶、归入 CPC 24423 之外的混合饮料以及其他非动物源奶不在范围内。工厂大门后的配送、零售、消费者冷藏或制备、消费和包装报废阶段不属于前景边界。本 PCR 不证明食品安全、法规符合性、营养声称或产品可比性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.soy-milk |
| classification_refs | CPC 3.0: 24423 — Soy milk |
| covered_products | 主要由大豆和/或大豆衍生物与水制成的成品非发酵豆奶和豆类饮料；当归入 CPC 24423 时，包括原味、复合或调味及大豆基饮料亚型 |
| excluded_products | 发酵豆类饮料；豆腐和其他大豆凝乳；压制或脱水大豆凝乳；作为进一步加工配料销售的大豆粉、浓缩蛋白、分离蛋白、未完成豆基料或其他配料；乳制奶；CPC 24423 之外的混合饮料；椰奶、杏仁奶、米奶、燕麦奶和其他非动物源奶 |
| representative_product | 制造工厂大门处可供销售或进一步配送的净成品非发酵豆奶，不含包装质量 |
| production_route | 大豆原料接收；准备及水相提取或大豆衍生物复配；适用时分离；配方与标准化；均质与已声明的热处理；灌装、包装和成品处理，并记录卫生清洗和公用工程 |
| market_state | 工厂大门处处于已声明散装或消费包装中的液态成品饮料，并声明储存条件、产品亚型、配方、蛋白质含量和热处理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有已声明产品亚型、配方、处理、包装形式和储存条件的成品非发酵豆奶 |
| How much | 制造工厂大门处 1 kg 净豆奶，不含一级、二级和三级包装质量 |
| How well | 满足已声明产品规格及适用的组成、质量和微生物要求；前景数据包记录实际组成和符合性证据，但不作认证声称 |
| How long or cycle | 在工厂大门放行时结束的一个生产批次或明确汇总的生产期间；不指定使用阶段寿命 |
| reference_flow_link | 1 kg 净合格成品豆奶输出等于 1 kg 参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净成品豆奶 |
| 参考产品流 | 豆浆 `b0bd96e4-7b19-4d9c-8d80-ea47b97bbde3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Codex 产品亚型；按已声明分析基准的蛋白质含量；大豆投入形态及物种或来源描述；配方和可选配料；加糖或调味状态；热处理路线；包装形式和标称灌装规格；产品净质量；储存条件；生产地域；生产期间或批次；可销售共产品的分配处理 |

构建前景数据包时，`必需限定信息` 中的内容必须在数据集元数据、过程说明、参考流备注、产品描述或等效数据包字段中声明。缺少必需限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考豆奶输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在灌装后或等效散装工厂大门点计量合格饮料净质量；排除全部包装质量，并分别记录返工、拒收品、样品、泄漏和其他非参考产品。 |
| `ingredient_process_water_separation` | 水投入 | Volume 或 Mass，并声明密度与温度基准 | m3 或 kg | 将进入产品的水与提取、冲洗、冷却、锅炉、卫生清洗和其他过程水分开记录；记录所有回用，避免同一水量重复计算。 |
| `soy_material_basis` | 大豆和大豆衍生配料 | Mass | kg | 记录收到时质量；用于产率、组成或分配计算时声明水分或固形物基准；没有可审计换算时不得混合干物质值和收到时值。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽、热和制冷 | 载能体适用的能量或物理属性 | kWh、MJ、kg 或 m3 | 各载能体分别计量或计算，保留换算因子以及适用时的低位或高位热值基准，避免把购买的蒸汽或热与场内燃料重复计算。 |
| `coproduct_state_basis` | 豆渣、回收大豆固形物和其他共产品 | Mass | kg | 在共产品离开前景过程时记录湿质量、水分或干物质含量、市场状态和去向；分配因子须使用一致且已声明的基准。 |
| `packaging_mass_separation` | 一级、二级和三级包装 | Mass | kg | 按材料和包装层级记录包装投入与废料，但从 1 kg 参考产品数量中排除包装质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 大豆或大豆衍生配料、水、可选配料、加工助剂、包装材料、燃料和购买能源进入制造场址，并声明数量、供应商或来源、材料状态和上游数据集链接 |
| starting_condition_role | 制造工厂大门前景起点；大豆种植、大豆衍生物和配料生产、能源产生、包装制造以及入厂供应链活动由上游数据集表示 |
| product_classification_scope | CPC 3.0 编码 24423 的成品非发酵豆奶；相邻非动物源奶、未完成大豆中间品、发酵产品和大豆凝乳产品不在范围内 |
| recursive_input_rule | 若场址投入购买的豆奶或由同一规范产品类别表示的中间品，则作为上游产品投入仅记录一次，并声明其状态、数量、供应商边界和数据集；不得在接收前景过程中再次展开其内部制造链 |
| upstream_dataset_requirement | 为大豆或大豆衍生物、其他配料、供水、电力、燃料或热、制冷剂、清洗剂、包装材料、研究范围内的运输以及场外废物或废水处理使用时间、地域和技术代表性适当的数据集 |
| disclosure | 声明整豆或大豆衍生物路线、提取与分离配置、产品亚型与配方、处理与储存路线、纳入的包装层级、共产品状态与分配、水回用、卫生清洗边界、场内或场外废水处理、数据期间、场址覆盖以及所有排除项或数据缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 制造前景 | 纳入从材料接收到合格包装或散装豆奶在工厂大门放行的全部场内操作，包括可归属于生产的支持性公用工程和卫生清洗。 | `codex-cxs-322r-2015`; `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_links` | 收到的产品和能源投入 | 将大豆原料、配料、包装、燃料、电力、热和其他技术圈投入链接到适当上游数据集；不得在前景数据包中重复其上游过程。 | `us-epa-lca-2006` |
| `boundary_packaging` | 包装 | 纳入场址消耗的包装材料和产生的包装废料；从参考产品净质量中排除包装质量，并披露纳入的包装层级。 | `eu-jrc-fdm-bref-2019` |
| `boundary_cleaning_losses` | 清洗、产品损失和残余物 | 纳入清洗水和化学品、可回收产品、泄漏、不合格产品、分离固形物、废水和处理残余物；在记录处置流前先记录回收或回用。 | `eu-jrc-fdm-bref-2019` |
| `boundary_direct_releases` | 直接基本流 | 记录场内燃烧、制冷剂损失、废水处理及其他纳入操作的计量或计算直接排放；不得用通用影响结果替代基本流清单。 | `us-epa-lca-2006` |
| `boundary_no_silent_cutoff` | 完整性 | 不得仅因难以计量而省略已知材料、能源、水、产品、共产品、废物、废水或直接排放流；须记录所有排除流、理由、预期重要性及其对完整性的影响。 | `us-epa-lca-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `soy_receiving_preparation` | 大豆原料接收与准备 | required | 始终纳入接收和储存；清理、分选、浸泡、脱皮和粉碎根据已声明大豆投入形态适用 | 建立可追溯且可供提取或复配的大豆和配料投入 | 转入的 kg 已准备大豆材料，并与参考流核对 |
| `aqueous_extraction_separation` | 水相提取、加热与分离 | conditional | 对整豆或大豆粉提取路线为必需；对直接使用大豆衍生物复配的路线，声明本过程未运行并链接衍生物上游数据集 | 生产豆液或豆基料，并在实施时分离纤维或不溶固形物 | 转入的 kg 豆液或豆基料，并核对大豆固形物与水量平衡 |
| `formulation_standardisation` | 配方与标准化 | required | 纳入按已声明产品亚型对豆液或衍生物、水、可选配料和加工助剂进行混配 | 建立最终配方、蛋白质或固形物基准及批次身份 | 转入的 kg 已配制饮料，并与配方和批次记录核对 |
| `homogenisation_heat_treatment` | 均质、热处理与冷却 | required | 记录实际均质、巴氏杀菌、UHT、灭菌、热灌装、冷却或无菌路线；明确任何未使用操作 | 生产满足已声明放行规格的稳定处理后饮料 | 转入的 kg 处理后饮料，并与时间—温度及损失记录核对 |
| `filling_packaging_storage` | 灌装、包装与成品处理 | required | 纳入散装装运，或全部实际运行的灌装、密封、编码、二次包装、冷却和场内成品储存 | 生产可在工厂大门放行的参考输出 | 1 kg 净合格豆奶输出 |
| `sanitation_utilities_wastewater` | 卫生清洗、公用工程与废水管理 | required | 纳入可归属于前景过程的共享或专用支持负荷，并披露分配或计量基准 | 记录支持生产的清洗、公用工程、回收、废水、废物和直接排放流 | 归一化到 1 kg 净合格豆奶的支持活动 |

### 过程：大豆原料接收与准备（`soy_receiving_preparation`）

#### 输入

##### 产品流

###### 收到的大豆或大豆衍生原料（`soy_raw_material_received`）

按供应商、批次、产品形态、收到时质量、适用时的水分或固形物基准以及预定路线记录每项大豆投入。整粒大豆与大豆粉、浓缩蛋白、分离蛋白或其他衍生物必须可区分。

- 选定流：Soybeans or soy-derived ingredient, by declared form
- 流属性/单位：Mass / kg
- 数量规则：由接收记录计量的已接受转入数量，仅按有记录的库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-322r-2015`

#### 输出

##### 产品流

###### 已准备大豆材料（`prepared_soy_material`）

记录在清理、分选、浸泡、脱皮或粉碎后转入提取或复配的称重大豆材料，保留其材料状态和批次链接。

- 选定流：Prepared soy material, facility intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，或由已核验准备记录计算的批次平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`

##### 废物流

###### 大豆拒收物与异物（`soy_preparation_rejects`）

记录拒收物、筛出物、作为废物收集的豆皮和粉尘及其实际回收、处理或处置路线；可销售豆皮或其他共产品改作产品输出记录。

- 选定流：Soy preparation rejects, declared state
- 流属性/单位：Mass / kg
- 数量规则：计量容器或发运质量并扣除皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`

##### 基本流

###### 排放到空气的准备粉尘（`preparation_dust_to_air`）

仅在物料处理或粉碎直接排气到环境时记录颗粒物直接排放；捕集粉尘仍为废物或回收材料流。

- 选定流：Particulate matter to air, matching measured fraction
- 流属性/单位：Mass / kg
- 数量规则：计量排放，或根据监测排气活动和有记录因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：水相提取、加热与分离（`aqueous_extraction_separation`）

#### 输入

##### 产品流

###### 已准备大豆进料（`prepared_soy_feed_input`）

记录进入水相提取或复配的匹配大豆批次。

- 选定流：Prepared soy material, facility intermediate
- 流属性/单位：Mass / kg
- 数量规则：来自 `prepared_soy_material` 的计量批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 提取或复配用水（`extraction_water`）

记录用于溶出大豆蛋白和其他组分或复配大豆衍生物的加水，并与清洗水和公用工程水分开。

- 选定流：Process water supplied to production
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：计量批次或专用水表消耗；若报告质量，须记录密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`codex-cxs-322r-2015`

###### 提取电力与热能（`extraction_energy`）

把用于研磨、泵送、提取加热、抗营养因子控制和分离的电力、蒸汽、直接燃料或其他热按载能体分别记录。

- 选定流：Electricity and thermal-energy carriers, by actual supply
- 流属性/单位：能量或载能体适用属性 / kWh、MJ、kg 或 m3
- 数量规则：计量消耗，或根据采集的运行数据和有记录的换算因子进行工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`

#### 输出

##### 产品流

###### 豆液或标准化豆基料（`soy_liquid_base`）

记录转入配方过程的豆液，包括计量质量、固形物或蛋白质基准、温度及批次身份。

- 选定流：Soy liquid or base, facility intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，并与投入水、大豆材料、分离固形物和损失核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 可销售豆渣或回收大豆固形物（`okara_coproduct`）

仅当分离的大豆纤维或固形物具有有记录的接收方或市场用途时，才作为产品输出；否则归为废物。保留湿质量、水分或干物质及去向。

- 选定流：Okara or recovered soy solids, declared market state
- 流属性/单位：Mass / kg
- 数量规则：计量发运或转移质量，并附水分或干物质结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_records`
- 来源：`codex-cxs-322r-2015`; `eu-jrc-fdm-bref-2019`

##### 废物流

###### 不可销售大豆残余物（`soy_residue_waste`）

按实际处理去向记录无产品用途的分离材料、受污染回收材料及不合格固形物。

- 选定流：Soy processing residue, declared waste state
- 流属性/单位：Mass / kg
- 数量规则：计量容器或发运质量并扣除皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 排放到环境的提取区废水（`extraction_wastewater_release`）

仅对纳入处理边界后的受监测直接排放使用本基本流行。送往另一过程或场外处理的废水仍为废物或产品流。

- 选定流：Waterborne emissions by measured substance
- 流属性/单位：Mass / kg
- 数量规则：各报告物质按排放体积乘以实测浓度，并保留采样与平均基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：配方与标准化（`formulation_standardisation`）

#### 输入

##### 产品流

###### 用于配方的豆液或大豆衍生物（`soy_base_for_formulation`）

记录来自提取过程的匹配豆液，或直接复配路线中收到的大豆衍生物。

- 选定流：Soy liquid, base, or derivative by declared form
- 流属性/单位：Mass / kg
- 数量规则：计量批次领用和转入数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_batch_records`

###### 配方用水（`formulation_water`）

记录配方中有意加入产品的水，并与提取、清洗和公用工程水分开。

- 选定流：Ingredient water supplied to formulation
- 流属性/单位：Volume / m3 或 Mass / kg
- 数量规则：计量批次加入量；需要换算时保留密度和温度基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_batch_records`
- 来源：`codex-cxs-322r-2015`

###### 可选配料和加工助剂（`optional_ingredients_aids`）

分别记录糖、油、盐、香料、稳定剂、维生素或矿物质预混料及加工助剂，包括规格、批次、配方数量以及带入或去除处理。

- 选定流：Declared ingredient or processing aid
- 流属性/单位：Mass / kg
- 数量规则：由配方和库存记录计量的批次领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_batch_records`
- 来源：`codex-cxs-322r-2015`

#### 输出

##### 产品流

###### 已配制和标准化豆类饮料（`formulated_soy_beverage`）

记录转入均质或热处理的批次，包括总质量、实测蛋白质或固形物基准、配方身份及符合状态。

- 选定流：Formulated soy beverage, facility intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量批次转移量，并与配方投入、样品、返工和损失核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_batch_records`

##### 废物流

###### 配方拒收物与未回收产品（`formulation_rejects`）

按返工、回收、废水或处置去向记录不合格批次、过滤残余物和未回收配方损失。

- 选定流：Off-specification soy beverage or formulation residue
- 流属性/单位：Mass / kg
- 数量规则：计量拒收或发运质量，排除可证明已返回同一产品批次的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`

##### 基本流

### 过程：均质、热处理与冷却（`homogenisation_heat_treatment`）

#### 输入

##### 产品流

###### 已配制饮料进料（`formulated_beverage_feed`）

记录进入处理的匹配配方批次。

- 选定流：Formulated soy beverage, facility intermediate
- 流属性/单位：Mass / kg
- 数量规则：来自 `formulated_soy_beverage` 的计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`

###### 处理能耗与冷却服务（`treatment_energy_cooling`）

按载能体和实际处理路线记录电力、蒸汽、燃料、购买热、制冷和冷却水使用。

- 选定流：Electricity, heat, fuel, refrigeration, and cooling-water services by actual supply
- 流属性/单位：载能体适用能量或物理属性 / kWh、MJ、kg 或 m3
- 数量规则：计量消耗，或根据采集的运行时间、负荷、流量和有记录换算因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`

#### 输出

##### 产品流

###### 灌装前处理后豆奶（`treated_soy_milk`）

记录转入灌装的质量，以及实际均质条件、时间—温度记录、冷却或无菌状态、样品、返工和损失。

- 选定流：Treated soy milk, facility intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，并与处理进料、滞留产品、样品、返工和损失核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_records`

##### 废物流

###### 处理开机、停机与拒收损失（`treatment_product_losses`）

记录开机、停机、界面切换、取样、设备故障或放行测试期间移出的豆类饮料，并区分返工、回收、废水和处置。

- 选定流：Soy beverage treatment loss, declared destination
- 流属性/单位：Mass / kg
- 数量规则：按事件和去向计量或由质量平衡推导
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 处理相关直接空气排放（`treatment_direct_air_emissions`）

记录可归属于处理过程的直接燃烧排放和已核验制冷剂损失；购买电力和热仍为具有上游数据集的产品投入。

- 选定流：Relevant elementary flow to air
- 流属性/单位：Mass / kg
- 数量规则：计量排放，或根据采集的燃料、制冷剂和运行记录及有记录因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`

### 过程：灌装、包装与成品处理（`filling_packaging_storage`）

#### 输入

##### 产品流

###### 用于灌装的处理后豆奶（`treated_soy_milk_for_filling`）

记录转入散装装运或灌装线的匹配处理后饮料。

- 选定流：Treated soy milk, facility intermediate
- 流属性/单位：Mass / kg
- 数量规则：来自 `treated_soy_milk` 的计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`

###### 包装材料（`packaging_materials`）

按材料、部件、质量、供应商、适用时的再生含量声明和包装层级记录领用于生产的一级、二级和三级包装。

- 选定流：Packaging component by declared material and level
- 流属性/单位：Mass / kg
- 数量规则：计量领用量减去已核验退库量，并与包装单位和包装废料核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 灌装与储存电力（`filling_storage_electricity`）

记录灌装、密封、编码、输送、二次包装、冷却和截至工厂大门放行的场内成品储存的计量或分配电力。

- 选定流：Purchased electricity by actual supply mix
- 流属性/单位：Energy / kWh
- 数量规则：专用电表读数，或依据设备负荷与运行时间的有记录分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`

#### 输出

##### 产品流

###### 工厂大门处净成品豆奶（`finished_soy_milk_reference`）

本行为定量参考输出。仅计入已放行的合格净饮料质量，排除包装、仍在系统内的返工、留样、拒收品和未发运损失。

- 选定流：豆浆 `b0bd96e4-7b19-4d9c-8d80-ea47b97bbde3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的工厂大门放行质量归一化后固定为 1 kg 参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂大门处 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-2025`; `codex-cxs-322r-2015`

##### 废物流

###### 包装废料（`packaging_scrap`）

按材料和回收或处置路线记录开机废料、损坏部件、边角料、不合格包装和收集的包装废物。

- 选定流：Packaging waste by material and treatment route
- 流属性/单位：Mass / kg
- 数量规则：计量收集或发运质量，并与包装领用量和包装单位核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`

###### 灌装拒收品与产品损失（`filling_product_loss`）

按返工、回收、废水或处置路线记录泄漏或欠装包装、灌装机开停机损失、样品和损坏成品。

- 选定流：Soy milk filling loss, declared destination
- 流属性/单位：Mass / kg
- 数量规则：计量不合格单位及其净含量，加上单独计量的散装损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`

##### 基本流

### 过程：卫生清洗、公用工程与废水管理（`sanitation_utilities_wastewater`）

#### 输入

##### 产品流

###### 清洗与卫生用水（`sanitation_water`）

在计量或批次系统允许时，分别记录预冲洗、就地清洗、开放式清洗、消毒和最终冲洗用水；包括回收或回用水且不得重复计算。

- 选定流：Water supplied for cleaning and sanitation
- 流属性/单位：Volume / m3
- 数量规则：专用水表、CIP 批次体积，或依据已核对场址水平衡进行的有记录分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 清洗化学品与消毒剂（`cleaning_chemicals`）

按可得的有效浓度、补充量、回收和处置路线，记录每种购买的清洗剂、消毒剂和中和化学品。

- 选定流：Cleaning or sanitation chemical by formulation
- 流属性/单位：Mass / kg
- 数量规则：计量领用量或采购与库存平衡，排除退回的未使用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 共享公用工程能源（`shared_utility_energy`）

记录尚未分配给生产过程的锅炉、压缩空气、制冷、泵、给水处理、清洗和废水处理能源。

- 选定流：Electricity, fuel, steam, heat, or refrigeration service by actual supply
- 流属性/单位：载能体适用能量或物理属性 / kWh、MJ、kg 或 m3
- 数量规则：计量支持过程消耗，或依据运行记录进行有记录分配，并排除已在其他过程分配的能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`

#### 输出

##### 产品流

###### 回收产品或清洗液（`recovered_material`）

把返回受控回用的产品、冲洗水或清洗液记录为内部产品输出和匹配投入；不得把内部循环作为新的净产品。

- 选定流：Recovered product, water, or cleaning solution, facility intermediate
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：计量回收数量，并链接到接收批次或回用罐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 送往处理的废水（`wastewater_to_treatment`）

记录转移点的废水体积、去向和实测特性。送往场内或场外处理过程的废水应作为废物流，而非基本排放。

- 选定流：Food-processing wastewater to declared treatment
- 流属性/单位：Volume / m3
- 数量规则：监测排放体积，并与水投入、产品带入水、回用、蒸发和其他输出核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废水处理污泥与分离残余物（`wastewater_sludge_residues`）

分别记录筛出物、油脂、固形物、污泥和用过的处理材料，附水分基准和实际回收或处置去向。

- 选定流：Wastewater-treatment residue by declared state
- 流属性/单位：Mass / kg
- 数量规则：计量发运或容器质量，扣除皮重并保留水分基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_records`

##### 基本流

###### 处理后废水排放（`treated_wastewater_emissions`）

若场内处理后直接排入环境，则根据最终排放点受监测流量和浓度记录水体排放物质。

- 选定流：Waterborne emissions by measured substance
- 流属性/单位：Mass / kg
- 数量规则：各物质按监测排放体积乘以代表性实测浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格豆奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 共享过程与共产品 | 首先通过分别计量或细分提取、配方、处理、包装、卫生清洗和公用工程操作避免分配；仅当下游功能和被替代产品已为研究目标明确建模并证明合理时使用系统扩展。 | `us-epa-lca-2006` |
| `allocation_coproduct_status` | 豆渣、回收大豆固形物和回收产品 | 在分配负担或信用前，依据有记录的去向和接收证据确定每项输出是可销售产品、内部循环材料还是废物。 | `eu-jrc-fdm-bref-2019` |
| `allocation_physical_relation` | 无法避免的共享负担 | 无法避免分配时，使用反映共享投入或输出如何随产品或功能变化的有记录物理因果关系；尤其在水分不同的情况下，简单湿质量分配并非自动有效。 | `us-epa-lca-2006` |
| `allocation_other_relation` | 无可辩护物理关系 | 仅当无法建立物理关系时使用其他关系，例如经济价值；记录价格、参考期间、币种、市场条件、计算过程及对所选关系的敏感性。 | `us-epa-lca-2006` |
| `allocation_no_avoided_burden_default` | 废物回收与共产品用途 | 默认不应用避免负担信用。仅在下游研究要求时建模替代情景，并把替代功能、市场、质量等效性和置换假设与前景清单分开披露。 | `us-epa-lca-2006` |
| `allocation_rework_internal` | 返工与内部循环 | 同一前景系统内返回的材料作为内部转移处理；保留原材料和能源负担，记录新增再加工投入和损失，不产生第二次产品信用。 | `eu-jrc-fdm-bref-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `soy_receiving_preparation` | 收到的大豆和其他材料 | 地磅、接收、发票、规格和库存记录 | 供应商；批次；材料形态；接受和拒收质量；适用时的水分或固形物基准；期初期末库存；规格 | 按材料和批次核对接收、领用、退回和库存变化 | kg | 每次接收和库存期间 | 与参考输出相同的生产期间，包括期初期末库存 | 为已声明前景场址供料的全部设施和仓库 | 接受投入 = 接收 + 期初库存 − 期末库存 − 有记录退回；按参考输出归一化 | 校准秤记录；供应商规格；批次追溯；库存核对 |
| `cp_batch_mass_balance` | `soy_receiving_preparation`; `aqueous_extraction_separation`; `homogenisation_heat_treatment` | 中间转移和损失 | 批次表、罐液位、在线仪表、秤和损失事件记录 | 批次 id；投入和输出质量；罐底存量；样品；泄漏；拒收；返工；水分或固形物；时间戳 | 跨转移点核对各关联批次并保留无法解释差额 | kg | 每批次或生产运行 | 数据集所代表的全部批次 | 已声明场址和纳入生产线 | 仅在批次核对后汇总；期间合计除以净合格输出 | 仪表或秤校准；签署批次记录；核对报告 |
| `cp_water_records` | `aqueous_extraction_separation`; `formulation_standardisation` | 配料、提取、冷却和过程水 | 专用水表、批次加水、罐记录和场址水平衡 | 来源；仪表；用途；体积；温度；换算时的密度；回用来源和去向 | 优先按用途计量；否则从已核对场址平衡有记录分配 | m3 或 kg | 连续、批次或账单间隔 | 完整生产期间，包括开机和停机 | 全部纳入生产和公用工程区域 | 分开进入产品、过程、回用、蒸发和排放水；避免回用流重复计算 | 仪表校准；批次表；公用事业账单；水平衡核对 |
| `cp_recipe_batch_records` | `formulation_standardisation` | 配方投入和已配制输出 | 批准配方、物料领用、批次表、实验室结果和放行记录 | 产品编码；批次；配料批号和数量；水；助剂；返工；蛋白质或固形物；输出；拒收 | 核对批准配方、实际领用数量和实测批次输出 | kg | 每批次 | 所有代表的产品批次 | 全部纳入配方和生产线 | 保留配方特定合计后才按产品亚型汇总 | 批准配方；批次谱系；实验室证书；批次放行 |
| `cp_treatment_records` | `homogenisation_heat_treatment` | 处理进料、输出和运行条件 | 流量计、批次记录、时间—温度记录仪、压力记录和放行测试 | 批次；进料和输出质量；均质设置；温度；保持时间；冷却；返工；拒收 | 把连续或批次处理记录链接到产品批次和转移数量 | kg 和过程特定单位 | 每次运行；适用时连续记录关键参数 | 所有代表的处理运行 | 每条处理线和已声明路线 | 仅汇总进料、输出和放行状态匹配的运行 | 已校准仪器；记录仪完整性；放行授权 |
| `cp_energy_records` | `aqueous_extraction_separation`; `homogenisation_heat_treatment`; `filling_packaging_storage`; `sanitation_utilities_wastewater` | 电力、燃料、蒸汽、热、制冷和共享公用工程 | 仪表、发票、燃料领用、锅炉、制冷和设备运行记录 | 载能体；仪表；数量；期间；设备或区域；运行时间；换算因子；热值基准；分配驱动项 | 优先使用专用仪表；否则按已核验运行数据计算，或以有记录驱动项分配共享总量 | kWh、MJ、kg 或 m3 | 连续、班次、批次或账单间隔 | 完整生产期间，包括非生产支持负荷 | 全部纳入过程和公用工程区域 | 将载能体总量与发票和库存核对；防止跨过程重复计算 | 仪表校准；发票；库存平衡；计算表；分配复核 |
| `cp_packaging_release_records` | `filling_packaging_storage` | 包装投入、包装输出和灌装损失 | 包装领用与退回、物料清单、生产线计数、检重秤、废料和放行记录 | 部件；材料；包装层级；单位质量；领用和退回数量；合格包装；拒收；标称和实测净灌装 | 核对包装领用、退库、合格包装和废料；从有效灌装记录确定净饮料质量 | kg 和单位数 | 每次包装运行 | 全部代表的包装运行及截至放行的储存 | 全部纳入灌装线和包装层级 | 仅汇总净合格饮料质量；包装质量单列 | 包装规格；秤或检重秤校准；生产线核对；放行记录 |
| `cp_coproduct_records` | `aqueous_extraction_separation` | 豆渣和回收大豆固形物 | 秤、水分测试、转移、销售、接收方和发运记录 | 输出 id；湿质量；皮重；水分或干物质；去向；接收方接受；使用经济分配时的价格 | 称量每次转移或发运并链接分析和去向证据 | kg | 每次转移或发运 | 完整生产期间 | 全部分离线和共产品去向 | 按一致状态和去向汇总；仅以实测水分换算基准 | 校准秤；实验室结果；发运与接收方记录 |
| `cp_sanitation_records` | `sanitation_utilities_wastewater` | 清洗水、化学品、回收和卫生循环 | CIP 配方与循环日志、化学品领用、电导率、浊度、pH、温度、流量和回收记录 | 回路；循环；水；化学品；浓度；时间；温度；电导率；浊度；pH；回收数量 | 采集自动日志或签署的人工记录，并把每次循环链接到设备和生产期间 | m3、kg 和过程特定单位 | 每次清洗循环 | 可归属于所代表生产的全部卫生循环 | 全部纳入回路和开放式清洗区域 | 以有记录因果驱动项分配共享循环并保留循环总量 | 仪器校准；配方批准；循环完成记录；回收日志 |
| `cp_wastewater_records` | `aqueous_extraction_separation`; `sanitation_utilities_wastewater` | 废水和水体排放 | 流量计、采样、实验室、转移、处理和排放记录 | 流；体积；采样时间；pH；温度；COD、BOD、TSS、氮、磷、油脂或其他实测物质；处理；去向 | 在相关转移与排放点监测流量，并将代表性浓度与匹配体积配对 | m3 和 kg 物质 | 可得时连续监测流量，并按已声明频率采样 | 完整生产期间，包括清洗和非例行排放 | 全部纳入排水、处理单元和排放点 | 用匹配体积和浓度计算物质质量；场外转移与直接排放分开 | 仪表校准；样品监管链；实验室方法与结果；许可或转移记录 |
| `cp_residue_waste_records` | all process ids | 拒收品、残余物、包装废料、污泥和其他废物 | 容器称重、废物日志、联单、转移、回收和处置记录 | 材料；来源过程；毛重和皮重；水分；危险状态；去向；回收或处置操作 | 在收集或发运时称重，并将内部转移与最终去向核对 | kg | 每个容器或每次发运 | 完整生产期间 | 全部纳入过程和废物处理区域 | 仅汇总等效材料状态和去向；避免内部转移重复计算 | 校准秤；废物联单；承包商回执；回收证据 |
| `cp_direct_emissions` | `soy_receiving_preparation`; `homogenisation_heat_treatment`; `sanitation_utilities_wastewater` | 对空气和水的直接排放 | 连续监测、烟囱测试、泄漏日志、燃料记录、制冷剂维护记录、废水结果和因子计算 | 来源；物质；实测浓度或因子；流量或活动；期间；事件类型；计算 | 优先使用实测排放；否则按采集的活动和有记录因子计算 | kg | 监测间隔、事件或计算期间 | 包括例行和相关非例行运行的完整生产期间 | 全部纳入直接排放源 | 汇总来源特定排放并按参考输出归一化；不计入通用上游排放 | 校准；测试报告；维护或泄漏记录；因子来源和计算复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 全部清单行 | 归一化数量 = 纳入期间流数量 ÷ 纳入期间净合格豆奶质量 | 已核对流总量；净合格参考输出 | 每 1 kg 净豆奶的流数量 | `us-epa-lca-2006` |
| `calc_net_reference_output` | 成品豆奶 | 净合格输出 = 已放行饮料净质量；排除包装、拒收品、留样、未发运损失和仍在系统内的返工 | 放行记录；灌装质量；散装装运；拒收；样品；返工 | kg 净合格豆奶 | `codex-cxs-322r-2015`; `eu-jrc-fdm-bref-2019` |
| `calc_batch_mass_balance` | 各生产过程和关联批次 | 无法解释差额 = 总质量投入 − 产品输出 − 共产品输出 − 实测废物和直接排放 − 有记录库存或滞留变化 | 批次投入、输出、拒收、返工、库存、样品、泄漏、蒸发和残余物记录 | 质量平衡差额和完整性标志 | `us-epa-lca-2006` |
| `calc_water_balance` | 生产、卫生清洗和废水 | 水投入 = 产品带入水 + 废水转移或排放 + 蒸发 + 输出水分 + 期末滞留 − 期初滞留；内部回用水在匹配转移两侧显示，但净取水仅计一次 | 水表；配方水；废水流量；产品与共产品水分；回用；蒸发；罐库存 | 每参考流已核对取水、使用、回用和排放 | `eu-jrc-fdm-bref-2019` |
| `calc_energy_by_carrier` | 全部用能过程 | 载能体使用量 = 计量数量，或已核验运行负荷 × 时间；仅用有记录因子换算，并与发票和库存变化核对总量 | 仪表；发票；库存；负荷；运行时间；换算与热值基准 | 每参考流分载能体能源或燃料 | `us-epa-lca-2006` |
| `calc_packaging_balance` | 灌装与包装 | 包装消耗 = 期初库存 + 接收 − 期末库存 − 已核验退回；按材料与合格包装和实测废料核对 | 包装库存、接收、退回、单位质量、合格单位、废料 | 每参考流包装投入和废料质量 | `eu-jrc-fdm-bref-2019` |
| `calc_wastewater_substance` | 直接水体排放 | 物质质量 = 匹配排放体积 × 实测浓度，并记录单位换算和采样代表性 | 排放体积；浓度；采样间隔；实验室结果 | 每参考流 kg 物质 | `eu-jrc-fdm-bref-2019` |
| `calc_allocation_factor` | 无法避免的共享负担 | 按所选因果物理关系计算因子；若无可辩护物理关系，则按已声明替代关系计算并保留敏感性情景 | 分别计量的输出；因果驱动项或价格与期间；共享负担 | 各功能合计为 1 的有记录分配因子 | `us-epa-lca-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品和参考流 | 保留产品编码、CPC 24423 分类理由、Codex 亚型、配方、批次谱系、放行状态、必需限定信息和 Tiangong 参考流 UUID。 | 产品规格；配方；批次与放行记录；分类复核 |
| `dq_measurement_control` | 实测前景记录 | 识别仪器或来源记录、校准或核验状态、分辨率、单位、采集频率、缺失期间、修正和责任场址。 | 校准证书；仪表台账；签署批次或公用工程记录 |
| `dq_temporal_coverage` | 数据集期间 | 覆盖可代表所报告产品的已声明生产期间，并纳入该期间的开机、停机、清洗、返工和非例行损失；披露排除期间和季节性。 | 生产日历；批次清单；仪表与卫生记录完整性报告 |
| `dq_technological_geographic_scope` | 场址和生产路线 | 匹配所记录设施、整豆或衍生物路线、配方、热处理、包装线、公用工程和地域；未经分别给出结果或合理加权，不得合并实质不同路线。 | 场址与生产线说明；路线特定生产总量；加权计算 |
| `dq_completeness_reconciliation` | 材料、能源、水、产品、共产品、废物和排放 | 核对材料、水、能源、包装和废物总量；列出全部已知缺口并说明无法解释平衡差额的处理，不得静默截断。 | 平衡表；发票与库存核对；缺口登记 |
| `dq_coproduct_destination` | 共产品和回收材料 | 用同一报告期间的接收方、转移和分析证据支持产品或废物分类、状态、水分基准、去向和分配。 | 称重和水分结果；发运或内部转移；接收方接受；分配表 |
| `dq_wastewater_quality` | 废水和水体排放 | 在时间和位置上匹配监测流量与浓度，保留采样与分析方法，并区分送处理的转移和直接环境排放。 | 流量记录；采样方案；样品监管链；实验室结果；处理或排放记录 |
| `dq_quality_indicators` | 全部一次和二次数据 | 对照预定下游用途评估并披露精度、完整性、时间与地域代表性、技术代表性、一致性和可复现性。 | 数据质量评估和复核轨迹 |
| `dq_source_traceability` | 计算和外部规则 | 保留来源标识、公式、换算因子、版本或日期及输入记录，使每项投影数量均可复现，而不把编写日志写入 PCR。 | 计算工作簿或机器可读计算记录；来源登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考输出必须恰为 1 kg 净 Soy milk `b0bd96e4-7b19-4d9c-8d80-ea47b97bbde3`，使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg；必须排除包装质量。 | `unsd-cpc-3-2025`; `codex-cxs-322r-2015` |
| `validate_product_scope` | 产品身份 | 数据集须描述 CPC 24423 范围内的成品非发酵豆类饮料，并声明 Codex 亚型、大豆投入形态、配方、蛋白质基准、处理、包装、储存条件、地域和期间；排除的大豆产品和其他植物奶不符合范围。 | `unsd-cpc-3-2025`; `codex-cxs-322r-2015` |
| `validate_process_route` | 过程图 | 每个 required 过程须具有纳入活动或明确的路线特定说明；仅对已声明且具有上游数据集的大豆衍生物路线，水相提取可不运行；须说明实际处理和包装配置。 | `codex-cxs-322r-2015` |
| `validate_inventory_completeness` | 前景清单 | 数据包须包含或明确说明同一边界和期间内全部已知大豆与配料投入、进入产品和过程水、载能体、包装、参考产品、共产品、返工、损失、残余物、废水和直接排放。 | `eu-jrc-fdm-bref-2019`; `us-epa-lca-2006` |
| `validate_internal_transfers` | 中间与回收流 | 每个内部产品、返工、回收水或清洗液输出须有匹配接收投入；内部循环不得产生净产品或避免负担信用。 | `eu-jrc-fdm-bref-2019` |
| `validate_mass_water_balances` | 批次与场址平衡 | 材料与水平衡须可由采集记录复现；无法解释差额、蒸发假设、库存变化和回用流须披露，不得掩盖缺失清单。 | `eu-jrc-fdm-bref-2019`; `us-epa-lca-2006` |
| `validate_energy_reconciliation` | 能源清单 | 能源须按载能体分开，并与仪表、发票、燃料库存或已核验计算核对；购买能源与场内燃料不得重复计算。 | `us-epa-lca-2006` |
| `validate_coproduct_allocation` | 共产品和共享负担 | 须提供共产品状态和去向证据；分配须依次遵循避免分配、物理关系和有记录替代关系，分配因子合计为 1；使用替代关系时披露敏感性。 | `us-epa-lca-2006` |
| `validate_wastewater_boundary` | 废水 | 送处理的废水须保留为废物流；只有纳入最终处理边界后的监测排放才可作为基本流，并以匹配流量和浓度计算。 | `eu-jrc-fdm-bref-2019` |
| `validate_data_quality` | 数据集证据 | 必需采集协议、校准或核验证据、时间和场址覆盖、缺口披露、质量指标、公式、因子和来源链接须存在且可复现。 | `us-epa-lca-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成品豆奶制造前景数据包，经复核后可发布为单元过程数据集或汇总生产数据集 |
| downstream_use | 支持需要工厂大门处 CPC 24423 豆奶的产品系统作为 `secondary_dataset` 和 `background_dataset` 使用，并支持下游 `process` 和 `lifecyclemodel` 投影 |
| allowed_use | 当产品亚型、配方、处理、包装、地域、期间、边界和分配兼容时，用于豆奶供应的归因型 LCI 和 LCA 建模 |
| excluded_use | 食品安全或营养认证；未限定的豆奶与乳制奶或其他植物饮料比较；发酵大豆产品、豆腐或凝乳、大豆配料或非大豆植物奶；没有单独论证模型的替代或后果型声称 |
| required_metadata | canonical PCR id；CPC 24423；Tiangong 参考流 UUID；全部必需限定信息；场址和地域；报告期间；技术和路线；前景边界；纳入的包装层级；上游数据集链接；分配方法；共产品去向；数据质量评估；复核状态 |
| required_quality_disclosure | 一次数据、计算数据和二次数据的区分；仪表与校准状态；时间、地域和技术代表性；精度、完整性、一致性和可复现性；平衡差额；代理数据；排除项；分配敏感性；废水处理边界；未解决 UUID 或数据缺口 |
| update_trigger | 大豆投入形态、配方或 Codex 亚型变化；蛋白质或固形物基准重大变化；新增提取、分离、均质、热处理、灌装、包装、卫生清洗、公用工程或废水技术；共产品去向或分配变化；场址或地域变化；报告期间不再具有代表性；流身份或来源规则修正 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `standard` | 联合国统计司，Central Product Classification (CPC), Version 3.0，编码 24423 “Soy milk”，官方 CPC 资源与结构，https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期：2026-08-10） | 分类身份，以及与相邻非动物源奶和其他饮料类别的边界 |
| `codex-cxs-322r-2015` | `standard` | FAO 与 WHO 食品法典委员会，CXS 322R-2015，Regional Standard for Non-Fermented Soybean Products (Asia)，2015 年通过、2025 年修订，https://openknowledge.fao.org/handle/20.500.14283/cd8959en（检索日期：2026-08-10） | 非发酵大豆产品范围、饮料亚型、大豆或大豆衍生物与水的基础、物理提取、可选配料、组成与质量声明、加工和净重要求 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，JRC118627，2019，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索日期：2026-08-10） | 制造边界、水和能源记录、就地清洗、产品与残余物分离或回收、包装分离、废水监测及直接排放区分 |
| `us-epa-lca-2006` | `official_guidance` | 美国环境保护署，Life Cycle Assessment: Principles and Practice，EPA/600/R-06/060，2006 年 5 月，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1000L86.TXT（检索日期：2026-08-10） | LCI 边界与完整性、分配层级、前景数据采集、数据来源、计算可追溯性，以及精度、完整性、代表性、一致性和可复现性要求 |
