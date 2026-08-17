---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.plums-dried
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 李子干

## 1. 范围与适用性

本 PCR 适用于以鲜李子为原料，采用日晒干燥或机械脱水任一路线生产，并在干燥或包装设施门口交付的李子干，包括以 prune 名称销售的产品。声明产品可以去核或带核，也可以采用散装或零售包装。前景数据包应声明干燥路线、已知时的品种或商品类型、去核状态、含水率基准与结果、适用的商业等级或合同规格、处理剂或加工助剂使用情况以及包装形式。

鲜李子、李子泥、果酱、果汁、罐藏李子、采用实质不同路线的冻干李子，以及李子干并非唯一水果产品的混合物不在本 PCR 范围内。鲜李子的农业生产位于前景边界之外，但应由上游数据集表示。UNECE DDP-07 仅在销售产品属于其适用范围时用于西梅干/李子干的产品识别、状态、含水率测定和商业质量测量，不提供生命周期清单默认数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.plums-dried |
| classification_refs | CPC 3.0：21412，Plums, dried |
| covered_products | 采用一种已声明的日晒或机械脱水路线制成的李子干和西梅干；去核或带核；散装或零售包装 |
| excluded_products | 鲜李子；李子泥、果酱、果汁或罐藏制品；采用实质不同路线的冻干产品；多种水果混合物 |
| representative_product | 干燥或包装设施门口的适销李子干 |
| production_route | 鲜李子接收与准备；日晒或机械脱水严格二选一；后处理与包装 |
| market_state | 已干燥、调理和分选；声明去核状态、含水率、等级或合同规格、处理情况及包装形式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应已声明商业状态和物理状态的适销李子干 |
| How much | 1 kg 李子干净质量 |
| How well | 符合声明的等级或合同规格及含水率要求；说明去核状态、处理情况和包装形式 |
| How long or cycle | 一次设施门口交付；不赋予使用时长功能 |
| reference_flow_link | 功能单位由下列唯一的天工产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净质量 |
| 参考产品流 | Plums, dried `f5f0869e-5528-4563-97be-b319c24516b2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 干燥路线：日晒或机械；已知时的品种或商品类型；去核或带核；含水率结果及湿基或干基约定；等级或合同规格；处理剂和加工助剂状态；散装或零售包装形式；地理范围和参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有报告的清单归一化到 1 kg 李子干净输出；参考数量不含包装质量。 |
| `moisture_declaration` | 鲜李子输入、干燥中间产品和参考产品 | 质量分数 | % 湿基或 kg 水/kg 产品 | 记录取样方法、批次、测量结果以及湿基或干基约定；仅在销售产品适用时采用 UNECE DDP-07 的测量规定，不得将其作为 LCI 数量。 |
| `weighing_consistency` | 批次输入、中间转移、剔除物、残余物和最终输出 | 质量 | kg | 使用经校准的秤或可追溯交易记录，并保留毛重、皮重和净重，以便重建批次质量平衡。 |
| `energy_carrier_preservation` | 电力、购入热力和燃料 | 能量或载能体质量/体积 | 按原始记录使用 kWh、MJ、kg 或 m3 | 保留每种载能体及其原始单位；归一化前记录换算因子以及低位或高位热值基准。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_receipt_to_gate` | 李子干前景生产 | 纳入鲜李子接收、准备、一条已声明的干燥路线、后处理和包装，直至设施门口李子干输出。 | `eu-pef-2021-2279` |
| `boundary_upstream_supply` | 鲜李子和购入投入 | 将鲜李子、载能体、水、包装和加工助剂保留为可见产品输入，并将每项物料输入链接至适当的上游数据集；不得把上游负荷吸收到未说明的汇总项中。 | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | 干燥作业 | 对所表示的批次选择日晒或机械脱水；同一李子干数量不得同时纳入两条路线，除非对不同路线批次分别计量并透明地重新合并。 |  |
| `boundary_direct_releases` | 场内燃烧和直接释放 | 纳入场内燃料燃烧的逐物质基本流以及其他经测量或计算的直接释放；披露因子来源和计算基准。 | `eu-pef-2021-2279` |
| `boundary_losses_and_packaging` | 剔除物、果核、废水和包装 | 纳入跨越前景边界的所有物料剔除物、分离果核、废水、其他废物和包装，并声明去向或处理路线。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 鲜李子在干燥设施接收，声明接收净量、来源、含水率或状态记录以及接收或拒收状态 |
| starting_condition_role | 李子干前景加工的进入点；接收前的果园生产和运输由链接的上游数据集表示 |
| product_classification_scope | CPC 3.0 子类 21412 范围内的李子干；只要干燥路线仍在范围内，不因去核状态或包装形式改变范围 |
| recursive_input_rule | 如果李子干进入范围内作业，将其记录为链接至上游李子干数据集的可见产品输入，不在当前前景数据包内再次展开同一产品类别 |
| upstream_dataset_requirement | 对鲜李子、公用工程、燃料、包装、加工助剂和废物处理使用地理、技术和时间上具有代表性的数据集 |
| disclosure | 声明鲜李子来源、路线选择、去核环节、含水率基准与结果、处理情况、包装形式、外包作业、上游数据集选择和排除项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | 鲜李子接收与准备 | `required` | 始终纳入 | 前景接收、检验、分选、在采用时清洗以及准备 | 每 kg 转入所选干燥路线的已准备李子 |
| `sun_drying` | 日晒干燥 | `conditional` | 仅当 `drying_route = sun` 时纳入；选择机械路线时排除 | 前景日晒、翻动和路线特定搬运 | 每 kg 日晒干燥中间产品输出 |
| `mechanical_dehydration` | 机械脱水 | `conditional` | 仅当 `drying_route = mechanical` 时纳入；选择日晒路线时排除 | 前景受控脱水及相关公用工程 | 每 kg 机械干燥中间产品输出 |
| `finishing_and_packaging` | 后处理与包装 | `required` | 始终在唯一所选干燥路线之后纳入 | 前景调理、分选、可选去核、在采用时处理以及包装 | 每 1 kg 李子干净输出 |

### 过程：鲜李子接收与准备（`receipt_and_preparation`）

#### 输入

##### 产品流

###### 供应用于干燥的鲜李子（`fresh_plums_input`）

鲜李子在设施接收时跨越前景边界。数量取自可追溯的批次净重，并保留来源、已知时的品种或商品类型、状态和验收记录。

- 选定流：Fresh plums
- 流属性/单位：Mass / kg
- 数量规则：分配给所表示生产批次的实测接收净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 李子干净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_and_quality`
- 数量范围：临时候选筛选范围；仅在缺少批次称重数据时使用，并在获得一个代表性生产期的接收投入和最终输出记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg 鲜李子/kg 李子干净输出
  - 基准：在取得路线和含水率特定的前景得率记录前使用的宽泛条件性质量比估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备用水（`preparation_water`）

仅在发生清洗或其他用水准备步骤时，记录计量或分配至这些步骤的用水。

- 选定流：Process water supply
- 流属性/单位：Mass / kg
- 数量规则：归属于所表示批次的实测准备用水；只有在未发生用水准备且有记录证明时才能记为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 李子干净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：临时条件性筛选范围；在代表性生产期取得批次级计量或分配记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg 水/kg 李子干净输出
  - 基准：取决于清洗和用水操作的宽泛候选估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入干燥的已准备李子（`prepared_plums_output`）

准备完成且被接收的李子离开接收与准备过程，并进入严格一条干燥路线。

- 选定流：Prepared fresh plums
- 流属性/单位：Mass / kg
- 数量规则：实测转移量，或以接收鲜李子减去有记录的剔除物和其他准备损失计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的已准备李子
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_and_quality`

##### 废物流

###### 准备剔除物与残余物（`preparation_rejects`）

按去向记录干燥前剔除的果实、果梗、叶片、果核以及其他分离的准备残余物。

- 选定流：Preparation rejects and residues
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或由质量平衡计算的数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接收鲜李子投入
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_reject_and_residue_records`
- 数量范围：临时物理筛选范围；在代表性生产期取得称量的剔除物记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 剔除物/kg 接收鲜李子投入
  - 基准：以接收投入数量为上限的条件性宽泛比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备废水（`preparation_wastewater`）

发生用水准备步骤时，记录离开准备过程的废水，包括实测或由平衡得到的数量及去向。

- 选定流：Wastewater from fruit preparation
- 流属性/单位：Mass / kg
- 数量规则：归属于所表示批次的实测排放量或水量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 李子干净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 数量范围：临时条件性筛选范围；在代表性生产期取得供水、产品带出水和排放记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg 废水/kg 李子干净输出
  - 基准：取决于准备用水和排放操作的宽泛候选估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：日晒干燥（`sun_drying`）

#### 输入

##### 产品流

###### 进入日晒路线的已准备李子（`sun_route_plums_input`）

本转移仅适用于声明为日晒干燥的批次，并应与分配给该路线的准备过程输出一致。

- 选定流：Prepared fresh plums
- 流属性/单位：Mass / kg
- 数量规则：转入日晒路线的实测或核对后批次数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 日晒干燥中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_route_batch_balance`

###### 日晒干燥辅助电力（`sun_auxiliary_electricity`）

在实际使用时记录风机、翻动、输送、控制或其他路线设备的电力；没有记录时不得向被动操作分配电力。

- 选定流：Site electricity supply
- 流属性/单位：Energy / kWh
- 数量规则：日晒干燥批次的计量电力或按设备运行时间分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 日晒干燥中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：临时条件性筛选范围；在代表性日晒生产期取得计量或有理据的电力分配记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 日晒干燥中间产品输出
  - 基准：取决于辅助设备使用情况的宽泛候选估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 日晒干燥李子中间产品（`sun_dried_intermediate`）

记录达到声明干燥终点后、进入共同后处理之前的路线输出。

- 选定流：Sun-dried plums, intermediate
- 流属性/单位：Mass / kg
- 数量规则：在声明含水率终点实测的路线净输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 日晒干燥中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_batch_balance`

##### 废物流

##### 基本流

###### 日晒干燥期间转移至空气的水（`sun_drying_water_to_air`）

当建模系统要求时，将干燥去除的水分表示为质量平衡基本流；不得把水量平衡以外的量推定为实测大气排放。

- 选定流：Water to air
- 流属性/单位：Mass / kg
- 数量规则：在一致的含水率与质量基准上，以已准备李子输入减去干燥中间产品、剔除物和其他有记录的转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 进入日晒干燥的已准备李子
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_route_batch_balance`
- 数量范围：临时质量平衡筛选范围；由所表示路线的批次含水率和称重记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 水/kg 进入日晒干燥的已准备李子
  - 基准：在一致质量基准上以已准备李子投入为上限的条件性宽泛比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：机械脱水（`mechanical_dehydration`）

#### 输入

##### 产品流

###### 进入机械路线的已准备李子（`mechanical_route_plums_input`）

本转移仅适用于声明为机械脱水的批次，并应与分配给该路线的准备过程输出一致。

- 选定流：Prepared fresh plums
- 流属性/单位：Mass / kg
- 数量规则：转入机械脱水的实测或核对后批次数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 机械干燥中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_route_batch_balance`

###### 机械脱水电力（`mechanical_drying_electricity`）

记录所表示批次使用的风机、输送、控制、热泵和电加热的计量电力或按设备运行时间分配的电力。

- 选定流：Site electricity supply
- 流属性/单位：Energy / kWh
- 数量规则：机械脱水的计量电力或有理据的分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 机械干燥中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：临时候选筛选范围；在代表性机械干燥生产期取得计量或有理据的电力分配记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 机械干燥中间产品输出
  - 基准：取得前景证据前覆盖不同机械配置的宽泛条件性估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 机械脱水燃料或购入热力（`mechanical_drying_thermal_energy`）

分别记录每种燃料或购入热力载能体。没有记录换算时，不得合并低位与高位热值数量或不同载能体数据集。

- 选定流：Declared fuel or purchased heat supply
- 流属性/单位：Energy / MJ，并保留载能体数量的原始记录单位
- 数量规则：机械脱水的计量、发票或有理据分配的热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 机械干燥中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：临时候选筛选范围；在代表性机械干燥生产期取得载能体特定的燃料或购入热力记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg 机械干燥中间产品输出
  - 基准：取得前景证据前对非电热需求的宽泛条件性估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机械干燥李子中间产品（`mechanically_dried_intermediate`）

记录达到声明干燥终点后、进入共同后处理之前的路线输出。

- 选定流：Mechanically dried plums, intermediate
- 流属性/单位：Mass / kg
- 数量规则：在声明含水率终点实测的路线净输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 机械干燥中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_batch_balance`

##### 废物流

##### 基本流

###### 机械脱水期间转移至空气的水（`mechanical_drying_water_to_air`）

当建模系统要求时，将脱水去除的水分表示为质量平衡基本流；不得把水量平衡以外的量推定为实测大气排放。

- 选定流：Water to air
- 流属性/单位：Mass / kg
- 数量规则：在一致的含水率与质量基准上，以已准备李子输入减去干燥中间产品、剔除物和其他有记录的转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 进入机械脱水的已准备李子
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_route_batch_balance`
- 数量范围：临时质量平衡筛选范围；由所表示路线的批次含水率和称重记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 水/kg 进入机械脱水的已准备李子
  - 基准：在一致质量基准上以已准备李子投入为上限的条件性宽泛比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 逐物质场内燃烧清单（`mechanical_combustion_releases`）

当场内燃烧燃料时，本汇总卡要求完成的数据集中列出逐项基本流；不同物质之间不存在通用数量。

- 选定流：Substance-specific elementary flows from on-site combustion
- 流属性/单位：描述性记录；完成的数据集对每种物质使用 Mass / kg
- 数量规则：本汇总卡不适用数量；使用实测载能体用量和已声明来源的因子分别计算每种排放物质
- 数值来源模式：不适用（`not_applicable`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：完成的逐物质清单按每 kg 机械干燥中间产品输出归一化
- 基准类型：过程输出（`process_output`）
- 证据类型：来源规则（`source_rule`）
- 来源：`eu-pef-2021-2279`

### 过程：后处理与包装（`finishing_and_packaging`）

#### 输入

##### 产品流

###### 所选路线的李子干中间产品（`selected_route_intermediate`）

每个所表示批次只接收一条干燥路线的输出；只有在各路线数量和负荷仍可追溯时，才可合并分别计量的路线批次。

- 选定流：Dried plums, intermediate
- 流属性/单位：Mass / kg
- 数量规则：来自所选干燥路线的实测转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 李子干净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_batch_balance`

###### 包装材料（`packaging_materials`）

按材料和供应商数据集分别记录每种初级、次级和三级包装材料。

- 选定流：Declared packaging material supplies
- 流属性/单位：Mass / kg
- 数量规则：按所表示输出分配的实测物料清单数量，或由采购与库存平衡得到的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 李子干净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：临时候选筛选范围；在取得声明包装的物料清单和净包装输出后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg 包装/kg 李子干净输出
  - 基准：取得产品特定记录前覆盖散装和零售包装的宽泛条件性估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 后处理电力（`finishing_electricity`）

记录实际使用的调理、分选、可选去核、输送、处理和包装设备的电力。

- 选定流：Site electricity supply
- 流属性/单位：Energy / kWh
- 数量规则：后处理与包装的计量电力或按设备运行时间分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 李子干净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：临时候选筛选范围；在代表性后处理生产期取得计量或有理据的电力分配记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 李子干净输出
  - 基准：取得前景证据前覆盖场址特定后处理和包装形式的宽泛条件性估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 设施门口李子干（`dried_plums_output`）

该输出在声明的后处理与包装作业后实现参考流。

- 选定流：Plums, dried `f5f0869e-5528-4563-97be-b319c24516b2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配和归一化后恰好 1 kg 李子干净输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 果核与后处理剔除物（`pits_and_finishing_rejects`）

按去向记录分离的果核、等外果和其他后处理残余物；只有在相应作业未发生且有记录证明时才能记为零。

- 选定流：Pits and finishing residues
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或由质量平衡计算的数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 进入后处理的李子干中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_reject_and_residue_records`
- 数量范围：临时物理筛选范围；在代表性后处理生产期取得称量的果核和剔除物记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 果核与剔除物/kg 李子干中间产品投入
  - 基准：以李子干中间产品投入为上限的条件性宽泛比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 路线批次和可分离作业 | 保持日晒和机械脱水批次相互独立，并在分配共享负荷前细分已计量作业。 | `eu-pef-2021-2279` |
| `allocation_shared_operations` | 无法避免的共享公用工程或后处理 | 无法细分或直接计量时，采用并论证符合 PEF 方法层级的分配基准；披露数量、关系、公式以及具有实质影响时的敏感性。 | `eu-pef-2021-2279` |
| `allocation_recovered_outputs` | 果核和其他回收输出 | 分别记录回收输出及其去向；不得仅因某项输出被称为残余物而对其分配零负荷，并记录任何分配或替代处理。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_and_quality` | `receipt_and_preparation` | 鲜李子接收、接收后转移和成品批次质量 | 秤单和质量控制记录 | lot_id; date; origin; cultivar_or_type; gross_mass; tare_mass; accepted_mass; rejected_mass; moisture_result; moisture_basis; condition_or_grade | 经校准称重，并采用有记录的取样和测试方法 | kg；含水率使用 % 或 kg/kg | 每个接收批次和成品批次 | 至少一个代表性生产期以及所声明参考期 | 所表示的所有设施和供应商 | 汇总可追溯批次数量；归一化前核对接收投入、转移和输出 | 校准记录、取样方案、测试方法、批次追溯和异常记录 |
| `cp_utility_records` | `all_applicable_processes` | 水、电力、燃料和购入热力 | 仪表、发票、罐存或设备运行时间记录 | period; process_or_equipment; carrier; opening_reading; closing_reading; purchase_quantity; allocation_driver; unit; heating_value_basis | 优先采用分表计量；否则采用有记录的工程分配至所表示批次 | kg；m3；kWh；MJ；载能体原始单位 | 每批次或最长每月 | 与生产相同的代表性生产期和参考期 | 每个范围内设施和外包作业 | 扣除非生产用途，使用已披露的驱动量分配，保留载能体身份，并按过程输出归一化 | 仪表校准、发票、运行日志、换算因子和分配工作表 |
| `cp_reject_and_residue_records` | `receipt_and_preparation_and_finishing` | 准备剔除物、果核和后处理残余物 | 秤单、容器数量和去向记录 | batch_id; residue_type; gross_mass; tare_mass; destination; sale_or_disposal_status; moisture_basis_if_material | 称量每股物流，或采用经验证并定期复核的容器因子 | kg | 每批次或每次发运 | 与生产相同的代表性生产期和参考期 | 所表示的全部设施 | 按物流和去向汇总；与过程投入和输出核对 | 秤具检查、容器因子验证、去向凭证和质量平衡核对 |
| `cp_water_balance` | `receipt_and_preparation` | 准备用水和废水 | 供水与排放仪表记录或有记录的水量平衡 | batch_or_period; supplied_water; retained_water; discharged_water; evaporation_or_other_loss; allocation_driver | 可行时计量供水和排放；否则使用已披露的平衡项计算 | kg 或 m3，并进行密度换算 | 每批次或最长每月 | 与生产相同的代表性生产期和参考期 | 所有用水准备作业 | 核对供水、排放、带出水和其他损失；按最终输出归一化 | 仪表校准、密度换算、排放记录和平衡闭合 |
| `cp_route_batch_balance` | `selected_drying_route` | 路线投入、干燥中间产品、含水率变化和转移 | 批次称重、含水率测试、路线日志和转移记录 | batch_id; drying_route; input_mass; input_moisture; output_mass; output_moisture; rejects; other_transfers; start_time; end_time | 称量路线投入和输出，并按同一声明基准测试含水率 | kg；含水率使用 % 或 kg/kg | 每个干燥批次 | 至少一个覆盖声明路线条件的代表性生产期 | 所表示的每个干燥场址和路线 | 在一致的质量和含水率基准上计算去除水量和得率；保持路线批次相互独立 | 秤具校准、含水率方法、路线日志和闭合的批次平衡 |
| `cp_combustion_inventory` | `mechanical_dehydration` | 场内燃烧基本流 | 燃料记录、设备日志和有记录的排放因子 | carrier; quantity; unit; heating_value_basis; substance; factor; factor_unit; factor_source; control_efficiency | 使用实测载能体数量和明确引用且适用的因子计算每种物质 | 每种物质 kg | 每批次或与燃料记录一致的报告期 | 与机械脱水相同的代表性生产期和参考期 | 所表示的每个场内燃烧源 | 汇总逐物质结果并按机械路线输出归一化，不得合并载能体或因子基准 | 燃料核对、因子引用、适用性检查和计算工作表 |
| `cp_packaging_records` | `finishing_and_packaging` | 初级、次级和三级包装 | 物料清单、采购记录和包装输出记录 | package_format; material; component_mass; units_used; recycled_content_if_claimed; packed_net_output; losses | 称量代表性部件或使用经验证的供应商规格，并核对采购和库存 | kg | 每种包装设计和生产期 | 声明参考期内的现行包装设计 | 所表示的每种包装形式 | 按材料汇总部件质量和包装损失；按净包装输出归一化 | 部件称重记录、供应商规格、物料清单版本和库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 分配给所表示输出的数量 / 分配后李子干净输出 kg 数 | 已分配数量；李子干净输出；分配结果 | 每 1 kg 参考流的数量 |  |
| `calc_drying_water_balance` | 所选干燥路线 | 转移至空气的水 = 路线输入质量 - 干燥中间产品质量 - 剔除物 - 其他有记录的质量转移，所有项采用一致的测量基准 | 输入和输出称重；含水率基准；剔除物；其他转移 | 每路线基准的水转移 kg 数 |  |
| `calc_direct_combustion_releases` | 场内燃料燃烧 | 物质数量 = 实测载能体数量 × 适用且有记录的因子 ×（1 - 有记录的控制效率），并核对载能体和因子单位 | 载能体数量；适用时的热值基准；物质因子；控制效率 | 每项基本流的 kg 数 |  |
| `calc_route_selection` | 干燥过程图 | 每个所表示批次恰好一个路线标志为真；只有在独立归一化后才能汇总分别计量的路线批次 | batch_id; sun_route_flag; mechanical_route_flag; route-specific output | 经验证的互斥路线分配 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和投入批次 | 保留 CPC 背景、产品名称、已知时的品种或商品类型、去核状态、处理状态、包装形式以及适用等级或合同规格。 | 批次和产品规格；`unsd-cpc-30-21412`；适用时的 `unece-ddp-07-2025` |
| `dq_measurement_traceability` | 质量、含水率、公用工程和包装 | 保留校准、取样、测试方法、仪表、发票、换算和分配证据，以便复现归一化数量。 | 协议记录和计算工作表；适用的质量与含水率测量采用 `unece-ddp-07-2025` |
| `dq_temporal_and_site_coverage` | 前景生产 | 对每个声明的路线、场址、季节条件和包装形式覆盖代表性生产期，并披露任何省略或估算的作业。 | 生产日历、批次登记、场址清单和覆盖评估；`eu-pef-2021-2279` |
| `dq_completeness_and_balance` | 每个过程和路线 | 核对投入、输出、剔除物、残余物、废水、水分损失和库存变化项；解释每项实质性不平衡和临时估计。 | 过程质量平衡、去向记录和估计替换日志 |
| `dq_source_and_factor_currency` | 上游数据集和排放因子 | 记录地理、技术、参考年、版本和适用性；当取得代表性前景记录或经评审的来源支持数值时，替换临时估计。 | 数据集元数据、因子引用、更新日志和 `eu-pef-2021-2279` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认天工产品流 UUID、Mass UUID、Units of mass UUID、kg 单位以及恰好 1 kg 净输出；参考数量不得包含包装质量。 |  |
| `validate_product_condition` | 产品识别和质量 | 确认干燥路线、去核状态、含水率结果与基准、等级或合同规格、处理状态、包装形式、地理范围和参考期；仅在 UNECE DDP-07 的产品范围适用时采用其状态和测量规则。 | `unece-ddp-07-2025` |
| `validate_route_exclusivity` | 过程图和清单 | 确认每个所表示批次的日晒与机械脱水严格二选一，且任何数量或负荷均未在两条路线重复计入。 |  |
| `validate_upstream_links` | 产品输入 | 确认鲜李子、公用工程、燃料、包装、加工助剂和废物处理服务使用具有代表性元数据的已声明上游数据集。 | `eu-pef-2021-2279` |
| `validate_mass_and_moisture_balance` | 每个批次和过程 | 确认以一致的质量和含水率基准核对投入、输出、剔除物、果核、废水、转移至空气的水和其他转移；调查并披露实质性不平衡。 |  |
| `validate_direct_releases` | 场内燃烧 | 场内燃烧燃料时，确认逐物质基本流由实测载能体使用量和适用且有引用的因子计算，并核对单位和控制效率。 | `eu-pef-2021-2279` |
| `validate_allocation_and_estimates` | 共享作业和临时数值 | 确认已披露分配层级和基准，每项推理估算均标识为临时且有条件，并在达到其声明的前景记录触发条件时予以替换。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 李子干前景生产数据包和设施门口产品数据集 |
| downstream_use | 评审后可发布为 `secondary_dataset` 或 `background_dataset`，用于食品过程和 lifecyclemodel 构建 |
| allowed_use | 产品身份、路线、地理、时期、质量、去核状态、处理和包装形式与数据集元数据相容的比较或归因研究 |
| excluded_use | 鲜李子、整果或去核干果以外的李子制品、实质不同的冻干路线、未声明的路线混合，或要求未表示的质量或包装状态的研究 |
| required_metadata | PCR id 和版本；参考流 UUID；CPC 背景；地理范围；参考期；设施和路线覆盖；干燥路线；已知时的品种或商品类型；去核状态；含水率结果与基准；等级或合同规格；处理；包装形式；分配；上游数据集；来源和因子版本 |
| required_quality_disclosure | 前景与估算份额；仪表和秤具覆盖；取样和含水率方法；路线和场址覆盖；质量平衡闭合；分配；排除项；数据缺口；临时估计及其替换状态 |
| update_trigger | 新增或变更路线、设备、燃料、包装设计、产品规格、去核或处理状态、设施组合、上游数据集、排放因子、分配方法，或出现可替换临时估计的代表性前景证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-30-21412` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类（CPC）3.0 版》，子类 21412 “Plums, dried” | 仅用于分类背景和产品类别识别 |
| `unece-ddp-07-2025` | 标准（`standard`） | UNECE 关于西梅干营销与商业质量控制的 DDP-07 标准，UNECE WP.7 现行清单（2025） | 适用时用于西梅干/李子干身份、状态、含水率测定和商业质量测量；不作为 LCI 默认数量 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279 | 系统边界完整性、分配层级、数据质量披露、计算可追溯性和校验方法 |
