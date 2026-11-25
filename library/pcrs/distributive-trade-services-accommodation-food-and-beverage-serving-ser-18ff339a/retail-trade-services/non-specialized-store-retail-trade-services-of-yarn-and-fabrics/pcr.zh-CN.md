---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-yarn-and-fabrics
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 白色100%棉机织布K001-1387手工量剪柜台增量零售服务

## 1. 范围与适用性

本已编写候选定义从布匹裁出实际白色棉机织成品布的部分零售柜台服务模块。服务产出为最终可用面积，不能替代布料生产数据集。下列强制范围及补全义务均可机器寻址，不提供数值默认值或认证声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-yarn-and-fabrics |
| classification_refs | CPC 3.0 62131; narrower |
| covered_products | K001-1387 WHITE成品100%棉机织布，柜台全幅手工裁剪。 |
| excluded_products | 其他纱线/纤维/面料/SKU/颜色、涂层/针织/混纺产品、预裁及动力加工。 |
| representative_product | 白色100%棉机织布K001-1387手工量剪柜台增量零售服务 |
| production_route | 供应商成品布匹→门店收货/存放→检验/手工量长/剪刀裁切→包装/柜台交付→最终验收/实际退回及残余物去向。布制造单独耦合。 |
| market_state | 未洗、松弛、白色机织成品布；记录实际批次水分/整理、最终质量及几何。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为指定面料提供手工检验/量长/裁剪柜台零售服务。 |
| How much | 实测最终未洗松弛状态下最终验收可用面积1m2，排除布边及绘图拒收缺陷。 |
| How well | 符合实际顾客合同规格、纤维/整理/批次/几何及合格验收；不假定法律或认证限值。 |
| How long or cycle | 整个固定收货/服务批群至合同索赔/退货最终结案，含迟发签名更正。 |
| reference_flow_link | qualified_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | K001-1387白色棉机织布最终验收可用面积的手工量剪柜台零售服务 |
| 参考流属性 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | 面积 `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | SKU、纤维声明、机织结构、实际整理及供应商批次; 实际全幅及可用宽长图和缺陷; 未洗松弛计量温湿度及校准; 收货干态成品质量及水分/整理方法; 手工全幅剪裁路线及包装发生/未发生; 起止门口、退货政策及终端验收证据; 池配置、覆盖期及迟发修订ID; 实物总越界及源坐标责任; 部分柜台边界及固定补全范围矩阵; 室外棉来源/捕集/路径闭合及不确定性; 接收方、载体及供应方范围去重检查 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_area | qualified_service | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 采用calc_area实际可用几何。1m2不是1件/1码/标称幅宽。干态背景kg独立，采用calc_source。 |
| mass_rows | failed_background; band_input; bag_input; receipt_input; cotton_air; unqualified_retained; failed_transfer; fabric_offcuts; defective_fabric; lint_waste; paperboard_waste; film_waste; band_waste; bag_waste; receipt_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用实际完整载体质量或明确声明的原始干态布当量，水分状态不得替换。不设单件默认质量。 |
| electricity_energy | lamp_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实际计量kWh按3.6仅换算MJ一次，再除Q一次。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别成品布匹验收入门店收货台账，记录原始全幅坐标及状态。 |
| starting_condition_role | foreground_receiving_gate |
| product_classification_scope | 仅CPC62131棉机织布零售服务特定子集；narrower。 |
| recursive_input_rule | 内部残布/退回保留原ID及背景，不递归新增另一零售服务或布制造投入。 |
| upstream_dataset_requirement | 经核实实际收货状态布生产/整理/进货背景及原始当量分区；成功背景补全与failed_background分开。 |
| disclosure | 部分增量柜台模块；固定排除模块及完整零售补全方法为强制要求，所列候选身份仍未解决。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope | all | 仅适用于有记录的单一SKU K001-1387 WHITE成品100%棉机织布匹、单一供应商整理/批次规格，在有人员服务的非专门商店按布匹全幅手工量长、剪刀裁切出售。记录供应商声明、组织鉴别、整理/浆料规格、布匹ID及收货原始长度/全幅宽度。不得假定特定漂白配方、组织类型、整理增重、认证状态或标称面密度。排除纱线、针织物、混纺、复合/涂层/特种织物、其他颜色/SKU、预裁包装、电动裁切、缝纫、洗涤、染色和顾客配送；发生变化须先编写独立卡和协议，才能声明完整。 | kaufman-white-k001-1387; un-cpc-62131 |
| gates | all | 以商家将已识别成品布匹验收入门店收货台账为起点；包括目标布存放/搬运、检验、量长、手工裁剪、包装、柜台交付、实际撤销及残余物去向。以约定退货/索赔期结束后的最终合格消费者验收及零售商残余物终端责任为终点；仍留存或责任不明的货物保持未结责任，不是失败废物或最终服务。本部分模块包括柜台灯直接用电、实际柜台包装、可直接追溯的失败布料上游负担、零售废物/载体转移及可归属的室外棉纤维颗粒通量。 | ghg-product-2011 |
| partial_completion | all | 本项仅为柜台部分模块，绝非全部零售足迹。汇总完整零售服务前须提供固定补全模块：共用建筑/货架/柜台桌/剪刀/尺/切割垫/灯具/POS的购置安装、维护和终端处理；场所暖通空调/照明/POS用电及制冷剂排放；日常清洁及共用卫生间水/化学品/废水；员工/办公/行政设备及其运行/资产；收货和退回运输及实际空载移动；手工搬运支持资产；成功商品生产/进货运输。使用cp_completion和calc_completion，保持相同池、最终Q及事件ID。缺失模块为未验证，不是零。顾客出行/使用/寿命终结、员工通勤和人体代谢在本零售服务边界外。 | ghg-product-2011 |
| commodity_ownership | failed_background; qualified_service | 零售参考为服务，不是新生产布料。将每一原始布匹坐标追踪到互斥的最终验收、服务失败、继续转移及未结部分。按实测收货原始全幅干态成品布质量（含整理物和随售布边），将原始门口布料及其进货背景仅分配一次；不得默认用最终环境状态布重。成功部分B_s/Q由下游补全仅附加一次；本模块仅计入failed_background的B_f_service/Q。退供/未结转移须保留具名继续责任人及原负担，不得抹去或重复。继续转售继承原背景，不再生成第二笔布生产投入。 | ghg-product-2011 |
| materials_conditions | all | 核实实际包装：可选无胶未涂布牛皮纸束带、可选纯LDPE购物袋、热敏纸小票；仅有证据时将入店布板定为未涂布纸板、外包膜定为LDPE。完整复用入店布板仍为库存，不是新增包装或废物。本范围不包括洗涤、液体施用、溶剂清洁、电动裁切、压缩空气或吸尘。整个池含闭店期间的订单、门店检查及事件日志必须证明实际发生或未发生。任何实际其他材料、清洁污染、燃料、设备或排放，须在完整使用前增补具体双语卡和采集规则。 | ghg-product-2011 |
| carriers | fabric_offcuts; defective_fabric; lint_waste; paperboard_waste; film_waste; band_waste; bag_waste; receipt_waste | 对每一具名接收方及处理方式，去皮称量实际送出的整个载体，按送出湿态/收到状态计量。洁净成品碎布、整块缺陷布、干扫收集的散棉絮分别记录。不得将载体中的棉纤维、整理物或水分再计为第二笔废物。残布售出且最终验收前仍为货物；回收碎布保留去向和原始责任，不自动给予替代生产抵扣。共用运输/处理仅按所选关联供应方边界计一次，不假定处理方式或默认去向比例。 | ghg-product-2011 |
| air_terminal | cotton_air; lint_waste | 剪布向室内空气释放为内部过程；只有可归属目标裁剪、越过商店最终室外边界的棉纤维颗粒才是基本排放。cp_air及calc_air要求覆盖全部进出风口/泄漏工况、实际棉纤维比例、空白/来源归属、室内/表面/过滤介质库存及整个棉絮/废物输出。不得假定产生量等于室外释放，也不得将未知捕集当零。表面棉絮进入lint_waste为载体转移，不能同时记为空气排放；暂时悬浮库存不是最终排放。室外路径或分析身份不明时，不得声明排放完整。 | ghg-product-2011 |
| mapping_evidence | all | CPC62131包括多种纱线/纤维/面料组，本SKU服务仅为narrower，绝非整个叶节点的exact。厂商网页仅支持产品身份：标称幅宽/克重不是实测可用面积、参考质量、损耗额度或默认因子。保留的2024年证书已于2025年10月31日到期，仅将其机织棉布描述作为历史结构背景，绝不作为当前认证、法律验收或环境表现证据。供应商/现场证据须核实当前实际批次。 | kaufman-white-k001-1387; kaufman-woven-description-2024; un-cpc-62131 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receiving | 收货门口失败商品背景归属 | required | 全部实际目标池事件；可选交换须未发生证据。 | foreground | 每1m2最终Q服务；保留原始单位。 |
| counter | 检验、手工量剪及最终柜台验收 | required | 全部实际目标池事件；可选交换须未发生证据。 | foreground | 每1m2最终Q服务；保留原始单位。 |
| residual | 残余物保管及继续转移/废物送出 | required | 全部实际目标池事件；可选交换须未发生证据。 | foreground | 每1m2最终Q服务；保留原始单位。 |
| completion | 下游完整零售固定补全接口 | conditional | 完整零售使用前强制补全接口；外部模块不在本部分清单内。 | completion_interface | 每1m2最终Q服务；保留原始单位。 |

### 过程：收货门口失败商品背景归属 (`receiving`)

#### 输入

##### 产品流

###### 门店收货门口K001-1387成品白色100%棉机织布，服务失败部分 (`failed_background`)

本零售池承担的互斥失败部分之原始收货背景，含有证据的生产/整理/入货包装/路段，排除成功/继续/未结部分。不是全部收货布，也不是另一零售服务。

- 选定流: 门店收货门口K001-1387成品白色100%棉机织布，服务失败部分
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每1m2服务计B_f_service/Q kg收货干态成品布当量，见原坐标责任计算规则；关联供应方必须明确实际水分/质量/面积基准换算，不默认1kg/kg。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_background`
- 来源: `ghg-product-2011`; `kaufman-white-k001-1387`

### 过程：检验、手工量剪及最终柜台验收 (`counter`)

#### 输入

##### 产品流

###### 交流电 (`lamp_electricity`)

在使用点；电压等级与供应方未特指；前景活动数据所报用电，供电技术未特指。仅专用检验/裁剪灯用电；仍须取得供应方电压/电网组合和实际场址。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 按实际kWh及灯能耗计算规则计E_lamp/Q MJ每1m2服务，含分配待机。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_power`
- 来源: `ghg-product-2011`

###### 无胶未涂布牛皮纸布料束带 (`band_input`)

实际柜台消耗的所述材料和规格。可选未使用须全池未发生证据，不能遗漏未知数量。明确上游制造及下游载体去向范围。

- 选定流: 无胶未涂布牛皮纸布料束带
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按实际领用/库存记录及耗材计算规则计可归属M_x/Q kg每1m2服务；随售包装不是零售废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_pack`
- 来源: `ghg-product-2011`

###### 纯LDPE购物袋 (`bag_input`)

实际柜台消耗的所述材料和规格。可选未使用须全池未发生证据，不能遗漏未知数量。明确上游制造及下游载体去向范围。

- 选定流: 纯LDPE购物袋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按实际领用/库存记录及耗材计算规则计可归属M_x/Q kg每1m2服务；随售包装不是零售废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_pack`
- 来源: `ghg-product-2011`

###### 成品热敏小票纸 (`receipt_input`)

实际柜台消耗的所述材料和规格。可选未使用须全池未发生证据，不能遗漏未知数量。明确上游制造及下游载体去向范围。

- 选定流: 成品热敏小票纸
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按实际领用/库存记录及耗材计算规则计可归属M_x/Q kg每1m2服务；随售包装不是零售废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_pack`
- 来源: `ghg-product-2011`

#### 输出

##### 产品流

###### K001-1387白色棉机织布最终验收可用面积的手工量剪柜台零售服务 (`qualified_service`)

满足合同质量并最终验收的参考零售服务，含可追溯实物交付布块历史。商品源背景单独耦合；仅从可用面积排除随售布边/缺陷。

- 选定流: K001-1387白色棉机织布最终验收可用面积的手工量剪柜台零售服务
- 流属性/单位: 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则: 1 m2
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_service`
- 来源: `kaufman-white-k001-1387`; `ghg-product-2011`

##### 基本流

###### 手工剪布向室外空气排放的棉纤维颗粒 (`cotton_air`)

目标特定的最终环境空气转移，不是店内产生的棉。接收介质为室外空气；采用基本流UUID前须绑定空气动力学粒径分布、棉特异组成及接收环境。

该所选身份不声明粒径分级或化学组成。保留本卡实测完整粒径覆盖及棉纤维/煤来源归属；这不是PM2.5或PM10数量。须另核精确UUID与所选影响评价方法的表征覆盖。

- 选定流: 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 仅最终室外通量计算规则室外通量、目标归属及捕集/库存对账后，计E/Q kg每1m2服务。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_air`
- 来源: `ghg-product-2011`

### 过程：残余物保管及继续转移/废物送出 (`residual`)

#### 输出

##### 产品流

###### 外部接收方留存的未验收K001-1387白色棉机织布 (`unqualified_retained`)

索赔结案后外部实际留存但未经合格验收的实物布，不是零售废物载体。记录实际接收方/状态及源坐标。在具名继续责任人证据取得前，将原背景暂记原服务失败台账并阻止最终完整性；仅经签字有据重新归属方可释放。

- 选定流: 外部接收方留存的未验收K001-1387白色棉机织布
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际交付扣实物退回的外部留存收到态布净kg/Q，不是退款金额；最终验收面积为零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

###### 向具名继续接收方转移的可售K001-1387白色棉机织布 (`failed_transfer`)

实际退供/其他继续转移，具可售接收状态及原背景责任。不是合格消费者服务、废物、自动服务失败负担或新增布生产。

- 选定流: 向具名继续接收方转移的可售K001-1387白色棉机织布
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际送出收到态净kg归属一次后/Q，与B_f_continuing干态当量和最终Q分开；见cp_residual。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

##### 废物流

###### 送处理的洁净K001-1387成品棉布碎料 (`fabric_offcuts`)

一笔在送往有证据处理接收方时实际分开的完整载体。保留实测状态/组成、可追溯源事件及供应方运输/处理边界。未发生须有证据，不假定回收或替代抵扣。

- 选定流: 送处理的洁净K001-1387成品棉布碎料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按cp_residual实测实际可归属净完整载体W_x/Q kg每1m2服务，内含棉/水/整理物不是另一笔交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

###### 送处理的缺陷K001-1387成品棉布 (`defective_fabric`)

一笔在送往有证据处理接收方时实际分开的完整载体。保留实测状态/组成、可追溯源事件及供应方运输/处理边界。未发生须有证据，不假定回收或替代抵扣。

- 选定流: 送处理的缺陷K001-1387成品棉布
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按cp_residual实测实际可归属净完整载体W_x/Q kg每1m2服务，内含棉/水/整理物不是另一笔交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

###### 手工剪布干收集散棉絮 (`lint_waste`)

一笔在送往有证据处理接收方时实际分开的完整载体。保留实测状态/组成、可追溯源事件及供应方运输/处理边界。未发生须有证据，不假定回收或替代抵扣。

- 选定流: 手工剪布干收集散棉絮
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按cp_residual实测实际可归属净完整载体W_x/Q kg每1m2服务，内含棉/水/整理物不是另一笔交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

###### 送处理的未涂布纸板布板 (`paperboard_waste`)

一笔在送往有证据处理接收方时实际分开的完整载体。保留实测状态/组成、可追溯源事件及供应方运输/处理边界。未发生须有证据，不假定回收或替代抵扣。

- 选定流: 送处理的未涂布纸板布板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按cp_residual实测实际可归属净完整载体W_x/Q kg每1m2服务，内含棉/水/整理物不是另一笔交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

###### 送处理的入货布匹LDPE包膜 (`film_waste`)

一笔在送往有证据处理接收方时实际分开的完整载体。保留实测状态/组成、可追溯源事件及供应方运输/处理边界。未发生须有证据，不假定回收或替代抵扣。

- 选定流: 送处理的入货布匹LDPE包膜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按cp_residual实测实际可归属净完整载体W_x/Q kg每1m2服务，内含棉/水/整理物不是另一笔交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

###### 送处理的无胶未涂布牛皮纸束带 (`band_waste`)

一笔在送往有证据处理接收方时实际分开的完整载体。保留实测状态/组成、可追溯源事件及供应方运输/处理边界。未发生须有证据，不假定回收或替代抵扣。

- 选定流: 送处理的无胶未涂布牛皮纸束带
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按cp_residual实测实际可归属净完整载体W_x/Q kg每1m2服务，内含棉/水/整理物不是另一笔交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

###### 送处理的纯LDPE购物袋 (`bag_waste`)

一笔在送往有证据处理接收方时实际分开的完整载体。保留实测状态/组成、可追溯源事件及供应方运输/处理边界。未发生须有证据，不假定回收或替代抵扣。

- 选定流: 送处理的纯LDPE购物袋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按cp_residual实测实际可归属净完整载体W_x/Q kg每1m2服务，内含棉/水/整理物不是另一笔交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

###### 送处理的成品热敏小票纸 (`receipt_waste`)

一笔在送往有证据处理接收方时实际分开的完整载体。保留实测状态/组成、可追溯源事件及供应方运输/处理边界。未发生须有证据，不假定回收或替代抵扣。

- 选定流: 送处理的成品热敏小票纸
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按cp_residual实测实际可归属净完整载体W_x/Q kg每1m2服务，内含棉/水/整理物不是另一笔交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 m2 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`

### 过程：下游完整零售固定补全接口 (`completion`)

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| pool | all | 计量前预先固定门店配置、同质SKU、收货批群及核算覆盖期。失败/闲置/闭店/零销售期间留在同一配置池，其实际直接负担由该池承担。整池Q为零时保留未解、未归一化状态，直到按预先约定连接同配置产出；不得删除或任意分配产出。迟发实物撤销必须用签名修订ID更正原Q、所有受影响直接分子、源背景分区和分配。仅退款而无实物退回或合格验收撤销，不改变Q。 | ghg-product-2011 |
| shared_direct | lamp_electricity; band_input; bag_input; receipt_input | 优先采用直接分表及已识别材料领用记录。共用柜台灯用电按所有受益方实际占用裁剪/检验台分钟分摊，含中止任务；待机/预留时段按记录的预留台面面积小时分给所有受益方，不仅成功订单。无实测驱动时保留未分配余量并阻止完整性。包装按实际订单/领用ID归属，保留作废/退回废物。原始可归属总量仅除Q一次；已归属数量不再乘组成或驱动因子。 | ghg-product-2011 |
| no_credits | all | 不自动给予副产品、回收、碎布出售或退布抵扣。源坐标原背景随最终负责服务/继续接收方转移；内部重剪/转售不是新增制造投入。另行审核替代模型前必须证明闭合、互斥的责任，该模型置于本模块外。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | counter | qualified_service | transaction_ledger | pool_id; SKU; lot_id; bolt_id; piece_id; parent_coordinates; order_id; event_id; event_date; gross_handover; physical_return; acceptance_state; retention_state; terminal_acceptance_id; return_deadline; l_jk; w_usable_jk; A_defect_j; polygon_area; temperature; RH; signed_revision_id | 在收货/裁剪/退回/最终验收记录校准松弛几何、缺陷多边形及父坐标照片图；零售商取得顾客最终验收证据及合同索赔结案，不能仅靠POS付款。追踪重剪残布及重复实物越界，原面积不得重复。 按原ID执行calc_area、calc_source及calc_physical；仅一最终Q。 | m; m2; event | 每次实物事件及索赔修订。 | 整个预先固定池至退货最终结案，含零销售/闭店及迟发事件。 | 指定门店柜台及原收货批群。 | 每 1 m2 参考流 | 发票、签字收货/验收/退回记录、照片图、校准和修订链。 |
| cp_background | receiving | failed_background | source_coordinate_ledger | bolt_id; cell_id; a_full_ic; a_sample_ic; m_conditioned_sample_ic; m_dry_ic; r_ic; finish_spec; source_background_id; provider_conversion; inbound_leg_id; u_ics; u_icf_service; u_icf_continuing; u_icopen; final_owner; recipient_state; destructive_sample_id; uncertainty | 收货人员绘制全幅源单元；按批次、宽长位置、整理/水分分层代表性抽样，采用经验证干质量方法并复称。将每个最终后代及退供转移追踪至实际收货门口背景、运输及具名责任人。不得编造供应商制造组成；取得已核实生产路线及归一化证据，否则背景仍不完整。 calc_source互斥责任；failed_background=B_f_service/Q，成功B_s/Q仅在补全模块。 | kg dry finished fabric; m2; kg | 每匹收货/批次抽样及每次后代/去向修订。 | 全部池内收货及后续去向，含继续/未结库存。 | 实际收货门口及关联供应商生产/进货责任。 | 每 1 m2 参考流 | 供应商原始产品记录、批测、干态验证、保管链及背景范围审核。 |
| cp_power | counter | lamp_electricity | meter_ledger | meter_id; circuit_map; opening_kWh; closing_kWh; kWh_active_t; kWh_standby_t; h_target_t; h_all_t; z_target_t; z_all_t; beneficiary_id; interval_id; calibration; coverage | 在每班边界及状态变化时读取专用灯插座/回路表；记录含失败任务的全部受益方实际占用/预留台时。将电表覆盖与父账单对账；仅父表实际包含分表时去除重叠。 按calc_power仅换算MJ一次，再除Q一次。 | kWh; min; m2*h | 每班及每次状态转换。 | 池内全部占用、待机和闭店小时。 | 实际柜台灯回路；场所/POS在补全模块。 | 每 1 m2 参考流 | 电表导出、校准、回路图及全部受益方驱动对账。 |
| cp_pack | counter | band_input; bag_input; receipt_input | material_issue_ledger | material_id; supplier_spec; issue_id; order_id; opening_x; receipts_x; usable_returns_x; closing_x; continuing_out_x; homogeneous_item_count; m_item; tare; uncertainty; receiver | 柜台人员在收货/领用/盘点时按批称实际具名干态/收到态包装；核实纸束带无胶/涂层/复合及购物袋纯LDPE。热敏纸为实际成品小票纸组成，不假定纯纤维素。仅用于计数换算时，按记录设计抽取同质单件质量。 calc_materials；可选束带/袋需明确未发生证据，未知不是0。 | kg; Item(s) only raw count | 每次收货/领用及期初期末盘点。 | 整个池，含作废/失败订单。 | 仅柜台领用包装；记录制造供应方范围。 | 每 1 m2 参考流 | 供应商组成/BOM、秤检查、库存/领用对账及签字未发生日志。 |
| cp_residual | residual | failed_transfer; unqualified_retained; fabric_offcuts; defective_fabric; lint_waste; paperboard_waste; film_waste; band_waste; bag_waste; receipt_waste | carrier_transfer_ledger | carrier_id; parent_bolt_coordinates; material_id; wet_mass; tare; dry_mass_sample; moisture_regain; receiver_id; receiver_acceptance; product_or_waste_state; treatment; haul_scope; retained_stock; event_id; cotton_contained_mass; opening_dry; receipts_dry; physical_returns_dry; closing_dry; gross_handover_dry; supplier_transfer_dry; offcut_dry; defect_dry; destructive_sample_dry; released_full_fabric_particles_dry; S_full_open; S_full_close; X_full; E_full; transformed_full_export | 每次实际送出时按具名完整载体分开去皮称量；拍照状态、凭证及适用接收许可/处理。仍可售失败布退供为产品转移，不是零售废物。碎布/缺陷布/棉絮有独立实际载体；测试布仅进入其中一个实际去向。留存入货布板/膜在实际送出前仍为库存。 calc_physical及calc_materials；每接收方载体kg/Q仅一次，不重复内含物。 | kg as dispatched; kg dry for independent closure | 每次丢弃/转移及期初期末库存。 | 全部池内载体至终端接收，含迟发更正。 | 门店收货及残余物暂存/送出点。 | 每 1 m2 参考流 | 秤校准、磅单、接收凭证、退供责任及范围矩阵。 |
| cp_air | counter | cotton_air | species_flux_ledger | port_id; regime; interval_id; Cin_p; Cout_p; cotton_fraction; Fin_p; Fout_p; T; P; humidity; dt; blank_mode; target_extraneous_cotton; G; S_open; S_close; X; carrier_id; source_marker; detection_limit; uncertainty; released_full_fabric_particles_dry; S_full_open; S_full_close; X_full; E_full; transformed_full_export | 合格采样人员在匹配裁剪/无裁剪及闭店/再悬浮工况，采实际最终室外进出风口/泄漏，使用校准颗粒采集及棉特异显微/组成验证；保留原始称重空白及匹配状态实际风量。另按来源特定抽样设计及不确定性盘点空气/表面/滤材棉和实际输出载体内棉。方法不能辨别目标棉或覆盖路径时，披露缺口，不声明排放完整。 calc_air互斥模式；仅来源/路径/库存闭合后报告E/Q。 | kg/m3; m3/h; kg; h | 代表实测工况覆盖所有运行/闭店状态，批次/配置变化时重测；连续状态/时间日志。 | 整个池及边界库存/捕集变化。 | 商店最终室外边界及目标来源/捕集保管链。 | 每 1 m2 参考流 | 采样计划、实验室棉身份、检出界限、风量校准、匹配空白、原载体对应表。 |
| cp_completion | completion | fixed excluded modules | scope_and_asset_ledger | pool_id; Q_version; module_id; provider_id; included_scope; source_id; meter_id; beneficiary_id; K; target_driver; all_driver; asset_id; e_target_current; L_expected_total; lifetime_versions; terminal_mass; maintenance_event_id; trip_payload; trip_distance; empty_vehicle_km; loaded_time; empty_time; reserved_time; B_s; provider_conversion; overlap_id; V_discharge; rho_discharge; temperature; composition; opening_liquid; external_water; cleaner_mass; actual_dissolved_or_suspended_additions; closing_liquid; vapour_export; liquid_in_goods_or_other_carriers; other_external_liquid_transfer; charge_open; added_external; reused_from_recovery; charge_close; circuit_recovered; other_circuit_transfer; S_rec_open; S_rec_close; recovery_sent; other_recovery_transfer; air_capture_stock_open; air_capture_stock_close; air_captured_sent; delta_indoor_air_stock | 零售商清单责任人从实际发票/分表/BOM/工单/运输日志及全受益方资产台账收集partial_completion全部固定模块。检查真实范围，将实际不兼容实物资产/合同计量单元拆为具名原子卡；供应方已含部件/流体/运输/处理不得再计。投用和退役记录识别原始内容、实际替换件及剩余完整载体。 calc_completion、calc_completion_liquid及calc_completion_refrigerant；模块闭合且重叠/Q版本完全一致前，完整服务不可用。 | source native units with explicit conversion | 每次源事件、每月对账及每次资产/寿命修订。 | 同一池，另含资产全寿命及迟发更正。 | 与目标服务关联的全部固定补全边界。 | 每 1 m2 参考流 | 签字范围矩阵、供应方证据、全受益方/寿命闭合、终端凭证及精确源ID去重。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_area | qualified_service | 对每块最终验收实物j，在记录温湿度状态下、不拉伸地测量松弛未洗最终尺寸。A_j=sum_k(l_jk*w_usable_jk)-A_defect_j，采用分段长度与可用宽度图，两侧布边及绘图拒收孔洞/缺陷仅扣一次；A_defect_j仅含可用宽度图尚未扣除的缺陷。不规则形状采用校准描绘多边形，不能再加矩形面积。Q为唯一终端验收A_j之和；外部留存但不合格、及后来撤销的验收均排除。布边可随实物交付，承担背景和实物质量，但不计可用Q。m2为面积，不是剪裁次数或标称码数。 | piece_id; terminal_acceptance_id; l_jk; w_usable_jk; A_defect_j; temperature; RH; polygon_area | Q m2 | kaufman-white-k001-1387 |
| calc_source | failed_background; qualified_service | 收货时将布匹i划分为实测坐标单元c（含布边）；b_ic=a_full_ic*g_dry_ic，g_dry_ic=m_conditioned_sample_ic/(1+r_ic)/a_sample_ic；其中试样面积及所有原单元几何均在相同收货温湿度/松弛状态、干燥前测得；任何调湿状态尺寸修正须由配对试样实测，不假定湿干面积相等；干基回潮率r=(m_conditioned-m_dry)/m_dry采用经验证的批次特定干燥方法，保留不挥发整理物并报告挥发整理偏差。同坐标供应商已核实干态成品质量可替代抽样，不能叠加。追踪每一原始单元互斥分数u_ics,u_icf_service,u_icf_continuing,u_icopen，合计1；B_z=sum b_ic*u_icz。实际后代边界、全幅裁剪坐标及干布碎片确定u，不得以标称面积或湿重捷径代替。破坏试样/碎布、消费者实际获交的布边、布源棉絮均保留父级责任；单纯水分交换不生成第二笔布背景。B_original=B_s+B_f_service+B_f_continuing+B_open。B_f_service含无有据继续责任人的未验收外部留存之独立暂记负担，仅经签名重新归属释放，责任未明阻止最终完整性。本模块计B_f_service/Q；B_s/Q随下游成功商品背景仅附加一次。B_f_continuing/B_open作为独立负担台账保留，直到最终责任人明确；原尺寸/回潮率/背景不明不得结案。 | a_full_ic; m_conditioned_sample_ic; m_dry_ic; a_sample_ic; r_ic; u_ics; u_icf_service; u_icf_continuing; u_icopen | B_z kg dry finished fabric; B_f_service/Q kg/m2 | ghg-product-2011 |
| calc_physical | failed_transfer; unqualified_retained; fabric_offcuts; defective_fabric; lint_waste | 另立干态成品布库存方程：opening_dry+receipts_dry+physical_returns_dry=closing_dry+gross_handover_dry+supplier_transfer_dry+offcut_dry+defect_dry+released_full_fabric_particles_dry+destructive_sample_dry。released_full_fabric_particles_dry为布向下游颗粒/沉积棉絮池释放的一笔原始内部损失，含布源干态纤维及整理物；布库存方程不得再扣该部分后续的捕集棉絮输出或室外排放。另立下游池闭合released_full_fabric_particles_dry+S_full_open=S_full_close+X_full+E_full+transformed_full_export，采用实测源干态比例、全部表面/空气/滤材库存、实际完整载体内含输出及室外完整颗粒转移，不用无关粉尘。这些为原始完整成品布干质量，不自动等于calc_air棉单一物种G/S/X/E。对每一完整颗粒部分按实测棉质量比例仅乘一次导出棉源G；实际整理物/其他物种及转化发生时，须有独立具名终端卡才能声明完整。仅纳入互斥实际终端部分，不重复已含试样后代；库存/组成/转化未知为缺口，不是0。实物交付/退回含重复越界，不等于Q。废物/转移交换称实际湿态载体；库存干态当量采用各自实测水分/整理基准，不能加入纸板、薄膜、购物袋或外部清洁质量。保留测量不确定性及未解差额，不强行归零。 | opening_dry; receipts_dry; physical_returns_dry; closing_dry; gross_handover_dry; supplier_transfer_dry; offcut_dry; defect_dry; released_full_fabric_particles_dry; S_full_open; S_full_close; X_full; E_full; transformed_full_export; cotton_fraction; destructive_sample_dry | independent dry stock closure; actual carrier kg/Q | ghg-product-2011 |
| calc_power | lamp_electricity | E_lamp=3.6*sum_t[kWh_active_t*h_target_t/h_all_t+kWh_standby_t*z_target_t/z_all_t]，仅适用于实际共用时段；直接计量的目标专用时段份额为1。h为占用检验/裁剪分钟，含失败；z为预留台面面积小时，含闭店/闲置。零驱动时段保留未分配，直到有证据解决因果归属。所有受益方份额合计1；独立灯分表不得再扣POS/暖通。灯贡献=E_lamp/Q MJ/m2。已计量净量不再乘额定功率或小时。 | kWh_active_t; h_target_t; h_all_t; kWh_standby_t; z_target_t; z_all_t; Q | E_lamp/Q MJ/m2 | ghg-product-2011 |
| calc_materials | band_input; bag_input; receipt_input; paperboard_waste; film_waste; band_waste; bag_waste; receipt_waste | 对每种具名材料x，实际消耗M_x=opening_x+receipts_x+usable_returns_x-closing_x-continuing_out_x，单位kg，有称量票据；仅实际同质单件数量*m_item经验证时可用逐件抽样。按实际订单/领用/丢弃源ID仅归属一次，含失败和作废。输出载体W_x为按实际接收方直接称得净kg；包装随顾客离开时不能推断废物等于投入。可归属M_x或W_x仅除Q一次；披露计数/单重抽样方差。入货包装制造已在原商品背景中，其送出废物仅在此计处理，不再计第二笔包装投入。 | opening_x; receipts_x; usable_returns_x; closing_x; continuing_out_x; m_item; source_id; W_x; Q | attributable M_x/Q or W_x/Q kg/m2 | ghg-product-2011 |
| calc_air | cotton_air; lint_waste | 选择互斥室外通量模式E=integral(sum Cout_p*Fout_p-sum Cin_p*Fin_p)dt-target_extraneous_cotton，C为实际棉纤维颗粒质量浓度kg/m3，F为匹配实测温压/湿度基准下的实际m3/h；或选择经验证、已差分/来源修正的质量速率模式，按实测实际暴露积分。不得空白校正两次。按配对无裁剪时段/源标记及全部实际其他棉活动归属目标裁剪棉，未知来源份额阻止完整性。另用按calc_physical源解析完整布颗粒池实测棉比例仅乘一次导出的目标棉单物种内部产生G，校核E=G+S_open-S_close-X；S为目标棉的空气/表面/捕集库存总kg，X为实际输出捕集棉kg。lint_waste/其他完整载体中的X组成不是第二笔交换。转化/未知路径记为缺口，不是0。仅在室外路径/来源/库存按实测不确定性闭合后报告E/Q；未检出保留方法检出边界，不默认0。保留并调查带符号E观测值及不确定性；未解负E不得作为负cotton_air输出、截为0或声明避免排放。已证明实际净吸收须另经审核匹配基本输入身份和归属，否则仍阻止完整性。 | Cout_p; Fout_p; Cin_p; Fin_p; dt; target_extraneous_cotton; G; S_open; S_close; X; Q | E/Q kg/m2 | ghg-product-2011 |
| calc_completion | all | 建立范围矩阵，对partial_completion中每一固定模块列供应方数据集ID、事件/资产/电表/源ID及已含制造、运输、能源、维护、流体和处理。其他实际场所能源载体须具名供应方活动/单位换算：计量/购入质量或匹配状态实际V*密度，能量仅用适用实测供应方NCV乘实际质量，不用笼统燃料/热力Item(s)卡。成功商品采用原收货干态成品布当量B_s/Q，明确供应方换算及实际进货路段，仅扣除确有证据已含的路段。共用运行池：先直接分表；场所/暖通/照明/清洁按占用或预留地面面积小时、POS及共用办公/行政设备按活动及待机设备/交易时间、卫生间按实际记录员工/访客服务暴露、搬运资产按有载+空返+预留搬运时间，以目标/全部驱动分配实测总量K。保留所有受益方/闲置/失败期间、零驱动余量及calc_completion_liquid和calc_completion_refrigerant固定的实际流体/废物质量规则，不用笼统Item(s)事件。运输采用实际载重吨公里，仅供应方活动证据未含时另计空载车辆公里。购置/终端资产：对每一实际完整资产a，用e_target_current/L_expected_total覆盖全部过去/本期/未来受益方，分母含本期暴露；建筑/桌/架用面积小时，工具/灯/POS用占用+预留小时。台账f_current=e_target_current/L_expected_total在寿命修订时替换旧分配；累计份额<=1；退役时以实际寿命暴露替换预估并分配余量/签名更正。制造和实际终端完整资产量*f各仅应用一次，直接净称终端量已排除移走部件；实际维护按其服务时段受益暴露分配，不再乘制造f。实际不兼容资产/服务包/材料/废物身份须分层为具名卡、独立协议和原始凭据；出厂内容、替换件及移走载体互斥。对每一兼容交换身份/属性/单位，分别保留本模块原始RAW可归属分子及每一补全模块RAW可归属分子。以明确实测换算核对身份、状态及单位兼容，仅逐卡相加同交换兼容量，按重叠原始源ID去重一次，再将每一合并分子仅除完全相同最终Q一次。已归一化外部模块必须先按有据原分母及精确同一池/版本还原实际原始分子，否则不能连接。不得将归一化行加入原始总量，不得kg加MJ，也不得仅因单位相同而合并不同材料/物种。全部具名模块闭合前不得声明总足迹。 | scope_matrix; B_s; Q; provider_conversion; trip_payload; trip_distance; empty_vehicle_km; K; target_driver; all_driver; e_target_current; L_expected_total; asset_id; lifetime_versions; terminal_mass; maintenance_event_id | fixed-module attributable burdens/Q with exact overlap removal | ghg-product-2011 |
| calc_completion_liquid | completion | 对每一种实际具名清洁/卫生间液体载体，直接净排液质量J=V_discharge*rho_discharge，密度对应实测温度/组成；该模式与重构互斥，不得再扣蒸发或复用。无法直接采集时，用经验证完整液体质量平衡J=opening_liquid+external_water+cleaner_mass+actual_dissolved_or_suspended_additions-closing_liquid-vapour_export-liquid_in_goods_or_other_carriers-other_external_liquid_transfer，各项均kg且为实际互斥部分。内部复用为内部项相消，进水表本已不含复用。干扫棉、擦布、桶及单独捕集固体颗粒不是液体加入项。直接和重构不能混用，完整固体载体内水分不再计废水。源ID及实际接收方/处理比例合计1；量化不确定性及未解项，绝不未知=0。按预先声明实际清洁面积小时或实际卫生间服务暴露，在全部受益方间归属原始共用池，保留闲置/零驱动余量，之后仅除Q一次。 | V_discharge; rho_discharge; temperature; composition; opening_liquid; external_water; cleaner_mass; actual_dissolved_or_suspended_additions; closing_liquid; vapour_export; liquid_in_goods_or_other_carriers; other_external_liquid_transfer; source_id; target_driver; all_driver; Q | actual whole-liquid kg/Q and disjoint source-carrier allocation | ghg-product-2011 |
| calc_completion_refrigerant | completion | 对每一种实际暖通制冷剂，先闭合未分配原始回路平衡L_internal=charge_open+added_external+reused_from_recovery-charge_close-circuit_recovered-other_circuit_transfer。完整购置设备出厂充注计入已识别期初/投用内含库存，不是第二笔购入补充；实际外购投用补充另行识别。回收库存闭合S_rec_open+circuit_recovered=S_rec_close+reused_from_recovery+recovery_sent+other_recovery_transfer。实际购入仅added_external。最终室外释放闭合E=L_internal+air_capture_stock_open-air_capture_stock_close-air_captured_sent-delta_indoor_air_stock，回路回收与空气捕集互斥；以匹配温压湿度实际最终室外净通量独立验证。完整设备/废载体内含制冷剂不是空气排放，也不再作为纯气体输出；实际分离回收气须独立具名载体/卡。路径/库存/身份未知则不完整。原始运行事件按实际受益方面积小时归属；终端内含气/处理仅乘一个最终寿命责任份额，不再乘制造份额。Q归一化前对账期初期末、日期、投用/供应方范围及物种原始记录。 | charge_open; added_external; reused_from_recovery; charge_close; circuit_recovered; other_circuit_transfer; S_rec_open; S_rec_close; recovery_sent; other_recovery_transfer; air_capture_stock_open; air_capture_stock_close; air_captured_sent; delta_indoor_air_stock; Q | species-specific outside kg/Q and separate recovery/contained carriers | ghg-product-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all | 数据集就绪前，须将每个未验证流及其支持链绑定到匹配原始直读记录+receipt，核对精确哈希、观察状态、中英文官方名、流型、材料/状态/供应方限定、属性、单位及介质。供应商身份不是UUID。历史交流电证据仅支持身份，不提供电网因子/供应方/电压。缺失数量/身份保留显式缺口；candidate需审核，不可发布。 | 原始响应、receipt、哈希报告及逐卡完成矩阵。 |
| measurement | all | 以可追溯检查及不确定性校准量尺/面积成像、天平、水分方法、电表及空气采样仪。状态改变时在收货、裁剪、实物退回及最终验收重复宽长测量；保留原几何、条件、抽样覆盖及缺陷。不设固定回潮率、标称44英寸幅宽或4.35oz/yd2默认值。不宣称符合未实际应用的标准。 | 校准证书、前后检查、批次抽样设计、原始不确定性传播及配对状态记录。 |
| closure | all | 归一化前对账终端布块、实物库存、坐标干态背景责任、耗材、完整废物载体、能源及室外棉通量。按实测不确定性调查差额，记录未解余量和敏感性，不强制闭合。条件未发生证据须覆盖池内所有时段。中英文全部源义务必须进入支持的结构化规则/协议/计算字段，仅指纹匹配不能证明语义。 | 签字对账、源坐标图、事件修订、未发生日志及双语字段/规则审核。 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_check | qualified_service | 要求同质规格、实际最终可用几何及合同验收、匹配Q和源父级历史。拒绝标称码/幅宽默认值、重复验收、不合格留存产出、消失失败批群及未知当零。 | kaufman-white-k001-1387; ghg-product-2011 |
| quantity_check | all | 按原始单位、实测状态、精确协议/过程、归属及一次Q归一化逐卡验证；验证calc_source互斥原背景、独立实物总量/干态库存、完整载体废物、空气捕集/输出及全受益方能源闭合。无依据换算、路径缺失或差额超不确定性均阻止完整性。 | ghg-product-2011 |
| boundary_check | all | 完整增量模块数据集仍须披露部分范围。完整零售使用还要求partial_completion每一模块经calc_completion补齐，最终Q/版本一致、源ID去重及实物资产寿命/维护/终端范围完整。不得从内容/翻译marker或mapping接受推断当前认证、科学/发布批准。 | ghg-product-2011 |
| projection_check | all | 核实每一双语卡、条件、规则、协议、公式、源ID及适用范围进入生成structured及实际guidance。原始绑定前保持未解行/支持身份显式，不编造UUID。指纹/schema不确立科学等价。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅部分增量柜台服务；完整零售须固定补全和成功源背景耦合，Q完全一致。 |
| allowed_use | 数量及UUID/背景完成后用于完全相同记录SKU/手工路线/状态/合同；披露部分范围。 |
| excluded_use | 整个CPC叶、其他面料/SKU/路线、完整零售或当前认证/合规声明、纯商品制造、默认标称面积/质量或缺失当零。 |
| required_metadata | SKU、纤维声明、机织结构、实际整理及供应商批次; 实际全幅及可用宽长图和缺陷; 未洗松弛计量温湿度及校准; 收货干态成品质量及水分/整理方法; 手工全幅剪裁路线及包装发生/未发生; 起止门口、退货政策及终端验收证据; 池配置、覆盖期及迟发修订ID; 实物总越界及源坐标责任; 部分柜台边界及固定补全范围矩阵; 室外棉来源/捕集/路径闭合及不确定性; 接收方、载体及供应方范围去重检查 |
| required_quality_disclosure | 逐卡身份/背景缺口、收货与最终状态、几何/水分抽样不确定性、部分模块范围矩阵、闭店/失败池、修订及室外棉覆盖。 |
| update_trigger | SKU/整理/批次结构、路线、计量状态、包装、供应方边界、资产/寿命、合同/退货结果、空气路径或源证据变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62131 | official_guidance | UNSD CPC3.0 subclass62131, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62131 | 实际官方注释将266棉机织布列于更广纺织组内；仅分类，不提供数量因子。 |
| kaufman-white-k001-1387 | handbook | Robert Kaufman Fabrics, K001-1387 WHITE from Kona Cotton, https://www.robertkaufman.com/fabrics/kona_cotton/K001-1387/ | 厂商一手身份100%棉/WHITE；标称44英寸幅宽及4.35oz/yd2仅产品声明背景，不是默认值、因子、可用幅宽或合规限值，实际批次须计量。 |
| kaufman-woven-description-2024 | standard | Hohenstein certificate14.HUS.49303 issued2024-11-07, manufacturer-hosted https://www.robertkaufman.com/assets/files/14_HUS_49303.pdf | 历史描述Kona白色100%棉机织布；有效期已于2025-10-31结束。不作当前认证/性能结论，不采用测试限值。 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011, chapters7/9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅一般可归属边界及细分/物理分配原则。具体面积几何、原坐标责任、柜台部分范围及固定补全方法为本PCR设计，不是标准强制因子/默认值，也不声明符合整套标准。 |
