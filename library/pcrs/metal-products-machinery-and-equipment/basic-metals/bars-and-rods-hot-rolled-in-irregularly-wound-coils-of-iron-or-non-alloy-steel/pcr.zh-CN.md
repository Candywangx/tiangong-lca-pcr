---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-hot-rolled-in-irregularly-wound-coils-of-iron-or-non-alloy-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 不规则盘卷的铁或非合金钢热轧条、杆

## 1. 范围与适用性

本 PCR 适用于以钢坯或钢坯料热轧并以不规则盘卷形态（盘条）交付至钢铁厂门口的铁或非合金钢条、杆。前景边界从已声明的半成品钢投入接收开始，涵盖再加热、高压水除鳞、粗轧、中轧和精轧、控制冷却、吐丝或盘卷、检验、标识及发运准备。归属于该轧钢过程的场内水处理和废物处理亦纳入边界。

本 PCR 不包括合金钢或不锈钢盘条、直条热轧棒材、直条交付的钢筋、热轧扁平卷材、盘条生产后的冷拉、冷轧、酸洗或金属镀层、下游丝制品制造、钢铁厂门口之后的配送、使用及生命末期。炼铁、炼钢和浇铸位于前景边界之外，应通过上游钢坯或钢坯料数据集进入模型。即使生产者运营一体化钢铁厂，也应披露并链接这些上游过程，不得将其无说明地并入前景轧钢清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-hot-rolled-in-irregularly-wound-coils-of-iron-or-non-alloy-steel |
| classification_refs | CPC 3.0：41241（exact） |
| covered_products | 以不规则盘卷形态交付的铁或非合金钢热轧条、杆，包括圆形、椭圆形、方形、六边形、八边形或其他轧制截面且在工厂门口仍属于盘条的产品。 |
| excluded_products | 合金钢或不锈钢盘条；直条棒材；扁平卷材；冷拉或冷轧钢丝；酸洗、镀层或进一步制成丝制品的下游产品。 |
| representative_product | 由钢坯热轧并以有标识的不规则盘卷交付的非合金钢盘条。 |
| production_route | 接收钢坯或钢坯料；再加热；除鳞；连续粗轧、中轧和精轧；适用时进行控制水冷和风冷；吐丝或盘卷；检验和发运准备。上游钢坯数据集中应声明 BOF、EAF 或其他已记录的炼钢路线。 |
| market_state | 工厂门口、无镀层、呈不规则盘卷的热轧盘条；应声明牌号、化学成分、截面、名义直径或尺寸、公差、表面状态、盘重及交货状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为下游拉拔、轧制或制造供应工厂门口的不规则盘卷非合金钢盘条。 |
| How much | 1 公吨（1,000 kg）合格盘条。 |
| How well | 符合已声明的牌号或采购规范、化学成分、截面、尺寸和公差、力学或冶金状态、表面状态及盘卷验收准则。 |
| How long or cycle | 钢铁厂门口的一次生产输出；不代表使用阶段的服务期限。 |
| reference_flow_link | 过程 `wire_rod_hot_rolling` 的输出行 `reference_product_wire_rod`。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 不规则盘卷的铁或非合金钢热轧条、杆 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢牌号或规范；非合金钢化学成分依据；截面形状；名义直径或尺寸及公差；表面状态；盘重；交货状态；轧制与控制冷却技术；钢坯或钢坯料来源以及 BOF、EAF 或其他上游路线；生产场址和地理区域；生产期间；合格产品与降级品判定准则 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

准确的 TianGong 参考产品 UUID 尚未解决。不得仅为填充 UUID 字段而替换为扁平卷材、直条棒材、合金钢盘条、工程钢代理或通用钢流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有交换归一化到工厂门口 1,000 kg 合格盘条。分母不计入不合格品或降级品，并单独记录其去向。 |
| `material_mass` | 钢坯、润滑油、氧化铁皮、废钢、污泥及排放物质 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的质量记录，或以浓度乘以实测载体体积；当结果受其影响时，应保留湿基或干基、含水率及采样依据。 |
| `electricity_energy` | 交流电 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表读数及换算记录。按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ，且不得将电力与燃料能量合并。 |
| `natural_gas_volume` | 气态天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 天然气计量体积与能量含量分开记录，并声明温度、压力以及标准或正常参考条件；计算能量换算时保留净热值。 |
| `water_mass` | 工艺补充水和废水 | 质量 | kg | 区分总循环流量、补充水和排放废水。清单数量只报告跨边界的补充水和排放，同时保留循环流量记录用于工程校验。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在盘条轧机边界接收的、已标识的非合金钢钢坯或钢坯料，并声明其质量、牌号、尺寸、温度状态、供应商或自供来源、上游路线及所链接的上游数据集。 |
| starting_condition_role | 作为前景热轧投入的上游半成品钢产品。 |
| product_classification_scope | 以不规则盘卷交付的非合金钢盘条；分类范围不延伸至合金钢、不锈钢、直条棒材、扁平产品或下游冷加工和镀层产品。 |
| recursive_input_rule | 若某项投入已符合本 PCR 的盘条产品定义，应将其作为显式产品投入记录，链接上游数据集并说明用途；不得递归套用本 PCR 以隐藏复轧或混配。 |
| upstream_dataset_requirement | 每项钢坯或钢坯料投入均应链接在地理、技术和时间上具有代表性的上游数据集，并披露炼钢路线、再生投入处理和运至轧机的运输。来源未知时使用有记录的保守区域或全球数据集，并将其作为质量局限。 |
| disclosure | 声明浇铸是否与轧机联接、是否热装、再加热燃料和燃烧器技术、除鳞配置、轧制机列、控制冷却系统、水循环类型、场内处理、内部物料回用、外售共产品及工厂门口点。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_foreground_start_end` | foreground_system_boundary | 从已标识钢坯或钢坯料接收开始，到可离开钢铁厂门口的合格不规则盘卷非合金钢盘条结束。 | `jrc-fmp-bref-2022`, `worldsteel-wire-rod-2022` |
| `sb_required_operations` | foreground_system_boundary | 纳入再加热、除鳞、粗轧、中轧和精轧、控制冷却、吐丝或盘卷、检验、发运准备以及归属于本过程的场内水处理和废物处理。 | `jrc-fmp-bref-2022` |
| `sb_upstream_link` | upstream_steel_input | 炼铁、炼钢和浇铸保持在前景轧钢过程之外，并将钢坯或钢坯料链接至代表性上游数据集；一体化所有权不免除该项披露。 | `worldsteel-lci-methodology-2017` |
| `sb_direct_exchanges` | foreground_inventory | 将每种直接使用的燃料、电力流、工艺补充水和润滑油，以及每项废物和基本流排放分别记录；经证据证明不存在的列示交换记录为零。 | `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017` |
| `sb_exclusions` | downstream_system_boundary | 除非单独声明的研究扩展另行建模，否则排除下游冷拉、冷轧、酸洗、镀层、制造、配送、使用和生命末期。 | `worldsteel-wire-rod-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `wire_rod_hot_rolling` | 非合金钢盘条热轧与盘卷准备 | required | 范围内产品始终要求纳入。 | 从接收钢坯或钢坯料到钢铁厂门口合格不规则盘卷的前景生产。 | 1,000 kg 合格盘条输出。 |

### 过程：非合金钢盘条热轧与盘卷准备（`wire_rod_hot_rolling`）

#### 输入

##### 产品流

###### 接收的非合金钢钢坯或钢坯料（`steel_billet_input`）

已标识的半成品钢料进入盘条轧机边界。按牌号和批次记录接收质量，扣除可退运载具，并链接供应商或自供上游数据集。

- 选定流：钢坯 `7de70586-42d8-40bb-a687-e0e0c05722e4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：汇总投入生产的合格钢坯或钢坯料质量，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 再加热用天然气（`natural_gas_reheating`）

计量供应给钢坯再加热炉的气态天然气。仅在已声明炉窑实际消耗天然气时适用；若不使用，应由燃料和炉窑记录证明其为零。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：在已声明参考条件下计量炉窑天然气体积并按 `calc_normalize_one_tonne` 归一化；仅当使用另一种有记录的炉窑能源时可记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 轧机运行用交流电（`electricity_hot_rolling`）

计量炉窑辅助设备、除鳞泵、轧机机架、冷却系统、盘卷搬运、检验及归属于本过程的处理设备所用交流电。共享电表应按有记录的分表或物理驱动因子分配。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：汇总生产期间归属于本过程的计量电量，换算为 MJ，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 工艺补充水（`process_water`）

记录进入冷却、除鳞和水处理循环的新鲜水或外部供应补充水。不得将总循环流量作为边界投入报告。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量进入已声明轧机水系统的补充水，扣除供应给范围外用户的已记录水量，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy`
- 来源：`jrc-fmp-bref-2022`

###### 轧制润滑油（`rolling_lubricant`）

记录轧制和轧机设备消耗或损失的具体润滑油。回到同一系统的回收油不得再次作为新增投入计数。

- 选定流：热轧油 `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：汇总轧机领用润滑油，扣除实测未污染退回量及库存变化，再按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy`
- 来源：`jrc-fmp-bref-2022`

##### 废物流

无废物流进入本前景过程。内部返回残余物以原始产生和回收记录表示，不作为第二项外部投入。

##### 基本流

无基本流进入本前景过程。作为技术圈产品供应的水记录在产品投入中。

#### 输出

##### 产品流

###### 合格不规则盘卷非合金钢盘条（`reference_product_wire_rod`）

这是经冷却、盘卷成形和验收检验后的定量参考输出。准确 TianGong 产品流 UUID 尚未解决，不得用代理替代。

- 选定流：不规则盘卷的铁或非合金钢热轧条、杆
- 流属性/单位：质量 / kg
- 数量规则：固定参考输出 1,000 kg 合格产品；保留实际总输出和合格输出质量，用于成材率及分配计算。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：钢铁厂门口 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`unsd-cpc-3-0-2025`, `worldsteel-wire-rod-2022`

##### 废物流

###### 钢切头和轧废料（`steel_crop_scrap`）

记录离开前景过程并进入内部回炉、外部回收或处置的清洁钢切头、轧废料和不合格钢。底层记录应按去向分别保存数量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按去向称量或核算产生的废钢，并按 `calc_normalize_one_tonne` 归一化；只扣除经证明在同一计量前景系统内返回的物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_waste`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 氧化铁皮（`mill_scale`）

记录再加热、除鳞、轧制和水处理过程中分离的氧化铁皮。保留油含量、含水基准及去向，因为清洁回收氧化铁皮与含油氧化铁皮不可互换。

- 选定流：轧制氧化铁皮 `763bdad1-b443-428a-89b6-371a6807fc6c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按含油等级和去向汇总称量氧化铁皮，换算至已声明湿基或干基，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_waste`
- 来源：`jrc-fmp-bref-2022`

###### 送处理的热轧废水（`hot_rolling_wastewater`）

记录离开已声明轧机水循环并送往场内或外部处理的排污水或废水。无排放的闭路循环以水量平衡证据记录为零。

- 选定流：废水 `ba1c2ea5-0ea3-4981-a893-45a0650fea62`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：在已声明参考条件下计量排放废水体积，区分场内和外部处理，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_waste`
- 来源：`jrc-fmp-bref-2022`

###### 含油含铁水处理污泥（`oily_water_treatment_sludge`）

记录从热轧水处理系统清除的含油污泥。保留含水率、含油量、氧化铁含量及回收或处置去向。

- 选定流：含油含铁水处理污泥
- 流属性/单位：质量 / kg
- 数量规则：按去向汇总称量湿污泥，保留分析和含水基准，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_waste`
- 来源：`jrc-fmp-bref-2022`

##### 基本流

###### 排放到空气的二氧化碳（化石源）（`fossil_co2_air`）

记录再加热燃料燃烧及其他前景化石碳氧化产生的直接化石二氧化碳。本行不计入上游电力或钢坯生产排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：使用归属于前景轧机的经验证烟气或质量平衡记录，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 排放到空气的氮氧化物（以二氧化氮计）（`nox_air`）

按设施已声明并以二氧化氮表示的报告基准，记录再加热燃烧监测所得氮氧化物排放。

- 选定流：排放到空气的氮氧化物（以二氧化氮计）
- 流属性/单位：质量 / kg
- 数量规则：在相同含氧量和参考条件下，将经验证浓度乘以干或湿烟气体积，或使用经验证年度质量报告，再按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 排放到空气的二氧化硫（`sulfur_dioxide_air`）

记录已声明再加热燃料产生的二氧化硫。若燃料和经验证监测证明无应报告排放，应保留零值证据。

- 选定流：排放到空气的二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：使用同一生产期间经验证的烟气质量或有记录的燃料硫平衡，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 排放到空气的一氧化碳（`carbon_monoxide_air`）

按设施经验证的报告基准记录再加热系统不完全燃烧产生的一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：在一致条件下将经验证浓度乘以烟气体积，或使用经验证年度质量报告，再按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 排放到空气的总颗粒物（`particulate_matter_air`）

记录经已声明控制后由再加热炉、除鳞和轧制源排放的总颗粒物。保留各排放源测量，以免静默合并不同采样方法。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：汇总生产期间各排放源经验证的颗粒物质量，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 排放到水中的铁（`iron_water`）

记录处理后废水跨环境边界排放的铁。若所选水核算方法要求，应扣除进水中已实测存在的铁负荷。

- 选定流：铁 `08a91e70-3ddc-11dd-9597-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：以代表性铁浓度乘以匹配的排放体积，扣除已记录进水负荷，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_emissions`
- 来源：`worldsteel-lci-methodology-2017`

###### 排放到水中的矿物油（`mineral_oil_water`）

使用已声明分析方法记录处理后废水跨环境边界排放的矿物油。

- 选定流：排放到水中的矿物油
- 流属性/单位：质量 / kg
- 数量规则：以代表性矿物油浓度乘以匹配的排放体积，适用时扣除已记录进水负荷，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_emissions`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

###### 排放到水中的悬浮物（`suspended_solids_water`）

使用已声明过滤和干燥方法记录处理后废水跨环境边界排放的悬浮物。

- 选定流：排放到水中的悬浮物
- 流属性/单位：质量 / kg
- 数量规则：以代表性悬浮物浓度乘以匹配的排放体积，扣除已记录进水负荷，并按 `calc_normalize_one_tonne` 归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格盘条
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_emissions`
- 来源：`jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | foreground_shared_operations | 凡因果交换可测，应优先通过分表计量或细分单独运行的产线、牌号、生产周期和处理单元来避免分配。 | `worldsteel-lci-methodology-2017` |
| `alloc_internal_returns` | internal_scrap_scale_and_water | 同一计量前景系统内返回的废钢、氧化铁皮、油和水保留为内部循环；不得作为外售共产品给予抵扣，也不得将同一返回量作为新增外部投入。 | `jrc-fmp-bref-2022`, `worldsteel-wire-rod-2022`, `worldsteel-lci-methodology-2017` |
| `alloc_exported_recovery` | exported_recovered_material | 对单独计量且具有已记录外部市场和功能的输出，仅在证明被替代功能和数据集时采用系统扩展；否则按实际处理作为废物报告。披露替代对象和敏感性。 | `worldsteel-wire-rod-2022`, `worldsteel-lci-methodology-2017` |
| `alloc_shared_treatment` | shared_water_waste_and_energy_services | 共享水处理、废物处理和能源服务首先按直接计量分配，其次按处理体积、污染物负荷、能量或质量等物理因果驱动因子分配；披露驱动因子并排除无关厂区作业。 | `worldsteel-lci-methodology-2017` |
| `alloc_upstream_scrap_method` | linked_billet_or_bloom_dataset | 保留所链接上游钢数据集的再生投入和生命末期方法，并与前景轧机废钢分开报告；不得在本轧钢过程中再次给予废钢抵扣。 | `worldsteel-wire-rod-2022`, `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_energy` | `wire_rod_hot_rolling` | 钢坯、天然气、电力、工艺补充水和润滑油投入 | 地磅、生产台账、发票、储罐或库存记录及经校准仪表 | 时间戳；牌号和批次；毛重和净重；仪表起止读数；单位；气体温压基准；电力 kWh；水源；润滑油领用、退回及库存变化；产品归属 | 将记录与生产周期核对；可行时使用专用仪表，共享服务采用有记录的物理驱动因子。 | kg；m3；kWh；MJ | 连续或逐批采集并每月核对 | 通常连续 12 个月；少于 12 个月但至少 6 个月时须说明理由，并校正可预见的运行或季节变化。 | 场址内归属于已声明盘条轧机的全部设备和公用工程。 | 汇总期间跨边界数量，核对库存变化和退回量，再对合格输出归一化。 | 校准证书；仪表层级；发票；地磅单；库存核对；生产周期日志；分配工作表。 |
| `cp_outputs_waste` | `wire_rod_hot_rolling` | 合格产品、废钢、氧化铁皮、废水和含油污泥 | 产品秤、废物秤、发运记录、水表和处理记录 | 输出牌号和质量；验收状态；废钢质量和去向；氧化铁皮湿重或干重、含油量和含水率；废水体积和去向；污泥湿重和分析 | 将合格、降级、内部返回、外部回收和处置输出与同一生产期间核对。 | kg；m3 | 逐批或逐发运采集并每月核对 | 与 `cp_material_energy` 相同的代表性期间。 | 前景轧机及归属于本过程的场内处理。 | 分别汇总每项实物输出及去向；保留内部循环记录；对合格产品归一化。 | 产品证书；经校准秤；废物转移联单；回收凭证；水量平衡；污泥实验室结果。 |
| `cp_air_emissions` | `wire_rod_hot_rolling` | 直接化石二氧化碳、氮氧化物、二氧化硫、一氧化碳和总颗粒物 | 连续排放监测、定期烟道测试、质量平衡或受监管年度质量报告 | 排放源编号；运行小时；浓度；参考氧含量；干湿基；温度和压力；气体体积；适用时燃料碳和硫；控制状态；不确定性 | 匹配浓度和烟气流量条件；仅汇总归属于本过程的源质量；保留计算和监测层级。 | kg；mg/Nm3；Nm3 | 有连续监测时连续采集，否则采集每次有效测试并年度核对 | 与生产数据相同的代表性期间；记录测试代表性。 | 再加热炉和其他已声明轧机空气排放点。 | 计算生产期间各源质量，避免重复计算实测和计算报告，并对合格产品归一化。 | 监测证书；实验室报告；参考条件计算；燃料分析；监管申报；数据缺口日志。 |
| `cp_water_emissions` | `wire_rod_hot_rolling` | 排放到水中的铁、矿物油和悬浮物 | 流量比例或代表性样品及配对排水仪表 | 排口；采样时间；分析方法；浓度；排放体积；适用时进水浓度；处理状态；检出限；不确定性 | 将代表性浓度与匹配排放体积配对；核算方法要求时扣除已记录进水负荷。 | kg；mg/L；m3 | 按许可和过程波动采集，并每月和每年核对 | 与生产和水量平衡数据相同的代表性期间。 | 轧机或共享处理经分配后的归属最终排口。 | 分别计算每种污染物质量，按已声明规则处理未检出值，并对合格产品归一化。 | 认可实验室报告；样品流转记录；仪表校准；许可报告；进出水平衡；分配工作表。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_one_tonne` | 每项前景交换 | 归一化数量 = 期间交换数量 / 期间合格盘条质量 × 1,000 kg | 期间交换数量；期间合格盘条质量 | 每 1,000 kg 合格盘条的交换数量 | `worldsteel-wire-rod-2022` |
| `calc_electricity_mj` | 交流电 | 电力 MJ = 电表 kWh × 3.6；保留原始 kWh 记录，且不得与燃料能量合并 | 电表 kWh | MJ 交流电 |  |
| `calc_water_pollutant_mass` | 每项水基本流 | 污染物质量 = 匹配排放体积 × 代表性浓度 - 已记录进水污染物负荷；体积和浓度单位须一致 | 排放体积；排口浓度；适用时进水浓度 | 排放污染物 kg | `worldsteel-lci-methodology-2017` |
| `calc_mass_balance` | 轧制过程完整性 | 核对钢坯和其他质量投入与合格产品、降级品、废钢、氧化铁皮、污泥、实测排放及库存变化；调查无法解释的不平衡，不得强行闭合。 | 全部质量投入；产品和残余物输出；库存变化 | 有记录的轧机质量平衡及无法解释差异 | `worldsteel-lci-methodology-2017` |
| `calc_shared_service_allocation` | 共享电力、水和处理 | 使用已声明物理驱动因子将实测共享总量分配至盘条过程；各用户分配份额之和应等于实测总量。 | 共享总量；各用户驱动因子数量 | 归属于前景过程的交换 | `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和钢坯投入 | 保留牌号、化学成分依据、截面、名义尺寸、盘卷和批次标识、交货状态、上游路线及验收状态；不得将合金钢或直条棒材生产混入分母。 | 产品规范、质量证明书、生产订单、盘卷标签和验收记录。 |
| `dq_primary_foreground` | 门到门前景 | 轧机及归属处理使用实测一次数据；计算或估算替代须记录层级、公式及不确定性。 | 仪表和秤记录、实验室报告、计算文件及数据缺口日志。 |
| `dq_temporal` | 所有前景记录 | 可行时采用代表性 12 个月期间。若采用至少 6 个月的期间，应说明理由并考虑可预见的季节、生产周期和检修变化。 | 期间覆盖报告、运行日历、停机和生产周期记录。 |
| `dq_geography_technology` | 上游和前景数据集 | 匹配场址地理、电力供应、再加热燃料、燃烧器、轧制机列、冷却及水循环技术；披露偏差和未知上游钢坯来源。 | 数据集元数据、供应商记录、工艺流程图和技术说明。 |
| `dq_completeness` | 清单 | 对每项列示原子交换进行核算，或保留其为零的证据；记录任何其他场址特定物料、燃料、排放或废物及截断决定。 | 完整性检查表、质量和能量平衡、环境清单及截断日志。 |
| `dq_no_proxy_uuid` | TianGong 身份引用 | 在直接验证准确流、类型、状态、属性和单位支持前保持 UUID 为空；不得提升语义不同的钢、公共工程、废物或排放代理。 | UUID 审核记录和未解决清单登记。 |
| `dq_range_evidence` | 数量范围 | 除非至少两项独立原始来源具有兼容系统边界、声明单位和产品状态，否则不得推导外部经验范围；在此之前使用前景记录且不虚构范围。 | 来源对比记录或明确的未解决范围证据需求。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_reference_output` | reference_flow | 确认定量参考输出恰为 1,000 kg 合格不规则盘卷非合金钢盘条，且所有清单行采用相同合格输出分母。 | `worldsteel-wire-rod-2022` |
| `val_identity_scope` | product_identity | 若数据包混入合金钢或不锈钢、直条棒材、扁平产品或下游冷加工和镀层产品且未单独建模和披露，则拒绝该数据包。 | `unsd-cpc-3-0-2025`, `jrc-fmp-bref-2022` |
| `val_boundary_link` | system_boundary | 确认钢坯或钢坯料来源及上游路线已声明并链接；确认下游拉拔、轧制、镀层、配送、使用和生命末期已排除或单独识别。 | `worldsteel-lci-methodology-2017`, `worldsteel-wire-rod-2022` |
| `val_process_completeness` | foreground_inventory | 确认再加热、除鳞、轧制、控制冷却、盘卷成形、归属水处理及每项列示原子交换均已测量或有明确零值证据。 | `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017` |
| `val_mass_balance` | mass_inventory | 核对钢坯和其他质量投入与合格产品、废钢、氧化铁皮、污泥、直接排放和库存变化；调查并披露无法解释的不平衡。 | `worldsteel-lci-methodology-2017` |
| `val_energy_water_separation` | energy_and_water_inventory | 确认电力、天然气和水为独立交换；确认补充水不是总循环流量，且天然气参考条件已声明。 | `jrc-fmp-bref-2022`, `worldsteel-lci-methodology-2017` |
| `val_allocation` | allocation_and_recovery | 确认内部返回无外售产品抵扣，共享服务分配闭合至实测总量，且任何系统扩展抵扣均指出实际外部功能和替代数据集。 | `worldsteel-wire-rod-2022`, `worldsteel-lci-methodology-2017` |
| `val_uuid_resolution` | tiangong_references | 确认每个已填写 UUID 均为公开状态 100、语义准确、流类型正确且属性和单位支持正确；确认每个空 UUID 均出现在未解决清单登记中。 |  |
| `val_bilingual_alignment` | bilingual_pcr | 确认中英文 process id、row id、UUID、受控值、source id 和规范性 rule id 相同，并且面向读者的中文流名称已本地化。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 由经审查场址前景记录生成的 `secondary_dataset` 或 `background_dataset`。 |
| downstream_use | 用于下游钢丝拉拔、冷轧、制造和产品 LCA 的从摇篮到大门产品系统；需要已声明非合金钢盘条投入的 process 和 lifecyclemodel 投影。 |
| allowed_use | 当产品化学成分、交货状态、上游路线、地理、技术和期间具有代表性，且所选再生或分配方法与下游研究兼容时使用。 |
| excluded_use | 不得用作合金钢或不锈钢盘条、直条棒材、钢筋、扁平卷材、冷拉钢丝、镀层钢丝、丝制品或上游炼钢路线和轧机技术存在实质差异的场址代理，除非开展敏感性分析。 |
| required_metadata | PCR id 和版本；产品牌号和规范；化学成分依据；截面和名义尺寸；盘重和交货状态；场址和地理；期间；钢坯来源和上游路线；热装状态；再加热燃料和技术；轧制与冷却配置；水循环及处理边界；分配和再生方法；参考产品 UUID 状态。 |
| required_quality_disclosure | 一次数据占比；仪表和秤覆盖；时间覆盖；分配驱动因子；质量和能量平衡结果；水量平衡；排放监测依据；缺失或估算交换；未解决 UUID；上游数据集质量；不确定性及截断决定。 |
| update_trigger | 钢牌号系列、钢坯来源或 BOF/EAF 路线、再加热燃料或燃烧器、热装实践、轧制或冷却技术、水循环、处理路线、分配或再生方法、场址地理、参考产品 UUID，或导致代表性结果发生实质变化的生产期间更新。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，代码 41241。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-03）。 | 官方产品分类身份以及非合金钢不规则盘卷范围。 |
| `jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，EUR 31321 EN，JRC131649，2022。https://doi.org/10.2760/196475（检索日期：2026-09-03）。 | 经原文核验的盘条轧机工序；再加热、除鳞、轧制、控制冷却和盘卷；热轧投入、水循环、废物和排放。 |
| `worldsteel-wire-rod-2022` | 数据集（`dataset`） | 世界钢铁协会，《worldsteel LCA eco-profile: Wire Rod》，2022 年 5 月。https://worldsteel.org/wp-content/uploads/worldsteel_eco-profiles_global-Wire-Rod-2022_Other.pdf（检索日期：2026-09-03）。 | 一公吨声明产品、盘条状态、BOF/EAF 路线披露、工厂门口边界、内部废钢处理及共产品系统扩展。 |
| `worldsteel-lci-methodology-2017` | 方法因子（`method_factor`） | 世界钢铁协会，《Life Cycle Inventory Methodology Report for Steel Products》，2017，ISBN 978-2-930069-89-0。https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf（检索日期：2026-09-03）。 | 钢铁 LCI 边界、上游半成品钢链接、前景采集、排放完整性、数据质量、截断、废钢、共产品、分配和校验规则。 |
| `china-mof-tariff-2014` | 官方指南（`official_guidance`） | 中华人民共和国财政部，含 HS 7213 中文货品术语的税则表，2014。https://m.mof.gov.cn/zcfb/201404/P020140429621906752215.pdf（检索日期：2026-09-03）。 | “热轧盘条”和“铁或非合金钢条、杆”的专业中文术语；不支持任何数量规则。 |
