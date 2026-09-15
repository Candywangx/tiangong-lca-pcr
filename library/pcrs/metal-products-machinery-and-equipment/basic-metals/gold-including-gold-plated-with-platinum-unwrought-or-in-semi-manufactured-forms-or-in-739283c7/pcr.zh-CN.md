---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.gold-including-gold-plated-with-platinum-unwrought-or-in-semi-manufactured-forms-or-in-739283c7
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 金（包括镀铂的金），未锻造、半制成或粉末状

## 1. 范围与适用性

本PCR适用于精炼厂或金属成形设施前景边界内的金生产，其可销售产出为CPC 41320所涵盖的未锻造金、金粉、半制成金，或镀铂的金。前景边界始于已接收并完成化验的含金精炼原料，止于按质量核算、处于声明销售形态的金产品。初级或中间产品多雷金原料与次生黄金废料作为不同的条件性输入处理，并须声明实际采用的精炼与成形路线。

采矿、选矿、矿区浸出、精炼厂接收前的废料收集、成品首饰、硬币、电子元件及下游使用不属于前景过程；在研究范围包含这些环节时，其负荷由上游数据集表示。金矿石与精矿、黄金废料、包金的贱金属或银，以及制成品均不是本PCR的参考产品。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.gold-including-gold-plated-with-platinum-unwrought-or-in-semi-manufactured-forms-or-in-739283c7 |
| classification_refs | CPC 3.0: 41320 |
| covered_products | 未锻造金；金粉；半制成金；金仍为分类产品的镀铂金 |
| excluded_products | 金矿石与精矿；黄金废料和废碎屑；包金的贱金属或银；成品首饰、硬币、电子零件及其他制成品 |
| representative_product | 按质量核算、具有声明形态和成色的可销售金 |
| production_route | 按实际采用的火法精炼、电解精炼、盐酸/氯气、王水、沉淀、熔化、铸造、制粒、制粉或成形顺序，对经化验的多雷金或已接收黄金废料进行精炼 |
| market_state | 位于精炼厂或成形设施大门，未包装；声明形态、成色、合金/镀铂状态以及水分或表面处理核算基础 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 产品内容 | 生产CPC 41320范围内声明的可销售金形态 |
| 产品数量 | 设施大门处1 kg净重金产品 |
| 产品质量 | 符合生产商声明的成色、物理形态、尺寸或粒度规格、合金状态及镀铂状态 |
| 产品使用寿命 | 报告期所代表的一个生产批次或生产周期；不指定使用寿命 |
| reference_flow_link | 产出行 `output_gold` 为定量参考 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 金 `4ceb691b-15cf-4775-b55e-06a0370973a7` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定条件 | 最终物理形态；金成色及化验方法；合金组成；是否镀铂及镀层核算基础；生产路线；初级/中间原料或再生原料路线；设施地域；报告期；净重边界；不含包装 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流注释、产品描述或等效字段中声明“必需限定条件”所列内容。任何必需限定条件缺失，均使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及按质量核算的物料行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含包装的净质量。声明金粉水分、表面镀层或残留工艺液是否计入；所有清单数量均归一化至1 kg声明参考产品。 |
| `contained_gold_accounting` | 多雷金、废料、产品、残渣及共产品的金属核算 | 质量与化验质量分数 | kg Au | 根据实测批次质量、必要时的干物质修正及代表性化验结果计算含金量。保留毛质量及化验记录，不得以名义成色代替实测化验结果。 |
| `gas_reference_conditions` | 气态天然气与工业氧气 | 体积 | m3 | 记录仪表基准温度、压力、干湿基准及标准状态；仅在这些条件和换算方法有记录时换算体积。 |
| `electricity_energy_basis` | 交流电 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留原始计量单位和结算区间。将kWh换算为MJ时，采用精确SI关系1 kWh = 3.6 MJ，并同时保留两个数值。 |

## 5. 系统边界

前景系统包括原料接收与化验；仅包括实际采用的原料制备、熔化、溶解、精炼、电解精炼、沉淀、铸造、制粒、制粉或半制成作业；烟气捕集与处理；可归属于产品的内部废水输送与处理；以及最终产品化验与称量。建筑物和资本设备默认不纳入前景清单，除非明确声明纳入。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已接收的含金原料已跨越设施大门，具有唯一批次标识、实测质量、代表性含金化验结果、物理状态描述、供应商/来源路线以及废物或产品法律状态。 |
| starting_condition_role | 前景大门输入；声明研究边界要求时，上游生产、收集和运输另行表示。 |
| product_classification_scope | 仅限CPC 3.0代码41320的可销售产出。 |
| recursive_input_rule | 已购买或转移、且本身属于CPC 41320的金输入以其上游数据集记录，不在本前景过程内递归生产。内部返工仅在物料平衡中记录一次，不作为新的外部输入。 |
| upstream_dataset_requirement | 构建从摇篮到大门结果时，为多雷金、所选再生系统模型下的黄金废料、电力、燃料、氧气、水及各试剂链接地域、技术、浓度和交付边界适当的上游数据集。 |
| disclosure | 声明原料路线及法律状态、供应商/来源地域、化验及干重基础、精炼/成形技术、纳入的环境控制作业、再生分配方法、共产品、内部循环、截断、产品形态/成色以及是否纳入上游运输。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_operation_selection | 仅纳入将已接收原料转化为声明金产品而实际采用的作业；将路线特定的试剂和排放记录为条件性原子交换。 | `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020` |
| `boundary_rule_2` | environmental_controls | 纳入可归属的烟气捕集/洗涤和废水中和或处理；不得将未经处理的产生量与处理后排放量作为同一交换报告。 | `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020` |
| `boundary_rule_3` | upstream_and_recycling_boundary | 将从已接收原料到可销售产品的物理前景收集，与上游数据集及声明的再生系统模型清晰区分。 | `fritz-gold-scrap-recycling-2020` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `gold_refining_and_forming` | 含金原料制备、精炼、环境控制及最终成形 | required |  | 从已接收精炼原料至可销售金产品的前景生产 | 1 kg `output_gold` |

### 过程：含金原料制备、精炼、环境控制及最终成形（`gold_refining_and_forming`）

#### 输入

##### 产品流

###### 多雷金锭精炼原料（`feed_dore_bullion`）

多雷金锭作为产品输入进入前景大门时予以记录。仅适用于以多雷金供应的批次；保留实测质量、金银化验结果、杂质谱、来源路线和供应商数据集链接。

- 选定流：多雷金锭 `51a53db0-358c-463b-96b3-691fc1e4b654`
- 流属性/单位：质量 / kg
- 数量规则：已接收多雷金批次的实测净质量
- 数值模式：前景记录（`foreground_record`）
- 特定性：产品特定（`product_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_material_mass_and_assay`
- 来源：`eu-jrc-nfm-bref-2017`

###### 交流电（`input_electricity`）

记录纳入的生产设备和环境控制设备消耗的计量交流电。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：净热值 / MJ
- 数量规则：分配至纳入作业的实测用电量
- 数值模式：前景记录（`foreground_record`）
- 特定性：场址特定（`site_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_energy_and_fuel_records`
- 来源：`eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### 气态天然气（`input_natural_gas`）

纳入的炉窑、干燥器或热力环境控制作业使用气态天然气时予以记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：在有记录的基准条件下实测的交付气体
- 数值模式：前景记录（`foreground_record`）
- 特定性：场址特定（`site_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_energy_and_fuel_records`
- 来源：`fritz-gold-scrap-recycling-2020`

###### 工业氧气（`input_industrial_oxygen`）

仅当灰吹、氧燃料熔炼、氧化或其他纳入的精炼作业使用工业氧气时予以记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：在有记录的基准条件下实测的交付氧气
- 数值模式：前景记录（`foreground_record`）
- 特定性：技术特定（`technology_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_gas_reagent_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 工艺用水（`input_process_water`）

记录溶解、洗涤、制粒、电解液补充、洗涤器或可归属废水处理所供应的工艺用水。新鲜水与内部循环水分开记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：实测新鲜工艺用水输入
- 数值模式：前景记录（`foreground_record`）
- 特定性：场址特定（`site_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_water_records`
- 来源：`eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### 盐酸溶液（`input_hydrochloric_acid`）

仅对消耗盐酸溶液的路线记录。供应浓度和产品状态是必需限定条件；在选定精确的浓度特定标识之前，UUID保持未解决。

- 选定流：盐酸溶液
- 流属性/单位：质量 / kg溶液
- 数量规则：实测所供应盐酸溶液质量并记录浓度
- 数值模式：前景记录（`foreground_record`）
- 特定性：技术特定（`technology_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_reagent_records`
- 来源：`eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### 硝酸（`input_nitric_acid`）

仅当采用王水或其他含硝酸作业时记录硝酸；保留供应浓度和等级。

- 选定流：硝酸 `bf883501-c052-414e-8e21-e6f53cc257ba`
- 流属性/单位：质量 / kg
- 数量规则：记录浓度的所供应硝酸实测质量
- 数值模式：前景记录（`foreground_record`）
- 特定性：技术特定（`technology_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_reagent_records`
- 来源：`eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### 氢氧化钠（`input_sodium_hydroxide`）

记录烟气洗涤、废水中和、适用时的氰化物破坏或其他纳入作业消耗的氢氧化钠；保留供应浓度和状态。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：所供应氢氧化钠产品或溶液的实测质量
- 数值模式：前景记录（`foreground_record`）
- 特定性：技术特定（`technology_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_reagent_records`
- 来源：`eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### 生石灰（`input_quicklime`）

仅当可归属废水中和消耗生石灰时予以记录。不得以通用石灰或仅按体积计量的散装产品标识替代。

- 选定流：生石灰
- 流属性/单位：质量 / kg
- 数量规则：实测生石灰消耗质量
- 数值模式：前景记录（`foreground_record`）
- 特定性：技术特定（`technology_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_reagent_records`
- 来源：`fritz-gold-scrap-recycling-2020`

###### 二氧化硫（`input_sulfur_dioxide`）

仅当使用二氧化硫从溶液中沉淀金时予以记录；保留纯度和供应状态。

- 选定流：二氧化硫 `fdbae35b-dde5-45ff-9834-f61e1cdf32e4`
- 流属性/单位：质量 / kg
- 数量规则：供应至金沉淀作业的实测质量
- 数值模式：前景记录（`foreground_record`）
- 特定性：技术特定（`technology_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_gas_reagent_records`
- 来源：`fritz-gold-scrap-recycling-2020`

###### 氯气（`input_chlorine`）

仅当米勒精炼、盐酸/氯气溶解或纳入的电解液作业使用氯气时予以记录。

- 选定流：氯气 `1fb2c22c-c189-4e2a-9a9f-810b59c37325`
- 流属性/单位：质量 / kg
- 数量规则：供应至纳入作业的实测质量
- 数值模式：前景记录（`foreground_record`）
- 特定性：技术特定（`technology_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_gas_reagent_records`
- 来源：`eu-jrc-nfm-bref-2017`

##### 废物流

###### 黄金废料精炼原料（`feed_gold_scrap`）

仅在次生路线中记录已接收的黄金或包金属废料和废碎屑。保留法律状态、来源类别、实测质量、含金化验、非金组成及再生系统模型。

- 选定流：黄金或包金属的废料和废碎屑
- 流属性/单位：质量 / kg
- 数量规则：已接收黄金废料批次的实测净质量
- 数值模式：前景记录（`foreground_record`）
- 特定性：产品特定（`product_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_material_mass_and_assay`
- 来源：`eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

##### 基本流

不规定基本流输入。任何直接取用的资源均须作为单独的实测基本流行添加。

#### 输出

##### 产品流

###### 参考金产品（`output_gold`）

最终化验和称量后记录可销售产品。形态、成色、尺寸或粒度规格、合金组成及镀铂状态必须与声明的参考产品一致。

- 选定流：金 `4ceb691b-15cf-4775-b55e-06a0370973a7`
- 流属性/单位：质量 / kg
- 数量规则：合格可销售金产品的实测净质量
- 数值模式：前景记录（`foreground_record`）
- 特定性：产品特定（`product_specific`）
- 归一化基础：恰好1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_material_mass_and_assay`
- 来源：`un-cpc-3-0-structure-2025`; `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

##### 废物流

###### 转移处理的精炼废水（`output_wastewater`）

记录从纳入作业转移至处理的一股实测废水。保留pH、质量或密度换算、溶解/悬浮金属、氯化物/硝酸盐含量、去向以及处理前后状态。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：质量 / kg
- 数量规则：所定义精炼废水流的实测质量
- 数值模式：前景记录（`foreground_record`）
- 特定性：场址特定（`site_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_waste_records`
- 来源：`eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020`

###### 废水中和产生的金属氢氧化物污泥（`output_metal_hydroxide_sludge`）

记录可归属金精炼废水经中和、过滤产生的脱水金属氢氧化物污泥。不得与阳极泥、石油精炼污泥或可回收中间物混合。

- 选定流：金精炼废水处理产生的金属氢氧化物污泥
- 流属性/单位：质量 / kg湿污泥
- 数量规则：实测湿质量，并记录干物质分数和去向
- 数值模式：前景记录（`foreground_record`）
- 特定性：场址特定（`site_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_waste_records`
- 来源：`fritz-gold-scrap-recycling-2020`

##### 基本流

###### 排放到空气中的化石源二氧化碳（`emission_carbon_dioxide_fossil`）

记录纳入作业中燃烧产生的直接化石源二氧化碳，不包括上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：根据实测燃料使用量和有记录的碳含量/氧化基础计算直接化石CO2，或采用实测烟囱排放质量
- 数值模式：计算值（`calculated_value`）
- 特定性：场址特定（`site_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：燃料清单（`fuel_inventory`）
- 证据类型：根据收集数据计算（`calculated_from_collection`）
- 收集方案：`cp_energy_and_fuel_records`
- 来源：`fritz-gold-scrap-recycling-2020`

###### 排放到空气中的氯化氢（`emission_hydrogen_chloride_to_air`）

采用含氯作业时，记录纳入的精炼烟囱经治理后排放的实测氯化氢。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：报告期内积分的治理后烟囱实测排放
- 数值模式：前景记录（`foreground_record`）
- 特定性：场址特定（`site_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_stack_emission_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排放到空气中的氯（`emission_chlorine_to_air`）

采用氯气作业时记录经治理后的实测氯。仅在确定实际空气排放区室后选择UUID。

- 选定流：排放到空气中的氯
- 流属性/单位：质量 / kg
- 数量规则：报告期内积分的治理后烟囱实测排放
- 数值模式：前景记录（`foreground_record`）
- 特定性：场址特定（`site_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_stack_emission_records`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排放到空气中的二氧化氮（`emission_nitrogen_dioxide_to_air`）

仅当监测方法按二氧化氮质量报告时，才以该基础记录氮氧化物监测结果。不得以亚硝酸盐替代。

- 选定流：排放到空气中的二氧化氮
- 流属性/单位：质量 / kg NO2
- 数量规则：报告期内积分的治理后二氧化氮实测排放
- 数值模式：前景记录（`foreground_record`）
- 特定性：场址特定（`site_specific`）
- 归一化基础：每1 kg参考金产品
- 基础类型：参考流（`reference_flow`）
- 证据类型：收集记录（`collected_record`）
- 收集方案：`cp_stack_emission_records`
- 来源：`eu-jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | separately_metered_operations | 通过过程细分，并将实测输入、废物和排放直接归属于产生它们的作业和批次，以避免分配。 | `fritz-gold-scrap-recycling-2020` |
| `allocation_rule_2` | inseparable_multi_output_operations | 金与其他有价金属在测量点不可分时，以有记录的同期净价值为基础，将质量分配和经济分配作为敏感性情景报告；明确主要情景，并保留质量、化验、价格、币种、日期及计算。 | `fritz-gold-scrap-recycling-2020` |
| `allocation_rule_3` | internal_recovery_and_rework | 内部回收的含金残余物仅返回物料平衡一次，不作为新的外部输入或避免产品；输出设施的物料使用单独且经核实的产品流或废物流。 | `eu-jrc-nfm-bref-2017` |
| `allocation_rule_4` | recycled_feed | 声明黄金废料的再生系统模型；除非明确扩展边界，否则上游收集或避免初级生产的抵扣不进入物理前景清单。 | `fritz-gold-scrap-recycling-2020` |

## 8. 前景数据收集、计算与质量规则

### 数据收集方案

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_and_assay` | `gold_refining_and_forming` | 已接收原料、产品及含金平衡 | 称量记录与实验室化验 | lot_id; time; gross_mass; tare_mass; net_mass; dry_fraction; Au_assay; other_assays; assay_method; sample_id; form; disposition | 每批次校准称量及有记录的代表性取样/化验 | kg; 质量分数 | 每批次 | 完整报告期 | 接收、中间及发运点 | 逐批计算含金量后再按期间汇总 | 衡器校准；取样计划；实验室QA/QC；监管链；核对 |
| `cp_energy_and_fuel_records` | `gold_refining_and_forming` | 电力、天然气及直接化石CO2 | 仪表、发票及燃料规格 | meter_id; readings; unit; time; allocation_driver; gas_conditions; carbon_factor; oxidation_basis | 读取校准仪表、核对发票并仅分配至纳入作业 | MJ; kWh; m3 | 至少每月及生产周期变化时 | 完整报告期 | 纳入的生产和控制设备 | 各载能体分别求和，扣除有记录的输出，归一化至产品，并单独计算直接CO2 | 校准；发票；核对；燃料规格 |
| `cp_gas_reagent_records` | `gold_refining_and_forming` | 氧气、二氧化硫及氯气 | 流量计、罐/钢瓶领用或发票 | identity; purity; state; mass_or_volume; reference_conditions; issue_quantity; operation; lot_id | 按作业和生产周期核对交付及领用记录 | kg; m3 | 每次交付或领用 | 完整报告期 | 纳入的精炼作业 | 按消耗路线分别汇总每种气体 | 校准；供应商证书；库存核对 |
| `cp_water_records` | `gold_refining_and_forming` | 新鲜工艺用水 | 水表及转移记录 | meter_id; source; readings; unit; density; operation; recycled_return | 新鲜水与循环水分开计量 | kg; m3 | 至少每月 | 完整报告期 | 纳入的供水点 | 仅在密度有记录时换算体积；防止循环水重复计数 | 校准；水量平衡；发票或取水记录 |
| `cp_reagent_records` | `gold_refining_and_forming` | 液体及固体试剂 | 采购、库存、批次及加料记录 | identity; concentration; grade; state; opening_stock; receipts; closing_stock; issued; returns; operation; lot_id | 各化学品分别核对库存变化及加料 | kg产品; kg活性物 | 每批次并按月核对 | 完整报告期 | 试剂库及加料点 | 期初加接收减期末减退回；分别报告产品和活性物基础 | 供应商证书；库存核对；校准加料记录 |
| `cp_waste_records` | `gold_refining_and_forming` | 废水及氢氧化物污泥 | 仪表/称量、分析及转移联单 | stream_id; stage; mass_or_volume; density; pH; dry_fraction; metals; anions; destination; waste_code; date | 计量每股定义流，并保留代表性分析和转移证据 | kg; m3; 质量分数 | 每次转移或连续累计 | 完整报告期 | 可归属处理转移 | 按处理状态和去向汇总各股流；防止处理前后重复计数 | 校准；实验室QA/QC；联单；处理日志 |
| `cp_stack_emission_records` | `gold_refining_and_forming` | 治理后HCl、氯及NO2 | 监测或烟囱测试及运行日志 | source_id; pollutant; concentration; flow; reference_conditions; correction; duration; method; detection_limit; hours; abatement_status | 使用适用方法，将浓度与干烟气流量及运行时间配对 | kg; mg/Nm3; Nm3/h | 许可频率或连续 | 报告期内代表性运行状态 | 各可归属排放点 | 按排放源计算质量，仅在相同化学基础上合计同种物质 | 校准；认可报告；检出限规则；运行日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | 逐批含金量 | contained_Au_kg = net_mass_kg × dry_matter_fraction × Au_assay_mass_fraction | 批次质量、干物质分数、化验结果 | kg含金量 | `mass-balance-identity` |
| `calc_rule_2` | 归一化清单 | normalized_exchange = reporting_period_exchange ÷ conforming_output_gold_kg | 期间交换量和产品质量 | 每1 kg金的交换量 | `mass-balance-identity` |
| `calc_rule_3` | 库存核对试剂使用量 | reagent_use = opening_stock + receipts - closing_stock - documented_returns | 库存及领用记录 | kg产品及活性物 | `mass-balance-identity` |
| `calc_rule_4` | 直接化石源二氧化碳 | 根据实测燃料量以及有记录的碳含量和氧化基础计算；不包括生物源及上游燃料周期排放。 | 燃料量、能量基础、碳因子、氧化基础 | kg化石CO2 | `mass-balance-identity` |
| `calc_rule_5` | 实测烟囱排放 | pollutant_mass = concentration × dry-gas flow × operating duration，在一致基准条件下计算并记录低于检出限的处理方法 | 浓度、烟气流量、持续时间、修正 | kg污染物 | `eu-jrc-nfm-bref-2017` |
| `calc_rule_6` | 金物料平衡闭合 | closure = (contained_Au_inputs - contained_Au_outputs_and_documented_losses) ÷ contained_Au_inputs；超出批准控制限的差异应调查，不得强制平账 | 经化验输入、产品、残余物、在制品变化、损失 | 无量纲核对值 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_1` | 产品与原料标识 | 保留批次层面的形态、化验、成色、杂质/合金谱、来源路线、法律状态及监管链；路线层面报告前不得合并多雷金和废料路线。 | 称量、化验、供应商声明及批次谱系 |
| `dq_2` | 完整性 | 涵盖报告期内所有纳入作业和所有适用原子行；解释每个缺失或为零的路线特定行。 | 签署的过程图及台账/公用工程核对 |
| `dq_3` | 时间与地域代表性 | 使用一致期间，通常至少连续12个月；完整生产周期更具代表性时可采用该周期。识别设施及上游数据集地域。 | 报告日历、生产日志及元数据 |
| `dq_4` | 计量与实验室质量 | 使用校准仪器，并记录取样、检出限、实验室QA/QC以及化验和排放的不确定性。 | 校准、取样计划、控制图及认可报告 |
| `dq_5` | 技术与控制 | 声明路线、运行状态、治理、废水处理、内部循环及所代表的异常事件。 | 工艺流程图、批次表、控制日志及事故记录 |
| `dq_6` | 分配透明度 | 保留未分配测量值及所有质量/经济分配输入，以供重现和敏感性比较。 | 分配工作表、质量/化验、价格来源及日期 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_product | 确认归一化后`output_gold`等于1 kg，且形态、成色、合金组成和镀铂状态属于本类别。 | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | inventory_identity | 确认每张卡片仅表示一个原子交换；带UUID的行符合所述标识/属性/单位及官方中文名称；未解决行保持UUID为空。 |  |
| `validation_rule_3` | route_consistency | 路线特定试剂或排放若无相应声明作业则拒绝；已声明作业若遗漏适用的实测输入、废物或排放且无解释亦拒绝。 | `eu-jrc-nfm-bref-2017`; `fritz-gold-scrap-recycling-2020` |
| `validation_rule_4` | mass_and_assay_balance | 重新计算含金输入、产出、在制品变化、残余物及实测损失；差异应调查，不得强制平账。 | `mass-balance-identity` |
| `validation_rule_5` | environmental_control_state | 确认废水标明处理状态/去向，空气排放为治理后排放并具有实际区室和监测基础。 | `eu-jrc-nfm-bref-2017` |
| `validation_rule_6` | data_provenance | 确认每个归一化数量可追溯至指定方案和同期记录，换算及分配可重现。 |  |
| `validation_rule_7` | range_use | 路线和产品状态具备至少两个相互独立、经原文核实且边界相容的来源支持综合前，不得使用外部经验范围。 |  |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 经评审后可作为secondary_dataset或background_dataset的前景生产数据集 |
| downstream_use | 用于声明金形态和路线特定从摇篮到大门研究的产品、过程及lifecyclemodel记录 |
| allowed_use | 适用于所代表设施、原料路线、技术、产品形态/成色、地域、期间、分配情景及边界 |
| excluded_use | 不得作为通用矿山到金数据集，也不得在未经评审时代理成品首饰/电子产品/硬币、其他再生模型或其他精炼路线 |
| required_metadata | PCR id/版本；产品形态/成色；合金/镀层状态；原料路线/法律状态；地域；期间；工艺路线；边界；上游数据集；再生模型；分配；UUID解决情况；所有者/评审状态 |
| required_quality_disclosure | 覆盖度；质量/化验核对；计量；代表性；截断；分配敏感性；未解决UUID；不确定性；异常事件；环境控制状态 |
| update_trigger | 原料路线、技术、控制、产品形态/成色、分配、地域、供应商组合或期间变化；重大更正；解决未完成UUID或范围证据 |

## 11. 数据来源

| 来源id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0版结构，2025年6月30日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于2026-09-04） | CPC 41320官方产品标识和市场形态 |
| `eu-jrc-nfm-bref-2017` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术参考文件》，2017年，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf（检索于2026-09-04） | 原料、金精炼路线、试剂、控制、排放及废水监测 |
| `fritz-gold-scrap-recycling-2020` | 文献（`literature`） | Fritz, B.; Aichele, C.; Schmidt, M. Environmental impact of high-value gold scrap recycling. International Journal of Life Cycle Assessment 25, 1930-1941 (2020). https://doi.org/10.1007/s11367-020-01809-6（检索于2026-09-04） | 再生金边界、王水工艺、试剂、废水/污泥、前景数据收集及分配 |
