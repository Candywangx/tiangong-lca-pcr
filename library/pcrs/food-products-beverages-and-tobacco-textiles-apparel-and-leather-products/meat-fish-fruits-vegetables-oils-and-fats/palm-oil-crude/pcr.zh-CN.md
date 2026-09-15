---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.palm-oil-crude
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 粗棕榈油

## 1. 范围与适用性

本 PCR 适用于以油棕鲜果串为原料、在棕榈油厂生产粗棕榈油的前景数据包。范围包括鲜果串接收与准备、灭菌或蒸煮、脱果、捣碎、压榨、油澄清与干燥、油厂门口的大宗储存、棕榈仁与固体残余物回收，以及存在时的厂内能源生产和油厂废水与残余物的处理或去向。

油棕种植和鲜果串运至所声明油厂边界的运输由可追溯上游数据集表示。精炼、脱色、脱臭、分提、棕榈仁油生产、消费包装、油厂门口之后的配送、使用和生命末期均不属于本前景 PCR。研究可在下游连接这些阶段，但不得将其输出描述为本 PCR 的参考产品。

本 PCR 适用于批式、半连续和连续路线。数据集必须声明路线、油厂规模、地理范围、报告期、鲜果串来源、能源系统、废水处理、共产品处理和粗油质量状态。FAO 的过程说明支持通用单元操作图；实际数量始终以前景场址记录为准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.palm-oil-crude |
| classification_refs | CPC 3.0: 21651, Palm oil, crude |
| covered_products | 从油棕鲜果串中果皮提取、在生产油厂门口以大宗形式交付的未精炼粗棕榈油 |
| excluded_products | 精炼、脱色、脱臭或分提棕榈油；棕榈液油；棕榈硬脂；棕榈仁油；单独销售的回收低等级工业油；其他植物油 |
| representative_product | 澄清并脱除水分后、精炼或分提前的粗棕榈油 |
| production_route | 鲜果串接收、灭菌或蒸煮、脱果、捣碎、压榨、澄清、干燥和油厂大宗储存，以及相关棕榈仁、能源、废水和残余物管理 |
| market_state | 油厂门口的大宗、未精炼液态或半固态粗油；声明质量特征与储存温度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在棕榈油厂门口提供作为未精炼大宗原料的粗棕榈油 |
| How much | 按声明的交付质量基准计 1 kg 粗棕榈油 |
| How well | 产品符合生产者声明的粗油规格；报告水分、杂质、游离脂肪酸基准及任何不合格状态 |
| How long or cycle | 声明报告期内的一次完整生产输出；不适用服务寿命 |
| reference_flow_link | `crude_palm_oil_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 粗棕榈油 `c25748fe-ebcf-4a0e-bcf9-544edb1645b1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产地理范围；报告期；油厂路线与规模；鲜果串来源和起始状态；粗油水分、杂质和游离脂肪酸报告基准；分配方法；能源配置；废水处理路线；大宗储存条件 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 粗棕榈油参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有报告清单归一化至澄清和干燥后恰好 1 kg 的交付状态粗棕榈油；报告实测油品水分和杂质，以便复现替代干物质计算。 |
| `material_mass_basis` | 鲜果串、棕榈仁、残余物、废水和油品库存 | Mass | kg | 记录接收状态质量；当水分显著影响解释时，同时记录实测水分或干物质含量；没有实测含量和公式时不得转换湿基与干基。 |
| `energy_quantity_basis` | 外购电力、燃料、自发电力和蒸汽 | Energy | 电力用 kWh；燃料和热能用 MJ | 保留计量表或发票单位，声明燃料低位或高位热值，并记录将能源归一化至参考流所用的每个转换因子。 |
| `reporting_period_balance` | 所有前景输入、输出和库存变化 | 视情况为 Mass 或 Energy | 来源单位和归一化单位 | 所有数据采用同一报告期；当期初和期末库存会显著影响归一化平衡时必须纳入。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_mill_gate_operations` | 粗棕榈油前景生产 | 纳入鲜果串接收、灭菌或蒸煮、脱果、捣碎、压榨、澄清、干燥、油厂大宗储存、棕榈仁与残余物回收，以及由油厂运营或与其物理集成的厂内能源生产、废水和残余物管理。 | `fao-palm-oil-processing-2002` |
| `boundary_upstream_traceability` | 鲜果串和外购公用工程 | 将种植和鲜果串入厂运输建模为可追溯上游产品投入；外购电力、燃料、水、化学品和废物服务采用地理与技术代表性适当的上游数据集。 | `eu-jrc-ilcd-handbook-2010` |
| `boundary_excluded_downstream` | 下游加工 | 从前景参考产品数据集中排除精炼、脱色、脱臭、分提、棕榈仁油制造、面向消费者的包装和生产油厂门口之后的配送。 | `fao-palm-oil-processing-2002` |
| `boundary_no_unreported_disposal` | 废水、残余物和直接排放 | 不得假定油厂废水、空果串、纤维、壳、灰、污泥或直接排放无负荷或为零；记录其实测去向和处理路线，或披露有依据的数据缺口。 | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在油厂接收的鲜果串或散装油棕果，声明供应者或种植园来源、接收质量、接收时间和入厂运输处理 |
| starting_condition_role | 油厂前景系统的上游产品投入 |
| product_classification_scope | 来自油棕果中果皮的粗棕榈油；棕榈仁油及精炼或分提棕榈油产品不属于本类别 |
| recursive_input_rule | 任何外购并进入混配或再处理的粗棕榈油均作为同类别独立投入记录，带有自身上游数据集和数量；不得改列为鲜果串投入或与油厂自产油静默合并 |
| upstream_dataset_requirement | 鲜果串生产和入厂运输采用供应者、种植园、路线和时期具有代表性的数据集；外购公用工程、燃料、化学品和外部处理服务采用代表性数据集 |
| disclosure | 声明自有种植园与第三方果实的份额和来源、油厂路线与规模、接收到加工的控制、能源配置、废水处理、残余物去向、共产品处理、分配方法及任何上游或前景数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ffb_reception_preparation` | 鲜果串接收、灭菌与脱果 | `required` | 始终纳入 | 前景果实接收、质量控制、热处理和果实与果串分离 | 接收鲜果串 kg 和转移的已准备果实 kg |
| `oil_extraction_finishing` | 捣碎、压榨、澄清、干燥与大宗储存 | `required` | 始终纳入 | 粗棕榈油前景提取与整理，包括棕榈仁和压榨残余物回收 | 1 kg 粗棕榈油输出 |
| `mill_energy_residue_management` | 油厂能源、废水与残余物管理 | `required` | 始终纳入；仅当记录证明某路线不存在时才允许零数量 | 内部燃料、油厂废水、固体残余物、灰、污泥和直接排放的前景或关联处理 | 粗棕榈油输出 kg 及处理特定投入 |

### 过程：鲜果串接收、灭菌与脱果（`ffb_reception_preparation`）

#### 输入

##### 产品流

###### 接收的鲜果串（`fresh_fruit_bunch_input`）

鲜果串作为主要原料投入跨越油厂前景边界。记录每个供应来源或可审计的汇总来源组，并将种植与入厂运输链接到上游数据集。

- 选定流：油棕鲜果串（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测地磅或校准秤接收质量，并按有记录的拒收和库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ffb_receipt`
- 来源：`fao-palm-oil-processing-2002`

- 数量范围：有来源支持的鲜果串投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：4.17
  - 上限：5.00
  - 单位：kg fresh fruit bunches/kg crude palm oil
  - 基准：FAO 所报良好运行油厂每 100 tonnes 鲜果串产 20-24 tonnes 粗棕榈油的倒数
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-palm-oil-processing-2002`

###### 灭菌用水或蒸汽供应（`sterilization_water_steam`）

记录用于灭菌或蒸煮果实的水和外部供应蒸汽。厂内蒸汽从 `mill_energy_residue_management` 转移，不重复计算其燃料投入。

- 选定流：工艺水或蒸汽供应（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：计量用量，或由校准批次容积、循环次数和冷凝水回用量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy_records`
- 来源：`fao-palm-oil-processing-2002`

- 数量范围：暂定工艺用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg water/kg crude palm oil
  - 基准：每 1 kg 粗棕榈油的果实准备净外部供水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 转移至提取过程的已准备灭菌果实（`prepared_fruit_transfer`）

将转移至捣碎和压榨的质量记录为内部产品流，以保持果实损失、拒收和库存可见。

- 选定流：已灭菌油棕果（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或根据接收果实、拒收果实、空果串、冷凝水和库存变化进行质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coproduct_residue_records`
- 来源：`fao-palm-oil-processing-2002`

##### 废物流

###### 空果串和拒收果实（`empty_bunches_rejects`）

按实际去向记录分离的空果串和拒收或变质果实。用作燃料、覆盖物或另一产品的物料转移到接收过程，不得同时记录为最终废物。

- 选定流：空果串和拒收油棕果（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按去向实测质量或有记录的质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coproduct_residue_records`
- 来源：`fao-palm-oil-processing-2002`

###### 灭菌冷凝水与准备废水（`preparation_wastewater`）

记录离开果实准备过程的冷凝水或废水，并链接至回用、废水处理或最终排放。

- 选定流：棕榈油厂准备废水（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测流量，或由罐体和循环平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_emissions`
- 来源：`fao-palm-oil-processing-2002`

### 过程：捣碎、压榨、澄清、干燥与大宗储存（`oil_extraction_finishing`）

#### 输入

##### 产品流

###### 已准备灭菌果实（`prepared_fruit_input`）

在同一报告期和质量基准上接收来自 `ffb_reception_preparation` 的内部已准备果实转移。

- 选定流：已灭菌油棕果（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：在记录转移损失和库存变化后等于 `prepared_fruit_transfer`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coproduct_residue_records`
- 来源：`fao-palm-oil-processing-2002`

###### 澄清和清洗用水（`clarification_water`）

记录热水稀释、设备清洗及提取和澄清使用的其他水，扣除单独计量的回用量。

- 选定流：工艺水（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：计量用水，或根据校准容器容积和运行循环计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy_records`
- 来源：`fao-palm-oil-processing-2002`

- 数量范围：暂定澄清用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg water/kg crude palm oil
  - 基准：每 1 kg 粗棕榈油用于提取、澄清和清洗的净外部供水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力和机械能（`extraction_electricity`）

记录捣碎机、压榨机、泵、筛、离心机、棕榈仁回收和储存的用电。外购电力与厂内自发电分开记录。

- 选定流：电力供应（Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或由油厂总表和有记录的设备运行数据分配计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy_records`
- 来源：

- 数量范围：暂定外购电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg crude palm oil
  - 基准：每 1 kg 粗棕榈油归属于提取和整理的净外购电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 粗棕榈油参考输出（`crude_palm_oil_output`）

记录澄清和干燥后、精炼或分提前的可销售粗棕榈油。不合格油和回收工业油单独记录。

- 选定流：粗棕榈油 `c25748fe-ebcf-4a0e-bcf9-544edb1645b1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：基于校准罐、秤或交接计量记录的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

###### 回收棕榈仁（`palm_kernel_coproduct`）

干燥回收棕榈仁离厂进一步加工时作为共产品记录。不纳入下游棕榈仁油提取。

- 选定流：棕榈仁（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测发运质量加库存变化，仅使用有记录的水分数据修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_residue_records`
- 来源：`fao-palm-oil-processing-2002`

##### 废物流

###### 压榨纤维与棕榈仁壳（`fibre_shell_residue`）

在可计量时分开记录纤维和壳，包括用作内部锅炉燃料、销售、再利用或丢弃的数量。

- 选定流：棕榈压榨纤维与棕榈仁壳（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按残余物类型和去向实测质量或有记录的质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coproduct_residue_records`
- 来源：`fao-palm-oil-processing-2002`

###### 提取与澄清产生的棕榈油厂废水（`pome_output`）

记录送往回收、处理、土地利用或排放的废水、污泥和含油液体。不得假定未测释放为零负荷。

- 选定流：棕榈油厂废水（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测流量和取样组成，或带有记录不确定性的水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_emissions`
- 来源：`fao-palm-oil-processing-2002`

- 数量范围：暂定油厂废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg effluent/kg crude palm oil
  - 基准：每 1 kg 粗棕榈油离开提取与澄清的液体废水总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：油厂能源、废水与残余物管理（`mill_energy_residue_management`）

#### 输入

##### 产品流

###### 内部回收生物质燃料（`internal_biomass_fuel`）

将用于油厂锅炉的纤维、壳或空果串记录为内部转移，并与相应残余物输出核对。

- 选定流：用作燃料的棕榈油厂生物质残余物（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按残余物类型和水分含量实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_records`
- 来源：`fao-palm-oil-processing-2002`

###### 补充燃料和外购电力（`supplemental_energy`）

记录蒸汽、发电、备用设备、废水处理和残余物处理所用的全部外购化石或生物燃料与电力。

- 选定流：按实际类型记录补充燃料和外购电力（Tiangong UUID 未解析）
- 流属性/单位：Energy / 燃料 MJ 和电力 kWh
- 数量规则：按能源载体使用发票、校准表计或罐存记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_records`
- 来源：

- 数量范围：暂定补充燃料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg crude palm oil
  - 基准：每 1 kg 粗棕榈油供应油厂的外购燃料能量，不含内部生物质能
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 进入管理过程的油厂废水和固体残余物（`residues_to_management`）

按类型与来源接收油厂废水、空果串、纤维、壳、灰和其他残余物，不净扣除出口或最终排放。

- 选定流：按实际类型记录棕榈油厂废水与残余物（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：记录回收和库存变化后，等于所记录的上游残余物转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_emissions`
- 来源：`fao-palm-oil-processing-2002`

#### 输出

##### 产品流

###### 厂内生成蒸汽和电力（`generated_energy_transfer`）

记录现场生成并转移到油厂操作的有用蒸汽和电力。不得将内部能源作为出口共产品计入抵扣。

- 选定流：油厂自发蒸汽和电力（Tiangong UUID 未解析）
- 流属性/单位：Energy / 蒸汽 MJ 和电力 kWh
- 数量规则：计量生成量和内部交付量，并记录转换效率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy_records`
- 来源：`fao-palm-oil-processing-2002`

###### 出口棕榈仁、生物质残余物、回收油或剩余能源（`exported_coproducts`）

将每种出口共产品分别记录其质量或能量、目的地、质量和收益状态。不得将出口与内部使用合并。

- 选定流：按实际类型记录出口油厂共产品（Tiangong UUID 未解析）
- 流属性/单位：Mass 或 Energy / 视情况为 kg、MJ 或 kWh
- 数量规则：按共产品实测发运量加库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_residue_records`
- 来源：`fao-palm-oil-processing-2002`

##### 废物流

###### 处理污泥、锅炉灰和最终废物（`final_waste_outputs`）

按类型和实际处理或处置路线记录最终废物。获得有益利用的灰、污泥或空果串仍作为明确输出，不得从质量平衡中删除。

- 选定流：按实际类型记录棕榈油厂最终废物（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测发运质量或有记录的处理质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_emissions`
- 来源：`fao-palm-oil-processing-2002`

##### 基本流

###### 锅炉和废水处理的直接大气排放（`direct_air_emissions`）

记录实测排放，或使用采集的燃料、处理和运行数据以及有引用的因子集计算。适用时纳入厌氧废水处理或未管理废水的甲烷；没有记录时不得假定捕集或氧化。

- 选定流：逐项大气基本流（Tiangong UUID 未解析）
- 流属性/单位：Mass / 每种物质 kg
- 数量规则：直接测量，或活动数据乘以有记录、由研究选定的排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_emissions`
- 来源：

###### 处理后废水向水体或土地排放（`treated_effluent_release`）

记录最终排放水的体积或质量及按接收环境介质区分的实测污染物负荷。回用水属于内部或产品转移，不是基本流排放。

- 选定流：逐项向水体或土地排放的基本流（Tiangong UUID 未解析）
- 流属性/单位：Mass / 水 kg 和每种物质 kg
- 数量规则：实测排放量乘以取样浓度，并记录取样覆盖和检出限处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗棕榈油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_emissions`
- 来源：`fao-palm-oil-processing-2002`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 所有多功能油厂过程 | 首先通过分别计量或细分接收、提取、棕榈仁回收、能源生产、废水处理和残余物管理来避免分配；有记录的物理过程关系存在时，直接归属投入和排放。 | `eu-jrc-ilcd-handbook-2010` |
| `allocation_residual_choice` | 粗棕榈油、棕榈仁、出口残余物、回收油和出口能源 | 当细分无法解决剩余共享负荷时，选择并记录因果物理关系。若不存在可辩护的物理关系，则使用基于同一报告期价格的有记录经济关系；披露方法、数据、共产品状态和分配份额。 | `eu-jrc-ilcd-handbook-2010` |
| `allocation_internal_energy` | 油厂内部使用的纤维、壳、空果串、蒸汽和电力 | 将内部残余物燃料和自发能源作为转移处理，不产生避免产品抵扣。按计量能源交付或其他有记录的物理关系将锅炉和发电负荷归属至用能油厂过程。 | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |
| `allocation_export_sensitivity` | 出口共产品 | 不在归因型前景数据集中应用替代或避免负荷抵扣。出口共产品显著影响结果时，使用另一种可辩护分配基准报告敏感性情景。 | `eu-jrc-ilcd-handbook-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ffb_receipt` | `ffb_reception_preparation` | 鲜果串接收与来源 | 地磅单、供应者记录、收获或发运记录 | 时间戳；供应者或种植园；毛重；皮重；净重；拒收质量；来源；运输方式和距离；接收状态 | 校准地磅或秤，并与供应者和库存记录核对 | kg | 每次交付或批次 | 完整报告期 | 声明油厂接收的全部果实 | 按来源汇总接收净质量；核对拒收及期初或期末库存 | 校准证书；票据序列检查；供应者对账 |
| `cp_water_energy_records` | `all_processes` | 水、电力、燃料、蒸汽和厂内自发能源 | 表计读数、发票、罐存记录、燃料分析、运行日志 | 表计 id；期初和期末读数；采购量；燃料类型；热值基准；生物质水分；蒸汽或电力产量；内部交付；停机时间 | 校准表计及发票或库存核对；仅使用有记录运行数据进行工程计算 | 水 kg；电力 kWh；燃料或蒸汽 MJ | 连续或每次接收，按月汇总 | 完整报告期 | 所有前景操作和共享公用工程 | 扣除有记录的非本 PCR 用户和库存变化；将可归属净用量归一化至粗棕榈油输出 | 表计校准；发票；燃料证书；核对工作表 |
| `cp_coproduct_residue_records` | `all_processes` | 粗油、棕榈仁、内部转移、共产品、残余物和库存变化 | 校准秤或罐记录、发运单、实验室水分结果、库存记录 | 流类型；来源过程；目的地；毛重和净重；水分；质量等级；期初库存；期末库存；发运量；收益状态 | 直接称量，或使用带密度和温度记录的校准罐体积；无法直接称量时采用有记录质量平衡 | kg | 每批次或发运，按月汇总 | 完整报告期 | 所有生产线、储罐和残余物去向 | 按流和目的地汇总；仅以实测水分、密度和库存数据修正 | 秤或罐校准；发运核对；实验室结果；质量平衡审查 |
| `cp_effluent_emissions` | `mill_energy_residue_management` | 废水、处理、最终废物和直接排放 | 流量计、取样结果、燃料记录、处理日志、废物联单、排放监测记录 | 流量或质量；取样时间；浓度；检出限；处理技术；捕集或火炬运行；燃料量；因子身份；排放介质；废物去向 | 连续或批次流量测量加具有代表性的取样；直接排放监测，或由采集活动数据和有引用因子计算 | kg；m3；kg 物质；运行小时 | 连续或每批次，并按有记录的代表性频率取样 | 包括停机和异常事件的完整报告期 | 每个处理单元、排放点、锅炉、发电机、火炬和最终废物路线 | 实测流量乘浓度计算污染物负荷；按介质和事件汇总；仅当测量支持时保留零值 | 表计校准；实验室 QA/QC；监管链；因子引用；处理和火炬日志；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 报告期可归属数量 / 报告期合格粗棕榈油输出质量 | 可归属数量；粗棕榈油输出质量；库存调整 | 每 1 kg 粗棕榈油的数量 | `eu-jrc-ilcd-handbook-2010` |
| `calc_oil_extraction_ratio` | 鲜果串投入和粗棕榈油输出 | 出油率 = 合格粗棕榈油输出质量 / 接收鲜果串投入质量 | `crude_palm_oil_output`; `fresh_fruit_bunch_input` | kg 粗棕榈油/kg 接收鲜果串 | `fao-palm-oil-processing-2002` |
| `calc_material_balance` | 每个过程和前景系统整体 | 平衡闭合率 =（已核算输出 + 期末库存 - 期初库存）/ 已核算输入；报告平衡缺口，不以无记录残差强制闭合 | 实测输入；输出；内部转移；库存 | 平衡闭合率和无法解释的质量缺口 | `eu-jrc-ilcd-handbook-2010` |
| `calc_pollutant_load` | 处理后废水和取样释放 | 污染物负荷 = 实测排放质量或体积 × 实测浓度，并记录单位转换和低于检出限的处理 | 排放流量；浓度；需要时的密度；取样覆盖 | 报告期和每 kg 粗棕榈油的 kg 物质 | `eu-jrc-ilcd-handbook-2010` |
| `calc_factor_emissions` | 未实测的锅炉或处理排放 | 排放 = 采集活动数据 × 有引用且技术、地区适用的因子；必须提供因子身份、版本、单位和适用性 | 燃料或处理活动；因子；捕集或氧化数据 | 每 kg 粗棕榈油的 kg 基本流 | `eu-jrc-ilcd-handbook-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | 果实、油、共产品和残余物 | 保留来源、去向、报告期、过程路线、质量状态以及原始记录与每个归一化行之间的链接。 | 地磅单；发运记录；过程日志；记录到行的追溯表 |
| `dq_temporal_coverage` | 所有前景数据 | 覆盖一个完整声明报告期，通常为连续 12 个月；仅在明确评估季节性、启动、停机、维护和代表性时允许较短生产期。 | 带日期的表计序列；生产日历；停机和维护日志；代表性说明 |
| `dq_measurement_control` | 质量、水、能源、废水和实验室数据 | 使用校准仪器，或记录工程计算和不确定性；保留校准状态、取样方法、检出限和修正。 | 校准证书；实验室 QA/QC；表计和取样程序 |
| `dq_completeness` | 所有必需过程和重要流 | 纳入每个必需过程及所有重要产品、废物、能源、水和基本流；量化或明确披露缺口，不赋予无支持零值。 | 完整性清单；质量和能源核对；缺口登记 |
| `dq_representativeness` | 上游数据集和前景因子 | 记录时间、地理、技术和供应者覆盖，并说明任何代理数据集或因子。 | 数据集元数据；供应者覆盖表；因子引用和适用性审查 |
| `dq_allocation_review` | 多功能过程 | 保留直接归属、所选分配关系、时期数据、份额和敏感性结果，以支持独立重算。 | 分配工作表；价格或物理关系数据；敏感性计算 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow_identity` | 参考流 | 确认产品流 UUID 为 `c25748fe-ebcf-4a0e-bcf9-544edb1645b1`、流属性 UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`、参考数量为 1 且参考单位为 kg。 |  |
| `validate_scope_and_qualifiers` | 数据集身份 | 确认数据集表示生产油厂门口的未精炼粗棕榈油，并声明全部必需限定信息；拒绝将精炼、分提或棕榈仁油输出作为本 PCR 参考产品。 | `fao-palm-oil-processing-2002` |
| `validate_process_completeness` | 过程清单 | 确认三个必需过程均存在，且鲜果串、工艺水、能源、粗棕榈油、棕榈仁、残余物、废水、直接排放、最终处理和库存变化均有记录或有明确且经审查的不适用声明。 | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |
| `validate_mass_balance_and_yield` | 物料清单 | 重算出油率和过程或系统质量平衡。超出有引用或暂定 QA 校验范围时触发调查，不得自动替换；未解决的重要缺口使校验结论为不确定。 | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |
| `validate_energy_effluent_emissions` | 公用工程和环境流 | 核对外购与自发能源，验证废水路线和取样负荷，并确认锅炉与厌氧处理排放已经实测或使用采集活动数据和有引用因子计算；无支持零排放属于错误。 | `fao-palm-oil-processing-2002`; `eu-jrc-ilcd-handbook-2010` |
| `validate_allocation_recalculation` | 共产品 | 使用保留的前景数据重算分配份额，确认内部转移没有避免产品抵扣，并验证披露所选方法和敏感性情景。 | `eu-jrc-ilcd-handbook-2010` |
| `validate_data_quality` | 完整前景数据包 | 确认校准、时间覆盖、来源与去向追溯、代表性、缺口披露和原始记录到行的谱系；缺失证据产生发现，并可能使校验结论为不确定。 | `eu-jrc-ilcd-handbook-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 粗棕榈油生产的前景单元过程或聚合油厂门口数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要声明生产油厂门口未精炼粗棕榈油的归因型 LCI 和 LCA 模型，且地理、技术、果实来源、质量状态、分配、能源和废水处理限定信息与研究匹配 |
| excluded_use | 直接表示精炼或分提棕榈油、棕榈仁油、仅种植系统、缺少地理和时间限定的通用市场，或范围不兼容且缺少关键性审查的比较声明 |
| required_metadata | PCR id 和版本；参考流 UUID 和单位；地理范围；报告期；油厂路线与规模；果实来源和上游数据集链接；油品质量基准；过程覆盖；能源配置；废水和残余物路线；分配方法和份额；来源和因子身份；完整性和不确定性声明 |
| required_quality_disclosure | 初级数据份额；仪器和取样覆盖；质量与能源平衡缺口；时间、地理和技术代表性；代理数据和排放因子；暂定 QA 校验范围发现；未解决的非参考 UUID；分配敏感性 |
| update_trigger | 果实供应、油厂技术或产能、油品质量基准、能源系统、甲烷捕集、废水或残余物处理、共产品去向或价值、分配方法、法规要求发生重大变化，或证据显示数据集不再具有代表性 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-palm-oil-processing-2002` | official_guidance | 联合国粮食及农业组织，*Small-Scale Palm Oil Processing in Africa*，FAO Agricultural Services Bulletin 148，ISBN 92-5-104859-2，2002，https://www.fao.org/4/y4355e/y4355e00.htm（检索于 2026-08-11） | 棕榈油厂单元操作；区分粗棕榈油生产与精炼、棕榈仁油提取；有来源支持的出油率 QA 范围；水分和残余物背景；能源、固体残余物和废水路线识别 |
| `eu-jrc-ilcd-handbook-2010` | official_guidance | 欧盟委员会联合研究中心，*International Reference Life Cycle Data System (ILCD) Handbook - General guide for Life Cycle Assessment - Detailed guidance*，EUR 24708 EN，ISBN 978-92-79-19092-6，DOI 10.2788/38479，2010，https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf（检索于 2026-08-11） | 功能单位和参考流一致性；边界完整性；前景初级数据和质量要求；多功能层级、细分、物理关系、剩余分配和敏感性披露 |
