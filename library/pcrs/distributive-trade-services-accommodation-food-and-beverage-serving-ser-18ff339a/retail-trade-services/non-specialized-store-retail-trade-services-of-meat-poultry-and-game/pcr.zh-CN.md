---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-meat-poultry-and-game
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原封真空包装冷藏去骨猪里脊肉的店内零售服务

## 1. 范围与适用性

本候选方法规定非专门店内一种同质冷藏真空包装去骨猪里脊配置的增量零售服务。从收货门到顾客最终合格自提出店及失败商品最终处理均保持原包追踪。物种/部位、原封净内容物基准、制冷配置和回溯实物去向是可比性必要条件；仅为CPC 62123较窄子集，不是全部肉制品指引。下列设计采用所引定性方法及明确前景协议；不声称完整标准符合性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-meat-poultry-and-game |
| classification_refs | CPC 3.0 62123：肉类、家禽和野味的非专门店零售服务；建议关系narrower；官方说明包括第211组商品。 |
| covered_products | 一种声明SKU的完整PA/PE真空包装生鲜冷藏去骨猪里脊肉店内增量零售服务，顾客自提。 |
| excluded_products | 其他物种/部位；绞肉、腌肉或熟肉；带骨肉；开放柜台肉；吸水垫包装；冷冻/解冻商品；屠宰/初次冷却；重包装；冰；零售商购物袋；配送。 |
| representative_product | 原封真空包装冷藏去骨猪里脊肉的店内零售服务 |
| production_route | 接收已冷藏原封包；R290封闭冷柜储存展示；电力收银和顾客自提；去向及卫生；完整资产核算。 |
| market_state | 生鲜冷藏从未冷冻去骨猪里脊肉，完整PA/PE真空袋；湿态净内容物含保留滴液，不含干包装/外纸箱。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 原封真空包装冷藏去骨猪里脊肉的店内零售服务 |
| How much | 1 kg最终合格接受的湿态商品净内容物，含原封袋内保留滴液。 |
| How well | 声明SKU、封口完整性及实测时间温度符合声明的供应商/当地验收规格；此处不设数值限值。 |
| How long or cycle | 一个预先固定连续场址/SKU/配置报告池，至披露的退回/去向闭合及其后签认更正。 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 原封真空包装冷藏去骨猪里脊肉的店内零售服务 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`（服务通过量基准，不是商品身份） |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址; 非专门店渠道; SKU/物种/部位; 冷藏从未冷冻状态; PA/PE袋结构及干皮重; 含保留滴液净内容物; 供应商及收货门; 验收/时间温度规格及历史; 报告/退回闭合日期; R290/纯电配置; 背景责任; 受益方/分配/资产账; 去向接收人 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_net | service_output; failed_goods_background | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 收货及最终接受分别按同一含保留滴液的湿态净内容物定义实测，校准毛重减干袋皮重。不假设两者kg数值相等：按唯一包原源责任映射确定收货等价量。不得将包装或加冰计为猪肉。 |
| electric_energy | cold_power; store_power | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 对实测归属电力仅用一次3.6 MJ/kWh；该产品流不选择发电组合/供应方。 |
| physical_carriers | tap_water; alkaline_cleaner; hypochlorite; cleaning_effluent; condensate; r290_supply; r290_recovery; propane_air; water_vapour_air; packed_pork_waste; carton_waste; building_asset; building_terminal; hvac_asset; hvac_terminal; cabinet_asset; cabinet_terminal; shelf_asset; shelf_terminal; pos_asset; pos_terminal; cart_asset; cart_terminal; compressor_replacement; removed_compressor; hydraulic_oil; waste_oil; compressor_oil_supply; used_compressor_oil | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 各卡为具名完整物理载体；采用实测质量或记录温度的实测适用密度。保持混合物/配方及终端设备边界。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已冷藏完整真空猪里脊肉在零售门实际收货。 |
| starting_condition_role | 声明增量零售门；上游商品保持可追踪以耦合损失。 |
| product_classification_scope | CPC 3.0 62123较窄服务子集；第211组仅作商品语境。 |
| recursive_input_rule | 内部移动或再售不得让服务递归自身。关联包随原背景责任转移。 |
| upstream_dataset_requirement | 匹配原收货门包装猪肉背景，含实际一层/运输包装及入库冷链运输；核实资产、公用设施及废物处理供应边界。 |
| disclosure | 增量服务不含最终成功商品生产；完整产品使用者按每实际接受kg加入B_s/Q原门kg；B_f/Q失败/损失原门背景已在本服务中，不假设B_s等于Q。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_route | all | 仅适用预先声明的一种SKU配置：从未冷冻的生鲜冷藏去骨猪里脊肉，置于完整PA/PE真空袋内，零售商不重新包装、分切、烹调、加冰、提供购物袋或配送。记录物种、部位、供应商、袋结构/皮重、包装规格、温度验收规格及实际时间温度历史。不符合规格不构成合格服务。更换物种、冷冻路线、开放肉品、吸水垫或新增包装须先另行编写并检查配置。 | un-cpc62123; fao-cold02; fao-cold04 |
| gates | all | 前景始于已冷藏包装商品在店门的实际收货，终于合格顾客自提出店或有记录的最终去向。覆盖收货、储存展示、收银、拒收/退货、清洁、公用设施供应、制冷剂和废物处理以及六类已列资产。包括共用员工卫生、办公及停业/空闲/故障期。排除并披露顾客出行/使用；本配置不发生零售商车辆路线。 | jrc-retail2013; ghg-product2011 |
| goods_coupling | failed_goods_background | 最终成功商品的原门责任位于本增量服务之外，包括其原始一层/运输包装及入库运输。下游完整产品汇总按实际最终接受净内容物Q加入 B_s/Q 原收货门kg，不得默认1 kg/kg。本服务仅计 B_f/Q；未闭合B_open及已证后继责任B_t保留可追溯所有者，不得删除。每一整个原包仅归一个互斥最终责任类；失败包分出后代共用该一份母背景，不另获得原始制造。原收货等价闭合独立于实物终点质量。退供应商保持原责任，直至有后继责任证据（含逆向路线责任）。外部保留未合格F须有接收人、实物状态、去向及原背景所有者，不自动等于零售商废物。 | ghg-product2011 |
| no_double_carriers | all | 所有实际交换均需存在/不存在证据。R290为唯一指定制冷物种；无制冷剂回路的电阻/通风暖通、无燃烧/冰/运输是资格条件，不是零值假设。新增实际化学品、维修件、制冷剂、运输段、废物去向或直接外排物种，须在声称完整前增加具体原子双语卡、过程协议、数量计算及供应边界排重审核。存在性/数量/供应边界未知时阻断完整性。 | jrc-retail2013 |
| provider_scope | all | 每项供应、处理及资产供应数据须匹配状态、地域、参考数量和边界门。处理包括经核实的实际收集/运输及最终处理；制造供应数据不含公用设施使用、运行、维护、更换及寿命终结，除非明确整合且从前景剔除一次。即使吨公里为零，供应方空驶覆盖仍须有实际车公里证据。覆盖未知即未解决。 | ghg-product2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| holding | 冷藏储存展示 | required | 声明配置；各实际条件载体须有存在/不存在证据。 | 增量服务贡献 | 1 kg最终接受净内容物 |
| retail | 收货协调、收银及验收 | required | 声明配置；各实际条件载体须有存在/不存在证据。 | 增量服务贡献 | 1 kg最终接受净内容物 |
| cleaning | 卫生及液体处理 | required | 声明配置；各实际条件载体须有存在/不存在证据。 | 增量服务贡献 | 1 kg最终接受净内容物 |
| residual | 商品去向及损失背景责任 | required | 声明配置；各实际条件载体须有存在/不存在证据。 | 增量服务贡献 | 1 kg最终接受净内容物 |
| assets | 完整物理资产、维护及终端载体 | required | 声明配置；各实际条件载体须有存在/不存在证据。 | 增量服务贡献 | 1 kg最终接受净内容物 |

### 过程：冷藏储存展示（`holding`）

#### 输入

##### 产品流

###### 交流电（`cold_power`）

3.6 * 已归属冷柜电路 kWh / Q MJ；包括除霜、风机、待机和故障期。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 3.6 * 已归属冷柜电路 kWh / Q MJ；包括除霜、风机、待机和故障期。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: cold_meter
- 来源: jrc-retail2013; ghg-product2011; fao-cold04

###### 制冷剂级丙烷（R290），液态、密闭（`r290_supply`）

初装充注 * 冷柜寿命责任份额加事件归属补充量后 / Q kg；干冷柜供应数据排除此充注；全部充注丙烷追踪至损失/回收/库存。

- 选定流: 制冷剂级丙烷（R290），液态、密闭
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 初装充注 * 冷柜寿命责任份额加事件归属补充量后 / Q kg；干冷柜供应数据排除此充注；全部充注丙烷追踪至损失/回收/库存。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: refrigerant
- 来源: jrc-retail2013; ghg-product2011; fao-cold04

#### 输出

##### 废物流

###### 回收丙烷制冷剂，密闭、送场外回收（`r290_recovery`）

报废时实际密闭移出外送丙烷量 * 冷柜寿命责任份额 f_cabinet / Q kg；寿命期间维修回收改按事件受益方分配，不得并用；仅列一次密闭转移项。

- 选定流: 回收丙烷制冷剂，密闭、送场外回收
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 报废时实际密闭移出外送丙烷量 * 冷柜寿命责任份额 f_cabinet / Q kg；寿命期间维修回收改按事件受益方分配，不得并用；仅列一次密闭转移项。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: refrigerant
- 来源: jrc-retail2013; ghg-product2011; fao-cold04

###### 冷柜冷凝及除霜水，液态、送污水处理（`condensate`）

归属的实收完整液体载体质量 / Q kg；共用排水管时与 cleaning_effluent 划分互不重叠份额。

- 选定流: 冷柜冷凝及除霜水，液态、送污水处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 归属的实收完整液体载体质量 / Q kg；共用排水管时与 cleaning_effluent 划分互不重叠份额。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: condensate_meter
- 来源: jrc-retail2013; ghg-product2011; fao-cold04

##### 基本流

###### 丙烷，气态、排入外部空气（`propane_air`）

实际本柜来源隔离的正向室外丙烷E_j，再向本柜受益方分配一次并 / Q kg。整房丙烷通量为独立闭合检查，不得替代目标源。

- 选定流: 丙烷 `fe0acd60-3ddc-11dd-aae9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际本柜来源隔离的正向室外丙烷E_j，再向本柜受益方分配一次并 / Q kg。整房丙烷通量为独立闭合检查，不得替代目标源。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: refrigerant
- 来源: jrc-retail2013; ghg-product2011; fao-cold04

### 过程：收货协调、收银及验收（`retail`）

#### 输入

##### 产品流

###### 交流电（`store_power`）

3.6 * 已归属互不重叠门店 kWh / Q MJ；包括照明、收银和暖通运行。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 3.6 * 已归属互不重叠门店 kWh / Q MJ；包括照明、收银和暖通运行。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: store_meter
- 来源: jrc-retail2013; ghg-product2011

#### 输出

##### 产品流

###### 原封真空包装冷藏去骨猪里脊肉的店内零售服务（`service_output`）

Q / Q = 1 kg 最终合格接受商品通过量；这是服务数量，不是猪肉生产。

- 选定流: 原封真空包装冷藏去骨猪里脊肉的店内零售服务
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: sale_ledger
- 来源: jrc-retail2013; ghg-product2011

##### 基本流

###### 水蒸气，气态、服务净贡献排入外部空气（`water_vapour_air`）

按实际期间积分的实测正向服务归属室外净水物种通量 / Q kg；对账室内库存、进口水分及捕集液；不得用冷凝总量代表肉品蒸发。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按实际期间积分的实测正向服务归属室外净水物种通量 / Q kg；对账室内库存、进口水分及捕集液；不得用冷凝总量代表肉品蒸发。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: store_air
- 来源: jrc-retail2013; ghg-product2011

### 过程：卫生及液体处理（`cleaning`）

#### 输入

##### 产品流

###### 饮用自来水，液态、门店计量口（`tap_water`）

V_import * 实测适用 rho_water * 清洁归属份额 / Q kg；进口水表已排除内部循环。

- 选定流: 自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: V_import * 实测适用 rho_water * 清洁归属份额 / Q kg；进口水表已排除内部循环。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: hygiene
- 来源: jrc-retail2013; ghg-product2011

###### 氢氧化钠清洁液，液态、供应商配方（`alkaline_cleaner`）

分配后实际消耗配方液 / Q kg；保留实测浓度；不得以有效NaOH质量冒充溶液质量。

- 选定流: 氢氧化钠清洁液，液态、供应商配方
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配后实际消耗配方液 / Q kg；保留实测浓度；不得以有效NaOH质量冒充溶液质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: hygiene
- 来源: jrc-retail2013; ghg-product2011

###### 次氯酸钠消毒液，液态、供应商配方（`hypochlorite`）

分配后实际消耗配方液 / Q kg；稀释水仅计入 tap_water。

- 选定流: 次氯酸钠消毒液，液态、供应商配方
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配后实际消耗配方液 / Q kg；稀释水仅计入 tap_water。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: hygiene
- 来源: jrc-retail2013; ghg-product2011

#### 输出

##### 废物流

###### 零售清洁废水，完整液体载体、送污水处理（`cleaning_effluent`）

V_discharge * 实测 rho_effluent * 归属份额 / Q kg；包含实测溶解清洁剂及滴液；排除另行输送冷凝液。

- 选定流: 零售清洁废水，完整液体载体、送污水处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: V_discharge * 实测 rho_effluent * 归属份额 / Q kg；包含实测溶解清洁剂及滴液；排除另行输送冷凝液。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: hygiene
- 来源: jrc-retail2013; ghg-product2011

### 过程：商品去向及损失背景责任（`residual`）

#### 输入

##### 产品流

###### 原收货门处原封PA/PE真空包装冷藏去骨猪里脊肉（`failed_goods_background`）

按唯一包原内容物责任映射确定原收货门等价净内容物 B_f / Q kg；不得以终点湿态损失或完整废水/冷凝液质量替代。原门包装商品供应数据包括实际一层/运输包装及入库运输，仅计一次。

- 选定流: 原收货门处原封PA/PE真空包装冷藏去骨猪里脊肉
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按唯一包原内容物责任映射确定原收货门等价净内容物 B_f / Q kg；不得以终点湿态损失或完整废水/冷凝液质量替代。原门包装商品供应数据包括实际一层/运输包装及入库运输，仅计一次。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: fate_ledger
- 来源: jrc-retail2013; ghg-product2011

#### 输出

##### 废物流

###### 废弃原封真空冷藏猪里脊肉及PA/PE袋，完整包装和内容物、送处理（`packed_pork_waste`）

分配后实弃整包质量 / Q kg；同包不得另列包装袋废物卡；处理供应数据覆盖实际混合载体。

- 选定流: 废弃原封真空冷藏猪里脊肉及PA/PE袋，完整包装和内容物、送处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配后实弃整包质量 / Q kg；同包不得另列包装袋废物卡；处理供应数据覆盖实际混合载体。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: fate_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 废弃瓦楞纸板周转纸箱，实测含水状态、送回收（`carton_waste`）

分配后实弃纸箱质量 / Q kg；不含一层包装袋；原纸箱制造责任遵循 calc_goods 账。

- 选定流: 废弃瓦楞纸板周转纸箱，实测含水状态、送回收
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 分配后实弃纸箱质量 / Q kg；不含一层包装袋；原纸箱制造责任遵循原门商品账。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: fate_ledger
- 来源: jrc-retail2013; ghg-product2011

### 过程：完整物理资产、维护及终端载体（`assets`）

#### 输入

##### 产品流

###### 零售建筑外壳及固定电线/水管/照明，完整安装体（`building_asset`）

按 calc_asset 将实测完整安装体质量 m_building * f_building / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。

- 选定流: 零售建筑外壳及固定电线/水管/照明，完整安装体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按资产暴露公式 将实测完整安装体质量 m_building * f_building / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 电阻加热及机械通风机组，完整安装设备、无制冷剂回路（`hvac_asset`）

按 calc_asset 将实测完整安装体质量 m_hvac * f_hvac / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。

- 选定流: 电阻加热及机械通风机组，完整安装设备、无制冷剂回路
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按资产暴露公式 将实测完整安装体质量 m_hvac * f_hvac / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### R290封闭式冷藏展示柜，完整安装干设备、不含游离制冷剂充注（`cabinet_asset`）

按 calc_asset 将实测完整安装体质量 m_cabinet * f_cabinet / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。

- 选定流: R290封闭式冷藏展示柜，完整安装干设备、不含游离制冷剂充注
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按资产暴露公式 将实测完整安装体质量 m_cabinet * f_cabinet / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 钢制零售货架，完整安装单元（`shelf_asset`）

按 calc_asset 将实测完整安装体质量 m_shelf * f_shelf / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。

- 选定流: 钢制零售货架，完整安装单元
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按资产暴露公式 将实测完整安装体质量 m_shelf * f_shelf / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 电子收银终端，完整设备（`pos_asset`）

按 calc_asset 将实测完整安装体质量 m_pos * f_pos / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。

- 选定流: 电子收银终端，完整设备
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按资产暴露公式 将实测完整安装体质量 m_pos * f_pos / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 手动液压托盘车，完整设备（`cart_asset`）

按 calc_asset 将实测完整安装体质量 m_cart * f_cart / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。

- 选定流: 手动液压托盘车，完整设备
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按资产暴露公式 将实测完整安装体质量 m_cart * f_cart / Q kg 计入；对应一个匹配的制造/安装供应数据；不得重复计入组成部件。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 替换用R290全封闭压缩机，完整设备、不含制冷剂充注（`compressor_replacement`）

实际完整替换压缩机质量含工厂密闭矿物润滑油、不含R290充注，按事件归属 / Q kg。工厂油制造仅在此完整供应数据内一次；实际额外加油仅归compressor_oil_supply。

- 选定流: 替换用R290全封闭压缩机，完整设备、不含制冷剂充注
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际完整替换压缩机质量含工厂密闭矿物润滑油、不含R290充注，按事件归属 / Q kg。工厂油制造仅在此完整供应数据内一次；实际额外加油仅归compressor_oil_supply。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: maintenance
- 来源: jrc-retail2013; ghg-product2011

###### 矿物液压油，液态、用于手动托盘车（`hydraulic_oil`）

托盘车投用后实际添加矿物液压油，按事件归属 / Q kg；初始工厂充注已在cart_asset供应数据内，不在此追加。

- 选定流: 矿物液压油，液态、用于手动托盘车
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 托盘车投用后实际添加矿物液压油，按事件归属 / Q kg；初始工厂充注已在cart_asset供应数据内，不在此追加。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: maintenance
- 来源: jrc-retail2013; ghg-product2011

###### 制冷压缩机矿物润滑油，液态、制造商规定R290牌号（`compressor_oil_supply`）

按维修事件归属的实际额外压缩机矿物油 / Q kg；排除已在完整冷柜/替换压缩机内的工厂密闭油；须有制造商牌号及存在性证据。

- 选定流: 制冷压缩机矿物润滑油，液态、制造商规定R290牌号
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按维修事件归属的实际额外压缩机矿物油 / Q kg；排除已在完整冷柜/替换压缩机内的工厂密闭油；须有制造商牌号及存在性证据。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: maintenance
- 来源: jrc-retail2013; ghg-product2011

#### 输出

##### 废物流

###### 零售建筑外壳及固定电线/水管/照明，完整安装体报废体，完整终端载体、送处理（`building_terminal`）

实际完整终端载体质量 w_building * f_building / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。

- 选定流: 零售建筑外壳及固定电线/水管/照明，完整安装体报废体，完整终端载体、送处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际完整终端载体质量 w_building * f_building / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 电阻加热及机械通风机组，完整安装设备、无制冷剂回路报废体，完整终端载体、送处理（`hvac_terminal`）

实际完整终端载体质量 w_hvac * f_hvac / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。

- 选定流: 电阻加热及机械通风机组，完整安装设备、无制冷剂回路报废体，完整终端载体、送处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际完整终端载体质量 w_hvac * f_hvac / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### R290封闭式冷藏展示柜，完整安装干设备、不含游离制冷剂充注报废体，完整终端载体、送处理（`cabinet_terminal`）

实际完整终端载体质量 w_cabinet * f_cabinet / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。

- 选定流: R290封闭式冷藏展示柜，完整安装干设备、不含游离制冷剂充注报废体，完整终端载体、送处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际完整终端载体质量 w_cabinet * f_cabinet / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 钢制零售货架，完整安装单元报废体，完整终端载体、送处理（`shelf_terminal`）

实际完整终端载体质量 w_shelf * f_shelf / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。

- 选定流: 钢制零售货架，完整安装单元报废体，完整终端载体、送处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际完整终端载体质量 w_shelf * f_shelf / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 电子收银终端，完整设备报废体，完整终端载体、送处理（`pos_terminal`）

实际完整终端载体质量 w_pos * f_pos / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。

- 选定流: 电子收银终端，完整设备报废体，完整终端载体、送处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际完整终端载体质量 w_pos * f_pos / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 手动液压托盘车，完整设备报废体，完整终端载体、送处理（`cart_terminal`）

实际完整终端载体质量 w_cart * f_cart / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。

- 选定流: 手动液压托盘车，完整设备报废体，完整终端载体、送处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际完整终端载体质量 w_cart * f_cart / Q kg；直接净称重与部件重构二选一；不得再乘制造份额。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: asset_ledger
- 来源: jrc-retail2013; ghg-product2011

###### 拆下全封闭压缩机，R290排空、送处理（`removed_compressor`）

R290排空后实际完整拆下压缩机，归属后 / Q kg；实测设备质量包含实际交接时仍密闭的全部润滑油。若实际排油，直接实测剩余设备质量已排除此实测油；分出油仅列used_compressor_oil，不列托盘车waste_oil。绑定/供应数据须匹配实测保留油状态。

- 选定流: 拆下全封闭压缩机，R290排空、送处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: R290排空后实际完整拆下压缩机，归属后 / Q kg；实测设备质量包含实际交接时仍密闭的全部润滑油。若实际排油，直接实测剩余设备质量已排除此实测油；分出油仅列used_compressor_oil，不列托盘车waste_oil。绑定/供应数据须匹配实测保留油状态。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: maintenance
- 来源: jrc-retail2013; ghg-product2011

###### 废矿物液压油，液态、送场外处理（`waste_oil`）

实际单独收集托盘车矿物液压油 / Q kg：寿命期间排油按事件受益方份额；最终报废排油与整车采用同一f_cart且仅一次。仍在实测终端车内的油留在cart_terminal，不列本载体；直接终端车净称重已排除实排油。此卡不含压缩机油。

- 选定流: 废矿物液压油，液态、送场外处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际单独收集托盘车矿物液压油 / Q kg：寿命期间排油按事件受益方份额；最终报废排油与整车采用同一f_cart且仅一次。仍在实测终端车内的油留在cart_terminal，不列本载体；直接终端车净称重已排除实排油。此卡不含压缩机油。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: maintenance
- 来源: jrc-retail2013; ghg-product2011

###### 废制冷压缩机矿物润滑油，液态、实际另行排出送处理（`used_compressor_oil`）

实际另行排出的压缩机矿物油 / Q kg；寿命期间拆排按事件责任；冷柜最终报废按f_cabinet一次，独立替换压缩机拆排按其匹配事件责任。密闭保留油仍在完整设备载体；绝不是托盘车液压废油。

- 选定流: 废制冷压缩机矿物润滑油，液态、实际另行排出送处理
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际另行排出的压缩机矿物油 / Q kg；寿命期间拆排按事件责任；冷柜最终报废按f_cabinet一次，独立替换压缩机拆排按其匹配事件责任。密闭保留油仍在完整设备载体；绝不是托盘车液压废油。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: maintenance
- 来源: jrc-retail2013; ghg-product2011

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivision | all | 优先采用互不重叠的直接计量/细分。对剩余共用总量T_j规定实际受益方b和因果暴露d_bj：冷藏按占用包装体积小时并验证场址热负荷；非冷藏门店电力及建筑/暖通按面积小时；POS按通电交易时长；货架按体积小时；托盘车按有载及空载搬运时长；卫生按清洁面积事件。A_bj=T_j*d_bj/sum_b(d_bj)。保留空闲/停业/故障总量、全部受益方及零销售批组。零驱动期间按预先保留的容量时间在所有受益方间分配并披露；不得删除期间。核对sum A=T。 | ghg-product2011 |
| asset_ownership | assets | 按序列号建立跨全部期间及受益方的持久资产账。实测质量m_a、预计总寿命因果暴露D_a、当前受益方暴露e_ap，f_ap=e_ap/D_a。修订寿命时用e_history/D_new替换此前所有份额，并向原批组记带符号更正；不得重启制造。累计份额不得超过1；最终报废时按所有寿命受益方的实测累计暴露（含空闲保留容量）一次分完残余。每份额对制造及相应终端载体各使用一次。批组外发生事件保留实际日期和原归属。 | ghg-product2011 |
| asset_partition | assets | 建筑覆盖外壳/基础和固定电线/水管/照明，排除独立列示暖通/冷柜/货架/POS/托盘车。完整干冷柜排除游离R290，但包括初始完整压缩机及其工厂密闭矿物润滑油；替换压缩机供应数据同样包括工厂密闭油，不得再次作为供油追加。完整cart_asset包括初始液压油充注及其制造一次；hydraulic_oil仅为实际后续加油。拆下压缩机仅制冷剂排空，不假设油已排空。保留在拆下/终端完整设备内的密闭油属于该真实完整载体。若实际排油，单独实测压缩机油归used_compressor_oil；托盘车液压油仅归waste_oil。最终原始流体排出与相应整机使用同一f_cabinet或f_cart一次；寿命期间实际加/排油及维修事件另用匹配事件归属。直接完整剩余设备净称已排除实排流体/拆走部件；部件重构互斥，不得再扣。不得第二次制造初始油、整机或再乘终端制造份额。 | jrc-retail2013 |
| service_pool | all | 在观察结果前声明场址/SKU/设备配置及连续报告池。保留该池全部失败和零销售批组及其商品背景和资源。Q为最终合格接受净内容物，不是实物总交付、营业额或退款。迟来实物退货须按实际日期修订原池资源分子、损失背景、Q和去向，不得在新批组重复。无实物退货且资格未变的财务退款/折扣不冲减Q。不设共产品抵扣、避免生产抵扣或自动废物替代。 | ghg-product2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sale_ledger | retail | service_output | 原始实测事件/期间账 | pool_id; SKU; original_lot_id; unique_pack_id; event_id; event_time; 实物总交付H; 实物退回R; 合格质量; 撤销质量; F; 收货净重; 期末库存; 退供应商; 损失; 包装皮重; 温度; 密封; 验收规格; 收货g_i; 母源id; 配对收货终点称重; B_s_i; B_f_i; B_open_i; B_t_i | 扫描每次收货、移动、交付、拒收及退回；校准毛重秤减配置特定实测干袋皮重；保留滴液属于净内容物；验证抽样皮重及收货/顾客秤；按包/批记录温度及密封验收；不设法定默认值。 本零售视图与fate_ledger视图使用同一不可变事件/包id，不重复测量、责任或归一化。实际收货状态与接受状态配对，不推定湿质量相等。 仅用calc_stock和calc_q一次；按唯一包追踪再售，分别记录实物与财务事件；迟来更正归原池。 | kg | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | 校准、核秤、供应规格、标签/批号照片、POS及签收/退回证据。 |
| cold_meter | holding | cold_power | 原始实测事件/期间账 | meter_id; circuit_tree; kWh_start; kWh_end; time; 占用体积小时; 空闲时长; beneficiary_ids; 停电 | 连续读取冷柜/除霜/风机电路表并检查期间闭合；核对校准及电路包含关系；缺失期间保留未知。 对实测总量先细分再按subdivision分配；按3.6 MJ/kWh换算并仅除Q一次。 | kWh | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | 仪表校准、线路图及全受益方对账。 |
| store_meter | retail | store_power | 原始实测事件/期间账 | meter_id; parent_contains_cold; 总kWh; 冷藏子表kWh; 全部其他受益方暴露; 面积小时; POS时长; 期间 | 读取独立门店表或确实含冷藏子表的总表。仅从确实包含子表的总表扣冷藏；不得从独立表扣除。包括暖通、办公室、卫生间、收银、照明及停业时间。 门店所有电路核对一次，按subdivision因果归属，再calc_normalize。 | kWh | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | 账单、校准仪表、包含拓扑及全年期间覆盖披露。 |
| refrigerant | holding | r290_supply; r290_recovery; propane_air | 原始实测事件/期间账 | 来源序列号j; 维修事件; 充注进出j一次; 设备库存j; 室内库存j; 捕集库存j; 捕集外送/输入j; 源示踪或解析; 其他来源及所有者; 整房绝对进出物种kg_h; 模式; 空白; 期间; 全部冷柜受益方 | 以校准秤逐来源序列号和日期称量设备/钢瓶/捕集库存及转移。独立监测整房室外丙烷通量。通过源解析平衡或经验证源专属示踪/直接外排通量隔离冷柜源贡献；不得把整房总量改名本柜损失。解析其他源及各自库存/捕集历史。分别记录捕集留存净变化和捕集外送/输入；来源不确定阻断完成。 以全部实际来源隔离外排平衡对平独立整房通量，再仅将本柜池向本柜受益方分配一次并除Q。源直接通量与源平衡互斥；设备回收与室内捕集不得为同一载体。 | kg | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | R290铭牌/SDS、钢瓶秤检查、回收凭据、校准通量及室内/捕集测量。 |
| hygiene | cleaning | tap_water; alkaline_cleaner; hypochlorite; cleaning_effluent | 原始实测事件/期间账 | event_id; 场址; 进口体积; 水密度温度; 配方液kg; NaOH浓度; NaOCl浓度; 稀释水; 排放体积; 废水密度温度; 溶入滴液kg; 排水份额; 清洁面积事件; 校准 | 计量进口水与完整排水；分别称每种供应配方化学品，记录批次SDS/浓度及体积转质量密度。废水按含溶解添加剂/滴液的完整液体载体实测。循环水属内部流，不从进口再减。包括员工卫生份额，须匹配同一水及实际废水组成，否则使用前新增独立原子载体。 仅用calc_water直接模式；另外核对供水平衡，区分冷凝排水份额，按清洁面积事件分配完整总量，再仅除Q一次。 | kg; m3 | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | 水表/秤校准、密度样品及温度、产品SDS、排水图及处理接收证明。 |
| condensate_meter | holding | condensate | 原始实测事件/期间账 | 期间; 冷柜id; 完整液体kg; 排水id; 共管清洁份额; 室内湿度; 包装泄漏; 库存暴露 | 按冷柜收集称完整冷凝/除霜载体，或验证共管分离期间。记录渗入、室内水分及商品泄漏贡献；不得仅从冷凝水推断肉品蒸发。 互不重叠排水份额 + cleaning_effluent = 共管实测总量；按subdivision将实际载体归属一次再除Q。 | kg | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | 校准称重、排水隔离试验、完整液体平衡及处理凭据。 |
| fate_ledger | residual | failed_goods_background; packed_pork_waste; carton_waste | 原始实测事件/期间账 | 唯一原包id; 实测收货g_i; 事件id/时间; 实际最终湿净重/皮重; 配对收货终点状态; 母源id; 源组成观测; 最终互斥类别k_i; B_s_i; B_f_i; B_open_i; B_t_i; 实际Q; F; 终端载体id/毛质量; 外来水/化学品份额; 原内容物源物种释放; 后继整包背景所有者; 逆向路线所有者; 接收人; 不确定性 | 逐唯一未拆原包将校准原收货称重同实际最终湿称重及密封/验收状态配对；干袋皮重用代表性同SKU/批伴随包实测，不打开销售包。不假设收货和最终湿kg相等。失败包每个分出载体关联同一母包原g_i及单一最终背景类别。以实际源追踪/组成测量区分肉/滴液/原内容物源水物种与外来清洁水、化学品及环境水分；需破坏性组成采样时，用代表性同供应商/批伴随包及配对实际源/载体样品、校准经验证实验室方法和不确定性，不设默认比例。源表征仅支持实物源质量，不用于干物质食品背景分配。完整终端载体按实际混合物称量。核实整个原包背景及逆向路线的后继继续责任；仅有废物接收方不成立B_t。 原等价B_s+B_f+B_open+B_t对原g_i闭合，独立于实际湿库存及Q。失败母包及分出终端载体共用一份原包背景，服务B_f/Q、下游B_s/Q。合法B_open及已证供应商/整包B_t保留本池运行/退回/资产资源和后续带符号更正。独立拥有背景的分拆部分在另有审查方法前属范围外。 | kg | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | 接收方/退回/废物签认凭据、原供应门数据、包装BOM、校准质量及运输覆盖。 |
| asset_ledger | assets | building_asset; building_terminal; hvac_asset; hvac_terminal; cabinet_asset; cabinet_terminal; shelf_asset; shelf_terminal; pos_asset; pos_terminal; cart_asset; cart_terminal | 原始实测事件/期间账 | 序列号; 资产类; 安装体质量; BOM边界; 投用; 预计寿命暴露D; e_pool; 所有受益方历史; 先前份额版本; 修订; 最终残余; 终端质量; 拆除件; 模式; 接收方; 初始工厂油包含性; 实际保留或排出流体; 匹配流体终端份额 | 盘点建筑、暖通、冷柜、货架、POS及托盘车所有序列号。用校准称重或已签认施工/安装BOM及匹配供应数据获取完整安装体质量。逐期间采集因果暴露并保留寿命账；终端直接地磅净称或明确剩余部件BOM质量二选一。不得虚构寿命。 冷柜/替换压缩机工厂润滑油及托盘车初始液压油仅在其完整设备供应数据内一次；干冷柜不含游离R290。保留油留在完整终端载体，另行排油用源专属油卡且与整机同一终端份额一次。 按calc_asset带符号替换此前分配并处理最终残余；制造边界按asset_partition互斥。完整包BOM和终端载体仅对账一次。 | kg; exposure hours | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | 资产登记、安装BOM/称重、供应边界表、寿命/暴露历史、报废签认及接收证明。 |
| maintenance | assets | compressor_replacement; removed_compressor; hydraulic_oil; waste_oil; compressor_oil_supply; used_compressor_oil | 原始实测事件/期间账 | event_id; 序列号; 日期; 完整设备质量; 保留工厂油; R290移出一次; 压缩机油添加/排出; 液压油添加/排出; 油源牌号; 初始工厂充注供应数据; 直接净称或BOM模式; 终端或维修事件; 匹配f_cabinet/f_cart或事件份额; 接收人; 供应边界 | 读取工单及制造商矿物油牌号；分别称实际压缩机油与托盘车液压油的每次加/排，绝不混合两账或废物身份。完整冷柜/替换压缩机制造包括工厂密闭润滑油，托盘车制造包括初始液压油；采集供应包包含性及实际流体存在证据。排空制冷剂的压缩机保留密闭油，除非实际排油称重有证据。设备直接净称已排除另排流体，不得再扣。油型、工厂包含性或保留/排出状态未知即未解决。 初始油制造仅在完整包内一次；实际维护加/排用事件分配；最终单独排出载体仅用匹配整机寿命份额一次，保留油留在完整终端设备。各互斥载体再仅除Q一次。 | kg | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | 工单、核秤、供应设备边界及处理/运输凭据。 |
| store_air | retail | water_vapour_air | 原始实测事件/期间账 | 期间; 边界; 进口绝对物种kg_h; 出口绝对物种kg_h; 空白模式; 室内期初水; 室内期末水; 清洁蒸发; 商品逸散; 其他受益方; 冷凝捕集; 采样时间; 校准 | 在代表性完整运行/空闲/故障期间实测真实室外边界湿度物种质量通量及室内库存/捕集，校准流量及湿度仪表并记录空气密度/温度/压力基准。原始进出绝对值、已差分及已扣空白速率三种模式互斥，背景仅扣一次。在全部实际受益方间归属完整建筑通量；商品子批kg/h估计须先有实测停留/库存暴露再汇总。 采用室外通量公式；仅正向服务净放水为water_vapour_air。负向转移须在完整性前另编基本摄取卡；未知通量不得为零。区分已经捕集的完整冷凝/废水液体。 | kg | 每次事件及每仪表期间；定期验证库存闭合 | 完整声明池加关联迟来/最终寿命更正 | 声明场址及全部实际共用受益方，含空闲/失败 | 每 1 kg 参考流 | 校准进出观测、空白/模式记录、水分平衡、子批暴露及全受益方对账。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_stock | sale_ledger; fate_ledger | 实物移动按事件实际状态追踪，独立于Q及原收货等价背景。原内容物来源账：S_open_src + receipts_src + R_src + transfers_in_src = S_close_src + H_src + supplier_returns_src + transfers_out_src + separated_food_or_purge_src + source_species_release_from_contents。肉/滴液转移与从内容物进入室内或收集器的水/物种分别记录。每份源释放仅跨内容物边界一次，随后冷凝、混合或外排不得再次扣该源质量。各终点载体毛质量另行实测，并以配对测量/组成证据区分内容物源份额与清洁水、进口室内水分、化学品及包装。完整清洁废水或完整冷凝液不能代表原肉、滴液或源水损失。实物总交付H、退回R不论验收；外部F已在H内，不另加实物流出。源解析或平衡残差未知即未解决，不得为零。 | S_open_src; receipts_src; R_src; transfers_in_src; S_close_src; H_src; supplier_returns_src; transfers_out_src; separated_food_or_purge_src; source_species_release_from_contents; carrier_gross_mass; measured_source_composition | 实际状态的原内容物源平衡及独立完整载体账 | ghg-product2011 |
| calc_q | service_output | Q=sum合格接受湿态净内容物-sum同一验收事件撤销量。关联退货/再售后每个最终接受包仅贡献一次；无实物退回的撤销另记F。保留滴液仍为净内容物；单纯价款折扣不扣质量。 | qualified_mass; reversal_mass; unique_pack_id; acceptance_spec | Q kg最终合格接受内容物 | ghg-product2011 |
| calc_goods | failed_goods_background | 对每个唯一原包i保留实测收货湿态净内容物g_i及配对实际收货→最终状态称重、封口/规格证据、事件id和不确定性。指定一个最终原背景责任类k_i：s为最终合格成功，f为仍由本服务负责的最终失败/损失或外部保留未合格，open为库存/去向未定，t为有证据由后继者（含退供应商）继续承担整个原包背景。k=k_i时B_k,i=g_i，否则仅在互斥类别有证据时为0；B_s,i+B_f,i+B_open,i+B_t,i=g_i。类别未知或g_i缺失即未解决，不得为零。这些B是原收货门等价量，不是最终湿态净内容物q_i；最终Q另行实测。水分变化不创建新原始制造，也不意味着B_s=Q。最终合格原封包即使实际湿质量变化仍继承原g_i。失败母包及分出的肉、滴液、原内容物源水/物种或剩余袋仍共用一个B_f母背景，不得每个终端载体再计g_i。失败废物收集/运输/处理即使实物分开处理仍在本服务责任内，不转移原生产背景。只有有证据的整个原包继续交接，且明确后继原背景及逆向路线所有权，才合格为B_t。将原内容物分为独立销售、再用、捐赠或独立承担背景的部分超出本原封包PCR，须先采用另行审查的分区/汇总方法才能完整；不得用终点湿kg或无依据干物质比例替代。按唯一包/供应批汇总B_k。服务计B_f/Q；成功下游按每实际接受kg加入B_s/Q原门kg。原包装及入库运输按同一整包责任仅归属一次。供应商继续责任B_t及合法B_open不得抹去本池运行、搬运、退回、资产、失败或零销售资源。迟来退回/重分类须在同一母包内带符号替换原包类别、原服务分子及成功背景连接，不新建一次制造。 | unique_original_pack_id; measured_receiving_g_i; paired_actual_receipt_final_weights; final_Q; final_exclusive_class_k_i; acceptance_and_seal_evidence; successor_whole_pack_owner; reverse_route_owner; B_s_i; B_f_i; B_open_i; B_t_i; parent_terminal_carrier_ids; uncertainty; original_gate_provider_scope | B_s; B_f; B_open; B_t原门kg，整包单责任闭合，B_s/Q用于下游及B_f/Q用于服务 | ghg-product2011 |
| calc_normalize | all inventory rows except service_output | Q>0时q_r=A_r/Q；A_r是已归属的池绝对量。先原始总量，再因果归属，最后仅一次归一化。不得对A_r已含的组成/去向/分配比例再乘。根据采用的能量单位支撑，kWh转MJ系数为准确3.6。 | raw_totals; beneficiary_exposures; A_r; Q | 各卡单位/每kg最终合格接受内容物 | ghg-product2011 |
| calc_water | tap_water; cleaning_effluent; condensate | 供水M_import=V_import*rho_water(T)。直接废水仅M_eff=V_discharge*rho_effluent(T)，采用完整载体密度；不得扣蒸发/储存或把仅水平衡乘废水密度。供水闭合另行计蒸发水、库存变化、产品实际含水及实际排水。本规则不授权重构模式。M_common_drain=M_eff_cleaning_share+M_condensate_share，份额实测且互不重叠；实溶清洁剂/滴液已在完整液体质量内，不再添加。 | V_import; rho_water; V_discharge; rho_effluent; T; disjoint_drain_portions | 分配前各实际液体载体kg | jrc-retail2013 |
| calc_gas | r290_supply; r290_recovery; propane_air | 逐冷柜/来源序列号j计算L_j=opening_charge_j+contained_in_j-closing_charge_j-contained_out_j_once；设备回收不得进入室内释放。目标源外界平衡E_j=L_j+room_open_j-room_close_j-(capture_close_j-capture_open_j)-capture_exports_j+capture_imports_j。室内/捕集库存及转移须解析来源；捕集净库存变化与实际外部输出/输入是互不重叠的独立项。从先前捕集库存外送由其库存减少抵消，不得再扣一次捕集。目标源示踪/直接外排通量与该源平衡二选一。独立以绝对进出物种kg/h按期间实测整房室外净丙烷通量E_room，或采用已差分/已扣空白速率；模式互斥、背景只扣一次。要求所有独立解析源E_j之和在实测不确定性内对平E_room；其他室内源有各自匹配责任并从本柜目标排除，不得加到目标再按本柜暴露分配。只有隔离本柜E_j后，才能按声明因果驱动向全部实际冷柜受益方仅分配一次。源示踪/解析、混合室内/捕集库存或任何其他源未解时，目标排放完整性即未解决。密闭制冷剂回收仅为一个设备contained_out项；室内捕集是不同实物转移，有自己的库存/外送记录，不得同量计两次。 当前r290_recovery卡仅覆盖设备密闭制冷剂；任何实际室内捕集外送均须在完整性前新增匹配实测物理介质的独立原子载体卡及协议/过程和数量。不得把吸附剂、混合冷凝液或捕集混合物标作纯回收丙烷；有证据无捕集保留为不存在记录，不是零值假设。 | source_serial_j; opening_charge_j; contained_in_j; closing_charge_j; contained_out_j_once; room_open_j; room_close_j; capture_open_j; capture_close_j; capture_exports_j; capture_imports_j; source_apportionment_evidence; whole_room_exterior_flux; mode; all_cabinet_beneficiaries | 来源隔离的本柜外排丙烷kg，独立对平整房通量 | fao-cold04 |
| calc_asset | building_asset; hvac_asset; cabinet_asset; shelf_asset; pos_asset; cart_asset; building_terminal; hvac_terminal; cabinet_terminal; shelf_terminal; pos_terminal; cart_terminal | f_ap=e_ap/D_a；A_manufacture=m_a*f_ap；A_terminal=w_a*f_ap。D修订时用e_history/D_new替换旧f_history，对旧批组记带符号差额，最终报废残余按完整寿命暴露一次归属。闭合前sum寿命f<=1，闭合后=1。终端直接净称重w_a已排除实际拆走压缩机、另行排出油及回收制冷剂；仍存在密闭润滑油保留于实测完整设备内。互斥BOM模式仅合计实际剩余部件/所含流体。不得两次扣拆件或对终端质量再乘另一制造份额。 | m_a; w_a; e_ap; D_a; previous_allocations; terminal_mode; remaining_components | 归属完整资产制造及终端载体kg | ghg-product2011 |
| calc_exterior_water | water_vapour_air | 绝对模式E=sum[(outlet_water_kg_h-inlet_water_kg_h)*interval_h]，尚未扣除时仅作一次有证据空白更正。差分或已扣空白速率模式仅积分记录kg/h一次，不重复扣减。核对E=actual_internal_water_sources+room_opening_water-room_closing_water-actual_captured_liquid，排除进出净值已抵消的环境进口水分并仅排除一次非服务受益方贡献。子批kg/h乘实测停留小时得子批质量；按kg基准速率仅乘一次匹配实测kg小时；汇总全部子批后归属并仅除Q一次。冷凝水属于液体载体，不得同时为空气排放。 | absolute_or_differential_mode; inlet_water_kg_h; outlet_water_kg_h; interval_h; blank; room_stocks; actual_internal_water_sources; actual_captured_liquid; beneficiary_shares; measured_sublot_exposure | 对平的室外服务归属净水kg | fao-cold04; ghg-product2011 |
| calc_oil_ownership | compressor_replacement; removed_compressor; hydraulic_oil; waste_oil; compressor_oil_supply; used_compressor_oil; cabinet_asset; cabinet_terminal; cart_asset; cart_terminal | 初始工厂油制造仅在完整冷柜/压缩机/托盘车供应质量及边界内一次，不设独立初始供油输入。A_added_event=m_added*event_share；A_removed_event=m_removed*event_share。最终报废A_drained_cabinet_oil=m_actual_drained*f_cabinet、A_drained_truck_oil=m_actual_drained*f_cart；各载体仅一次，不再乘制造份额。若油仍密闭保留，留在直接实测完整终端设备质量w_a内，不另列废油交换。逐来源油追踪opening+actual_additions=closing_retained+actual_separated_removals+measured_other_fate；跨设备油不得互相代替。完整终端直接净称与重构部件/BOM模式互斥；直接实测剩余质量已排除实际排油。油存在性/类型/供应包含性、保留/分出去向或账差未知时阻断完整性。 | factory_fill_inclusion; oil_source_serial; opening; actual_additions; closing_retained; actual_separated_removals; measured_other_fate; event_share; f_cabinet; f_cart; direct_net_or_BOM_mode | 互斥的来源专属油制造、事件及终端责任 | ghg-product2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all | 用检查证据确认路线资格：原封PA/PE猪里脊SKU，无吸水垫/零售新增包装，无冰/冷冻/配送/燃烧，实际R290冷柜及电暖通。供应商及当地食品安全准则确定所记录验收；本PCR不提供法律数值阈值。根据持有时长和偏差记录监测间隔充分性。 | 供应规格、封口、检查、冷链日志、设备铭牌及当地验收决定。 |
| inventory_complete | all | 逐项保留实际流的真实过程、方向/类型、状态/介质、属性/单位、数量、采集及供应边界。卡片非空不证明实际发生。条件性不存在须有发票、检查或账簿证据；数量、身份、去向未解或缺测阻断完整数据集使用。 | 逐卡绑定表、校准原记录、条件性不存在证据及供应边界排除表。 |
| periods | all | 结果前声明连续报告日期、完整季节/场址覆盖、截止日及迟来退回更正窗口。保留实际事件时间与原批组归属、全受益方及全部零销售批组；保留不可归一化池及全部不确定性。不设无依据数量、寿命或浓度默认值。 | 带时间戳账、覆盖/缺测报告、寿命登记及签认更正。 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_binding | all | 完整数据集使用前须独立将每个非电力流（包括服务）绑定至一个合适天工流；根据原始直读证据核对公开状态、准确双语名、类型、状态、介质、属性/单位及供应数据。质量支撑不等于猪肉/服务流。历史电力身份不等于供应组合或当前可用性。明确保留所有未解决身份及数量；未知绝不为零。 | ghg-product2011 |
| balances | all | 要求解析来源的实际状态内容物库存及独立更正Q，并要求原门等价B_s/B_f/B_open/B_t闭合；不得将终点湿kg等同原生产kg。每项原肉/滴液转移及水物种释放均有原源归属；清洁水、化学品及环境水分排除在原内容物源质量外。终端完整液体载体质量不等于源食品损失。要求目标丙烷源E_j独立对平整房全源通量、捕集净库存及互斥外送。要求完整设备/工厂油包含性、保留/另排油证据及源专属油载体份额。来源/组成、库存、所有者或不确定性不闭合阻断完整性。 | fao-cold04; ghg-product2011 |
| zero_output | all | 仅当Q>0且每张必需卡/条件性不存在有证据时归一化。全零产出池保留绝对交换、失败商品及未定去向，报告不可归一化，不得删除或虚构分母。目标PCR机械检查不是科学批准或标准符合性认证。 | ghg-product2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 增量零售服务过程数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅匹配声明冷藏原封猪里脊配置，且数量/身份/去向/资产全部完成；每实际接受kg仅连接一次成功商品B_s/Q原门背景，不得默认1 kg/kg。 |
| excluded_use | 全部肉品零售平均；屠宰/制造；冷冻或开放肉品；未作下游产品汇总的完整消费猪肉足迹；安全认证。 |
| required_metadata | 全部参考限定、供应门、报告/退回日期、实测Q及池绝对账、原门商品责任、全部六类资产历史及处理路线。 |
| required_quality_disclosure | 全部未绑身份、缺失数量/覆盖、不确定性、失败/零产出批组、更正、供应边界排除及独立审查状态。 |
| update_trigger | SKU/包装/状态/温度验收变化、路线或制冷剂变化、资产寿命修订、迟来退回/去向更正或供应证据改善。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62123 | official_guidance | UN Statistics Division, CPC Version 3.0, subclass 62123, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62123 | 分类含义：与第211组有关的零售服务；不是服务方法。 |
| fao-cold02 | handbook | FAO, Manual on meat cold store operation and management, Cold preservation of meat products, https://www.fao.org/4/t0098e/T0098E02.htm | 冷藏与冷冻肉品及包装/保藏定性语境；不采用温度、时长或缩水系数。 |
| fao-cold04 | handbook | FAO, Manual on meat cold store operation and management, Refrigeration equipment, https://www.fao.org/4/t0098e/T0098E04.htm | 温度监测、设备、湿度及蒸发语境；不是R290泄漏系数或保质期强制规定。 |
| jrc-retail2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, 2013, EUR25998 EN, section 1.2 pp.4-6, https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售直接能源/水/化学品/废物定性筛查及上游/消费者区分；无数值默认。 |
| ghg-product2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 6-7 and 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分析单位、透明边界及分配层级指引；具体账簿公式为本PCR前景设计，不是标准原文强制规定或完整符合性。 |
