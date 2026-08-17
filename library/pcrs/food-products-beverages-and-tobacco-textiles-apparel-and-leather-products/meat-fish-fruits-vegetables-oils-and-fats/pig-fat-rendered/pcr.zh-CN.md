---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-fat-rendered
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 炼制猪脂

## 1. 范围与适用性

本 PCR 适用于以猪源原料炼制得到的脂肪和油脂的前景数据包；当申报的原料限制满足猪油（lard）要求时，也包括猪油。范围从合格猪源组织的接收和预处理开始，包括炼制与分离，以及为交付工厂门口产品而在场址内实施并已申报的调理、精制、储存或包装。必须申报产品称谓、预期用途或等级、原料组成、炼制路线、炼制后处理、物态和包装状态。

本类别不包括未炼制猪脂；作为独立馏分销售的猪油油和猪油硬脂；部分或完全氢化、互酯化、再酯化或反油酸化的动物脂肪；非猪物种脂肪；以及下游配制食品和油脂化工产品。食品级或符合 CXS 211-1999 的声明属于条件性声明，不得仅由 CPC 身份推定。

本 PCR 不规定全类别统一的能耗、用水量、添加剂用量、排放因子或炼制收率。这些数值取决于场址、原料、工艺技术、产品称谓和质量等级，必须作为前景数据采集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-fat-rendered |
| classification_refs | CPC 3.0: 21521，Pig fat, rendered（精确映射语境） |
| covered_products | 由猪组织炼制得到的猪脂肪和油脂；当申报的原料边界满足适用产品称谓时包括猪油（lard）；仅当精制后仍属于炼制猪脂而非单独分类馏分或化学改性脂肪时，才包括精制炼制猪脂 |
| excluded_products | 未炼制猪脂；猪油油；猪油硬脂；氢化、互酯化、再酯化或反油酸化的动物脂肪；禽脂；牛羊脂；鱼油或海洋哺乳动物油脂；配制食品和油脂化工衍生物 |
| representative_product | 在炼制设施门口以散装形式供应的炼制猪脂 |
| production_route | 合格猪源原料的接收与预处理、热炼制与相分离，随后是已申报且有条件纳入的过滤、精制、冷却、储存或包装 |
| market_state | 工厂门口的散装或包装炼制猪脂；已申报产品称谓、预期用途或等级、炼制后处理、物态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所申报产品称谓和预期用途或等级规格的炼制猪脂 |
| How much | 净重 1 kg 炼制猪脂 |
| How well | 已申报产品称谓、预期用途或等级、原料组成、炼制路线、炼制后处理、物态、质量规格和包装状态，并由批次记录支持 |
| How long or cycle | 一个生产批次或明确申报的平均期；不存在使用阶段的服务时长 |
| reference_flow_link | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-fat-rendered |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 申报工厂门口的净产品 1 kg |
| 参考产品流 | Pig fat, rendered `940c22ad-d154-42ac-9988-374cbfeb86b4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Unit group for Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品称谓：lard 或 rendered pork fat；预期用途或等级；猪源原料组织类别及适用性状态；炼制路线；炼制后处理，包括任何精制或分提；物态以及相关时的参考温度；质量规格和符合性声明；散装或包装状态；工厂门口位置；生产批次或平均期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告净重 1 kg 炼制猪脂，不计包装质量。申报称量点、物态，以及会影响质量测定时的参考温度。 |
| `mass_basis_consistency` | 猪源原料、中间脂、最终产品、共产品和废物 | Mass | kg | 采用已申报收到态基准下的实测净质量。如另用干物质或组成校正值，保留原始实测质量并记录换算基准和结果。 |
| `energy_accounting` | 电力、燃料、外购热或蒸汽 | 能量，或带有已记录换算的质量/体积 | 按原始记录使用 kWh、MJ、kg 或 m3 | 根据仪表、账单或运行日志分别记录各能源载体；仅可使用有文件依据的因子换算，不得以类别统一默认值替代。 |
| `composition_and_quality_basis` | 用于产品称谓或等级的检验 | 已申报的分析属性 | 方法规定的单位 | 记录采样批次、方法、结果、单位和符合性判定。CXS 211-1999 附录特性属于补充信息，除非申报规格或适用规则将其规定为强制要求。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格猪源脂肪组织，以及所申报产品称谓允许时的清洁骨、分离皮、头皮、耳、尾或其他猪组织到达炼制设施；已知供应商、物种、组织类别、质量、适用性或等级状态及前处理 |
| starting_condition_role | 炼制的门到门前景起点；上游养猪、屠宰和供应商侧预处理由链接的上游数据集表示 |
| product_classification_scope | CPC 3.0 子类 21521 下的炼制猪脂，通过申报的原料和产品称谓事实区分 lard 与 rendered pork fat |
| recursive_input_rule | 同类别的外购炼制猪脂必须作为独立产品投入记录数量和上游数据集；不得在本前景系统内重建其先前生产，并须披露混配或再处理 |
| upstream_dataset_requirement | 为猪源原料、电力、燃料或外购热、水、辅料、包装、纳入时的运输以及场外废物或废水处理链接有代表性的上游数据集；披露从屠宰或供应商数据集继承的分配 |
| disclosure | 申报设施和地理范围、技术和运行方式、批次或平均期、原料组织类别、预期用途或等级、产品称谓、炼制后处理、共产品和废物、分配方法、截断、储存和包装范围以及全部数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景炼制系统 | 纳入合格猪源原料的接收与预处理、炼制与分离、可直接归属的公用工程和排放，以及为交付所申报工厂门口参考产品所需的任何场内调理。上游生产和下游使用采用链接数据集，不在前景内重建。 | `unsd-cpc-3-0-explanatory-notes-2025`; `eu-pef-2021-2279` |
| `boundary_product_designation` | lard 或 rendered pork fat 称谓 | 对 lard 执行 CXS 211-1999 规定并已申报的组织限制。对 rendered pork fat 披露任何允许的骨、皮、耳、尾或其他组织。不得由其中一个称谓推定另一个称谓。 | `codex-cxs-211-1999` |
| `boundary_scope_exclusions` | 类别边界 | 排除未炼制猪脂、单独销售的猪油油或猪油硬脂、化学改性动物脂肪和非猪脂肪。此类产出存在时应采用适当产品或废物身份，不得作为参考产品。 | `unsd-cpc-3-0-explanatory-notes-2025`; `codex-cxs-211-1999` |
| `boundary_conditional_operations` | 精制、调理、储存和包装 | 仅当某操作在申报设施门口内实施且为交付产品状态所需时纳入；否则排除并说明交接点。申报食品规格要求时，应明确标注炼制后处理。 | `codex-cxs-211-1999`; `eu-pef-2021-2279` |
| `boundary_fdm_bat_scope` | 环境绩效证据 | 不得将 EU 食品、饮料和乳制品 BAT 结论中的能耗、用水或排放绩效水平作为炼制默认值，因为该来源明确排除初级 rendering 和 fat melting；应使用场址记录和适用的炼制特定要求。 | `eu-fdm-bat-2019-2031` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt_preparation` | 原料接收与预处理 | required | 始终纳入；仅在实际实施时纳入各项清洗、破碎或脱水步骤 | 建立合格猪源原料身份及进入炼制的实测投料 | 每 1 kg 最终炼制猪脂 |
| `rendering_separation` | 炼制与相分离 | required | 始终纳入；必须申报技术和运行方式 | 将合格猪源物料转化为炼制猪脂并分离共产品或废物 | 每 1 kg 最终炼制猪脂 |
| `conditioning_dispatch` | 调理、精制、储存与发运 | conditional | 仅纳入所申报工厂门口之前实际实施的操作 | 交付所申报等级、物态、储存条件及散装或包装状态 | 每 1 kg 最终炼制猪脂 |

### 过程：原料接收与预处理（`raw_material_receipt_preparation`）

#### 输入

##### 产品流

###### 合格猪源原料（`pig_raw_material_input`）

猪源组织作为炼脂原料跨越前景边界。记录的组织类别和适用性状态必须支持申报的产品称谓。

- 选定流：猪脂肪组织以及已申报的合格猪组织或清洁骨
- 流属性/单位：Mass / kg
- 数量规则：实测接收并投入预处理或炼制批次的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_product_mass`
- 来源：`codex-cxs-211-1999`; `unsd-cpc-3-0-explanatory-notes-2025`

###### 预处理用水（`preparation_water_input`）

仅当清洗、清洁或其他预处理操作在前景边界内发生时记录用水。

- 选定流：供应给原料预处理的水
- 流属性/单位：Volume 或 Mass / m3 或 kg
- 数量规则：归属于批次或平均期的计量或平衡核算水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_water`
- 来源：`eu-pef-2021-2279`

###### 预处理用电（`preparation_electricity_input`）

当接收、输送、粉碎、泵送或其他预处理设备运行时，记录其用电。

- 选定流：供应给原料接收与预处理的电力
- 流属性/单位：Energy / kWh
- 数量规则：实测用电或来自共享电表的有文件依据分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理猪源物料（`prepared_pig_material_output`）

预处理物料是转移至炼制过程的内部中间产品；其质量和库存变化用于支持前景质量平衡。

- 选定流：预处理猪源含脂物料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或由接收量、移除量和库存变化记录计算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_product_mass`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 拒收或移除物料（`preparation_rejects_output`）

按实际废物或共产品身份和去向记录异物、不合格组织、腐败物料或其他移除物。

- 选定流：预处理拒收或移除物料
- 流属性/单位：Mass / kg
- 数量规则：按处置路线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_records`
- 来源：`codex-cxs-211-1999`; `eu-pef-2021-2279`

###### 预处理废水（`preparation_wastewater_output`）

预处理水成为排水时记录废水；链接场内或场外处理，并在可得时保留实测排水和监测污染物数据。

- 选定流：原料预处理废水
- 流属性/单位：Volume / m3
- 数量规则：归属于该过程的计量或平衡核算排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission_effluent_records`
- 来源：`eu-pef-2021-2279`

##### 基本流

### 过程：炼制与相分离（`rendering_separation`）

#### 输入

##### 产品流

###### 预处理猪源物料投料（`prepared_pig_material_input`）

预处理猪源物料作为内部过程投料进入炼制操作。

- 选定流：预处理猪源含脂物料
- 流属性/单位：Mass / kg
- 数量规则：与 `prepared_pig_material_output` 相同的转移量，仅按已记录的中间库存变化调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_product_mass`
- 来源：`eu-pef-2021-2279`

###### 炼制热能（`rendering_thermal_energy_input`）

分别记录各燃料、外购热或蒸汽载体。不适用默认能耗强度。

- 选定流：供应给炼制的燃料、外购热或蒸汽
- 流属性/单位：Energy、Mass 或 Volume / 按原始记录使用 MJ、kWh、kg 或 m3
- 数量规则：计量、账单或批次日志数量，附有文件依据的换算和共享公用工程分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-2021-2279`

###### 炼制用电（`rendering_electricity_input`）

记录容器、搅拌、泵送、分离、控制和可直接归属辅助系统的用电。

- 选定流：供应给炼制与分离的电力
- 流属性/单位：Energy / kWh
- 数量规则：实测用电或来自共享电表的有文件依据分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 炼制猪脂中间产品（`rendered_pig_fat_intermediate_output`）

记录离开分离过程、进入任何纳入的调理或发运操作之前的炼制猪脂质量。

- 选定流：Pig fat, rendered `940c22ad-d154-42ac-9988-374cbfeb86b4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从炼制与分离转移的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_product_mass`
- 来源：`codex-cxs-211-1999`; `unsd-cpc-3-0-explanatory-notes-2025`

###### 分离共产品（`rendering_coproducts_output`）

按实际身份分别记录分离固体、蛋白质物料或其他可销售产出；不得将猪油油、猪油硬脂或化学改性脂肪标作参考产品。

- 选定流：实际分离共产品身份
- 流属性/单位：Mass / kg
- 数量规则：按共产品及去向实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_records`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`; `eu-pef-2021-2279`

##### 废物流

###### 炼制残余物与废水（`rendering_waste_output`）

在记录允许时分别记录不可销售固体、污泥、冷凝液和废水，并链接各处理路线。

- 选定流：按实际身份记录的炼制残余物、污泥、冷凝液或废水
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按废物类型和处理去向实测数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_records`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### 炼制直接排放（`rendering_direct_emissions_output`）

记录从场内燃烧、通风口、泄漏和废水排放跨越环境边界的直接释放；使用实测值，或由采集的活动数据和有文件依据的因子计算。

- 选定流：实际排入空气、水或土壤的基本流
- 流属性/单位：Mass / kg 或方法规定的单位
- 数量规则：实测排放，或由前景活动数据和有文件依据的因子计算的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission_effluent_records`
- 来源：`eu-pef-2021-2279`

### 过程：调理、精制、储存与发运（`conditioning_dispatch`）

#### 输入

##### 产品流

###### 待调理炼制脂（`rendered_pig_fat_conditioning_input`）

仅当调理、精制、储存或包装在申报工厂门口之前纳入时记录该内部转移。

- 选定流：Pig fat, rendered `940c22ad-d154-42ac-9988-374cbfeb86b4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：与中间产品输出相同的数量，按已记录的中间库存变化调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_product_mass`
- 来源：`codex-cxs-211-1999`

###### 调理公用工程和辅料（`conditioning_inputs`）

使用时将水、电力、热、过滤助剂、获准添加剂和包装分别记录为独立流；保留适用产品规格和供应商数据集。

- 选定流：实际公用工程、辅料、添加剂或包装材料
- 流属性/单位：适用属性 / 原始记录单位
- 数量规则：按投入分别采用计量、账单、配方或领料记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_packaging_records`
- 来源：`codex-cxs-211-1999`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终炼制猪脂（`final_rendered_pig_fat_output`）

该流是申报工厂门口的参考产品。输出记录必须包含全部必需限定信息和适用的批次处置决定。

- 选定流：Pig fat, rendered `940c22ad-d154-42ac-9988-374cbfeb86b4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将实测合格产品质量归一化后，固定参考输出为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：净重 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_material_product_mass`
- 来源：`codex-cxs-211-1999`; `unsd-cpc-3-0-explanatory-notes-2025`

###### 调理共产品或馏分（`conditioning_coproducts_output`）

任何单独销售的馏分均按实际产品身份和分类记录；不得作为额外参考产品输出。

- 选定流：实际共产品或馏分身份
- 流属性/单位：Mass / kg
- 数量规则：按产品和去向实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_records`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`; `eu-pef-2021-2279`

##### 废物流

###### 调理与包装废物（`conditioning_waste_output`）

按实际身份和处理去向记录废过滤介质、污泥、不合格产品、废水和包装废料。

- 选定流：实际调理或包装废物身份
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按废物类型和处理去向实测数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_records`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### 调理直接排放（`conditioning_direct_emissions_output`）

仅当直接空气、水或土壤释放发生于纳入操作内时记录。

- 选定流：实际排入空气、水或土壤的基本流
- 流属性/单位：Mass / kg 或方法规定的单位
- 数量规则：实测排放，或由前景活动数据和有文件依据的因子计算的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终炼制猪脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission_effluent_records`
- 来源：`eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 炼制、分离、调理和共享公用工程 | 技术上可行时，首先细分过程，并将实测投入、产出、排放和废物处理直接归属于导致这些流的产出。 | `eu-pef-2021-2279` |
| `allocation_residual_shared_flows` | 细分后的剩余多功能负荷 | 细分仍不能解决共享流时，依据同一门口和同一平均期有文件依据的同期净收入，在可销售产出之间对剩余共享负荷进行经济分配。报告数量、价格、币种、期间、计算和敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste_status` | 不具有可销售产品功能的产出 | 仅当法律和经济状态及去向支持时，才将产出视为废物；将其处置和处理负荷分配给前景系统，除非有文件依据的替代或其他管辖方法，否则不得给予共产品抵扣。 | `eu-pef-2021-2279` |
| `allocation_upstream_inheritance` | 猪源原料和其他外购投入 | 采用有代表性供应商数据集已经记录的上游负荷和分配；不得在本门到门系统内重新分配供应商过程。原料上游负荷为零时，披露授权该选择的规则。 | `eu-pef-2021-2279` |
| `allocation_governing_method_override` | 受项目特定方法管辖的研究 | 当所申报研究方法（如 PEF）规定固定分配因子或其他强制规则时，应用该方法并披露其对上述通用剩余流规则的取代。不得在未协调的情况下混用分配体系。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_product_mass` | `raw_material_receipt_preparation`; `rendering_separation`; `conditioning_dispatch` | 原料、内部中间产品、最终产品和库存变化 | 地磅、台秤、批次、罐计量和库存记录 | timestamp; batch_id; supplier; species; tissue_categories; fitness_or_grade_status; product_designation; gross_mass; tare_mass; net_mass; opening_stock; closing_stock; physical_state; reference_temperature; disposition | 使用经校准的称量或罐计量，并与批次和库存记录核对 | kg | 每次接收、转移和发运；每个平均期边界盘点库存 | 完整申报批次或具有代表性的连续生产平均期 | 申报设施内全部纳入的生产线和储罐 | 按批次或期间合计净流；核对内部转移和库存变化；按合格最终产出归一化 | 校准记录；批次谱系；供应商文件；库存核对；操作员签认 |
| `cp_energy_records` | `raw_material_receipt_preparation`; `rendering_separation`; `conditioning_dispatch` | 电力、燃料、外购热和蒸汽 | 分表、公用事业账单、燃料领用和运行小时记录 | carrier; meter_id; opening_reading; closing_reading; invoice_quantity; unit; conversion_factor; conversion_source; equipment_or_process; operating_hours; allocation_driver | 优先直接计量；否则核对账单并使用有文件依据的因果驱动因子分配共享用量 | kWh, MJ, kg, or m3 | 连续或每批次；至少每月核对 | 与产品质量记录相同期间 | 全部纳入的用能设备和可直接归属辅助系统 | 按能源载体和过程合计；扣除排除用量；用有文件依据的因子换算；按最终产出归一化 | 仪表校准；账单；燃料规格；分配工作表；核对残差 |
| `cp_utilities_water` | `raw_material_receipt_preparation`; `conditioning_dispatch` | 取水、供水和废水 | 水表、账单、罐记录和排水流量计 | source; meter_id; opening_reading; closing_reading; quantity; unit; process; discharge_route; recycled_quantity | 对纳入操作进行计量或水量平衡核对 | m3 or kg | 连续或每批次；至少每月核对 | 与产品质量记录相同期间 | 纳入的用水点和排放点 | 按来源和去向合计；避免重复计算回用水；按最终产出归一化 | 仪表校准；账单；水量平衡核对；排放记录 |
| `cp_coproduct_waste_records` | `raw_material_receipt_preparation`; `rendering_separation`; `conditioning_dispatch` | 共产品、拒收物、残余物、污泥和包装废物 | 称重单、批次记录、销售记录、废物联单和处理凭证 | flow_identity; legal_status; economic_status; mass_or_volume; unit; destination; price; currency; period; treatment_route; hazardous_status | 实测每项产出，并保留支持产品、共产品或废物分类的证据 | kg or m3 | 每批次或每批发运 | 完整申报批次或平均期 | 全部纳入的产出和废物发运点 | 按身份和去向分别合计；按最终产出归一化；保留用于分配的价值 | 秤具校准；发票；联单；处理证明；分类理由 |
| `cp_emission_effluent_records` | `rendering_separation`; `conditioning_dispatch` | 直接排放和废水污染物 | 连续监测、采样、实验室报告、燃料记录和许可计算 | flow_name; compartment; source_point; measured_concentration; flow_rate; duration; activity_data; factor; factor_source; result; unit; sampling_method; detection_limit | 优先直接监测；否则由采集的活动数据和有文件依据的适用因子计算 | kg or method-specific unit | 按许可和运行变异要求；与生产期间一致 | 代表所申报技术和生产期间 | 全部纳入的直接释放点 | 积分实测负荷，或以活动量乘因子计算；按最终产出归一化；保留未检出值处理方法 | 仪器校准；认可实验室报告；许可报告；计算表；因子引用 |
| `cp_conditioning_packaging_records` | `conditioning_dispatch` | 精制投入、添加剂、过滤助剂、包装、储存和发运 | 配方、批次领用、包装、仓储和发运记录 | material_identity; specification; supplier; quantity; unit; batch_id; operation; storage_duration; storage_condition; package_type; package_mass; dispatch_mass | 对申报门口内的操作采集实际物料领用和发运记录 | Applicable recorded unit | 每批次或每次发运 | 完整申报批次或平均期 | 纳入的调理、储存和包装操作 | 按物料和操作合计；核对包装与发运质量；按最终产出归一化 | 供应商规格；配方批准；领料记录；仓储日志；发运记录 |
| `cp_quality_designation_records` | `raw_material_receipt_preparation`; `conditioning_dispatch` | 产品称谓、预期用途或等级、标签和符合性 | 供应商声明、批次规格、采样方案、实验室结果、标签和放行决定 | designation; intended_use_or_grade; raw_material_eligibility; test_method; sample_id; result; unit; specification_limit; conformity_decision; label_claim; reviewer | 按适用规格和批次证据核验各项申报称谓和声明 | Method-specific | 每批次或按合理采样方案 | 与清单数据相同生产期间 | 数据包内全部产品 | 保留批次级结果；仅在可追溯且不掩盖不合格批次时汇总 | 批准规格；监管链；实验室能力；放行授权；标签副本 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_flow` | 每个定量前景流 | 归一化数量 = 可归属流数量 / 合格最终炼制猪脂净产出 | 采集的流数量；最终产品净质量 | 每 1 kg 参考产品的流数量 | `eu-pef-2021-2279` |
| `calc_internal_transfer` | 预处理物料和炼制猪脂中间产品 | 转移量 = 实测转移 + 对应中间产品及期间的期初库存 - 期末库存；发送过程和接收过程使用相同校正量 | 转移测量；期初和期末库存 | 核对后的内部中间产品数量 | `eu-pef-2021-2279` |
| `calc_energy_conversion` | 燃料、蒸汽和外购热记录 | 换算能量 = 能源载体原始记录数量 × 有文件依据的载体特定换算因子；保留原始数量、因子、来源和换算结果 | 载体数量；换算因子 | 按载体和过程的能量 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 完整前景系统 | 质量平衡残差 = 总质量投入 + 期初库存 - 产品、共产品、废物和实测排放质量总和 - 期末库存；调查并披露残差，不得强行调为零 | 同一基准下全部质量流和库存变化 | 质量平衡残差和核对说明 | `eu-pef-2021-2279` |
| `calc_economic_allocation` | 细分后的剩余共享负荷 | 分配因子_i = 净收入_i / 同一门口和期间全部可销售产出的净收入总和；分配负荷_i = 共享负荷 × 分配因子_i | 产出数量；同期净价格；共享负荷 | 分配因子及已分配的剩余负荷 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 原料和最终产品 | 将每个纳入批次从猪种和组织类别追溯到产品称谓、预期用途或等级、炼制后处理和发运。 | 批次谱系、供应商声明、规格、放行和发运记录；`codex-cxs-211-1999` |
| `dq_measurement` | 质量、能量、水、排放和质量检验 | 使用经校准仪器或核对记录；保留原始读数、单位、换算、采样方法、检出限和核验状态。 | 校准证书、账单、日志、实验室报告和核对工作表；`eu-pef-2021-2279` |
| `dq_temporal_coverage` | 全部前景数据 | 使用一个完整批次或代表正常运行的期间；纳入期初/期末库存、停机、清洁、返工和异常事件，或披露排除项。 | 带时间戳记录、生产日历、事件日志和库存核对 |
| `dq_completeness` | 前景过程清单 | 纳入所含过程的全部已知物料、能源、水、产品、共产品、废物和直接基本流；识别并说明任何截断或不可得记录。 | 完成的流清单、质量和公用工程平衡、截断登记；`eu-pef-2021-2279` |
| `dq_representativeness` | 数据集元数据和链接的背景数据集 | 记录技术、地理、期间、精度、供应商覆盖范围，以及每个背景数据集代表实际投入或处理路线的理由。 | 数据质量评估和数据集选择记录；`eu-pef-2021-2279` |
| `dq_no_generic_performance_values` | 能源、水、收率和排放 | 不得用 EU FDM BAT 来源的值或无引用类别默认值填补缺失前景数据。将其标为缺口，并在评审前以场址记录或适用的炼制特定证据替换。 | 数据缺口登记、来源适用性审查、替换记录；`eu-fdm-bat-2019-2031` |
| `dq_conditional_codex_claim` | 食品级或 CXS 211-1999 声明 | 核验适用的 lard 或 rendered pork fat 定义、组成与质量规定、添加剂、污染物、卫生、标签和分析要求。附录因素仅在申报规格采用时作为强制要求。 | 规格对照、检验报告、标签、放行决定；`codex-cxs-211-1999` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品 UUID 必须为 `940c22ad-d154-42ac-9988-374cbfeb86b4`，参考属性 UUID 必须为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位必须为 kg。 |  |
| `validate_required_qualifiers` | 数据集身份 | 任一必需限定信息缺失时判定完整性失败，包括产品称谓、预期用途或等级、原料组织类别、炼制路线、炼制后处理、物态、质量规格、包装状态、工厂门口或批次/期间。 | `codex-cxs-211-1999`; `unsd-cpc-3-0-explanatory-notes-2025` |
| `validate_category_scope` | 产品和共产品身份 | 不得将未炼制猪脂、猪油油、猪油硬脂、化学改性脂肪和非猪脂肪作为参考产品；存在时按实际身份记录。 | `unsd-cpc-3-0-explanatory-notes-2025` |
| `validate_process_coverage` | 过程图 | 必须纳入原料接收/预处理和炼制/分离；仅当调理/发运在申报门口前实施时要求纳入，并披露纳入和排除的操作。 | `eu-pef-2021-2279` |
| `validate_foreground_amounts` | 物料、能源、水、辅料、产品、废物和排放 | 要求实测或基于采集计算的数量、采集协议链接、期间一致，并按 1 kg 最终产品归一化。拒绝无引用的默认能耗、用水、排放或收率值。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 完整前景系统 | 要求有文件依据的质量平衡，包括库存变化、共产品、废物、废水和实测质量排放；调查并披露物料残差。 | `eu-pef-2021-2279` |
| `validate_allocation` | 多功能过程 | 要求首先细分的证据，以及对任何剩余分配、产出状态、数量、价格、期间和管辖方法的完整记录。 | `eu-pef-2021-2279` |
| `validate_codex_claim` | 食品级或 CXS 211-1999 符合性声明 | 作出此类声明时，要求产品称谓特定的对照和批次证据；不得将 CPC 21521 身份或补充性附录数值本身视为符合性证明。 | `codex-cxs-211-1999` |
| `validate_source_applicability` | 外部证据 | 要求每个来源支持其所引用的规则。记录 EU FDM BAT 排除初级 rendering 和 fat melting，因此不提供炼制绩效默认值。 | `eu-fdm-bat-2019-2031` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 炼制猪脂门到门前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当产品称谓、等级、地理、技术、分配、门口和数据质量与研究相匹配时，用于炼制猪脂及下游产品的 LCA |
| excluded_use | 未炼制猪脂、独立猪油油或硬脂、化学改性脂肪、非猪脂肪、未披露混合物，或无支持证据的食品/Codex 符合性声明 |
| required_metadata | 规范 PCR id；参考 UUID；CPC 映射语境；设施地理；技术和运行方式；产品称谓；预期用途或等级；原料组织类别；炼制路线；炼制后处理；物态和包装状态；批次或平均期；前景门口；共产品和废物；分配方法；链接的上游数据集；截断和数据缺口 |
| required_quality_disclosure | 计量和校准基准；质量和公用工程核对；时间、技术和地理代表性；完整性；不确定性和质量平衡残差；来源适用性；声明符合性时的实验室和符合性证据 |
| update_trigger | 原料适用性、产品称谓或等级、技术、设施或地理、能源系统、精制或包装范围、共产品状态或价格、分配规则、适用法律或 Codex 要求、参考 UUID 发生变化，或获得更好的炼制特定证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | `official_guidance` | 联合国统计司，*Central Product Classification (CPC) Version 3.0 Explanatory Notes*，子类 21521，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-12） | 炼制猪脂与猪油的类别纳入；未炼制猪脂、猪油油和猪油硬脂的排除 |
| `codex-cxs-211-1999` | `standard` | Codex Alimentarius，*Standard for Named Animal Fats*，CXS 211-1999，2024 年修订。https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf（检索日期 2026-08-12） | lard 与 rendered pork fat 定义、合格原料差异、条件性炼制后处理和标签、质量与符合性证据 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，附件 I，Product Environmental Footprint method。https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-12） | 功能单位、公司特定前景数据、清单完整性、系统边界披露、细分和剩余分配、数据质量 |
| `eu-fdm-bat-2019-2031` | `official_guidance` | 欧盟委员会执行决定 (EU) 2019/2031，食品、饮料和乳制品行业 BAT 结论。https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-12） | 适用性限制：明确排除初级 rendering 和 fat melting，因此其绩效水平不作为炼制默认值 |
