---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-cold-rolled-of-a-width-25b68e7e
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 宽度小于600毫米、仅经冷轧而未进一步加工的非合金钢平板轧材

## 1. 范围与适用性

本 PCR 适用于在所声明工厂门以冷轧产品状态交付、成品宽度严格小于 600 mm 的非合金钢平板轧材前景数据包。产品可为钢带或薄板，以热轧非合金钢原料经冷压下制造；实际发生的酸洗、退火、平整、纵剪、检验和涂油应按具体路线记录。

宽度限值描述成品而非轧机配置：窄带可以直接窄带轧制，也可以由较宽冷轧钢带纵剪获得。合金钢或不锈钢、宽度不小于 600 mm、涂镀或包覆产品以及进一步加工成零部件的产品不在范围内。退火、平整、纵剪或涂油并非对所有产品都必然发生；条件工序及其交换仅在实际存在时记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-cold-rolled-of-a-width-25b68e7e |
| classification_refs | CPC 3.0 41222，精确分类映射语境 |
| covered_products | 成品宽度小于 600 mm、未涂镀且未超出所声明冷轧产品状态进一步加工的非合金钢冷轧钢带或薄板 |
| excluded_products | 合金钢或不锈钢；宽度不小于 600 mm；仅热轧产品；涂镀、包覆产品；钢管、型材、制造件或其他下游制品 |
| representative_product | 以钢卷或薄板形式供应、成品宽度小于 600 mm 的未涂镀冷轧非合金钢带 |
| production_route | 热轧钢带接收、化学酸洗、冷压下、条件性退火和平整，以及精整或纵剪至声明宽度 |
| market_state | 工厂门净可销售产品，不含运输包装；声明钢卷或薄板形态及表面防护状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 成品宽度小于 600 mm、处于所声明冷轧状态的合格非合金钢平板轧材 |
| How much | 1,000 kg 产品净质量，不含包装 |
| How well | 符合所声明钢种、尺寸公差、宽度限值、厚度、表面质量、硬态或退火或平整状态及涂油状态 |
| How long or cycle | 代表正常生产的一个生产统计期；不代表使用阶段寿命 |
| reference_flow_link | `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 宽度小于600毫米、仅经冷轧而未进一步加工的非合金钢平板轧材 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢种或适用标准；非合金钢标识；成品宽度和厚度；钢卷或薄板形态；硬态、退火或平整状态；表面质量和涂油状态；场址和地理；生产期；酸洗酸种路线；退火路线；纵剪路线；工厂门边界；包装排除 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_rule_1` | 参考产品及含钢产品流或废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的净质量；排除包装，并在同一统计期内核对接收量、工序间量、合格产出、氧化皮损失和废钢。 |
| `measurement_rule_2` | 成品宽度 | Length | mm | 按场址受控尺寸方法测量成品宽度并确认全部代表性产品严格小于 600 mm；保留仪器、抽样方案和结果。 |
| `measurement_rule_3` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始电表读数；按 1 kWh = 3.6 MJ 换算，并披露共用电表的分配。 |
| `measurement_rule_4` | 气体燃料和气氛气体 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留计量体积以及温度、绝对压力、湿基或干基和标准状态换算。 |
| `measurement_rule_5` | 酸溶液和轧制液 | Mass | kg | 报告溶液或混合物质量，另行保留浓度、有效成分基准、循环和补充定义；不得把有效化学品质量当作溶液质量。 |
| `measurement_rule_6` | 统计期归一化 | Mass | kg/1,000 kg | 应用分配规则后，把同一生产统计期内的每项交换归一化至 1,000 kg 合格净产出。 |

## 5. 系统边界

前景边界始于冷轧场址接收热轧非合金钢带，终于完成最终宽度控制后的净合格冷轧产品工厂门。边界包括化学酸洗、冷压下、条件性退火及生产线气氛系统、条件性平整、精整、纵剪、直接公用工程、直接排放、归属于这些工序的场内处理及外排过程废物。热轧原料、购入化学品、电力、天然气和水的生产由相链接的上游数据集表示。客户运输、使用、下游制造和生命末期在本门到门边界之外。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | 前景起点与终点 | 以热轧钢带接收为起点，以精整和宽度核验后的净合格产品为终点；包装不计入参考产品质量。 | `ec-jrc-fmp-bref-2022` |
| `system_boundary_rule_2` | 条件路线 | 仅当实际生产记录表明代表性产品经历该工序时，才纳入退火、气氛气体、平整、纵剪、防护油及其交换。 | `ec-jrc-fmp-bref-2022` |
| `system_boundary_rule_3` | 处理与循环回路 | 记录跨越各前景过程边界的补充投入和净输出；内部循环的酸液、乳化液、冷却水或内部返回废钢不得重复计为新的外部交换。 | `ec-jrc-fmp-bref-2022` |
| `system_boundary_rule_4` | 排除的生命周期阶段 | 排除客户运输、使用、下游制造和生命末期；所有跨越前景起点边界的购入投入均须链接上游数据集。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 冷轧场址接收热轧非合金钢带，并声明质量、钢种、宽度、厚度、表面状态、供应商及上游数据集 |
| starting_condition_role | 冷轧前景系统的上游产品投入 |
| product_classification_scope | 成品宽度小于 600 mm、处于冷轧状态的非合金钢平板轧材语义边界；CPC 3.0 41222 仅为映射语境 |
| recursive_input_rule | 若相同产品类别的外购冷轧产品进入前景系统，应作为带有供应商数据集的上游产品投入记录，不得在本前景模型中重复生成其继承的生产负担 |
| upstream_dataset_requirement | 为热轧钢带、每种酸或化学品、水、交流电、天然气、气氛气体及其他购入产品投入链接供应商数据集 |
| disclosure | 声明场址、地理、统计期、钢种、产品形态、实际路线、排除工序、内部循环核算、处理边界及相同类别投入 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `chemical_pickling` | 化学酸洗 | `required` | 纳入冷轧前的化学除鳞；记录实际采用的每条酸洗路线。 | 冷压下前去除氧化皮并漂洗钢带。 | `pickled_strip_output` 的质量 |
| `cold_rolling` | 冷轧 | `required` | 纳入无预热冷压下及其润滑回路。 | 减小厚度并形成冷轧钢带状态。 | `cold_rolled_strip_output` 的质量 |
| `annealing` | 退火 | `conditional` | 仅在产品记录要求轧后热处理时纳入；保留罩式或连续以及燃气或电加热路线。 | 恢复或调整延性和冶金性能。 | `annealed_strip_output` 的质量 |
| `finishing` | 精整与宽度控制 | `required` | 纳入检验和尺寸控制；仅在实际发生时纳入平整、纵剪、切边和涂油。 | 确定合格宽度、形态、表面状态和最终产出。 | 1,000 kg `reference_product_output` |

### 过程：化学酸洗（`chemical_pickling`）

#### 输入

##### 产品流

###### 接收的热轧非合金钢带（`hot_rolled_strip_input`）

记录除鳞前进入前景生产线的热轧非合金钢带。成品既可能以窄带方式轧制，也可能由较宽钢带纵剪获得，因此须保留原料接收时的实际宽度类别。

- 选定流：热轧非合金钢带
- 流属性/单位：Mass / kg
- 数量规则：用经校准的接收秤或生产线秤计量净投入质量，不含包装；保留接收时的宽度、厚度和热轧产品状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用盐酸（`hydrochloric_acid_input`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：盐酸溶液
- 流属性/单位：Mass / kg
- 数量规则：计量交付量或罐体平衡所得的溶液质量，并单独记录质量分数；未采用盐酸路线时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_chemicals`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用硫酸（`sulfuric_acid_input`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：硫酸溶液
- 流属性/单位：Mass / kg
- 数量规则：计量交付量或罐体平衡所得的溶液质量，并单独记录质量分数；未采用硫酸路线时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_chemicals`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗漂洗水（`pickling_rinse_water`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：将分配至酸洗线的计量补充水体积按实测或供应商声明的密度及所记录的基准条件换算为 kg，并保留体积、密度和基准条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用电力（`pickling_electricity`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量电量，kWh 乘以 3.6 换算为 MJ；共用电表按运行时间与负荷记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meters`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 酸洗后非合金钢带中间品（`pickled_strip_output`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：酸洗后热轧非合金钢带
- 流属性/单位：Mass / kg
- 数量规则：计量或核算酸洗后的工序间净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

###### 废盐酸酸洗液（`spent_hydrochloric_acid_waste`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：废盐酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量并记录处理路线与酸浓度；未采用盐酸路线时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_residuals`
- 来源：`ec-jrc-fmp-bref-2022`

###### 废硫酸酸洗液（`spent_sulfuric_acid_waste`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：废硫酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量并记录处理路线与酸浓度；未采用硫酸路线时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_residuals`
- 来源：`ec-jrc-fmp-bref-2022`

###### 含铁酸洗污泥（`iron_pickling_sludge`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：酸洗废水处理产生的含铁污泥
- 流属性/单位：Mass / kg
- 数量规则：计量湿质量，并记录干固体分数与去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_residuals`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸性酸洗漂洗废水（`acidic_pickling_wastewater`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：酸洗漂洗产生的酸性废水
- 流属性/单位：Volume / m3
- 数量规则：计量废水体积，并记录 pH、处理状态和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_residuals`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 排入空气的氯化氢（`hydrogen_chloride_air`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按末端治理后的烟道测量或经验证的氯化氢专项计算记录；可证明不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`ec-jrc-fmp-bref-2022`


### 过程：冷轧（`cold_rolling`）

#### 输入

##### 产品流

###### 进入冷轧的酸洗钢带（`pickled_strip_input`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：酸洗后热轧非合金钢带
- 流属性/单位：Mass / kg
- 数量规则：计量或核算进入冷轧机的工序间净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

###### 冷轧乳化液浓缩剂（`cold_rolling_emulsion_input`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：水混溶性冷轧润滑剂浓缩液
- 流属性/单位：Mass / kg
- 数量规则：根据领料或罐体平衡记录计量补充浓缩液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_fluids`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧制乳化液补充水（`rolling_makeup_water`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：将水表或批次记录的补充水体积按实测或供应商声明的密度及所记录的基准条件换算为 kg，并保留体积、密度和基准条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`ec-jrc-fmp-bref-2022`

###### 冷轧用电力（`rolling_electricity`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量电量，kWh 乘以 3.6 换算为 MJ；共用电表按运行时间与负荷记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meters`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷轧钢带中间品（`cold_rolled_strip_output`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：冷轧非合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：计量或核算冷轧后的工序间净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

###### 废冷轧乳化液（`spent_rolling_emulsion`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：废水油冷轧乳化液
- 流属性/单位：Mass / kg
- 数量规则：计量排出质量，并记录含水率、处理状态与去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_fluids`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 排入空气的矿物油气溶胶（`rolling_oil_mist_air`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：矿物油气溶胶
- 流属性/单位：Mass / kg
- 数量规则：按末端治理后的烟道测量或经验证的矿物油气溶胶专项计算记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`ec-jrc-fmp-bref-2022`


### 过程：退火（`annealing`）

#### 输入

##### 产品流

###### 进入退火的冷轧钢带（`cold_rolled_strip_annealing_input`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：退火用冷轧非合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：计量或核算工序间质量；产品未经退火时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

###### 退火用天然气（`natural_gas_input`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：计量气体体积，并保留温度与绝对压力基准条件；非燃气退火时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_fuels`
- 来源：`ec-jrc-fmp-bref-2022`

###### 退火用电力（`annealing_electricity`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：计量退火炉、气氛系统、风机和钢带输送的电量，kWh 乘以 3.6 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meters`
- 来源：`ec-jrc-fmp-bref-2022`

###### 退火气氛用氮气（`nitrogen_atmosphere_input`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 体积 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：计量体积，并记录基准条件和纯度；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_atmosphere`
- 来源：`ec-jrc-fmp-bref-2022`

###### 退火气氛用氢气（`hydrogen_atmosphere_input`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：工业氢气
- 流属性/单位：Volume / m3
- 数量规则：计量体积，并记录基准条件和纯度；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_atmosphere`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 退火钢带中间品（`annealed_strip_output`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：退火冷轧非合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：计量或核算退火后的工序间净质量；未退火时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

###### 排入空气的化石源二氧化碳（`fossil_co2_air`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：用烟道测量或基于实测炉用燃料的碳平衡计算；未燃烧化石燃料时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 排入空气的一氧化氮（`nitrogen_monoxide_air`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：一氧化氮
- 流属性/单位：Mass / kg
- 数量规则：按末端治理后的烟道测量或经验证的分物种计算记录；可证明不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 排入空气的二氧化氮（`nitrogen_dioxide_air`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：与一氧化氮分开，按烟道测量或经验证的分物种计算记录；可证明不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stack_emissions`
- 来源：`ec-jrc-fmp-bref-2022`


### 过程：精整与宽度控制（`finishing`）

#### 输入

##### 产品流

###### 进入精整的钢带（`strip_finishing_input`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：精整用冷轧非合金钢带中间品
- 流属性/单位：Mass / kg
- 数量规则：计量或核算进入精整的工序间质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

###### 精整施加的防护油（`protective_oil_input`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：钢带防腐防护油
- 流属性/单位：Mass / kg
- 数量规则：将实测油耗分配至合格产品；未涂油产品不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_oil`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考冷轧产品（`reference_product_output`）

该原子交换跨越本过程边界，按同一生产统计期的可追溯记录采集。

- 选定流：宽度小于600毫米、仅经冷轧而未进一步加工的非合金钢平板轧材
- 流属性/单位：Mass / kg
- 数量规则：在工厂门计量合格产品净质量，不含包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

###### 黑色金属切边废料（`ferrous_trim_scrap`）

仅在实际生产路线使用该物质或运行该工序时记录本原子交换，并保留适用性证据。

- 选定流：冷轧非合金钢黑色金属切边废料
- 流属性/单位：Mass / kg
- 数量规则：计量离开精整工序的废料质量，记录去向与内部返回量；没有外排切边废料时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steel_mass_balance`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流


## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 过程细分 | 优先使用酸洗、冷轧、退火和精整的工序分表、批次记录和物料平衡，避免分配。 |  |
| `allocation_rule_2` | 共用公用工程 | 按记录的运行时间和实测或额定负荷分配共用表计；披露公式、分母、其他使用方和敏感性。 |  |
| `allocation_rule_3` | 内部循环 | 对所声明前景边界内循环的酸液、乳化液、冷却水或废钢不新增外部投入或输出；仅记录补充量和净外排量。 | `ec-jrc-fmp-bref-2022` |
| `allocation_rule_4` | 合格产品与外排黑色金属废料 | 首先细分直接产生废料的工序；仍不可分时，按实测干质量在合格产品与外排黑色金属废料之间分配相应负担，不计避免负担信用，并在下游模型披露处理方法。 |  |
| `allocation_rule_5` | 不合格钢材 | 内部返工钢材进入质量平衡但不重复承担生产负担；离开边界的钢材按其具体废物流或共产品流记录并披露去向。 | `ec-jrc-fmp-bref-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steel_mass_balance` | 全部前景过程 | 钢材投入、中间品、产品和废料 | 秤量与生产记录 | 时间戳、批次或钢卷号、流角色、毛重、皮重、净重、钢种、宽度、去向 | 按钢卷或批次及统计期核对经校准秤量记录。 | kg | 每卷或每批 | 同一代表性生产统计期 | 一个声明场址的全部纳入生产线 | 按行汇总净质量，分配后归一化。 | 校准证书、批次追溯与签署的质量平衡 |
| `cp_pickling_chemicals` | chemical_pickling | 盐酸或硫酸投入 | 交付、储罐与批次记录 | 化学品身份、浓度、交付质量、期初库存、期末库存、退回量、路线 | 核对采购与储罐库存，各酸种分别记录。 | kg 溶液 | 每次交付及每月盘点 | 同一代表性生产统计期 | 纳入的酸洗线与储存设施 | 期初加收货减期末及有记录的转出。 | 供应商规格、过磅单与储罐校准 |
| `cp_process_water` | chemical_pickling 和 cold_rolling | 漂洗水或补充水 | 水表与批次记录 | 表号、期初读数、期末读数、批次补水量、用途、水密度、密度测定温度与基准条件 | 读取分表或核对批次补水，区分循环水和补充水；按实测或供应商声明密度将净体积换算为质量。 | m3 和 kg | 每班或每批 | 同一代表性生产统计期 | 纳入的过程用水单元 | 按行汇总换算后的补充水质量，并保留原始体积与密度记录。 | 水表校准、密度证据与水量平衡 |
| `cp_electricity_meters` | chemical_pickling、cold_rolling 和 annealing | 交流电 | 电表与运行日志 | 表号、期初 kWh、期末 kWh、运行时间、负荷、停机 | 使用分表；共用时应用 `allocation_rule_2`。 | kWh 和 MJ | 每班或电表间隔 | 同一代表性生产统计期 | 纳入的生产线设备与辅助设备 | 汇总 kWh，必要时分配，乘以 3.6 后归一化。 | 电表校准、间隔数据与分配表 |
| `cp_pickling_residuals` | chemical_pickling | 废酸液、污泥和酸性废水 | 转移、储罐、秤量与处理记录 | 流号、质量或体积、浓度、干固体、pH、处理状态、去向 | 在转移或处理边界分别计量每项化学性质明确的流。 | kg 或 m3 | 每次转移并按月核对 | 同一代表性生产统计期 | 纳入的酸洗及归属处理 | 按行分别汇总，不合并不同酸路线。 | 转移联单、化验结果与处理日志 |
| `cp_rolling_fluids` | cold_rolling | 润滑剂补充与废乳化液 | 领料、储罐与处理记录 | 产品号、质量、含水率、期初库存、期末库存、排出量、去向 | 分别核对润滑剂库存与实测排出乳化液。 | kg | 每批并按月盘点 | 同一代表性生产统计期 | 冷轧乳化液回路 | 按行汇总补充量和排出量。 | 产品规格、库存台账与废物联单 |
| `cp_annealing_fuels` | annealing | 气态天然气 | 交接计量记录 | 表号、体积、温度、压力、湿基或干基、燃料期间 | 读取专用或经分配的燃料表，并保留基准条件。 | m3 | 电表间隔 | 同一代表性生产统计期 | 纳入的燃气退火炉 | 汇总基准一致的体积后归一化。 | 仪表校准与燃料账单核对 |
| `cp_annealing_atmosphere` | annealing | 氮气或氢气 | 流量计与供应商记录 | 气体身份、纯度、体积、温度、压力、批次或间隔 | 各气体分别计量，并保留供应状态和标准条件。 | m3 | 每批或计量间隔 | 同一代表性生产统计期 | 纳入的气氛系统 | 各气体分别汇总后归一化。 | 流量计校准与供应商证书 |
| `cp_stack_emissions` | chemical_pickling、cold_rolling 和 annealing | 一项明确空气污染物 | 烟道测试、连续监测或计算记录 | 物种、浓度、流量、时间、湿度、含氧修正、治理状态、方法 | 用有记录的测量或经验证计算分别确定每个化学物种。 | kg | 测试期或连续间隔 | 生产统计期内的代表性工况 | 末端治理后的纳入排气点 | 对代表性运行期积分质量并归一化。 | 测试报告、监测 QA 记录或含输入的计算 |
| `cp_finishing_oil` | finishing | 防护油投入 | 领料与涂油机记录 | 油品、领用质量、期初库存、期末库存、钢卷号、涂油设定 | 将油品库存核对至涂油合格钢卷，不向未涂油产品分配。 | kg | 每卷或每批 | 同一代表性生产统计期 | 纳入的精整线 | 汇总代表性钢卷的油量后归一化。 | 产品规格、库存记录与钢卷追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | 全部清单行 | 归一化量 = 经分配的统计期交换量 × 1,000 / 合格参考产品净 kg 数 | 行交换量、分配结果、reference_product_output 质量 | 每 1,000 kg 的行数量 |  |
| `calculation_rule_2` | 电力 | MJ = 实测 kWh × 3.6 | 实测 kWh | MJ 电力 |  |
| `calculation_rule_3` | 钢材质量平衡 | 质量平衡差 = 钢材投入 − 合格产品 − 净外排含钢输出 − 实测过程损失；调查差值的符号和大小，不得强制闭合 | 经校准的钢材质量记录 | 披露的质量平衡检查 |  |
| `calculation_rule_4` | 条件行 | 只有路线记录证明该交换不存在时才能标记不适用；零值与缺失值不可互换。 | 路线日志、产品规格、行记录 | 适用性标志与数量 | `ec-jrc-fmp-bref-2022` |
| `calculation_rule_5` | 气体体积 | 仅汇总处于相同温度、绝对压力和湿基或干基条件的体积；记录换算且保留原始读数。 | 原始体积与基准条件 | 条件一致的 m3 |  |
| `calculation_rule_6` | 工艺用水行 | 水质量（kg）= 计量净补充体积（m3）× 记录基准条件下的实测或供应商声明密度（kg/m3） | 原始补充体积、密度及密度基准条件 | 工艺用水质量（kg） |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `data_quality_1` | 产品身份 | 每个代表性钢卷或薄板批次均须证明非合金钢身份、冷轧状态和成品宽度小于 600 mm。 | 材质证明、路线记录与尺寸检验 |
| `data_quality_2` | 时间代表性 | 使用覆盖正常运行和全部纳入路线步骤的连续期间；说明停机、试验、异常生产和替代。 | 生产日历与异常日志 |
| `data_quality_3` | 完整性 | 核对钢材、酸液或轧制液库存、水、电力、炉用能源、气氛气体、外排废物及分物种直接排放；记录排除项。 | 签署的核对表与完整性清单 |
| `data_quality_4` | 地理与技术 | 声明场址地理、轧机配置、酸洗酸种、退火配置、治理和精整路线。 | 场址说明、过程图和设备清单 |
| `data_quality_5` | 可追溯性 | 保留原始读数、换算、分配工作表、化验报告及供应商数据集标识，使发布值可追溯到源记录。 | 可审计的数据沿袭包 |
| `data_quality_6` | UUID 就绪度 | 明确保留未解决的流身份；不得替换为更宽泛、分类不同或状态不同的 Tiangong 流。 | UUID 审计日志和未解决行登记表 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考产品 | 若归一化后参考产出不等于 1,000 kg、含包装或成品宽度并非严格小于 600 mm，则失败。 | `unsd-cpc-3-0-structure-2025` |
| `validation_rule_2` | 产品边界 | 若参考产品为合金钢或不锈钢、仅热轧产品、涂镀或包覆产品、宽度不小于 600 mm，或下游制造件，则失败。 | `unsd-cpc-3-0-structure-2025` |
| `validation_rule_3` | 路线适用性 | 条件工序或交换有数值但无路线证据，或记录显示已发生却标记不适用时，失败。 | `ec-jrc-fmp-bref-2022` |
| `validation_rule_4` | 清单原子性 | 任一行合并多种燃料、公用工程、酸、气体、废物或排放物种，或无 UUID 的行未列入 manifest 未解决登记表时，失败。 |  |
| `validation_rule_5` | 能源与气体单位 | kWh 至 MJ 的换算不等于 3.6，或不同基准条件气体体积未经记录换算即汇总时，失败。 |  |
| `validation_rule_6` | 钢材质量平衡 | 缺失钢材质量平衡结果时失败；任何无法解释的差值必须在发布前更正或披露。 |  |
| `validation_rule_7` | 分配 | 共用公用工程或不可分的外排废钢负担缺少要求的分配公式、分母、记录和敏感性披露时，失败。 |  |
| `validation_rule_8` | 证据与可追溯性 | 缺少复现重要结果所需的统计期、场址范围、原始记录、表秤质量证据、来源 id 或供应商数据集时，失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成品宽度小于 600 mm 的声明非合金冷轧平板钢产品前景门到门生产数据包 |
| downstream_use | 构建 Tiangong flow、process 和 lifecyclemodel 记录，以及使用所声明产品和路线的相关 LCA 研究 |
| allowed_use | 保留必需限定信息、供应商数据集、分配、生产期和地理信息时，用于产品特定或场址特定建模 |
| excluded_use | 合金钢或不锈钢、宽度不小于 600 mm、涂镀或制造产品、未经代表性审查的通用市场平均，或未添加其他阶段的从摇篮到坟墓声明 |
| required_metadata | PCR id；CPC 映射语境；钢种；宽度；厚度；形态；硬态或退火状态；表面和涂油状态；场址；地理；统计期；过程路线；分配；基准条件；供应商数据集；未解决 UUID |
| required_quality_disclosure | 完整性与质量平衡结果；表秤质量；时间、地理与技术代表性；条件路线证据；处理去向；分配敏感性；未解决流及缺失范围 |
| update_trigger | 钢种系列、宽度类别、轧机路线、酸洗酸种、退火技术或燃料、精整路线、治理、分配、场址、统计期、供应商数据集或重要数据质量发现发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41222 的精确分类标题及成品宽度产品身份 |
| `ec-jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《钢铁金属加工行业最佳可行技术参考文件》，2022，JRC131649，https://doi.org/10.2760/196475 | 冷轧过程序列、化学酸洗、冷压下、退火、平整、精整、纵剪、油水回路、废物及直接排放采集范围 |
