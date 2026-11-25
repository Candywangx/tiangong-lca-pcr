---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-agricultural-raw-materials-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封玻璃罐天然蜂蜜的非专门实体店零售服务

## 1. 范围与适用性

本 PCR 覆盖同一 SKU 天然西方蜜蜂 Apis mellifera 分离蜜的非专门实体店增量零售服务；商品以密封玻璃罐供货，常温储存并交接，不进行产品转化。参考对象是服务而非蜂蜜制造。各数据集以供应规格固定一种灌装量和包装配置，不假设通用罐质量。官方子类还列举多种无关原料；这些商品及路线不属于本较窄范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-agricultural-raw-materials-n-e-c |
| classification_refs | CPC 3.0 62119; narrower |
| covered_products | 一罐密封玻璃罐天然蜂蜜的零售服务 |
| excluded_products | 原奶；带壳蛋；橡胶；生殖材料；原纺织材料；蜡；其他林产品；巢蜜；浸泡调味蜂蜜；散装补充；线上配送；批发；专门店；蜂蜜生产 |
| representative_product | 一个明确的密封玻璃罐天然分离蜜 SKU，配对应盖和标签 |
| production_route | 门店接收；人工搬运；常温展示；结算；最终交接及有记录的去向 |
| market_state | 密封成品罐；记录液态或自然结晶态；店内不加热不分装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一罐密封玻璃罐天然蜂蜜的零售服务 |
| How much | 同一明确 SKU 一罐最终接受零售服务 |
| How well | 密封罐完整、净灌装量明确、接受可追溯且储存状态有记录；无数值质量默认 |
| How long or cycle | 在明确年度池内从接收到最终接受交接或失败去向闭合，并修正迟到事件 |
| reference_flow_link | accepted_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一罐密封玻璃罐天然蜂蜜的零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | SKU及净灌装量; Apis mellifera及取蜜方式; 花源及地理来源; 罐盖标签配置; 水分及液态结晶状态; 密封及接受条件; 门店门点及渠道; 年度队列及迟到事件策略; 上游责任及供应边界; 空调设备及供电交付 |

所有必需限定信息必须在前景数据集中声明；缺失即参考定义不完整。兼容服务身份确认前服务 UUID 保持未绑定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 计数一次同质罐最终接受零售服务，不得代替未定义质量或运输活动。使用 cp_goods 和 denominator；罐净质量为强制限定信息，不是服务分母。 |
| conversion_control | all inventory rows | 保留交换属性 | 记录的物理单位 | 保留原始表计称重单位；归属前使用 physical_conversion 及 water_balance，再用 normalize_service。不提供数值范围、默认损耗、密度或寿命。 |
| selected_freight_identity | external_transport | 货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | 所选公路货运身份采用官方货物运输属性及单位。1kg*km=0.001t*km；保留声明的原数量/归属模式，仅换算一次。实际车型、货物条件及供应阶段仍为独立适用门，不能假定背景或另乘载货份额。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有供货规格及逐罐上游责任记录的门店收货门密封罐接收 |
| starting_condition_role | 增量零售服务起始条件 |
| product_classification_scope | CPC 3.0 62119; narrower |
| recursive_input_rule | 不得把同一零售服务递归作为商品输入；对非成功责任接入实际收货门蜂蜜背景，成功商品外部耦合均仅一次 |
| upstream_dataset_requirement | 兼容蜂蜜罐生产、初级及供货包装、入店运输至完全相同门点；每项责任归属均定量且范围去重 |
| disclosure | 声明 SKU、场址日历、门点、储存状态、池、顾客接受、最终去向、上游责任方和每项供应排除 |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| retail_gate | 前景从门店收货门记录密封蜂蜜罐接收开始，含检查、人工内转、常温储存展示、结算、泄漏清洁及最终接受或有记录的非销售去向。养蜂、取蜜、过滤、灌装和初级包装属于上游。本路线不允许开罐、加热、稀释、混配或分装。 | unsd-cpc62119; fao-honey-1996 |
| goods_responsibility | 成功罐的生产、初级及供货包装和到收货门的入店运输不含于增量服务，须由下游商品使用者在该确切门点耦合一次。每罐保留上游责任台账。失败、丢失、弃置和捐赠罐通过 failed_goods_background 接入同一完整背景一次；不得用全收货量乘损耗率，也不得对最终再售罐重复收费。退供和失败外部交付须保留收货 ID、接收方、实际状态、退回或交付运输、最终去向及持续背景责任方。责任转移须有具名耦合数据集和证据，否则保留未解决上游负荷并阻断完整性。 | ghg-product-2011 |
| provider_dedup | 将每个废物输出连接到实际接收方对该确切载体的运输和处理；不得假设回收减免。购买的完整包须按组件和事件公开范围。电力、运输、包装生产、维护或末端阶段的重叠只可从一侧排除，并保留范围矩阵及数量。包范围未知即阻断完成。成功销售罐的顾客出行、使用及处置排除，并明确下游责任。 | jrc-retail-2013 |
| route_presence | 采用全电门店、人工货物搬运和一个密封玻璃罐常温蜂蜜 SKU；如有建筑舒适空调，采用 R32 热泵，不作为蜂蜜冷藏。调查设备、发票及泄漏和维护日志。记录其他燃料、外购热、冷库、动力搬运、其他制冷剂、消毒剂和排放的缺席证据。实际存在时，须补入具体原子卡、协议并双语同步后才能声明数据集完整；不得将实际交换隐藏于泛称行。 | jrc-retail-2013 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 常温蜂蜜接收展示及交接 | required | 全部范围内服务队列 | 前景单元过程 | 每参考流 |
| climate | R32建筑舒适空调 | conditional | R32热泵服务蜂蜜区；调查证明存在或缺席 | 前景单元过程 | 每参考流 |
| assets | 完整资产资本及末端责任 | required | 服务实际使用建筑壳体、无动力货架、POS及R32热泵 | 前景单元过程 | 每参考流 |

### 过程： 常温蜂蜜接收展示及交接 (`retail`)

#### 输入

##### 产品流

###### 交流电 (`retail_power`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 计量收货、上架、照明、风扇和结算用电；将 kWh 换算为 MJ，按 allocate_pool 归属后仅除以 D 一次。用回路图选择互斥模式：零售表为包含空调分表的总表时，仅扣该空调量一次；零售与空调已为互斥回路分表时，保留零售读数不变。核实供应包重叠，仅从有证据包含它的一侧扣除，不得扣除本表未包含的量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_retail_power`
- 来源: jrc-retail-2013

###### 门店入口的市政饮用水 (`clean_water`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用外部供水水表体积乘以实测水密度；按 allocate_pool 归属并仅除以 D 一次。入口水表量不得再减去内部回用量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_water`
- 来源: jrc-retail-2013

###### 碳酸钠水溶液清洁剂 (`cleaner`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 碳酸钠水溶液清洁剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 通过库存平衡取得实际购入配方消耗质量；记录碳酸钠浓度和组成，不得用有效碳酸钠质量替代整份溶液；归属一次后除以 D。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_consumables`
- 来源: jrc-retail-2013

###### 干燥一次性纤维素清洁擦拭片 (`cellulose_wipe`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 干燥一次性纤维素清洁擦拭片
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用消耗的购入干擦拭片质量，不含吸附的清洗液；按事件记录归属后除以 D。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_consumables`
- 来源: jrc-retail-2013

###### 无涂层牛皮纸手提袋 (`kraft_bag`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 无涂层牛皮纸手提袋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 发放时称量实际袋型并乘以发放数量减未使用退回数量；按实际内容物占用体积对同一只袋分配一次，再除以 D。未发放袋时须有缺席证据。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_consumables`
- 来源: jrc-retail-2013

###### 热敏收银纸 (`receipt_paper`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 热敏收银纸
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 通过纸卷库存平衡和消耗纸张称重计量；以本 SKU 实际打印长度分配共享票据，包括作废和重打，再除以 D。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_consumables`
- 来源: jrc-retail-2013

###### 门店收货门处密封玻璃罐天然蜂蜜 (`failed_goods_background`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 门店收货门处密封玻璃罐天然蜂蜜
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 按 goods_responsibility 处理最终丢失、弃置、捐赠或未形成目标接受服务即离开的唯一罐；每罐仅计一次到同一收货门的完整罐、盖、标签、分配的供货包装及入店运输上游负荷，再除以 D。供应商退回须追踪至最终责任有证据。本输入承载上游负荷，不是另一笔实物收货。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_goods`
- 来源: ghg-product-2011

###### 轻型商用道路车辆密封蜂蜜罐货运服务 (`external_transport`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

所选身份表示公路货运活动，不代表实际车辆或LCI供应方。保留本卡货物/车型、原质量基准及完整互斥载货阶段要求。官方单位组支持1t*km=1000kg*km；需要时仅换算一次，不再乘已完成运单/责任份额。空驶与有动力怠速仍保留独立实际车公里/车小时身份。

- 选定流: 货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则: 汇总实际密封蜂蜜罐退供捐赠的含包装毛吨乘载货距离，按实测完整路线在实际受益方中分配，仅除以 D 一次。核实所选供应运输数据集是否明确包含实测空驶公里及调度分配。在供应包覆盖模式中，保留每趟空驶（包括零吨公里移动）均在该数据集中体现的证据。否则使用 empty_road_movement 记录实际车辆公里，并仅一次从 t*km 供应清单扣除有证据对应的空驶负荷。覆盖未知或重叠不能定量则阻断完成；实际零载荷行程不得因零 t*km 而消失。完整供应范围包含燃料、车辆制造维护末端及直接尾气；商品收货门背景内入店运输不得再计。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_transport`
- 来源: jrc-retail-2013

###### 空载轻型商用道路车辆移动服务 (`empty_road_movement`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 空载轻型商用道路车辆移动服务
- 流属性/单位: 车辆行驶距离 / vehicle*km
- 数量规则: 实测空驶不能证明已纳入 external_transport 供应数据时使用条件独立模式：从调度路线记录汇总实际空载车辆公里，包含全程零载荷行程，按事先声明的完整调度池在全部实际受益方中归属，再仅除以 D 一次。采用含燃料、车辆资本维护末端及直接尾气的完整空车移动供应清单；仅一次从载货运输清单扣除有证据对应的重叠。在已核实供应包覆盖模式中，凭空驶路线覆盖矩阵标明本行不适用，不得虚构零值。包范围未知、调度驱动为零或重叠未解决则仍不完整；保留实际行程及原始公里。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_transport`
- 来源: jrc-retail-2013

#### 输出

##### 产品流

###### 一罐密封玻璃罐天然蜂蜜的零售服务 (`accepted_service`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 一罐密封玻璃罐天然蜂蜜的零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: fixed_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_goods`
- 来源: unsd-cpc62119

###### 外部接收方留存但未接受零售服务的密封玻璃罐天然蜂蜜 (`external_refusal`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 外部接收方留存但未接受零售服务的密封玻璃罐天然蜂蜜
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 计数具名外部接收方实际留存但未接受服务的罐，仅除以 D 一次。这是 F，不是目标销售、不是退回库存，也不自动成为废物。记录实物状态及最终去向，按 goods_responsibility 保留一次上游责任，直至具名耦合接收方有证据承接。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_goods`
- 来源: ghg-product-2011

###### 退回供应商的未开封密封玻璃罐天然蜂蜜 (`supplier_return`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 退回供应商的未开封密封玻璃罐天然蜂蜜
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 按唯一罐和接收方记录实物退供数量，除以 D；不得当作销售或自动视为废物。按 goods_responsibility 记录返程运输、接收状态及最终再售、返工或处置链。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_goods`
- 来源: ghg-product-2011

###### 捐赠供食用的未开封密封玻璃罐天然蜂蜜 (`donated_jar`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 捐赠供食用的未开封密封玻璃罐天然蜂蜜
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 凭接收方确认及实际交付记录捐赠罐数，除以 D；不计入 D，除非明确耦合的接收方数据集承接其上游责任，否则在 failed_goods_background 中计一次。不得给予替代产品减免。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_goods`
- 来源: ghg-product-2011

##### 废物流

###### 蜂蜜污染的玻璃罐破损混合废物 (`broken_jar_waste`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 蜂蜜污染的玻璃罐破损混合废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 称量交给具名废物接收方的实际蜂蜜、玻璃和盖整体载体，扣除容器皮重；除以 D。不得再次添加其中玻璃或蜂蜜组分；实际分离成独立载体的物料须另设卡采集。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_waste`
- 来源: jrc-retail-2013

###### 弃置的完整密封玻璃罐天然蜂蜜 (`discarded_jar_waste`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 弃置的完整密封玻璃罐天然蜂蜜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 称量完整弃置罐及内容物和初级包装；关联唯一罐去向和实际接收方，除以 D；同一离场事件不得同时记为捐赠或退供输出。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_waste`
- 来源: jrc-retail-2013

###### 干燥瓦楞纸运输箱废物 (`cardboard_waste`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 干燥瓦楞纸运输箱废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 扣除容器皮重称量单独收集纸板，记录实际水分状态；共享箱按所装罐毛体积归属一次并除以 D。适用时其生产已包含在商品上游背景中。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_waste`
- 来源: jrc-retail-2013

###### 沾蜂蜜湿纤维素擦拭片废物 (`used_wipe_waste`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 沾蜂蜜湿纤维素擦拭片废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 称量含所吸附蜂蜜和清洗液的完整湿擦拭载体；除以 D。吸附液不得再计入排水，蜂蜜不得重复计入破损废物；每次泄漏记录分流。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_waste`
- 来源: jrc-retail-2013

###### 排往污水处理的含蜂蜜地面清洗废水 (`wash_effluent`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 排往污水处理的含蜂蜜地面清洗废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实测排放模式：V_discharge 乘以实测废水密度，归属一次后除以 D；使用实测排水，不得用进水减猜测蒸发量。仅可按已声明水量平衡 的互斥模式和修正证据重建；记录下水道接收方和处理边界。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_water`
- 来源: jrc-retail-2013

### 过程： R32建筑舒适空调 (`climate`)

#### 输入

##### 产品流

###### 交流电 (`climate_power`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 分表计量 R32 热泵完整营业和闲置期间用电，kWh 换算为 MJ，按 allocate_pool 对常温货架区归属后仅除以 D 一次。仅在总表回路图已核实零售读数包含本量时才从 retail_power 扣除；已互斥的零售空调分表读数不再扣减。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_climate`
- 来源: jrc-retail-2013

###### 二氟甲烷制冷剂 R32 (`r32_topup`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 二氟甲烷制冷剂R32，已供应 `7a62f5d4-1037-46ec-b1af-52418a986c4b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用实际转入设备的替换 R32 质量，不是钢瓶采购质量；初始工厂充注只属于完整热泵资本，回收再用充注保留实际负荷历史；用库存、回收台账核对维修事件。归属一次后除以 D；不得设默认泄漏率。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_climate`
- 来源: jrc-retail-2013

#### 输出

##### 废物流

###### 送再生或销毁的回收二氟甲烷制冷剂 R32 (`r32_recovery`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 送再生或销毁的回收二氟甲烷制冷剂 R32
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 在具名接收方扣除钢瓶皮重称量回收 R32；归属后仅除以 D 一次。连接实际再生或销毁路线；从 r32_air 和已回收制冷剂的整机末端载体中排除该回收质量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_climate`
- 来源: jrc-retail-2013

##### 基本流

###### 排入城市空气的二氟甲烷 (`r32_air`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

官方记录未提供中文baseName；中文保留相同标准化学标识。

- 选定流: HFC-32 `4d9a8790-3ddd-11dd-9ca6-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 通过闭合设备及回收质量平衡计算包括投运、维修和退役的实际 R32 空气释放；归属一次后除以 D。向接收方交付的回收量不是空气排放。指定城市空气区室；未闭合平衡为未知，不得置零。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_climate`
- 来源: jrc-retail-2013

### 过程： 完整资产资本及末端责任 (`assets`)

#### 输入

##### 产品流

###### 完整 R32 舒适热泵机组 (`heatpump_capital`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 完整 R32 舒适热泵机组
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 对于实际明确完整资产 a，采用 1 完整资产 * f_a,k / D_k Item(s)，其中当期受益暴露 x_a,k、总寿命暴露 L_a，f_a,k = x_a,k / L_a。按 asset_ledger 将有符号历史及退役修正回写原受益队列。计量完整件或完整件等效份额，不得使用无关修补材料质量；排除运行公用工程、另计维护及末端处理。热泵卡以有证据的设备存在为条件。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_assets`
- 来源: ghg-product-2011

###### 含固定围护结构的完整零售建筑壳体 (`building_capital`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 含固定围护结构的完整零售建筑壳体
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 对于实际明确完整资产 a，采用 1 完整资产 * f_a,k / D_k Item(s)，其中当期受益暴露 x_a,k、总寿命暴露 L_a，f_a,k = x_a,k / L_a。按 asset_ledger 将有符号历史及退役修正回写原受益队列。计量完整件或完整件等效份额，不得使用无关修补材料质量；排除运行公用工程、另计维护及末端处理。热泵卡以有证据的设备存在为条件。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_assets`
- 来源: ghg-product-2011

###### 完整无动力钢制展示货架 (`shelf_capital`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 完整无动力钢制展示货架
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 对于实际明确完整资产 a，采用 1 完整资产 * f_a,k / D_k Item(s)，其中当期受益暴露 x_a,k、总寿命暴露 L_a，f_a,k = x_a,k / L_a。按 asset_ledger 将有符号历史及退役修正回写原受益队列。计量完整件或完整件等效份额，不得使用无关修补材料质量；排除运行公用工程、另计维护及末端处理。热泵卡以有证据的设备存在为条件。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_assets`
- 来源: ghg-product-2011

###### 完整电子销售结算终端 (`pos_capital`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 完整电子销售结算终端
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 对于实际明确完整资产 a，采用 1 完整资产 * f_a,k / D_k Item(s)，其中当期受益暴露 x_a,k、总寿命暴露 L_a，f_a,k = x_a,k / L_a。按 asset_ledger 将有符号历史及退役修正回写原受益队列。计量完整件或完整件等效份额，不得使用无关修补材料质量；排除运行公用工程、另计维护及末端处理。热泵卡以有证据的设备存在为条件。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_assets`
- 来源: ghg-product-2011

#### 输出

##### 废物流

###### 完整已回收制冷剂 R32 热泵机组 (`heatpump_eol`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 完整已回收制冷剂 R32 热泵机组
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量实际交给具名接收方的完整末端载体 q_terminal，单位 kg。最终末端责任份额 h_a,k 仅应用一次：exchange = q_terminal * h_a,k / D_k；不得再乘制造份额 f_a,k。保留完整载体数量净质量对账；POS 交换为完整终端计数，kg 仅对账。核对末端总量并将修正实际量回写原队列；未发生处置为须披露的未来情景。热泵载体排除另行回收 R32。排除已由其他处承接的处理。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_assets`
- 来源: ghg-product-2011

###### 零售建筑拆除混合废物载体 (`building_eol`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 零售建筑拆除混合废物载体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量实际交给具名接收方的完整末端载体 q_terminal，单位 kg。最终末端责任份额 h_a,k 仅应用一次：exchange = q_terminal * h_a,k / D_k；不得再乘制造份额 f_a,k。保留完整载体数量净质量对账；POS 交换为完整终端计数，kg 仅对账。核对末端总量并将修正实际量回写原队列；未发生处置为须披露的未来情景。热泵载体排除另行回收 R32。排除已由其他处承接的处理。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_assets`
- 来源: ghg-product-2011

###### 完整废弃钢制展示货架 (`shelf_eol`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 完整废弃钢制展示货架
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量实际交给具名接收方的完整末端载体 q_terminal，单位 kg。最终末端责任份额 h_a,k 仅应用一次：exchange = q_terminal * h_a,k / D_k；不得再乘制造份额 f_a,k。保留完整载体数量净质量对账；POS 交换为完整终端计数，kg 仅对账。核对末端总量并将修正实际量回写原队列；未发生处置为须披露的未来情景。热泵载体排除另行回收 R32。排除已由其他处承接的处理。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_assets`
- 来源: ghg-product-2011

###### 完整废弃电子销售结算终端 (`pos_eol`)

本交换跨越所列过程边界；适用原始总量及归属分别保留。

- 选定流: 完整废弃电子销售结算终端
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 计量实际交给具名接收方的完整末端载体 q_terminal，单位 Item(s)。最终末端责任份额 h_a,k 仅应用一次：exchange = q_terminal * h_a,k / D_k；不得再乘制造份额 f_a,k。保留完整载体数量净质量对账；POS 交换为完整终端计数，kg 仅对账。核对末端总量并将修正实际量回写原队列；未发生处置为须披露的未来情景。热泵载体排除另行回收 R32。排除已由其他处承接的处理。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_assets`
- 来源: ghg-product-2011

## 7. 分配与共产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_pool | 优先直接事件归属和分表。仅对剩余共享池在所有实际受益方间分配：照明及舒适空调用电按实测占用面积小时，搬运结算按观察任务秒数，袋箱按包装占用体积，清洁按清洁面积及事件日志。保留闲置、闭店、失败和零驱动量。闲置剩余量在事先声明的同场址同配置年度池内按累计占用面积小时分配；全部驱动为零时保留未分配池并标为不完整。分配量总和须等于完整实测池，不得只按销售量分配或回退经济法。 | ghg-product-2011 |
| asset_ledger | 对每项持久资产 a 及每个期间受益队列 k，记录完整制造安装负荷 B_a、实测暴露 x_a,k、预期总寿命暴露 L_a 及已入账份额。当期暂定份额 f_a,k = x_a,k / L_a；资本数量为 1 完整资产 * f_a,k / D_k，其上游负荷为 B_a * f_a,k / D_k。L_a 不得小于实际累计暴露，已入账总份额不得大于 1。暴露或寿命修订后，对每个受影响历史队列计算修正 f_new = x_new / L_new，将有符号修正 (f_new - f_posted) 回写该原队列分子；D_k 同时变化时也修正其归一化。不得重新启算 B_a。退役时计算 R_a = 1 - sum(修正后全寿命份额)，按 w_a,k = x_a,k / sum(全部实际寿命暴露) 将最终剩余分给同一预先声明的全寿命受益方，包括闲置失败队列；把 R_a * w_a,k 回写各原资本分子。最终责任 h_a,k = 修正 f_a,k + R_a * w_a,k，总和必须为 1。总暴露为零或受益整池零产出仍须明确保留且不可归一化。各实际末端载体以实测整体质量或完整件数 * h_a,k / D_k 仅归属一次；不得再乘 f_a,k。全部末端分配之和核对至唯一实际末端载体；先前未来情景以有符号实际减已入账修正替换并回写原队列。维护替换为有日期实际事件，除非有证据在不重叠供应包内，否则须具体卡。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | accepted_service; failed_goods_background; external_refusal; supplier_return; donated_jar | event_ledger | 罐_id; SKU; 蜂种; 取蜜方式; 花源; 标称灌装量; 实测毛质量; 对应皮重; 密封状态; 水分状态; 接收门点; 供应商; 收货_id; 原队列; 实际事件日期; 期初库存; 期末库存; 接受; 外部留存拒收_F; 价格退款; 实物退回; 再售; 丢失; 最终接收方; 最终去向; 上游责任方; 入店及返程运输 | 扫描唯一罐，核对 POS、实盘库存及接收方确认；用检验砝码校验秤并保留皮重样本对应关系。记录密封、泄漏和发酵检查；结晶是状态观察，不自动等于变质。追踪退供直至具名最终责任闭合。 按唯一记录应用 denominator 及 goods_responsibility；保留原始总量，适用行每参考流仅归一化一次 | Item(s); kg | 每次收货、移动及去向事件；期界实盘 | 事先声明的完整同 SKU 年度池，包括闭店、闲置、失败、零销量及迟到修正 | 收货门至门店顾客交接及持续失败去向链 | 每参考流 | 签收与 POS 导出、秤校验、库存核对、背景门点范围矩阵及接收确认 |
| cp_retail_power | retail | retail_power | meter_record | 表_id; 期初_kWh; 期末_kWh; 时间戳; 回路图; 空调分表; 受益方; 面积小时; 任务秒数; 闲置剩余; 供应范围; 电表模式; 是否包含空调; 实际重叠 | 读取校准总表回路表分表并核对电费单。核对回路图并声明一种模式：零售总表含空调时，仅扣匹配空调量一次；零售空调分表互斥时，不作扣减。包内能源仅从证明确含该量的读数或包中扣重，不得对已互斥量再次扣除。调查全部负荷、电压、地域及供应交付边界。 按 physical_conversion 换算，allocate_pool 归属，每参考流仅除以 D 一次 | kWh; MJ | 至少每个结算周期及配置改变时 | 包括闲置闭店的完整年度池 | 门店收货、展示及结算回路 | 每参考流 | 电表校验、账单、回路图及分配核对 |
| cp_consumables | retail | cleaner; cellulose_wipe; kraft_bag; receipt_paper | stock_and_event_record | 物料_id; 配方; 浓度; 单件质量; 期初库存; 入库; 期末库存; 未用退回; 泄漏_id; 罐_id; 发放数; 打印长度; 包装体积; 清洁面积; 受益方 | 用校准秤分别称量各实际物料配方；库存平衡和事件领用日志确定实际消耗及缺席。清洁剂为一项真实水溶产品，不得虚构其他清洁剂的混合物。 原始消耗质量先直接归属，剩余按 allocate_pool；组成份额不得重复；每参考流仅除以 D 一次 | kg; Item(s) | 每次领用泄漏；每期库存 | 包括失败处理和重做的完整年度池 | 蜂蜜货架及实际共享受益方 | 每参考流 | 供应商组成、库存发票、校验、领用记录及缺席调查 |
| cp_waste | retail | broken_jar_waste; discarded_jar_waste; cardboard_waste; used_wipe_waste | handover_record | 载体_id; 泄漏_id; 罐_id; 接收方; 去向; 日期; 毛质量; 容器皮重; 水分; 分离组分; 吸附液; 运输范围; 处理范围; 受益方 | 各实际分流载体交接时用校准秤称量；核对签署地磅及接收凭证和罐去向；记录实际完整混合物和污染物，避免组分重复行。 净载体质量仅汇总一次，共享纸板清洁载体按 allocate_pool 分配，每参考流仅除以 D 一次 | kg | 每次泄漏、收集及交接 | 完整年度池及迟到退货修正 | 门店废物出口至具名运输处理接收系统 | 每参考流 | 校验、皮重检查、转移单、照片、去向台账和处理范围矩阵 |
| cp_water | retail | clean_water; wash_effluent | meter_and_balance_record | 进水表; 排水表; 体积; 时间戳; 温度; 实测密度; 模式; 溶液质量; 液相蜂蜜质量; 擦拭截留质量; 废物截留; 蒸发; 库存变化; 其他外排; 回用环路; 清洁事件; 受益方; 下水道接收方 | 读取校准的独立进排水表；在记录温度下测实际废水密度。重建时测量全部修正并披露不确定性；不得混用模式。内部回用水与新鲜输入及实际下水道排放分别记录。 互斥应用 water_balance，allocate_pool 归属一次，每参考流除以 D 一次 | m3; kg | 每次清洁事件或有界计量周期 | 包括泄漏失败及闭店清洁的完整年度池 | 门店入口及实际下水道出口 | 每参考流 | 水表校验、密度方法、平衡不确定性、排水记录及模式声明 |
| cp_climate | climate | climate_power; r32_topup; r32_air; r32_recovery | equipment_meter_and_mass_balance | 设备_id; R32身份; 期初充注; 期末充注; 加注; 回收; 钢瓶皮重; 维修日期; 投运; 退役; 电表_kWh; 区域面积小时; 闲置剩余; 受益方 | 检查铭牌和维修日志；校验电表及制冷剂秤。按实际回收接收方闭合充注、添加和回收平衡；解决负值或未知剩余。缺席须设备调查及发票，不得以零占位。 空气释放用闭合质量平衡，电量换算；allocate_pool 包含全部区域，每参考流仅除以 D 一次 | kWh; MJ; kg | 每次维修、充注、退役及电表周期 | 包括闲置的完整年度设备运行 | 为实际门店区域服务的有记录 R32 舒适热泵 | 每参考流 | 铭牌、校验、维修回收证明、区域调查及完整池核对 |
| cp_assets | assets | heatpump_capital; building_capital; shelf_capital; pos_capital; heatpump_eol; building_eol; shelf_eol; pos_eol | persistent_asset_ledger | 资产_id; 配置; 制造安装边界; B; 购置日期; 受益方; 暴露; L; 已分配份额; 剩余; 修订; 维护事件; 末端数量; 末端净质量; 接收方; 处理范围; x_a,k; L_a; f_posted; f_new; 有符号修正; R_a; w_a,k; h_a,k; 末端原情景 | 分别盘点实际完整建筑壳体、货架、POS 及 R32 热泵；热泵资本包括工厂充注，末端整机质量不含另行回收气体。保留供应商完整资产清单和包排除范围；建筑货架调查面积小时，热泵调查受调节区域面积小时，POS 调查结算使用时间，含归属闲置暴露。以有日期的设计寿命证据、维修历史及实测计划暴露确定 L 并披露不确定性，前瞻修订且修正历史并保留最终剩余；不得默认寿命。称量完整末端载体或采用可追溯整件记录。记录维护替换日期，除非有证据在不重叠包内，否则补实际原子卡。 完整资产资本按 asset_ledger f=x/L，保留原队列有符号历史修正及退役 R*w 剩余入账；末端整体载体以 h 仅归属一次不得再乘 f，各归属量每参考流仅除以原 D 一次 | Item(s); kg; m2*h; s | 每次购置、期间分配、修订、维护及末端事件 | 全部历史未来寿命期间，研究换期不得重置 | 同一明确资产的全部受益方，含蜂蜜之外及搬迁后的场址 | 每参考流 | 资产登记、原供应范围、累计分配凭证、修订日志、末端票据及质量数量核对 |
| cp_transport | retail | external_transport; empty_road_movement | consignment_route_record | 托运_id; 罐_id集; 原队列; 实际日期; 发方; 收方; 毛吨; 载货公里; 空驶公里; 全路线载荷; 分配; 供应包边界; 上游责任方; 空驶行程_id; 空载车辆公里; 供应空驶覆盖; 调度驱动; 对应重叠; 运输模式 | 采用实际承运单、载荷称重、GPS里程表及调度路线核对每趟载货空驶，包括零吨及零 t*km 行程。核实所选供应数据集中燃料、尾气、车辆资本维护末端及实测空驶路线覆盖。声明互斥的供应包覆盖或独立车辆公里模式。覆盖时保留实际空驶调度至供应包的覆盖证据；否则计算明确 empty_road_movement 行，并仅一次从载货供应清单扣除同一有证据空驶负荷。覆盖未知、扣减不能定量或因果调度驱动为零则阻断完整性。保留全部实际行程，不得以零 t*km 抹去，且不得重复入店运输。 汇总毛吨乘距离；完整路线分配一次，每参考流仅除以 D 一次 | t*km; vehicle*km | 每次实际托运及路线 | 完整年度池及迟到去向修订 | 门店至实际供应商或捐赠接收方的明确道路路线 | 每参考流 | 承运单、秤检查、路线日志、接收确认及供应范围矩阵 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| denominator | accepted_service | D = 经实物逆转后同 SKU 最终接受的唯一罐数，每罐只保留一次接受；仅财务价格退款不改变 D，外部留存拒收 F 不计入 D。记录实际事件日期及原队列。迟到退货修正原 D、全部应归属零售、空调及资产分子、上游耦合和去向记录；不得仅将其负荷转入新队列。失败和未售库存纳入事先固定的同配置年度池。整池零产出须保留数量且不得归一化。 | jar_id; cohort_id; acceptance; physical_return; actual_event_date | D | ghg-product-2011 |
| normalize_service | all inventory rows | 各交换按唯一记录汇总原始数量，完成物理换算，按 allocate_pool 或 asset_ledger 归属一次，再仅除以 D 一次。服务输出为 1 Item(s)。原始总量、归属份额和最终数量分别可审计。D 必须大于零；未知输入不得为零。 | raw_quantity; attribution_fraction; D | exchange_per_reference_flow | ghg-product-2011 |
| water_balance | clean_water; wash_effluent | 排水只选一个互斥模式。实测：effluent_kg = V_discharge * rho_effluent，不作蒸发修正。仅无排水表时重建：废水质量 = 外购水质量 + 实际清洁剂溶液质量 + 进入液相的蜂蜜质量 - 擦拭片及废物截留液质量 - 蒸发质量 - 液体库存质量净增加 - 其他实测液体外排质量。体积按所记温度下各自实测密度换算质量，干擦拭片质量不属于此液体平衡；不得加入内部循环。测量全部修正项及不确定性；未解决项阻断使用。进水仍为 inlet_volume * rho_water，不得减回用量。 | inlet_volume; V_discharge; rho_water; rho_effluent; correction_fields; discharge_mode | clean_water_kg; effluent_kg | jrc-retail-2013 |
| physical_conversion | retail_power; climate_power; cleaner; failed_goods_background; broken_jar_waste; discarded_jar_waste | Electricity_MJ = metered_kWh * 3.6。蜂蜜净质量为实测整罐毛质量减对应空罐、盖、标签皮重，采用实际水分状态；不得用水密度换算蜂蜜。包装及废物整体载体质量与蜂蜜净质量分开。清洁剂整份溶液质量不得再乘浓度。数量质量换算使用同 SKU 实测质量及记录的不确定性，不得默认灌装质量。 | metered_kWh; gross_mass; matched_tare; solution_mass; concentration | converted_quantity | fao-honey-1996 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_asset_scopes | heatpump_capital; building_capital; shelf_capital; pos_capital; heatpump_eol; building_eol; shelf_eol; pos_eol | 明确互斥完整资产：建筑壳体仅含基础、结构及固定围护，排除热泵、可移动货架、POS、运行公用工程及另计维修。货架仅为完整无动力钢货架，排除建筑、POS、热泵及灯具。POS 仅为完整终端，排除场所、货架、热泵及另识别外设。热泵仅为含工厂 R32 充注的完整已安装机组，排除建筑壳体、货架、POS、替换制冷剂、运行电力及末端气体回收处理。制造输入排除废物输出所表示的全部末端处理；维护替换仍为实际日期事件，存在时须独立原子卡。调查其他固定设备并在完整性前加入其明确互斥范围；组成未知或供应包重叠阻断使用。 | 资产组件范围矩阵；供应商清单；安装记录；包排除；维护调查 |
| quality_configuration | all inventory rows | 声明一个 SKU：西方蜜蜂 Apis mellifera 天然分离蜜、无添加成分，记录花源产地、净灌装量皮重、罐盖标签规格、液态或结晶状态、密封、常温储存历史及接受证据。不同灌装量、包装型或转化不得混用一个 D。不引入数值食品安全限值或声称来源强制的温度默认。 | 供应规格；罐抽样；环境日志；检查接受记录 |
| quality_completeness | all inventory rows | 采集完整场址和日历覆盖并披露缺失期间及不确定性；核对各条件过程存在缺席。实际未列交换须补具名原子卡、对应过程协议及双语投影后才能完整。绑定全部未解决身份和实际供应处理数据；方法将数量留给现场计量，不得置零或虚构范围。 | 覆盖日历；设备物料调查；逐行绑定档案；不确定性登记 |

## 9. 校验规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_identity | 每次绑定均须有官方原始流响应及完整性凭证，核验 UUID、公开状态、双语名、产品废物基本流类型、状态介质、属性单位链及参考角色。通用数量质量属性不能确定蜂蜜零售服务或完整资产身份。未绑定卡明确保留未解决状态，确认兼容身份及供应或处理边界前阻断定量数据集完整性。 | ghg-product-2011 |
| validate_goods | 逐唯一罐核对：期初库存 + 收货 + 顾客实物退回 = 实物顾客交接毛事件 + 外部留存拒收 F + 退供 + 捐赠 + 弃置丢失离场 + 期末库存，内转抵消；接受交接毛事件含后续退回的离场，不含 F，与修正唯一 D 有别。仅对 D 去重再售历史。区分支付、价格退款和实物移动。蜂蜜净质量与整包质量分别核对，记录残留转入擦拭片及废水且不得重复。仅结晶不得自动认定损耗：须检查实际接受及去向。 | fao-honey-1996 |
| validate_scope | 要求 D 大于零，迟到事件队列分子已修正，完整保留年度零产出，完全核对共享池，保持持久资产份额及末端剩余分配，供应包范围准确去重，实际水模式一致。任何缺失数量、条件活动未知、去向或上游责任未闭合、身份无依据均为明确不完整，不得置零或视为合规。实际额外交换补齐前不得声明完整。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 常温密封罐蜂蜜增量零售服务单元过程 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 身份数量完成后用于相同SKU、渠道、门点及责任配置 |
| excluded_use | 完整蜂蜜产品足迹、整个CPC覆盖、食品安全认证、供应商合规、不匹配罐型或渠道 |
| required_metadata | 全部参考限定信息；D；场址日历；供应门点；迟到事件版本；唯一商品及资产台账链接 |
| required_quality_disclosure | 缺失记录、身份供应缺口、不确定性、零产出池、未来末端情景及未解决背景责任 |
| update_trigger | 实物退回最终去向、SKU包装门点设备改变、计量修正、资产寿命或供应范围修订 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc62119 | official_guidance | UNSD CPC 3.0 subclass 62119; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62119 | 天然蜂蜜为明确列举商品子集；本 PCR 选择较窄零售服务路线，不覆盖整个叶类别。 |
| fao-honey-1996 | handbook | FAO Agricultural Services Bulletin 124, Value-added products from beekeeping (1996), chapter 2 sections 2.1–2.3; https://www.fao.org/4/W0076e/w0076e04.htm | 仅用于蜂蜜身份、蜂种范围、物态、水分密度关系及结晶背景；未采用表列因子或安全限值。 |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR 25998 EN (2013), scope and section 1.2 pp.4–6; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 用于零售直接间接活动筛查；类别卡及分配驱动为须以前景记录核验的 PCR 设计选择，不是该报告强制要求或绩效基准。 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9 p.63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 用于一般细分和物理分配原则；增量服务边界、池、寿命台账及损耗耦合为明确 PCR 选择，不声称符合完整标准。 |
