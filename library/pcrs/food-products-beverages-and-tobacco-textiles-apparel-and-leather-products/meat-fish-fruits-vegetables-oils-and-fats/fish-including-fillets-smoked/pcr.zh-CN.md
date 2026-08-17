---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-including-fillets-smoked
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鱼，包括鱼片，熏制

## 1. 范围与适用性

本 PCR 适用于通过烟熏保藏并作为可销售食品供应的鱼和鱼片。若烟熏是界定性的保藏或加工路线，则无论产品为热熏或冷熏，也无论为整鱼、去头鱼、去内脏鱼、切段鱼或鱼片，均在适用范围内。前景数据包应识别物种、来料状态、制备形态、盐渍或盐水腌制路线、烟熏路线、烟气发生介质、最终储存条件、包装及产品净质量。

前景边界始于烟熏设施接收鱼类原料，止于设施门口的包装烟熏鱼，并包括发运前现场冷藏或冷冻暂存。上游捕捞或水产养殖、卸货、初级冷却和运输至设施，采用供应商特定或适当的上游数据集表示。发运后的配送、零售、制备、消费及包装生命末期均在本前景边界外，除非研究范围明确将其纳入。

主要通过罐藏、非烟熏干燥、无烟熏烹调、单独盐渍、腌泡或发酵保藏的产品不在本 PCR 范围内。若仅使用烟熏风味且没有声明的烟熏操作，则不得作为烟熏鱼表示，除非产品规范和过程记录证明其满足预期产品边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-including-fillets-smoked |
| classification_refs | CPC 3.0: 21232, Fish including fillets, smoked |
| covered_products | 以热熏或冷熏作为界定性加工与保藏路线的整鱼、切段鱼或鱼片 |
| excluded_products | 主要通过罐藏、非烟熏干燥、无烟熏烹调、单独盐渍、腌泡或发酵保藏的鱼；仅描述为烟熏风味且无声明烟熏操作的产品 |
| representative_product | 烟熏设施门口的包装烟熏鱼或烟熏鱼片 |
| production_route | 鱼类接收与制备；可选盐渍或盐水腌制；具有过程控制记录的烟熏；冷却；包装；现场受控储存 |
| market_state | 可销售包装产品，并声明冷藏、冷冻或其他经验证的储存状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为可销售食品供应的烟熏鱼，包括烟熏鱼片 |
| How much | 1 kg 产品净质量，不含三级运输包装 |
| How well | 符合所声明的物种、切分形态、烟熏路线、盐处理、包装、储存条件、食品安全计划及市场规范 |
| How long or cycle | 一个生产批次直至设施门口的包装产品；声明任何现场暂存时长 |
| reference_flow_link | `cool_pack_store` 的包装烟熏鱼净产出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Fish including fillets, smoked `6d9e8d0f-edaf-4960-b9db-557ef8220d26` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种及学名或认可的市场名称；整鱼、切段或鱼片形态；来料为鲜、冷藏或冷冻状态；热熏或冷熏路线；直接烟气或再生烟气及烟熏介质；盐渍或盐水腌制路线；受控时的最终水分或水分活度规范；净质量；包装形式和材料；冷藏、冷冻或其他经验证的储存状态及温度；原料鱼来源和生产系统；加工地理位置；生产与暂存日期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考烟熏鱼产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化为 1 kg 烟熏鱼净产品。参考数量不含皮重和包装质量，包装应单独报告。 |
| `wet_mass_consistency` | 鱼、盐、水、冰、残余物、废水和包装 | Mass | kg | 保留实测湿质量基准。使用干物质、盐浓度或水分时，应保留测量基准和换算记录，不得默默混合湿质量和干质量。 |
| `energy_conversion` | 电力和热能 | Energy | kWh or MJ | 保留计量单位和所声明的低位或高位热值基准；记录每项换算，且不得将电力和热能视为可互换。 |
| `lot_normalization` | 批次级前景记录 | Mass | kg/kg reference product | 在声明的批次或代表性期间聚合记录，然后除以剔除包装质量后的合格烟熏鱼净产出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 烟熏设施接收的鱼，并声明物种、供应商、捕捞或养殖来源、切分形态、鲜/冷藏/冷冻状态、接收质量、温度及运输条件 |
| starting_condition_role | 所购上游产品投入，以及上游鱼类生产/物流数据集与前景烟熏操作之间的交接点 |
| product_classification_scope | 烟熏鱼及烟熏鱼片；外部 CPC 参考是分类语境，而不是 canonical PCR identity |
| recursive_input_rule | 已属于烟熏鱼类别的所购投入，仅作为带有自身数据集的上游产品投入记录一次，不得在本 PCR 下递归分解；披露后续进一步烟熏或重新包装 |
| upstream_dataset_requirement | 有条件时使用供应商特定数据集；否则对捕捞或养殖、卸货、初级保藏及入厂运输采用在地理、技术、时间、物种及生产系统方面具有代表性的数据集 |
| disclosure | 声明排除的上游和下游阶段、原料鱼来源与状态、过程路线、烟气发生路线、盐渍/盐水腌制、现场冷藏、共产品、废弃物、废水处理、包装、数据期间及分配选择 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景数据包 | 纳入接收、适用时的解冻、清洗和修整、适用时的盐渍或盐水腌制、烟熏、冷却、包装、可归属于生产的卫生清洁水和能源、设施门口前的现场受控储存、残余物、废水、直接排放和制冷剂损失。 | codex-cxc-52-2003; eu-pef-2021-2279 |
| `boundary_upstream_handoff` | 接收鱼及其他所购投入 | 以披露的上游数据集表示捕捞或养殖、上游初级保藏、投入生产及入厂运输；在从摇篮到设施门口模型中，不得仅因其位于前景过程之外而遗漏。 | eu-pef-2021-2279 |
| `boundary_route_disclosure` | 产品与过程 | 记录实际热熏或冷熏路线、烟气发生介质、盐渍/盐水腌制、热过程控制、冷却、包装及储存条件；不得替换为未记录的通用路线。 | codex-cxc-52-2003 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare` | 鱼类接收与制备 | required | 始终纳入 | 前景接收、适用时解冻、清洗及按实际实施的去头/去内脏/修整/片鱼 | 转移至腌制与烟熏的制备鱼 kg |
| `cure_smoke` | 盐渍、盐水腌制与烟熏 | required | 始终纳入；可证明不存在的盐渍/盐水腌制子操作记录为零 | 前景保藏及定义性的烟熏操作 | 最终冷却与包装前烟熏鱼 kg |
| `cool_pack_store` | 冷却、包装与现场储存 | required | 始终纳入；声明冷藏、冷冻或其他经验证储存路线 | 前景产品完成和参考流交付 | 包装烟熏鱼净质量 1 kg |

### 过程：鱼类接收与制备（`receive_prepare`）

#### 输入

##### 产品流

###### 接收的整鱼（`received_whole_fish`）

记录跨越设施边界的整鱼，并保留物种、供应商、来源、生产系统以及鲜、冷藏或冷冻状态作为限定信息。

- 选定流：Raw whole fish
- 流属性/单位：Mass / kg
- 数量规则：该产品形态的实测合格接收质量，扣除运输包装与拒收批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_fish_receipts`

###### 接收的鱼片（`received_fish_fillets`）

记录跨越设施边界的鱼片，并保留物种、供应商、来源、生产系统以及鲜、冷藏或冷冻状态作为限定信息。

- 选定流：Raw fish fillets
- 流属性/单位：Mass / kg
- 数量规则：该产品形态的实测合格接收质量，扣除运输包装与拒收批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_fish_receipts`

###### 制备用水（`preparation_water`）

记录可归属于生产批次、用于解冻、清洗、产品接触清洁和制备操作的计量或分配用水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量用水，或依据校准共享水表形成的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 数量范围：暂定制备用水 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 制备鱼
  - 基准：每过程产出的宽泛、可替换用水筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 现场用冰（`preparation_ice`）

记录接收后使用的外购或现场制冰；不得重复计算现场制冰所用的水与能源。

- 选定流：Ice for food processing
- 流属性/单位：Mass / kg
- 数量规则：采购质量或生产与领用记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ice_records`
- 数量范围：暂定用冰 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 制备鱼
  - 基准：每过程产出的宽泛、可替换用冰筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至烟熏的制备鱼（`prepared_fish`）

依据批次称量记录计算解冻、清洗、切割和沥水后转移的湿质量。

- 选定流：Prepared fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量；否则依据采集的接收、残余物和损失记录闭合质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个制备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_mass_balance`
- 数量范围：暂定制备产率 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.25
  - 上限：1.05
  - 单位：kg/kg 合格接收鱼
  - 基准：宽泛、可替换转移产率筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 去除的鱼头（`preparation_fish_heads`）

将制备期间去除的鱼头作为独立材料流记录。

- 选定流：Fish heads from preparation
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测容器或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 制备鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 去除的鱼内脏（`preparation_fish_viscera`）

将制备期间去除的鱼内脏作为独立材料流记录。

- 选定流：Fish viscera from preparation
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测容器或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 制备鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 去除的鱼骨（`preparation_fish_bones`）

将制备期间去除的鱼骨作为独立材料流记录。

- 选定流：Fish bones from preparation
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测容器或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 制备鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 去除的鱼皮（`preparation_fish_skin`）

将制备期间去除的鱼皮作为独立材料流记录。

- 选定流：Fish skin from preparation
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测容器或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 制备鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 鱼类修整物（`preparation_fish_trimmings`）

将切割或片鱼期间去除的鱼类修整物作为独立材料流记录。

- 选定流：Fish trimmings from preparation
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测容器或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 制备鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 拒收的原料鱼（`preparation_rejected_fish`）

将接收或制备后拒收的原料鱼与去除的解剖材料分别记录。

- 选定流：Rejected raw fish
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测容器或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 制备鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 制备废水（`preparation_wastewater`）

记录离开制备工序的废水、其去向，以及数量是实测还是由水量平衡推导。

- 选定流：Fish-preparation wastewater
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或保留假设的水量平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备鱼产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`

##### 基本流



### 过程：盐渍、盐水腌制与烟熏（`cure_smoke`）

#### 输入

##### 产品流

###### 制备鱼投入（`prepared_fish_input`）

记录与 `receive_prepare` 匹配的转移质量，不得创建第二个上游鱼类投入。

- 选定流：Prepared fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：来自 `prepared_fish` 的匹配批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个烟熏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_mass_balance`

###### 食品级食盐（`food_grade_salt`）

将用于干盐渍或新鲜盐水配制的食品级氯化钠与循环盐水分别记录。

- 选定流：Food-grade salt for brine preparation `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：Mass / kg
- 数量规则：采购、领用、配方和盐水补加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_salt_brine_records`
- 数量范围：暂定食盐投入 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 烟熏鱼
  - 基准：不含过程水的宽泛、可替换食盐投入筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐水腌制与清洁用水（`smoking_water`）

记录可归属于批次或期间、用于配制盐水、漂洗及烟熏区产品接触清洁的水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量用水，或依据校准共享水表形成的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 数量范围：暂定烟熏区用水 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 烟熏鱼
  - 基准：每过程产出的宽泛、可替换用水筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 用于烟气发生的硬木段（`smoking_hardwood_logs`）

当未处理硬木段直接用作烟气发生介质时记录。

- 选定流：Untreated hardwood logs for food smoking
- 流属性/单位：Mass / kg
- 数量规则：采购与批次领用记录，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_medium_records`

###### 用于烟气发生的硬木片（`smoking_hardwood_chips`）

当未处理硬木片直接用作烟气发生介质时记录。

- 选定流：Untreated hardwood chips for food smoking
- 流属性/单位：Mass / kg
- 数量规则：采购与批次领用记录，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_medium_records`

###### 用于烟气发生的硬木锯末（`smoking_hardwood_sawdust`）

当未处理硬木锯末直接用作烟气发生介质时记录。

- 选定流：Untreated hardwood sawdust for food smoking
- 流属性/单位：Mass / kg
- 数量规则：采购与批次领用记录，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_medium_records`

###### 液态烟熏制剂（`smoking_liquid_smoke`）

当再生烟气或液态烟熏制剂跨越前景边界时，记录食品级烟气冷凝物。

- 选定流：Food-grade liquid smoke condensate
- 流属性/单位：Mass / kg
- 数量规则：采购与批次领用记录，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_medium_records`

###### 用于腌制与烟熏的低压电网电力（`smoking_grid_electricity_low_voltage`）

当低于 1 kV 的电压与公共电网供给情景适用时记录。

- 选定流：Grid electricity, low voltage
- 流属性/单位：Energy / kWh
- 数量规则：计量用电，或依据设备负荷与运行时间计算并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 用于腌制与烟熏的中压电网电力（`smoking_grid_electricity_medium_voltage`）

当 1–35 kV 的电压与公共电网供给情景适用时记录。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：计量用电，或依据设备负荷与运行时间计算并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 外购过程蒸汽（`smoking_steam`）

单独记录外购蒸汽，并保留供汽压力、温度和凝结水回流条件。

- 选定流：Purchased process steam
- 流属性/单位：Mass / kg
- 数量规则：计量载能介质或燃料数量，并使用有记录的热值与效率假设换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 外购热水（`smoking_hot_water`）

单独记录外购热水，并保留供水与回水温度。

- 选定流：Purchased industrial hot water
- 流属性/单位：Energy / MJ
- 数量规则：计量载能介质或燃料数量，并使用有记录的热值与效率假设换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 用于现场供热的天然气（`smoking_natural_gas`）

将供给现场供热的天然气与其他各类燃料分别记录。

- 选定流：Natural gas, burned in industrial furnace `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位：Gross calorific value / MJ
- 数量规则：计量载能介质或燃料数量，并使用有记录的热值与效率假设换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 用于现场供热的液化石油气（`smoking_lpg`）

将供给现场供热的液化石油气与其他各类燃料分别记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass / kg
- 数量规则：计量载能介质或燃料数量，并使用有记录的热值与效率假设换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 用于现场供热的柴油（`smoking_diesel`）

将供给现场供热的柴油与其他各类燃料分别记录。

- 选定流：Diesel oil
- 流属性/单位：Mass / kg
- 数量规则：计量载能介质或燃料数量，并使用有记录的热值与效率假设换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 用于现场供热的重质燃料油（`smoking_fuel_oil`）

将供给现场供热的重质燃料油与其他各类燃料分别记录。

- 选定流：Heavy fuel oil
- 流属性/单位：Mass / kg
- 数量规则：计量载能介质或燃料数量，并使用有记录的热值与效率假设换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 用于现场供热的木颗粒（`smoking_wood_pellets`）

将作为生物质燃料供应的未处理木颗粒与烟熏介质及其他各类燃料分别记录。

- 选定流：Untreated wood pellets
- 流属性/单位：Mass / kg
- 数量规则：计量载能介质或燃料数量，并使用有记录的热值与效率假设换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 用于腌制与烟熏的压缩空气（`smoking_compressed_air`）

将供给气动过程设备的压缩空气与电力和燃料分别记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume / m3
- 数量规则：计量压缩空气体积，或依据压缩机负荷与运行时间计算并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终包装前烟熏鱼（`smoked_fish_intermediate`）

记录已冷却或待冷却烟熏鱼的转移质量，并关联烟熏控制记录。

- 选定流：Smoked fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：烟熏后、最终包装前的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个烟熏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_batch_records`
- 数量范围：暂定烟熏产率 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：1.2
  - 单位：kg/kg 制备鱼投入
  - 基准：包含可能盐水吸收与水分损失的宽泛、可替换产率筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废盐水（`spent_brine`）

将废弃腌制盐水与其他废水和固体残余物分别记录。

- 选定流：Spent high-salinity brine
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测收集或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 废烟熏木段（`spent_smoking_wood`）

将烟气发生后炭化或耗用的硬木段作为独立废弃材料记录。

- 选定流：Spent hardwood smoking logs
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测收集或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 废烟熏木片（`spent_smoking_wood_chips`）

将烟气发生后的废硬木片作为独立废弃材料记录。

- 选定流：Spent hardwood smoking chips
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测收集或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 废烟熏锯末（`spent_smoking_sawdust`）

将烟气发生后的废硬木锯末作为独立废弃材料记录。

- 选定流：Spent hardwood smoking sawdust
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测收集或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 不合格烟熏鱼（`rejected_smoked_fish`）

将产品完成前拒收的烟熏鱼与烟熏介质和盐水残余物分别记录。

- 选定流：Off-specification smoked fish
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测收集或发运质量，与其他残余物和去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 盐水与烟熏区废水（`smoking_wastewater`）

将腌制和烟熏区清洁产生的非废盐水废水单独记录，并保留盐负荷、处理和去向记录。

- 选定流：Saline fish-processing wastewater
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或保留假设的水量平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 数量范围：暂定烟熏废水 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 烟熏鱼
  - 基准：每过程产出的宽泛、可替换排放筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的化石二氧化碳（`smoking_fossil_co2`）

将现场化石燃料燃烧产生的化石二氧化碳作为独立基本流记录。

- 选定流：Carbon dioxide (fossil), to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的生物源二氧化碳（`smoking_biogenic_co2`）

将烟熏木材或生物质燃料产生的生物源二氧化碳作为独立基本流记录。

- 选定流：Carbon dioxide (biogenic), to air, unspecified `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的化石一氧化碳（`smoking_fossil_co`）

将现场化石燃料燃烧产生的化石源一氧化碳单独记录。

- 选定流：Carbon monoxide (fossil), to air, unspecified `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的生物源一氧化碳（`smoking_biogenic_co`）

将烟熏木材或生物质燃料产生的生物源一氧化碳单独记录。

- 选定流：Carbon monoxide (biogenic), to air
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的氮氧化物（`smoking_nox`）

按监测或因子规定的报告基准记录氮氧化物，并保留该基准。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的二氧化硫（`smoking_so2`）

将现场燃料或烟气发生形成的二氧化硫作为独立基本流记录。

- 选定流：Sulfur dioxide, to air, unspecified `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的细颗粒物（`smoking_pm25`）

按所述粒径区间记录细颗粒物，并保留监测烟囱或释放情景。

- 选定流：Particles (PM0.2 - PM2.5) to air
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的化石甲烷（`smoking_fossil_ch4`）

将化石燃料燃烧产生的甲烷与生物质来源甲烷分别记录。

- 选定流：Methane (fossil), to air
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的生物源甲烷（`smoking_biogenic_ch4`）

将烟熏木材或生物质燃料产生的甲烷与化石来源甲烷分别记录。

- 选定流：Methane (biogenic), to air
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的一氧化二氮（`smoking_n2o`）

将现场燃料或烟气发生形成的一氧化二氮作为独立基本流记录。

- 选定流：Nitrous oxide, to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

###### 排放到空气的非甲烷挥发性有机物（`smoking_nmvoc`）

按监测或因子规定的报告基准记录非甲烷挥发性有机物。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：监测结果，或依据采集的活动数据和经评审排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装前烟熏鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emission_records`

### 过程：冷却、包装与现场储存（`cool_pack_store`）

#### 输入

##### 产品流

###### 转移至产品完成工序的烟熏鱼（`smoked_fish_input`）

按批次和质量将该投入与 `smoked_fish_intermediate` 匹配。

- 选定流：Smoked fish intermediate
- 流属性/单位：Mass / kg
- 数量规则：匹配的批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个产品完成批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking_batch_records`

###### 用于产品完成工序的低压电网电力（`finishing_grid_electricity_low_voltage`）

当低于 1 kV 的电压与公共电网供给情景适用时，记录冷却、冷冻、包装和储存用电。

- 选定流：Grid electricity, low voltage
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或依据设备负荷、运行时间、产量和设施总量形成的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 用于产品完成工序的中压电网电力（`finishing_grid_electricity_medium_voltage`）

当 1–35 kV 的电压与公共电网供给情景适用时，记录冷却、冷冻、包装和储存用电。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或依据设备负荷、运行时间、产量和设施总量形成的书面分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`

###### 真空包装袋（`packaging_vacuum_pouch`）

当使用多层真空包装袋这一初级包装组件时记录其质量。

- 选定流：Multilayer plastic vacuum pouch
- 流属性/单位：Mass / kg
- 数量规则：该组件的采购与领用记录，与包装单元核对并扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 聚乙烯包装膜（`packaging_polyethylene_film`）

将聚乙烯热封膜与包装袋、托盘、纸箱和标签分别记录。

- 选定流：Polyethylene heat-seal film
- 流属性/单位：Mass / kg
- 数量规则：该组件的采购与领用记录，与包装单元核对并扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 聚丙烯包装托盘（`packaging_polypropylene_tray`）

当聚丙烯托盘用于气调或其他初级包装时单独记录。

- 选定流：Polypropylene food packaging tray
- 流属性/单位：Mass / kg
- 数量规则：该组件的采购与领用记录，与包装单元核对并扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 瓦楞纸板包装（`packaging_corrugated_cardboard`）

单独记录用于次级箱体或纸箱的瓦楞纸板。

- 选定流：Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：该组件的采购与领用记录，与包装单元核对并扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 纸质包装标签（`packaging_paper_label`）

将纸质标签与各结构性包装组件分别记录。

- 选定流：Paper label `64321117-433d-43a5-97f9-2ea624c15656`
- 流属性/单位：Mass / kg
- 数量规则：该组件的采购与领用记录，与包装单元核对并扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### R717 制冷剂补充（`refrigerant_r717_makeup`）

将可归属于报告期间的 R717 添加量与其他各类制冷剂分别记录。

- 选定流：Refrigeration-grade anhydrous ammonia (R717)
- 流属性/单位：Mass / kg
- 数量规则：该制冷剂的服务发票、钢瓶质量核对或维护系统添加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`

###### R404A 制冷剂补充（`refrigerant_r404a_makeup`）

将可归属于报告期间的 R404A 添加量与其他各类制冷剂分别记录。

- 选定流：Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位：Mass / kg
- 数量规则：该制冷剂的服务发票、钢瓶质量核对或维护系统添加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`

###### R134a 制冷剂补充（`refrigerant_r134a_makeup`）

将可归属于报告期间的 R134a 添加量与其他各类制冷剂分别记录。

- 选定流：Refrigerant R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- 流属性/单位：Mass / kg
- 数量规则：该制冷剂的服务发票、钢瓶质量核对或维护系统添加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`

###### R744 制冷剂补充（`refrigerant_r744_makeup`）

将可归属于报告期间的 R744 添加量与其他各类制冷剂分别记录。

- 选定流：Refrigeration-grade carbon dioxide (R744)
- 流属性/单位：Mass / kg
- 数量规则：该制冷剂的服务发票、钢瓶质量核对或维护系统添加记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装烟熏鱼净参考产出（`packaged_smoked_fish`）

记录不含包装的可销售产品净质量；这是参考流产出。

- 选定流：Fish including fillets, smoked `6d9e8d0f-edaf-4960-b9db-557ef8220d26`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据实测合格批次产出归一化后的 1 kg 净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：标识引用（`identity_reference`）
- 采集协议：`cp_product_output_records`

##### 废物流

###### 真空包装袋边角料（`vacuum_pouch_scrap`）

将拒收或修边产生的多层真空包装袋与其他包装废弃物分别记录。

- 选定流：Multilayer plastic vacuum pouch scrap
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测废弃物容器、库存核对或发运记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 聚乙烯膜边角料（`polyethylene_film_scrap`）

将聚乙烯包装膜边角料与其他包装废弃物分别记录。

- 选定流：Polyethylene packaging film scrap
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测废弃物容器、库存核对或发运记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 聚丙烯托盘废料（`polypropylene_tray_scrap`）

将拒收的聚丙烯托盘与其他包装废弃物分别记录。

- 选定流：Rejected polypropylene packaging trays
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测废弃物容器、库存核对或发运记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 瓦楞纸板包装废料（`corrugated_cardboard_scrap`）

将瓦楞纸板修边料和拒收纸箱与其他包装废弃物分别记录。

- 选定流：Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测废弃物容器、库存核对或发运记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 纸质标签废料（`paper_label_scrap`）

将拒收的纸质标签与其他包装废弃物分别记录。

- 选定流：Paper packaging label scrap
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测废弃物容器、库存核对或发运记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

###### 不合格成品烟熏鱼（`offspec_finished_smoked_fish`）

将包装或放行期间拒收的成品烟熏鱼与包装废料分别记录。

- 选定流：Off-specification finished smoked fish
- 流属性/单位：Mass / kg
- 数量规则：该材料的实测废弃物容器、库存核对或发运记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`

##### 基本流

###### 排放到空气的 R717 制冷剂（`refrigerant_r717_emission`）

将 R717 损失作为排放到空气的氨质量报告，并按有记录的回收、库存变化和转移调整。

- 选定流：Ammonia, to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据该制冷剂的采集平衡计算；不得以二氧化碳当量质量替代物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 排放到空气的 R404A 制冷剂（`refrigerant_r404a_emission`）

将 R404A 损失作为制冷剂混合物质量报告；没有经评审的组成与拆分规则时，不得以组分流替代。

- 选定流：Refrigerant R404A to air
- 流属性/单位：Mass / kg
- 数量规则：依据该制冷剂的采集平衡计算；不得以二氧化碳当量质量替代物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 排放到空气的 R134a 制冷剂（`refrigerant_r134a_emission`）

将 R134a 损失作为排放到空气的 HFC-134a 质量报告，并按有记录的回收、库存变化和转移调整。

- 选定流：HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据该制冷剂的采集平衡计算；不得以二氧化碳当量质量替代物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

###### 排放到空气的 R744 制冷剂（`refrigerant_r744_emission`）

将 R744 损失作为排放到空气的制冷剂二氧化碳质量报告；除非供应记录支持，否则不指定化石或生物源来源。

- 选定流：Carbon dioxide from R744 to air
- 流属性/单位：Mass / kg
- 数量规则：依据该制冷剂的采集平衡计算；不得以二氧化碳当量质量替代物质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装烟熏鱼净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 所有多功能操作 | 首先通过过程细分避免分配；若技术上合理，则使用分别计量的过程和去向记录进行系统扩展。 | eu-pef-2021-2279 |
| `allocation_residue_status` | 鱼类修整物、回收可食材料、废烟熏介质及其他产出 | 根据有记录的去向和市场功能，将每项产出分类为产品、共产品、可回收材料或废弃物；对于送去作为废弃物处理的材料，不得给予共产品抵扣。 | eu-pef-2021-2279 |
| `allocation_physical_then_economic` | 无法避免的共享负担 | 无法细分时，采用能够反映资源因果使用关系的书面物理关系。不存在可辩护的物理关系时，采用经济分配，并披露价格、参考期间、币种及敏感性。 | eu-pef-2021-2279 |
| `allocation_mass_balance` | 批次产出 | 分配前核对接收鱼、添加配料、水分变化、参考产品、共产品、残余物及废水；解释超出测量不确定性的材料不平衡。 | eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_fish_receipts` | `receive_prepare` | received fish | supplier and receiving records | supplier; species; origin; capture_or_aquaculture; cut; state; gross_mass; tare; accepted_mass; receipt_temperature; date; lot | 校准秤及接收与追溯记录 | kg; °C | 每批 | 完整研究期间 | 纳入场址的全部供应路线 | 按产品和批次合计合格净质量 | 秤校准；供应商追溯；拒收日志 |
| `cp_water_records` | `receive_prepare`; `cure_smoke` | process water | meter and production records | opening_meter; closing_meter; shared_use_allocation; lot; process; date | 分表计量，或依据校准场址总表形成的书面分配 | kg or m3 | 每日或每批 | 具有季节覆盖的完整研究期间 | 全部纳入用水单元 | 重大时按记录条件换算体积；用书面因果驱动因素分配共享用水 | 水表校准；与发票或总表核对 |
| `cp_ice_records` | `receive_prepare` | ice | purchase or production records | purchased_mass; produced_mass; issued_mass; returned_mass; lot; date | 称量、发票及领用记录 | kg | 每批或每日 | 完整研究期间 | 纳入的制备操作 | 净领用冰；现场制冰水和能源单独核算 | 称量记录；发票；生产日志 |
| `cp_preparation_mass_balance` | `receive_prepare` | preparation transfers | batch mass balance | accepted_fish; prepared_transfer; residues; wastewater; stock_change; lot | 校准批次秤及经核对的生产记录 | kg | 每批 | 完整研究期间 | 纳入的制备线 | 计算批次平衡并以质量加权聚合 | 校准；批次核对；不平衡解释 |
| `cp_salt_brine_records` | `cure_smoke` | salt and brine | formulation and issue records | ingredient; concentration; fresh_makeup; recirculated_mass; discard_mass; lot; date | 配方表、校准称量及罐体记录 | kg; mass fraction | 每批 | 完整研究期间 | 全部纳入腌制系统 | 新鲜投入只计一次；内部追踪循环量 | 配方批准；秤校准；罐体核对 |
| `cp_smoking_medium_records` | `cure_smoke` | smoking medium | purchase and issue records | medium_type; supplier; mass; moisture_basis; returned_mass; batch | 校准称量及库存核对 | kg | 每批或每次交付 | 完整研究期间 | 服务于纳入生产的全部烟气发生器 | 按介质和批次计算净消耗质量 | 发票；秤校准；库存核对 |
| `cp_energy_records` | `cure_smoke`; `cool_pack_store` | electricity and thermal energy | meters, fuel records, and runtime logs | meter_start; meter_end; fuel_quantity; heating_value_basis; equipment; runtime; throughput; holding_duration; date | 优先分表计量；否则采用与设施总量核对的书面工程分配 | kWh; MJ; fuel unit | 每批、每日或每月表计期间 | 至少一个代表性年度或有依据的完整生产季 | 全部纳入设备和储存区 | 按能源载体聚合，并以因果驱动因素分配共享用能 | 仪表校准；发票核对；设备日志 |
| `cp_smoking_batch_records` | `cure_smoke` | smoking controls and output | validated food-safety and batch records | species; cut; salting_or_brining; smoke_route; medium; chamber_time; chamber_temperature; product_temperature; moisture_or_aw_if_controlled; input_mass; output_mass; deviations; disposition | 经批准的批次记录及校准控制仪器 | kg; time; °C; declared moisture or aw unit | 每批 | 完整研究期间 | 每个纳入的烟熏室和产品路线 | 保留批次值；仅在偏差审查后进行质量加权聚合 | 仪器校准；食品安全计划；放行授权 |
| `cp_residue_records` | `receive_prepare`; `cure_smoke`; `cool_pack_store` | residues and waste | weighing and destination records | material; mass; destination; product_or_waste_status; transporter; date; lot | 校准秤、容器记录及发运文件 | kg | 每批或每次发运 | 完整研究期间 | 全部纳入过程废弃物及回收产出 | 按材料、状态和去向合计；不得抵消不同产出 | 校准；废弃物转移单；适用时的销售记录 |
| `cp_wastewater_records` | `receive_prepare`; `cure_smoke` | wastewater | meter, balance, and treatment records | inflow; discharge; stock_change; evaporation; stream; salt_load_if_measured; treatment; destination; period | 优先排放计量；否则采用书面水量平衡 | kg or m3; concentration where measured | 每日、每批或账单期间 | 完整研究期间 | 全部纳入排水口和分流物流 | 按物流和处理路线换算并聚合 | 水表校准；采样记录；处理发票；平衡闭合 |
| `cp_air_emission_records` | `cure_smoke` | direct air emissions | monitoring or factor calculation records | pollutant; measured_concentration; gas_flow; fuel; smoking_medium; factor; factor_source; runtime; control_device | 烟道监测，或使用有记录的活动和经评审因子计算 | pollutant-specific mass | 监测活动或每个计算期间 | 研究期间的代表性运行模式 | 全部纳入现场燃烧和烟气发生 | 污染物特定质量；保留方法和不确定性 | 实验室报告；仪器校准；因子参考 |
| `cp_packaging_records` | `cool_pack_store` | packaging | bill of materials and issue records | component; material; unit_mass; units_packed; scrap; returned_material; supplier | 部件称量及库存核对 | kg | 每项包装规范和报告期间 | 完整研究期间 | 全部纳入包装形式 | 部件质量乘包装单元数，再加可归属的实测边角料 | 规范；校准秤；采购核对 |
| `cp_refrigerant_records` | `cool_pack_store` | refrigerant | service and stock-balance records | substance; opening_stock; purchases; additions; recovery; closing_stock; equipment; throughput; period | 维护系统、发票及钢瓶质量平衡 | kg by substance | 每次服务及年度闭合 | 完整研究期间 | 服务于纳入操作的全部制冷系统 | 补充量扣除有记录的回收和库存转移，并按设备因果使用分配 | 服务发票；技术人员记录；钢瓶核对 |
| `cp_product_output_records` | `cool_pack_store` | reference product | packing and dispatch records | product_code; species; form; smoke_route; pack_count; gross_mass; tare; net_mass; rejects; lot; date | 校准检重秤或与放行记录关联的批次秤 | kg | 每批 | 完整研究期间 | 全部纳入最终产品 | 合计不含包装的合格净质量 | 校准；放行记录；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 可归属期间或批次数量 / 合格包装烟熏鱼净质量 | 可归属数量；合格净产出 | 每 1 kg 参考产品的数量 | eu-pef-2021-2279 |
| `calc_preparation_yield` | `receive_prepare` | 制备鱼产率 = 制备鱼转移质量 / 合格接收鱼质量 | 合格接收鱼；制备鱼转移量 | kg/kg | eu-pef-2021-2279 |
| `calc_smoking_yield` | `cure_smoke` | 烟熏产率 = 烟熏鱼转移质量 / 制备鱼投入质量；实测时报告配料吸收和水分损失 | 制备鱼；配料；烟熏鱼转移量；实测水分数据 | kg/kg 及披露的质量变化驱动因素 | codex-cxc-52-2003 |
| `calc_water_balance` | 废水行 | 废水 = 实测排放量，或水和冰投入加相关产品析出水，减去保留水、蒸发及其他有记录产出 | 水；冰；盐水；库存变化；保留水；蒸发 | 按物流的 kg 废水 | eu-pef-2021-2279 |
| `calc_refrigerant_loss` | `refrigerant_r717_emission`; `refrigerant_r404a_emission`; `refrigerant_r134a_emission`; `refrigerant_r744_emission` | 物质损失 = 补充量 + 期初库存 + 采购 - 回收 - 期末库存 - 有记录转移，并限定在设备边界内 | 物质特定的制冷剂记录 | kg 物质排放 | eu-pef-2021-2279 |
| `calc_mass_balance` | 每个过程及整个前景系统 | 投入 + 期初库存 = 产品 + 共产品 + 废弃物 + 实测排放 + 期末库存 + 有记录的水分变化和不确定性 | 全部质量记录 | 闭合率和无法解释的不平衡 | eu-pef-2021-2279 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 原料鱼与最终产品 | 保留物种、来源、捕捞或养殖系统、来料状态、过程路线、包装和最终储存规范的批次级关联。 | 供应商追溯、接收、批次、放行及发运记录；codex-cxc-52-2003 |
| `dq_measurement` | 质量、水、能源、温度、时间及控制参数 | 使用与决策相适宜的校准仪器，并保留校准状态、单位、缺失数据处理和换算基准。 | 校准证书、仪表核对、批准程序；codex-cxc-52-2003 |
| `dq_temporal` | 前景研究期间 | 覆盖代表性生产年度或完整生产季，并披露停产、非典型批次、储存时长及替代情况。 | 生产日历、仪表期间、采购及发运核对；eu-pef-2021-2279 |
| `dq_technology_geography` | 过程与上游数据集 | 匹配烟熏技术、烟熏介质、热熏/冷熏路线、冷却/储存系统、地理位置、物种及捕捞/养殖来源；记录代理使用。 | 场址规范、供应商记录、数据集元数据；eu-pef-2021-2279 |
| `dq_completeness` | 前景清单 | 核对鱼、配料、水、能源、包装、产品、共产品、废弃物、废水、直接排放及制冷剂损失；解释排除项和重大不平衡。 | 质量、水、能源、制冷剂及废弃物平衡；eu-pef-2021-2279 |
| `dq_food_safety_controls` | 烟熏、冷却、包装与储存 | 保留经批准的产品特定控制计划、受监测关键参数、偏差、纠正措施和放行决定；本 PCR 不虚构通用时间-温度、微生物、化学污染物、水分或货架期限值。 | 食品安全计划和批次记录；codex-cxc-52-2003 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产出 | 使用声明的产品 UUID、Mass 属性、质量单位组和 kg，确认恰好 1 kg 包装烟熏鱼净质量；不得计入包装质量。 | unsd-cpc-3-0 |
| `validate_qualifiers` | 数据集元数据 | 缺少必需的物种、形态、来料状态、烟熏路线和介质、盐渍/盐水腌制、储存状态、包装、来源、地理位置或生产/暂存日期时，应拒绝该不完整数据包。 | unsd-cpc-3-0; codex-cxc-52-2003 |
| `validate_process_route` | 前景清单 | 确认每个必需过程均有匹配的详细清单和路线特定记录，且制备鱼、烟熏介质与燃料、制冰或共享公用工程不存在重复计算。 | codex-cxc-52-2003 |
| `validate_mass_balance` | 过程和系统总量 | 计算过程及总体质量平衡闭合，并要求对重大不平衡给出水分变化、库存变化、测量不确定性或缺失流解释。 | eu-pef-2021-2279 |
| `validate_allocation` | 多功能过程 | 确认首先尝试避免分配，并披露剩余物理或经济分配键、共产品状态、数据期间及敏感性。 | eu-pef-2021-2279 |
| `validate_food_safety_evidence` | 烟熏与产品完成记录 | 确认实际产品规范提供适用的烟熏、冷却、储存、微生物、化学污染物、水分或水分活度及货架期判据和受监测放行证据；缺少这些判据时报告结论不充分。 | codex-cxc-52-2003 |
| `validate_provisional_ranges` | 重要清单流 | 每个 `reasoned_estimate` 区间仅作为 QA 标记。区间外数值需要解释，区间内数值不构成证据；在出版关键用途前替换暂定范围。 |  |
| `validate_data_quality` | 完成的数据包 | 报告时间、地理、技术、精度、完整性、一致性及来源代表性，包括代理数据集和跳过的检查。 | eu-pef-2021-2279 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 烟熏设施门口烟熏鱼的前景生产数据集 |
| downstream_use | 当地理、物种、生产路线、技术、储存状态和数据质量需求相容时，作为 `secondary_dataset`；也可作为 `background_dataset` |
| allowed_use | 从摇篮到设施门口或更广模型，前提是添加相容的上游鱼类和投入数据集，并避免与本前景边界重叠；仅在功能、质量、储存和路线规范等价时开展比较 |
| excluded_use | 不得直接表示未烟熏、罐藏、仅盐渍、仅干燥、腌泡、发酵或仅有烟熏风味的鱼；未经评审不得跨重大不同物种、热熏/冷熏路线、生产系统、储存状态或地理位置替代 |
| required_metadata | PCR id 和状态；产品流 UUID；物种和形态；来源及捕捞/养殖系统；来料状态；烟熏与烟气发生路线；盐/盐水路线；储存和包装规范；设施地理位置和技术；研究期间；净产出；上游数据集；共产品与分配；数据源及暂定估算 |
| required_quality_disclosure | 原始数据占比；水表和秤覆盖率；时间、地理和技术代表性；数据缺口和代理数据集；质量/水/能源平衡闭合；食品安全控制证据；不确定性；全部 `reasoned_estimate` 使用和未解决 UUID |
| update_trigger | 物种组合、来源或生产系统、烟熏路线或介质、配方、设备、能源载体、冷却/冷冻/储存路线、包装、共产品去向、分配、废水或排放控制、制冷剂、法规、产品安全规范或证据发生足以导致重大清单变化的改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, code 21232, Fish including fillets, smoked. https://unstats.un.org/unsd/classifications/Econ/cpc | 产品类别边界和分类语境 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official Codex text (listed as revised through 2019). https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | 鱼类加工路线分解、卫生与过程控制记录、烟熏/冷却/包装质量要求 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279. http://data.europa.eu/eli/reco/2021/2279/oj | 边界完整性、分配层级、前景数据质量、归一化及校验披露 |
