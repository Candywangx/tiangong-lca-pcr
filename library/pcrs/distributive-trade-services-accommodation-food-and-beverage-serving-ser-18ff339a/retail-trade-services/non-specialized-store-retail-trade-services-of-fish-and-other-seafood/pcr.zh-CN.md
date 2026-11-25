---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fish-and-other-seafood
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 供应商预包装冷藏生鲜去皮去骨大西洋鲑鱼片自提零售服务

## 1. 范围与适用性

本候选规则仅适用于下列明确路线；不代表整个62124分类，亦未获得科学批准。下列计量、责任和边界是作者设计的可审核方法，所引官方资料仅支持定性筛查；不设保鲜期、温度或排放合规阈值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fish-and-other-seafood |
| classification_refs | CPC 3.0 62124; narrower; 非专门店鱼及其他海产品零售服务（官方宽范围） |
| covered_products | 仅非专门店到店自提服务：供应商普通空气密封包装、生鲜冷藏、从未冻结、去皮去骨 Salmo salar 鱼片。建池前记录养殖/野生来源、物种、切割、包装配方、沥除游离液体净质量方法及接受标准。排除整鱼、活体、软体动物、冷冻/解冻、熟制、熏制、盐渍、真空/MAP、切片、再包装和配送路线。 |
| excluded_products | 整鱼; 活体; 其他物种; 冻结或解冻; 熟制; 真空/MAP; 现场加工; 配送 |
| representative_product | 供应商预包装冷藏生鲜去皮去骨大西洋鲑鱼片自提零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 收货; 柜内冷藏; 货架轮换; 顾客合格接受自提; 退回及最终去向闭合 |
| market_state | 非活体; 生鲜; 从未冻结; 去皮去骨鱼片; 供应商密封消费包装; 连续冷藏 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供部分增量到店自提零售服务 |
| How much | 1 kg 已合格接受的沥液净鱼肉对应服务 |
| How well | 按预先声明的实际包装、物种、切割、完整性、温度历史和接受规范；失败不算服务 |
| How long or cycle | 从零售收货门至顾客接受自提及原批群退回/去向核对关闭；记录实际时间 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 供应商预包装冷藏生鲜大西洋鲑鱼片的增量到店自提零售服务 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种 Salmo salar; 养殖或野生及来源; 去皮去骨切割; 生鲜从未冻结; 空气密封包装及吸水垫; 沥液净鱼肉方法; 实际接受规范; 柜型号与R290; 场址和期间; 同配置批群; 收货门背景和F责任; 部分增量边界及补齐模块 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| service_mass | retail_service; failed_goods_background; external_failed_goods | 质量 | kg | 服务按沥液净鱼肉质量；排除皮重、冰/游离水、吸水垫及游离滴液。完整废弃包质量不同，不得混用分母。 |
| energy_conversion | electricity | 净热值, 低位热值 | MJ | kWh * 3.6 = MJ；仅适用于electricity；不推断供应方或电网。 |
| whole_carriers | cleaning_water; cleaner; carry_bag; cabinet_asset; door_gasket; propane_topup; effluent; rejected_pack_waste; case_waste; bag_waste; gasket_waste; cabinet_waste; propane_recovery; propane_air | 质量 | kg | 质量按卡的完整物质/载体及状态测定；体积换质量须实测密度和温度；组分质量不再作完整载体。 |
| selected_freight_identity | loaded_transport | 货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | 所选公路货运身份采用官方货物运输属性及单位。1kg*km=0.001t*km；保留声明的原数量/归属模式，仅换算一次。实际车型、货物条件及供应阶段仍为独立适用门，不能假定背景或另乘载货份额。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 密封冷藏鱼片至零售收货门；实际原包装和入境运输背景在此截止 |
| starting_condition_role | 前景服务起点而非鱼生产参考流 |
| product_classification_scope | CPC 3.0 62124 的明确较窄路线 |
| recursive_input_rule | 无同类零售服务递归抵销；外购同类服务须披露其不重叠阶段和原门责任 |
| upstream_dataset_requirement | 最终获接受及仍可继续利用的商品，其生产、供应商消费/外包装及至相同零售收货门的入境运输均排除。服务导致不可恢复的鱼损失和未接受外部留存以该门 B 衔接。所有 F 保留顾客/供货方继续责任和最终去向；未解决 F 暂计 B 并阻止最终完整。仅凭有证据的责任重分配释放暂计，不得消失。不得自动抵扣避免生产。 |
| disclosure | 本数据集是部分增量柜体服务。声称完整零售服务前，须以同一批群/D 接入实测公共建筑壳体与装修、建筑维护和终端、房间HVAC、普通照明、柜外货架、收银设备及用电、手推车/托盘搬运、共享厕所与清洁、员工/行政设备和顾客购物袋终端模块。范围矩阵须将制造/安装、运行、维护、终端和运输各分配给唯一模块；仅从确实包含柜分表的上级表中减去柜电量。缺失接入即不完整，绝非零。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope_gate | retail_service | 仅非专门店到店自提服务：供应商普通空气密封包装、生鲜冷藏、从未冻结、去皮去骨 Salmo salar 鱼片。建池前记录养殖/野生来源、物种、切割、包装配方、沥除游离液体净质量方法及接受标准。排除整鱼、活体、软体动物、冷冻/解冻、熟制、熏制、盐渍、真空/MAP、切片、再包装和配送路线。 | fao-fish-2013 |
| partial_completion | retail_service | 本数据集是部分增量柜体服务。声称完整零售服务前，须以同一批群/D 接入实测公共建筑壳体与装修、建筑维护和终端、房间HVAC、普通照明、柜外货架、收银设备及用电、手推车/托盘搬运、共享厕所与清洁、员工/行政设备和顾客购物袋终端模块。范围矩阵须将制造/安装、运行、维护、终端和运输各分配给唯一模块；仅从确实包含柜分表的上级表中减去柜电量。缺失接入即不完整，绝非零。 | jrc-retail-2013 |
| gate_background | failed_goods_background | 最终获接受及仍可继续利用的商品，其生产、供应商消费/外包装及至相同零售收货门的入境运输均排除。服务导致不可恢复的鱼损失和未接受外部留存以该门 B 衔接。所有 F 保留顾客/供货方继续责任和最终去向；未解决 F 暂计 B 并阻止最终完整。仅凭有证据的责任重分配释放暂计，不得消失。不得自动抵扣避免生产。 | jrc-retail-2013 |
| internal_environment | propane_air; effluent | 完好包装内的鱼滴液仍属商品质量而非废水；游离滴液须与接受的沥液鱼肉分开记录。不适用活体生存台账。内部水汽/冷凝不是基本排放。本干式柜路线排除冰/直接铺冰及融水；现场铺冰证据使路线失效并须修订原子清单。实测合流排水是一个载体，不得再列其中水/清洁剂/鱼成分。 | fao-fish-2013 |
| extra_exchanges | all inventory rows | 通过巡查、发票、日志及供应方范围判定每张条件卡存在/缺席。未知即未验证。其他实际化学品、包装、替换件、排放或载体须在完整前添加自身明确卡、单过程协议及双语同步。真实整机、密封拒收包装和混合排水均作为完整交换；不得机械拆其所含材料形成重复流。 | jrc-retail-2013 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| cold_retail | 冷藏鱼片增量零售服务 | required | 仅 scope_gate 路线；所有条件卡判存在/缺席 | foreground | 1 kg reference flow |

### 过程：冷藏鱼片增量零售服务（`cold_retail`）

#### 输入

##### 产品流

###### 零售收货门的供应商预包装冷藏生鲜去皮去骨大西洋鲑鱼片（`failed_goods_background`）

按实测收货等价B= B_f_service+B_f_provisional衔接服务损失及暂计未接受F；非默认终点鱼肉kg。成功商品下游须加B_s/D收货等价背景，延续责任另留。不得全部收货再投一次。

- 选定流：零售收货门的供应商预包装冷藏生鲜去皮去骨大西洋鲑鱼片
- 流属性/单位：质量 / kg
- 数量规则：B/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_goods`
- 来源：`jrc-retail-2013`

###### 交流电（`electricity`）

仅柜体压缩机、风机、内置灯、控制和除霜；不推断使用点、电压及供应方。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：3.6*E/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_energy`
- 来源：`jrc-retail-2013`

###### 用于柜体清洁的饮用自来水（`cleaning_water`）

仅实测新鲜供水；不含内部回用以及所购清洁溶液自带水。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_liquids`
- 来源：`jrc-retail-2013`

###### 次氯酸钠水性清洁溶液（`cleaner`）

以实际产品/SDS、浓度、密度和使用记录为条件；其他配方须先有独立卡才能完整。

- 选定流：次氯酸钠水性清洁溶液
- 流属性/单位：质量 / kg
- 数量规则：C/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_liquids`
- 来源：`jrc-retail-2013`

###### 低密度聚乙烯顾客购物袋（`carry_bag`）

仅零售商增添的袋；原供货包装留在商品门责任中；未提供袋须有缺席证据。

- 选定流：低密度聚乙烯顾客购物袋
- 流属性/单位：质量 / kg
- 数量规则：P/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`jrc-retail-2013`

###### 完整独立式丙烷制冷展示柜（`cabinet_asset`）

一个已识别柜体的制造与安装，包括压缩机、蒸发器、框架、门、搁板、内置灯、控制及出厂充注；不含运行、维修和终端处理。

- 选定流：完整独立式丙烷制冷展示柜
- 流属性/单位：质量 / kg
- 数量规则：A*f/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`

###### 完整弹性体冰箱门密封条（`door_gasket`）

以真实维修为条件，不得充作不相关维修零件质量之和；其他实际维修须有明确卡与匹配出流。

- 选定流：完整弹性体冰箱门密封条
- 流属性/单位：质量 / kg
- 数量规则：G/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`

###### 柜体补充用丙烷制冷剂（`propane_topup`）

仅 R290 单物质配置；出厂初始充注含在柜体资产中，不属于此投入。

- 选定流：柜体补充用丙烷制冷剂
- 流属性/单位：质量 / kg
- 数量规则：T/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_refrigerant`
- 来源：`jrc-retail-2013`

###### 轻型商用车辆载货道路运输服务（`loaded_transport`）

仅废物供应方未含的实际退供或废物外运载货路段；通过供应方含车辆运行与制造；不重复燃料。

所选身份表示公路货运活动，不代表实际车辆或LCI供应方。保留本卡货物/车型、原质量基准及完整互斥载货阶段要求。官方单位组支持1t*km=1000kg*km；需要时仅换算一次，不再乘已完成运单/责任份额。空驶与有动力怠速仍保留独立实际车公里/车小时身份。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：V_load/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_transport`
- 来源：`jrc-retail-2013`

###### 轻型商用车辆空驶道路行程服务（`empty_transport`）

实测空驶路段具有非零车辆距离活动；仅已证实载货供应方覆盖空驶回程时方可剔除。

- 选定流：轻型商用车辆空驶道路行程服务
- 流属性/单位：车辆距离 / vehicle*km
- 数量规则：V_empty/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_transport`
- 来源：`jrc-retail-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 供应商预包装冷藏生鲜大西洋鲑鱼片的增量到店自提零售服务（`retail_service`）

服务量是接受的沥去游离液体后的净鱼肉质量，不是鱼生产流。

- 选定流：供应商预包装冷藏生鲜大西洋鲑鱼片的增量到店自提零售服务
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_goods`
- 来源：`jrc-retail-2013`

###### 未获合格接受而转交外部的供应商预包装冷藏生鲜去皮去骨大西洋鲑鱼片（`external_failed_goods`）

仅针对未获合格接受但由已知外部接收者实际留存的货物；退供货物追踪至最终去向。

- 选定流：未获合格接受而转交外部的供应商预包装冷藏生鲜去皮去骨大西洋鲑鱼片
- 流属性/单位：质量 / kg
- 数量规则：F/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_goods`
- 来源：`jrc-retail-2013`

##### 废物流

###### 含鱼滴液和除霜冷凝水的柜体清洁废水（`effluent`）

一个真实合流排水载体，含溶解清洁剂、鱼物质及冷凝水；不重复其中溶质或将内部水汽列为空气排放。

- 选定流：含鱼滴液和除霜冷凝水的柜体清洁废水
- 流属性/单位：质量 / kg
- 数量规则：J/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_liquids`
- 来源：`jrc-retail-2013`

###### 包括鱼及原包装的废弃密封鲑鱼片消费包装（`rejected_pack_waste`）

仅实际零售商处置；终端处理匹配完整包装组成。不得将其中鱼、滴液或原包装另列废物流。

- 选定流：包括鱼及原包装的废弃密封鲑鱼片消费包装
- 流属性/单位：质量 / kg
- 数量规则：Z/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`jrc-retail-2013`

###### 废弃瓦楞纸板运输箱（`case_waste`）

实际移除的外箱，与未打开废弃消费包装互斥；制造责任仍属收货门商品背景。

- 选定流：废弃瓦楞纸板运输箱
- 流属性/单位：质量 / kg
- 数量规则：K/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`jrc-retail-2013`

###### 废弃低密度聚乙烯购物袋（`bag_waste`）

仅零售商控制下废弃的袋；交顾客的袋披露下游去向，不作为零售商处置。

- 选定流：废弃低密度聚乙烯购物袋
- 流属性/单位：质量 / kg
- 数量规则：U/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`jrc-retail-2013`

###### 拆除的完整弹性体冰箱门密封条（`gasket_waste`）

实际维修拆除；已拆除的不得再列入终端柜体。

- 选定流：拆除的完整弹性体冰箱门密封条
- 流属性/单位：质量 / kg
- 数量规则：H/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`

###### 退役并排净制冷剂的完整独立式制冷展示柜（`cabinet_waste`）

完整排净后的终端柜体；不含单列回收丙烷和先前拆除零件；直接净重与BOM重构互斥。

- 选定流：退役并排净制冷剂的完整独立式制冷展示柜
- 流属性/单位：质量 / kg
- 数量规则：A_end*f_end/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_assets`
- 来源：`jrc-retail-2013`

###### 送外部处理的回收丙烷制冷剂（`propane_recovery`）

实际外送的完整纯丙烷回收载体；R仅在原量回路提取、回收储存及空气捕集交接互斥核对后归属。处理不含柜壳和空气排放。

- 选定流：送外部处理的回收丙烷制冷剂
- 流属性/单位：质量 / kg
- 数量规则：R/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_refrigerant`
- 来源：`jrc-retail-2013`

##### 基本流

###### 排至外部环境空气的丙烷（`propane_air`）

仅实测最终向外部空气转移；内部柜体/店内释放在核对储存、捕集及通风转移前只是中间源项。

- 选定流：丙烷 `fe0acd60-3ddc-11dd-aae9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：L_out/D
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_refrigerant`
- 来源：`jrc-retail-2013`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| same_configuration_pool | retail_service | 预先声明场址/柜/物种/切割/包装配置和观察期；包含失败、关闭、空闲及零销售批群。按原商品ID保留跨期库存和迟到退货。Q 为成功接受的净鱼肉；实物退回或后来失格的量从原 Q 撤销，亦修订原分子/去向。仅退款/折价不改变实物库存或 Q。重复处理/转售并非此前已计质量的新净服务，除非先撤销原接受。整池 Q 为零须保留为不可归一化并进入预定同配置池，不得删除。 | ghg-product-2011 |
| causal_allocation | all inventory rows | 优先互斥直接计量和事件细分。共享制冷按所有受益者实测占用货架体积小时并辅以负荷/温度证据分配；空闲期按预先声明预留容量小时分配，保留损失及失败。全部受益者份额须和为一并与各实测池对账。驱动缺失或无依据即分配未解决。分配一次后再除 D；收入及默认等分不能替代。 | ghg-product-2011 |
| persistent_assets | cabinet_asset; cabinet_waste | 跨期和全部受益者保留资产ID台账。f = f_v = e_bp / E_life_v，e 含已分配空闲/预留容量小时，E 为有记录的预期寿命安装容量总小时；寿命修订时替换所有旧版分配，不得重启制造负担。累计制造份额 <= 1；退役时按最终实测全寿命受益者暴露分配剩余 1-sum(先前更正份额)。终端 f_end 为最终更正寿命受益者份额，对终端载体仅乘一次，绝不再乘制造 f。更正记回原批群版本。 | ghg-product-2011 |
| fates_no_credit | rejected_pack_waste; external_failed_goods | 未合格接受前不得给失败商品、捐赠留存或退供分配服务产出。外部拒绝为 F 并记录实际接收者/状态和持续门责任，不自动成为零售废物。回收/处置归于实际载体和接收者；供应方运输、回收及处理边界互斥；无推测能源、回收或转售抵扣。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | cold_retail | 商品接受、库存、损失和背景 | 原始现场记录 | 逐包ID; 供应批号; 物种; 来源; 切割; 包装; 日期; 毛包装kg; 皮重kg; 游离滴液kg; 沥液净鱼肉kg; Q_original; Q_reversed; H_gross; R_phys; S; F; 接收者; 状态; 最终责任人; 收货门背景; SKU; label_net_kg; sample_id; age_stratum; drain_time; drain_mesh; drain_temperature; sample_flesh_kg; sample_pack_pad_kg; sample_free_liquid_kg; r_f; sample_recipient; uncertainty; R_i; R_flesh; d_i; k_i; w_is; w_if; w_iopen; w_iF; B_s; B_f; B_open; B_f_service; B_f_continuing; B_f_provisional; F_receipt; consumer_pack_sourced_removed_mass; source_component_matrix | 收货、每次交出、退回、损失和期末盘点扫描每包并记录校准秤值。按声明沥液方法，同SKU、供应批及收货/交出存龄层进行代表性破坏性抽样：先称完整未开封包，再按固定时间、网孔和温度的声明沥液方法配对称净鱼肉、包装/吸水垫和游离液体，不挤压；冰须单列实测且出现即否定本从未冻结路线。定义 r_f = 同层样本净鱼肉和 / 同层标签净含量和，未打开实际销售包的鱼肉估计为标签净含量*r_f；配对称量核毛包=鱼肉+包装/垫+游离液体，传播秤、抽样和层内变异不确定度至 D、F、损失及库存，不编造精度或样本量。收货门背景也必须用同一净鱼基准，禁止生产背景按含汁液净含量而D按去汁液计量却不转换。抽样包作为实际移出事件保留原ID；记录样品受领者/状态和最终去向，样品不计服务，外部留存入F或实际处置入对应完整载体，绝不删除。实际销售包保持原封；未分离滴液随商品交付，不入零售废液或损失。记录实际接受规范、温度/历史、完整性及货架期判定；无数字合规默认。 应用 calc_service 与 calc_background；仅以正 D 最终除一次；原批群更正和游离液体台账独立 按同SKU/供应批/存龄逐源配对收货与终点样品，求R_i到d_i的实测k_i及全部最终去向映射；完整包按ID归属，真实拆分按鱼肉及其派生液体逐源称重求w份额。收货和终点用同一沥液规程；同包纵向代表样或匹配同批对照须记录设计、变异及不确定度，不得用默认1转换。对完整已接受包的原收货鱼肉（包括后转为随包滴液的份额）归B_s；每原R_i去向份额闭合为一，未知留B_open不冒充损失。为实际废物/排液建立原消费包源项矩阵，J内外购水/剂、袋和外箱禁止入包库存闭合。 | kg | 逐事件及逐供应批审计；每日库存闭合 | 全部收货、拒收、成功包、零销售间隔及延迟退货直至批群核对 | 收货门至自提台及全部实际接收者 | 每 1 kg 参考流 | 活动前后可追溯砝码校准；批审计设计、不确定度、库存对账、追溯及接受证据 |
| cp_energy | cold_retail | 柜体电力 | 原始现场记录 | 表ID; 线路图; 时间戳; kWh起止; 复位; 柜ID; 温度; 占用体积小时; 预留容量小时; 受益者 | 读取专用柜电表累计值及间隔日志；连续记录产品温度并链接偏离/事件，与收发检查比较。识别压缩机/风机/除霜/内置灯；任何扣减前验证电路包含关系。 causal_allocation 后用 calc_energy；每 1 kg 参考流仅一次 | kWh; h; m3*h | 连续间隔记录并每日累计表对账 | 完整活动含夜间、闭店、空闲和维修 | 一柜及每个实际共用受益者 | 每 1 kg 参考流 | 电表精度/校准证书、时间戳/复位审计及温度探头可追溯核查 |
| cp_liquids | cold_retail | 清洁供给与合流排水 | 原始现场记录 | 事件ID; 新鲜体积; 水温; 水密度; 清洁产品; SDS; 浓度; 清洁剂质量; 排水体积; 废液密度; 鱼滴液; 冷凝水; 回用; 储存 | 计量柜新鲜供水支路和实际排水；称完整清洁溶液用量。在记录温度下用已校准质量/体积测密度；每种清洁/除霜工况取完整液体代表性混合样，记录溶解鱼/清洁剂作表征。除霜水进实测合流排水，或为另捕集载体添加卡。 直接归属后用 calc_liquids；实际 J 每 1 kg 参考流一次；供水平衡独立 | m3; kg; kg/m3 | 每清洁及除霜事件；每日累计表读数 | 完整活动及全部工况含泄漏/维修事件 | 柜清洁支路及最终排水交接，不是全场下水 | 每 1 kg 参考流 | 水表校准、秤/容器校准、取样链、密度温度及排水接收者/处理接受证据 |
| cp_materials | cold_retail | 增加袋及废弃完整载体 | 原始现场记录 | 事件ID; 产品批号; 袋数量; 样本净重; 期初; 购入; 期末; Z; K; U; 完整载体质量; 组成; 接收者; 处理; 供应方运输 | 逐废物交运用校准秤称量，扣外部收集桶皮重；完好拒收包保持整体并记录鱼/包装/滴液组成。称同批完整袋并核对数量台账；分开已移除纸板和消费包装。 一次归属后用 calc_materials；每 1 kg 参考流 | kg; count | 每领用/交运；每批袋取样；每日台账闭合 | 完整活动、全部去向含失败销售 | 零售控制至实际载体接收者 | 每 1 kg 参考流 | 秤核查、取样覆盖/不确定度、票据及排除重复运输/处理的废物供应方范围 |
| cp_assets | cold_retail | 完整柜体寿命、维修和终端 | 原始现场记录 | 资产ID; 制造者; 型号; 序号; A; 安装范围; 容量; e_bp; E_life_v; 寿命版本; 历史份额; G; H; A_end; 终端模式; 拆除件; 出厂充注; 回收 | 取得可追溯整台已安装柜称重或与配置核实的制造者整机质量，绝不编造质量。记录跨场址/用户累计容量小时、实际维修和完整密封条校准净重；退役直接称排净柜，或互斥采用有记录组件BOM重构。 A/A_end 用 calc_asset，G/H 用 calc_materials，最终除 D 一次；绝不重启旧制造负担 | kg; m3*h | 安装、每期和维修、每次寿命修订及终端事件 | 保留全寿命台账含前后受益者更正 | 一个物理柜含内置组件；不含公共设施模块 | 每 1 kg 参考流 | 质量证书、组件单、有日期寿命证据、份额和审计、维修发票、回收及终端处理收据 |
| cp_refrigerant | cold_retail | 丙烷交接与最终空气转移 | 原始现场记录 | installed_gate_id; installed_gate_time; installed_charge_raw; initial_factory_charge_raw; pre_gate_commissioning_charge_raw; pre_gate_commissioning_loss_raw; commissioning_provider_scope; purchased_makeup_raw; asset_id; event_id; species; opening_charge_raw; T_raw; closing_charge_raw; R_raw; other_circuit_transfer_raw; recovery_store_open_raw; recovery_store_close_raw; R_circuit_sent_raw; reused_recovery_raw; other_recovery_transfer_raw; air_storage_start_raw; air_storage_end_raw; capture_storage_start_raw; capture_storage_end_raw; captured_air_sent_raw; custody_id; C_in_kg_m3_raw; C_out_kg_m3_raw; F_in_m3_h_raw; F_out_m3_h_raw; blank_mode; blank_concentration; temperature; pressure; dry_wet_basis; regime_duration_h; beneficiary_event_share; f_end | 每次干预按技师校准钢瓶前后称重及交接记录保留未分配原量和回路/回收储存。空气物质库存及仅空气捕集库存分别测期初/期末，按有符号差值且互斥；捕集库存不含已从回路提取的R_raw。实际外界通量采用同步绝对入口/出口C（kg/m3）乘各自F（m3/h），均换到同一气体温度、压力和干湿基。浓度空白模式只能选对原浓度扣一次空白或使用已经空白校正的浓度；不得二次扣除。outside_flux_raw = integral(C_out_corrected*F_out-C_in_corrected*F_in) dt，对每实际排风口及实测排放工况按小时积分得kg；入口已包含房间/环境背景，不再扣背景。不得以不明空气质量流率乘体积浓度。与L_out_raw及实际储存/捕集差核对，保留仪器覆盖、检出限和空档不确定度；未知低于限量不等零。先按calc_refrigerant原量闭合再作明确事件/终端份额归属，最后除D一次。 在首次调试后安装交接门记录门ID、时间和实测所含充注installed_charge_raw；该量只作首区间opening_charge_raw一次，后期沿用closing，不将出厂充注重复相加。保留出厂/首次调试供气及门前损失原证据和制造/安装供应方包实际范围，门前责任只在该背景一次；未知不得默认已覆盖。门后逐事件分别称新购补充purchased_makeup_raw和回收再充reused_recovery_raw，核T_raw为两者之和，只有前者进入T分子。门后维修/再调试损失按实际前景外排核算，并核供应方不再包含同事件；终端留存充注不再作为新投入。 | kg; kg/h; h | 每次干预；每排放工况同步连续绝对浓度/体积流量及期初末储存测量 | 完整活动及终端回收；空档保留未解决 | 柜回路、店内空气及实际外界转移面 | 每 1 kg 参考流 | 钢瓶/流量表校准、气体分析标准、空白/进口数据、实测温压、交接ID及空档/不确定度报告 |
| cp_transport | cold_retail | 实际外运载货及空驶路段 | 原始现场记录 | 行程ID; 路段ID; 车辆; 路线; 载荷kg; 载货km; 空驶km; 时间戳; 接收者; 共载驱动; 供应方范围; 到货门排除 loaded_attribution_mode；target_gross_kg；vehicle_total_gross_kg；target_payload_kg；all_other_payload_kg；provider_reference_unit；provider_attribution_level | 每次实际退供/废物行程读取GPS/里程表并称完整载体总载荷。保留失败收运/定位/回程路段并核载货供应方对实测空驶路线覆盖；获取运行/制造及制冷范围。处理内部运输按明确行程ID排除。 calc_transport；共用活动仅归属一次并每 1 kg 参考流除一次 计算前将每个称重读数标为全车或目标货物，核对同一完整货单、供应方基准及实际路段。已归属目标的kg/t*km不再乘第二份额。 | kg; km; t*km; vehicle*km | 每行程及路段 | 活动全部实际外运路段含空驶/失败 | 零售门至已知供应方或废物接收者；排除入境 | 每 1 kg 参考流 | 载荷秤校准、里程/GPS核查、路线票据、供应方声明及无重叠行程表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | retail_service; external_failed_goods | D = sum(Q_original-Q_reversed)；F 为未获合格接受而外部留存的终点沥液净鱼肉。完整消费包毛质量台账闭合：期初+收货+R_phys = 期末+H_gross+S+consumer_pack_sourced_removed_mass。H_gross、R_phys及S包含实际交出/退回/转交的全部原鱼肉、游离液体、吸水垫和包装。末项含完整废弃包的全量Z，加上实际样品、分离/泄漏液体及其他出流中仅源自这些原消费包的实测逐源份额。必须排除J内外购水/清洁剂、增加LDPE袋、外纸箱及其他单独投入物。不得将完整J载体放入该消费包平衡。保留逐源组分矩阵，将每份原包质量仅一次对到实际完整载体和接收者；完整废水/废物交换另保留全载体质量。移除外箱与增加袋另设购入/库存/去向台账。内部转移抵销。未分离滴液随顾客商品实际交付，但不计D，亦不自动归零售废物/损失。追踪calc_background实测收货等价映射；最终归一化前D须为正。 | Q_original; Q_reversed; F; H_gross; R_phys; S; opening; receipts; closing; Z; consumer_pack_sourced_removed_mass; source_component_matrix; cp_goods | D; F; physical_closure | fao-fish-2013 |
| calc_background | failed_goods_background | 通过匹配收货SKU/供应批样品测原消费包ID i的收货门沥液净鱼肉 R_i。在每个存龄/最终去向层配对测收货等价和终点沥液鱼肉及包内滴液；完整最终获接受包的 k_i = R_i / d_i，成功商品门需求为 k_i*d_i = R_i，而非 d_i。不默认 k_i=1。拆分/泄漏/抽样包通过配对的逐源鱼肉/液体实测及唯一历史求互斥收货鱼肉去向份额 w_is、w_if、w_iopen；鱼肉产生的滴液随其原商品去向，不自动归损失。须有实测映射及传播不确定度；映射缺失阻止完整。B_s = sum(R_i*w_is)；B_f = sum(R_i*w_if)；B_open = sum(R_i*w_iopen)。核对未闭时 R_flesh = B_s+B_f+B_open；最终关闭时 B_open=0 且 R_flesh = B_s+B_f。D 为撤销后终点接受沥液鱼肉。成功商品下游衔接必须按 B_s/D kg收货等价鱼肉，带原包装及实际至相同门的入境运输，不得默认1kg；本部分服务排除该成功商品生产。按最终背景责任人分 B_f = B_f_service+B_f_continuing+B_f_provisional：真正服务导致不可恢复损失及分配给服务的未接受F归服务责任；可再利用退供/F保留可追溯延续责任人；未解决F留暂计并阻止最终完整。B = B_f_service+B_f_provisional 为 failed_goods_background 投入分子。收货等价 F_receipt = sum(R_i*w_iF) 是B_f中追踪子集，而实物F/D仍是终点净鱼肉。迟退/转售修订原B_s/B_f、D和责任；不得重复计成功商品生产或删除延续责任。 | R_i; R_flesh; d_i; k_i; w_is; w_if; w_iopen; w_iF; B_s; B_f; B_open; B_f_service; B_f_continuing; B_f_provisional; F_receipt; final_owner; cp_goods; D | B; B_s; B_f; F_receipt | jrc-retail-2013 |
| calc_energy | electricity | E = sum(依 causal_allocation 分配的柜表kWh)。以3.6 将kWh换为MJ一次，再除 D。仅可从包含该分表的上级实测边界扣减；互斥独立表相加而不扣减。包含关闭小时、警报、维护停机和除霜。 | meter_start; meter_end; interval; beneficiary_exposure; cp_energy; D | E; MJ_per_reference | jrc-retail-2013 |
| calc_liquids | cleaning_water; cleaner; effluent | W = sum(新鲜输入体积 * 实测供水密度)；C = sum(完整供入清洁溶液质量)；J = sum(实际排水体积 * 实测完整废液密度)，再归属。不从直接实测 J 扣蒸发、库存、回用或清洁剂。独立供水平衡追踪购入溶液含水、捕集除霜/环境冷凝水、鱼滴液、蒸发和储存。不授权重构替代方案。J 已含溶解清洁剂/鱼，不得再输出；取样浓度只作表征，不是另一载体数量。 | supply_volume; supply_density; cleaner_mass; concentration; outlet_volume; effluent_density; condensate; drip; storage; cp_liquids; D | W; C; J | jrc-retail-2013 |
| calc_materials | carry_bag; door_gasket; rejected_pack_waste; case_waste; bag_waste; gasket_waste | P,G,Z,K,U,H 为互斥实测整件/完整载体质量，仅归池一次，再分别除 D。袋允许数量 * 实测同批完整袋平均质量，须有皮重及取样覆盖；绝不将无关维修零件之和当完整密封条。袋对账为购入 + 期初 - 期末 = 交出 + 废弃；匹配废物接收者、状态、实际处理和运输排除。 | P; G; Z; K; U; H; item_count; tare; sample_mass; recipients; cp_materials; cp_assets; D | material_mass_per_reference | jrc-retail-2013 |
| calc_asset | cabinet_asset; cabinet_waste | 制造 A*f/D 及终端 A_end*f_end/D 分别遵循 persistent_assets。直接称排净终端整机净重已排除拆除件和回收充注：不得再减。替代BOM重构仅加终端实际存在组件，回收充注及拆除件只剔除一次，并与直接净称互斥。事件维修投入/产出用 calc_materials，不乘制造份额；供应方包不含维修和终端处理。 | A; A_end; e_bp; E_life_v; f; f_end; historical_fractions; lifetime_version; cp_assets; D | asset_mass_per_reference | ghg-product-2011 |
| calc_refrigerant | propane_topup; propane_recovery; propane_air | 以未分配物质kg原量建立整设备物理闭合：L_internal_raw = opening_charge_raw+T_raw-closing_charge_raw-R_raw-other_circuit_transfer_raw。固定安装门为完成首次调试后的有记录交接门，须声明installed_gate_id及时间。首次前景区间opening_charge_raw = installed_charge_raw，仅将此门实测资产所含充注列为期初库存一次，不另加initial_factory_charge_raw；后续区间沿用前一期closing_charge_raw。出厂及首次调试所需充注供给、制造/安装处理和实际门前调试损失均属柜体制造/安装背景，按供应方实际范围证明且仅计一次；范围未知阻止完整，不得再塞入前景T或外排。门后T_raw = purchased_makeup_raw+reused_recovery_raw，其中purchased_makeup_raw仅是门后从新购补充供给实际加入回路的质量，绝不含资产已含出厂/首次调试充注；R_raw仅直接从回路提取，绝非空气捕集。门后任何再调试/维修损失进入本原量平衡和实际外界通量，由前景承担并从供应方已含处理范围去重。终端剩余充注由连续closing_charge_raw/回收台账延续，绝非第二次初始或补充投入。回路回收储存闭合为 recovery_store_open_raw+R_raw = recovery_store_close_raw+R_circuit_sent_raw+reused_recovery_raw+other_recovery_transfer_raw。不得将提取等同外送。独立 L_out_raw = L_internal_raw-delta_air_storage_raw-delta_air_capture_retained_raw-captured_air_sent_raw。两个delta均为实测有符号期末减期初库存；空气储存不含捕集库存，捕集库存不含回路回收充注。captured_air_sent_raw为从泄漏店内空气实际回收并外送的纯丙烷，交接ID与R_raw及R_circuit_sent_raw互斥；回路回收事件绝不扣两次。回收产出原交接总量 R_sent_raw = R_circuit_sent_raw+captured_air_sent_raw。其他吸附剂/混合捕集载体须在完整前有自身明确卡。仅原量平衡与独立外界通量核对后，才将外购补充 T = allocated(purchased_makeup_raw)、实际回收外送 R = allocated(R_sent_raw)、L_out = allocated(L_out_raw) 分给受益者一次。维修用实际当前受益者事件份额；终端残余充注/回收及相关外排用最终寿命f_end一次，绝不再乘制造f。然后T、R、L_out除D。保留全部原库存、更正及历史受益者修订；未解决或不相容负闭合阻止完整。 | installed_gate_id; installed_gate_time; installed_charge_raw; initial_factory_charge_raw; pre_gate_commissioning_charge_raw; pre_gate_commissioning_loss_raw; commissioning_provider_scope; purchased_makeup_raw; opening_charge_raw; T_raw; closing_charge_raw; R_raw; other_circuit_transfer_raw; recovery_store_open_raw; recovery_store_close_raw; R_circuit_sent_raw; reused_recovery_raw; other_recovery_transfer_raw; delta_air_storage_raw; delta_air_capture_retained_raw; captured_air_sent_raw; R_sent_raw; f_end; beneficiary_event_share; outside_flux_raw; cp_refrigerant; D | T; R; L_out | jrc-retail-2013 |
| calc_transport | loaded_transport; empty_transport | 每来源/路段选择且只选一个载货归属模式。target_consignment模式：V_load=sum(target_gross_kg/1000*loaded_leg_km)，target_gross_kg已是该目标货物实际毛载重，绝不再乘shared-load share或allocation_once。unassigned_vehicle模式：V_load=sum(vehicle_total_gross_kg/1000*loaded_leg_km*target_payload_kg/vehicle_total_gross_kg)，仅限全车未分配活动和实际质量基准兼容的t*km供应方；同段目标及其他货物毛kg合计核对全车毛kg且分母正已知。已按目标供方归属量直接保留，原始路段计算只作QA。量均先保留原始、目标归属级别和provider参考单位，不用占容积比例再缩减已经按目标kg计算的t*km；需体积容量分担的整车环境向量另用匹配实际供应方及独立原子活动卡，不当作目标kg的修正。实际空返保留未被供应方包含的vehicle*km，按全受益实际路线容量预留份额一次；静止开机保留实际闲置h及燃料，需匹配具名补齐卡，绝不以零载荷/零距离删除。原入门货物运输及处理已含相同实际路段仅一次；未知覆盖阻止完成。按最终参考分母D仅归一一次。 | load_kg; loaded_leg_km; empty_vehicle_km; route_share; provider_scope; cp_transport; D; loaded_attribution_mode; target_gross_kg; vehicle_total_gross_kg; target_payload_kg; all_other_payload_kg; provider_reference_unit; provider_attribution_level | V_load; V_empty | ghg-product-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_scope | all inventory rows | 为每个实际交换保留巡查存在/缺席和范围矩阵、互斥供应方阶段及明确下游补齐模块；拒绝整个分类覆盖声称。 | 有日期巡查、供应方范围、路线/包装照片和接入清单 |
| q_records | all inventory rows | 保留原时间戳、ID、原单位、校准、取样计划和缺失数据不确定度；无默认、暗示零或编造阈值。保留全部零驱动间隔和预定批群池。 | 原表、日志、校准及含未解决差异的签署对账 |
| q_acceptance | retail_service | 采用已声明实际本地/顾客接受规范，不声称Codex法律符合性。连续温度/完整性/轮换证据补充到货检查；冷藏生鱼并非即食。 | 包装标签、原规范、温度偏离和实际处置 |
| q_history | cabinet_asset; cabinet_waste; retail_service | 保留版本寿命、原批群修订及最终背景责任；不暗中重分配、重置或删损失。 | 寿命/库存修订台账及更正先前产出 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_binding | all inventory rows | 每个适用行核准一个官方流原件与匹配凭证、公开状态、准确双语名、类型、状态/介质及属性单位链前，数据集不得完整。未绑定服务不得复用鲑鱼生产UUID。交流电UUID仅确定使用点能量身份；供应方/电网/电压背景仍需证据。 |  |
| denominator_closure | retail_service | 检查 D 为正、独立实物质量闭合、唯一包装历史、迟退分子与分母更正、保留全部零销售池以及 F 最终责任/背景。财务退款不能替代实物证据。 |  |
| measurement_completeness | all inventory rows | 检查实际数量、不确定度、校准、完整频率/覆盖、匹配协议过程及最终一次归一化。J 是完整载体 V*rho，不扣供水平衡项；丙烷最终外排须有实测捕集/储存闭合。条件缺席须证据；未知不通过。 |  |
| scope_no_overlap | all inventory rows | 验证资产累计份额 <=1、终期残差更正、终端模式互斥、维修事件边界、完整载体处理、实际载货/空驶覆盖及商品/运输/制冷剂回收不重复。每个明确公共设施补齐模块接入前报告部分增量范围；这些检查不建立合规或出版批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量前景服务；候选方法 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅相同范围的增量服务比较；完整零售模型须先接入明确补齐模块 |
| excluded_use | 鱼生产; 整个62124; 活鱼; 全生命周期声明; 法律符合性; 未完成背景/身份结果 |
| required_metadata | 全部必需限定信息; 期间及批群; D及实物台账; F和B责任; 资产历史; 供应方范围矩阵 |
| required_quality_disclosure | 未绑定流; 缺失量与不确定度; 分配依据; 背景覆盖; 部分边界及未接入模块; 未获科学批准 |
| update_trigger | 物种/切割/鲜冻/包装改变; 铺冰; 制冷剂或柜改变; 接受/退回修订; 寿命改变; 供应方范围变化 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-fish-2013 | official_guidance | FAO/WHO Codex, Code of Practice for Fish and Fishery Products CAC/RCP 52-2003, amendments through 2013, section 18.1.1/18.1.3/18.1.7; https://www.fao.org/input/download/standards/10273/CXP_052e.pdf; retrieved 2026-10-27 | 定性：收货、冷藏、包装保护、轮换、滴液及展示；无数值阈值或法律符合性采用 |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR 25998 EN, 2013, section 1.2.1/Table 1.2; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf; retrieved 2026-10-27 | 定性零售直接投入/产出和商品链区分；所设部分边界、卡、计量和责任是本规则设计 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapter 9/Table 9.1/9.2, printed page 63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-10-27 | 细分优先和因果物理分配原则；具体台账、驱动和寿命方程为本规则设计，不声称完整标准符合性 |
