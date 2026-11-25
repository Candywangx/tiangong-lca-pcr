---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-non-metallic-minerals-and-other-products-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 非专门实体门店原装40 lb Solar Naturals太阳蒸发盐袋零售服务

## 1. 范围与适用性

本PCR定义有证据的非专门实体门店内狭义原袋盐零售服务。方法公式为明确PCR设计规则，由声明的前景采集支持；不把任何制造商规格当作活动数据默认。必须整体应用必需边界、分配和校验表，包括来源ID及例外。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-non-metallic-minerals-and-other-products-n-e-c |
| classification_refs | CPC 3.0 62199；属于162组盐类的narrower子集，以非专门实体门店零售证据为条件。 |
| covered_products | 同一实际批次/配置、未开封的Diamond Crystal Solar Naturals 40 lb原塑料袋，货号100012411、UPC013600769406；白色不透明太阳蒸发软化水盐晶体；参考产品为服务，而非盐制造。 |
| excluded_products | 其他袋重、未核对批次的托盘变体、散盐零售、盐丸、岩盐、氯化钾、添加配方、食用/泳池/融雪盐、线上或订单主导提货/配送、专门门店、批发以及顾客软水设备再生均不适用。实际意外破损仍是本路线失败，必须计入。 |
| representative_product | 制造商Salt-3201 (1-26)中的40 lb PE袋货号100012411。典型干基氯化钠含量只是描述，不是批次化验、含水率、袋皮重或LCI默认值。 |
| production_route | 供应商太阳蒸发和原装包装在零售门之前。门店收货、干态储存并展示完整袋，允许店内选购，再收银并实体交付；顾客销售路线不故意开袋、分装、溶解、重新包装或作顾客演示/产品测试。calc_kf所需独立牺牲QC原袋不成为合格服务；按calc_stock及calc_ownership保留其实际F/暂存/样品记录，不得因顾客路线限制将其排除。仅适用boundary_no_plant中已证明无设备的运行配置。 |
| market_state | 工厂原袋包装的晶体矿物盐。必须取得供应商对批次、生产/包装场址、袋体、接缝/封口、提手、印刷/标签/胶及任何内衬的确认；PE文字不能证明纯单一聚合物包装或绝对阻湿。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 指定完整原盐袋的零售收货、持有、展示及收银交付。 |
| How much | 一个最终有效验收的原袋ID；Q为声明池/版本内最终验收仍有效的不同原袋ID数。 |
| How well | 实际SKU/批次相符、原袋未开封且完整、未观察到漏盐/受潮/污染、标签可读，并有正确交易与实体交付记录；待检/拒收不构成验收。 |
| How long or cycle | 一个预先声明的同配置池，覆盖所有收货队列、闭店/闲置/失败期间及后续验收更正；不得丢弃零销售队列。 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一袋原装40 lb Solar Naturals太阳蒸发盐的店内零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际门店及混合商品组合; 店内选购及收银证据; SKU/UPC/批次/地区; 完整原袋BOM及盐/袋实测质量; 供应商制造与发运门; 入站路线; 池及分母版本; 验收/撤销截止点; 实体及S/F/T/O台账; 电表/供应方边界; 必须补全清单 |

实际数据包必须声明全部必需限定信息；缺失即参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_basis | retail_service | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 按calc_acceptance和cp_custody计数原袋ID。所有清单以每参考流表达，分配后的原始分子仅除Q一次；40 lb不是服务计数的质量换算。 |
| salt_state | waste_salt_out; waste_salt_in; treat_salt | 质量 | kg | 区分收到状态完整载体kg、盐源干质量和水；应用calc_salt_state。不得从湿质量下降推定干盐损失或环境水迁移。 |
| electric_basis | store_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 使用使用点互不重叠原始kWh池，在calc_power中仅按3.6 MJ/kWh换算一次；供应技术、地点、电压和线损另行核实。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际供应商发运的完整原袋及独立记录的至实体门店收货入站运输；S/F/T/O所有权责任持续。 |
| starting_condition_role | 增量零售服务门；工厂制造及包装为源W，入站运输为独立源I。 |
| product_classification_scope | 仅覆盖有证据的非专门店内盐零售子集；CPC62199注释含162组及许多无关列示组。 |
| recursive_input_rule | 不得把同一零售服务输出递归当作入站商品。实际此前零售/批发环节必须有不重叠的阶段来源和门。 |
| upstream_dataset_requirement | 供应商发运时完整实际盐加袋的W、分段实际I及S/F/T/O记录；留存/未决库存保留原来源/版本，不得归零注销。 |
| disclosure | 核心服务清单加calc_completion规定的必须支持补全。每个必需模块解决或证明不存在之前，标记为部分增量清单；不得声称完整零售或完整产品足迹。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_scope | all processes | 仅在cp_applicability证明实际混合商品实体门店、本SKU/批次货架选购及收银交付后适用。制造商目录、门店定位、价格、提货或配送页面本身不能证明分店库存或CPC621渠道；线上/订单主导和批发情形不通过范围门。 | un-cpc62199; cargill-salt3201-2026 |
| boundary_goods | failed_original; retail_service | 制造W固定在供应商发运门，含实际盐及每个原袋制造/包装组件，不含入站I。F通过failed_original表达实际N_F及完整W_F/N_F，并另计独立I_F。T保持具名接收方/来源责任，O保持未决。若供应方捆绑阶段，添加其他来源前须分离确切有据阶段；阶段未知则阻断补全。完整增量零售必须补全全部实际零售支持模块及F制造W_F和独立I_F，来源/阶段不得重复。S制造W_S和入站I_S排除在增量零售结果之外。只有另行具名的验收商品GOODS系统才加W_S/Q和I_S/Q一次，并有其系统标签和来源清单；此可选GOODS耦合不是零售完整性条件。保留S/F/T/O历史以守恒原责任，不在此添加S负荷。 | cargill-salt3201-2026; jrc-retail-2013 |
| boundary_failure | residual | 未开封的预期零售路线不能免除实际失败核算。完整封闭废袋、扫集晶体盐残渣、倒空原袋和含盐清洁废液为不同状态。完整失败袋不得再拆计盐加袋。内部报废使商品变为暂存废物，随后才发运。卤水或袋载体中的盐不能另算盐输出。地面/室内盐移动不是向室外空气、土壤或水的基本流排放。 | cargill-salt3201-2026 |
| boundary_modules | support | 必须零售模块包括仅针对失败原物的I_F、实际零售搬运及失败/退回运输、建筑/货架/托盘/手推车/收银/灯/风扇/安防/清洁工具资产、清洁卫生、纸/标签/购物袋、支付/通信/采集/存储及废物运输/处理。使用calc_transport、calc_assets、calc_cleaning、calc_paper、calc_digital和calc_completion。全期按boundary_no_plant筛查HVAC/燃料/制冷剂服务区域不存在；本路线不纳入其运行。分离模块排除已计确切核心电力、W/I及其他阶段。完整性成立前，每个实际新增交换须有双语原子卡、协议、身份/属性/单位及原始分子。缺失模块不等于零。 | jrc-retail-2013 |
| boundary_external | all processes | 排除顾客出行、最终有效验收后的开袋/使用、软水设备再生及消费后包装终处置。撤销验收即重开原服务及商品责任，即使没有实体退回；单纯财务调整不改变有效验收。实际失败商品留在外部必须有接收方、状态、实测质量/数量及持续W/I责任人，绝非自动门店废物。开袋/部分外留商品须增加对应盐和袋状态的产品转移扩展，只有证明实际废物状态才能标为废物。 | jrc-retail-2013 |
| boundary_no_plant | all processes | 对全池全部营业、闭店、闲置、临时备用及维护时段，证明没有固定燃烧、外购供热/供冷、空调或制冷剂设备服务任何直接使用或共享服务区域。纳入房东/公共区域分配、远端供给设备、临时设备及维护服务；所有权或闭店不是不存在的证据。保留带日期完整服务区域/风管/回路/租约/设备图、时段日志及供应方声明。发生/覆盖矛盾或未知均阻断本路线。准入配置排除上述服务设备；实际AC照明/POS/风扇及必需具名零售IT/安防支持仍须遵照boundary_modules、calc_digital、calc_assets及cp_power，并按确切来源阶段/核心电表去重；HVAC/燃料/制冷剂发生为必须排除筛查，不是已覆盖运行或零清单。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 门店保管、展示及收银交付 | required | 实际合格实体混合门店路线 | 前景服务 | 每参考流 |
| failure | 失败原商品背景责任 | conditional | 存在任何失败原物或原物去向未决；不存在须有完整来源/保管核平 | 上游失败商品供给 | 每参考流 |
| residual | 实体残余载体、退回及最终处理 | conditional | 有实际废物产生、暂存、发运、退回或处理；发生未知仍不完整 | 前景残余管理 | 每参考流 |
| support | 必须支持补全 | required | 按calc_completion补全每个固定模块或证明实际不存在 | 必须原始向量补全 | 每参考流 |

### 过程：门店保管、展示及收银交付（`retail`）

#### 输入

##### 产品流

###### 交流电（`store_electricity`）

实际互斥门店运行的使用点AC；上游电网/供应方身份仍独立。必需数量方法：按calc_power取E_MJ/Q；cp_power

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：E_MJ/Q，归属实测能量仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_power`
- 来源：

###### 未开封原装Solar Naturals 40 lb太阳蒸发盐袋（`supplier_in`）

仅实际供应商向门店实体退回的完整原袋。本实体转移不产生服务/抵扣，也不推定W/I责任。必需数量方法：N_sup_in/Q，按calc_transfers；cp_transfers

- 选定流：未开封原装Solar Naturals 40 lb太阳蒸发盐袋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_sup_in/Q，实际原袋实体移动仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_transfers`
- 来源：

###### 未开封原装Solar Naturals 40 lb太阳蒸发盐袋（`retained_in`）

仅实际外部实体退回的完整原袋。本实体转移不产生服务/抵扣，也不推定W/I责任。必需数量方法：N_ext_in/Q，按calc_transfers；cp_transfers

- 选定流：未开封原装Solar Naturals 40 lb太阳蒸发盐袋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_ext_in/Q，实际原袋实体移动仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_transfers`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 一袋原装40 lb Solar Naturals太阳蒸发盐的店内零售服务（`retail_service`）

最终有效完整原袋ID的服务输出；不是盐制造或实体毛交付件数。必需数量方法：1 件；calc_acceptance；cp_custody

- 选定流：一袋原装40 lb Solar Naturals太阳蒸发盐的店内零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_custody`
- 来源：

###### 未开封原装Solar Naturals 40 lb太阳蒸发盐袋（`supplier_out`）

仅实际出站退供应商的完整原袋。本实体转移不产生服务/抵扣，也不推定W/I责任。必需数量方法：N_sup_out/Q，按calc_transfers；cp_transfers

- 选定流：未开封原装Solar Naturals 40 lb太阳蒸发盐袋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_sup_out/Q，实际原袋实体移动仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_transfers`
- 来源：

###### 未开封原装Solar Naturals 40 lb太阳蒸发盐袋（`retained_out`）

仅实际未验收外留的完整原袋。本实体转移不产生服务/抵扣，也不推定W/I责任。必需数量方法：N_ext_out/Q，按calc_transfers；cp_transfers

- 选定流：未开封原装Solar Naturals 40 lb太阳蒸发盐袋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_ext_out/Q，实际原袋实体移动仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_transfers`
- 来源：

##### 废物流

##### 基本流

### 过程：失败原商品背景责任（`failure`）

#### 输入

##### 产品流

###### 供应商发运门的完整原装Solar Naturals 40 lb太阳蒸发盐袋（`failed_original`）

不可逆失败原商品的背景供给。含实际盐及完整袋制造/包装；既不是纯NaCl或PE kg，也绝非所有入站商品固定为1。必需数量方法：按calc_ownership取N_F/Q，匹配完整W_F/N_F供应方；cp_failure；I_F独立通过calc_transport及calc_completion

- 选定流：供应商发运门的完整原装Solar Naturals 40 lb太阳蒸发盐袋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F/Q，原失败袋件数，匹配核实完整W_F/N_F供应方；I_F独立补全一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_failure`
- 来源：cargill-salt3201-2026

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：实体残余载体、退回及最终处理（`residual`）

#### 输入

##### 产品流

###### 完整原太阳蒸发盐废袋的场外完整处理（`treat_whole`）

实测不同同状态载体kg，且最终证实完整处理；不是发运次数或仅收件kg。供应方仅含实际完整处理；运输和核心公用除非明确核平均排除；部分/拒收加工须增加实际阶段扩展。必需数量方法：U_whole/Q，按calc_dispatch；cp_residual

- 选定流：完整原太阳蒸发盐废袋的场外完整处理
- 流属性/单位：质量 / kg
- 数量规则：U_whole/Q，不同最终完整处理同状态载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 扫集晶体太阳蒸发盐残渣废物的场外完整处理（`treat_salt`）

实测不同同状态载体kg，且最终证实完整处理；不是发运次数或仅收件kg。供应方仅含实际完整处理；运输和核心公用除非明确核平均排除；部分/拒收加工须增加实际阶段扩展。必需数量方法：U_salt/Q，按calc_dispatch；cp_residual

- 选定流：扫集晶体太阳蒸发盐残渣废物的场外完整处理
- 流属性/单位：质量 / kg
- 数量规则：U_salt/Q，不同最终完整处理同状态载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 倒空原太阳蒸发盐袋废物的场外完整处理（`treat_bag`）

实测不同同状态载体kg，且最终证实完整处理；不是发运次数或仅收件kg。供应方仅含实际完整处理；运输和核心公用除非明确核平均排除；部分/拒收加工须增加实际阶段扩展。必需数量方法：U_bag/Q，按calc_dispatch；cp_residual

- 选定流：倒空原太阳蒸发盐袋废物的场外完整处理
- 流属性/单位：质量 / kg
- 数量规则：U_bag/Q，不同最终完整处理同状态载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 含盐地面清洁废液的场外完整处理（`treat_brine`）

实测不同同状态载体kg，且最终证实完整处理；不是发运次数或仅收件kg。供应方仅含实际完整处理；运输和核心公用除非明确核平均排除；部分/拒收加工须增加实际阶段扩展。必需数量方法：U_brine/Q，按calc_dispatch；cp_residual

- 选定流：含盐地面清洁废液的场外完整处理
- 流属性/单位：质量 / kg
- 数量规则：U_brine/Q，不同最终完整处理同状态载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

##### 废物流

###### 含全部内容物的完整原太阳蒸发盐废袋（`waste_whole_in`）

仍封闭的完整失败原袋，含内容物及实际袋，作为一个载体称量；同载体不得另列盐/袋输出。所有实际同状态实体退回运单净kg；没有实体移动不构成本输入。必需数量方法：R_whole/Q，按calc_dispatch、calc_salt_state及cp_residual

- 选定流：含全部内容物的完整原太阳蒸发盐废袋
- 流属性/单位：质量 / kg
- 数量规则：R_whole/Q，实际同状态实体载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 扫集晶体太阳蒸发盐残渣废物（`waste_salt_in`）

实际实体收集固体残渣，含实测水/污染；不得用于溶解盐，也不得假定为纯干NaCl。所有实际同状态实体退回运单净kg；没有实体移动不构成本输入。必需数量方法：R_salt/Q，按calc_dispatch、calc_salt_state及cp_residual

- 选定流：扫集晶体太阳蒸发盐残渣废物
- 流属性/单位：质量 / kg
- 数量规则：R_salt/Q，实际同状态实体载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 含附着盐的倒空原印刷PE太阳蒸发盐袋废物（`waste_bag_in`）

实际倒空完整包装载体，含印刷/封口/胶及残留附着盐；不是纯PE质量，不另排附着盐。所有实际同状态实体退回运单净kg；没有实体移动不构成本输入。必需数量方法：R_bag/Q，按calc_dispatch、calc_salt_state及cp_residual

- 选定流：含附着盐的倒空原印刷PE太阳蒸发盐袋废物
- 流属性/单位：质量 / kg
- 数量规则：R_bag/Q，实际同状态实体载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 含盐地面清洁废液（`waste_brine_in`）

含盐、清洁配方和水的实际完整液体；同载体中的盐/水/化学组件不是额外输出。所有实际同状态实体退回运单净kg；没有实体移动不构成本输入。必需数量方法：R_brine/Q，按calc_dispatch、calc_salt_state及cp_residual

- 选定流：含盐地面清洁废液
- 流属性/单位：质量 / kg
- 数量规则：R_brine/Q，实际同状态实体载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含全部内容物的完整原太阳蒸发盐废袋（`waste_whole_out`）

仍封闭的完整失败原袋，含内容物及实际袋，作为一个载体称量；同载体不得另列盐/袋输出。所有实际出站运单净kg，含重复发运尝试。必需数量方法：D_whole/Q，按calc_dispatch、calc_salt_state及cp_residual

- 选定流：含全部内容物的完整原太阳蒸发盐废袋
- 流属性/单位：质量 / kg
- 数量规则：D_whole/Q，实际同状态实体载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 扫集晶体太阳蒸发盐残渣废物（`waste_salt_out`）

实际实体收集固体残渣，含实测水/污染；不得用于溶解盐，也不得假定为纯干NaCl。所有实际出站运单净kg，含重复发运尝试。必需数量方法：D_salt/Q，按calc_dispatch、calc_salt_state及cp_residual

- 选定流：扫集晶体太阳蒸发盐残渣废物
- 流属性/单位：质量 / kg
- 数量规则：D_salt/Q，实际同状态实体载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 含附着盐的倒空原印刷PE太阳蒸发盐袋废物（`waste_bag_out`）

实际倒空完整包装载体，含印刷/封口/胶及残留附着盐；不是纯PE质量，不另排附着盐。所有实际出站运单净kg，含重复发运尝试。必需数量方法：D_bag/Q，按calc_dispatch、calc_salt_state及cp_residual

- 选定流：含附着盐的倒空原印刷PE太阳蒸发盐袋废物
- 流属性/单位：质量 / kg
- 数量规则：D_bag/Q，实际同状态实体载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 含盐地面清洁废液（`waste_brine_out`）

含盐、清洁配方和水的实际完整液体；同载体中的盐/水/化学组件不是额外输出。所有实际出站运单净kg，含重复发运尝试。必需数量方法：D_brine/Q，按calc_dispatch、calc_salt_state及cp_residual

- 选定流：含盐地面清洁废液
- 流属性/单位：质量 / kg
- 数量规则：D_brine/Q，实际同状态实体载体kg仅除Q一次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

##### 基本流

### 过程：必须支持补全（`support`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_pools | all inventory rows | 先直接计量及细分，再共享分配。每个互斥原始来源池R_z使用G_pz=R_z*d_pz/sum(all_d_bz)；纳入所有实际受益者及闲置/闭店/失败时段实测保留容量。建筑/货架空间用面积*时间，带电灯/风扇/POS容量用保留设备*时间，共享搬运用搬运时间，不默认按销售额或件数。专属来源仅归属一次。全体驱动总量未知或为零会阻断归属，不得删除R_z。 | jrc-retail-2013 |
| allocation_history | all inventory rows | 持久来源/记录ID及替换版本约束每次分配。晚退、寿命修订和来源份额更改须替换每个受影响历史受益者结果，不得追加第二次计费或只改今天。失败和零销售队列仍在预定同配置池内。整个Q=0时保留原始分子并披露无法归一化。共产品或回收避免负荷均无自动抵扣。 |  |
| allocation_normalization | all inventory rows | 所有计算先以原交换属性/单位产生归属原始量；x_r=G_r/Q是唯一最终服务归一化。导入的每D模块必须先用D恢复原始向量，再归属并聚合。只有交换身份/状态/属性/单位/供应阶段完全相同才可求和，并按确切source_ID+source_portion_ID+stage+version去重。同一原来源的互斥份额仍为有效独立份额，合计必须等于原总量；不得将其当作重复来源标签删除。不得把kg加MJ、原始量加归一化量或把内含盐加到完整载体上。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_applicability | retail | retail_service | 场址及批次适用性 | store_ID; address; mixed_assortment; shelf_selection_record; cashier_record; SKU; UPC; lot; region; supplier_spec_revision; bag_BOM; actual_contents_kg; actual_bag_kg; packing_site; supplier_dispatch_gate; evidence_ID; full_served_zone_map; direct_shared_zone_ID; zone_plant_connection; lease_provider_evidence; served_interval; closed_idle_interval; temporary_backup_log; maintenance_plant_log; no_plant_screen_status; assay_record_ID; sample_condemnation_ID | 核实实际混合门店货架选购/收银及批次/BOM证据，对比原1-26规格。用校准秤和不同代表性牺牲/配对样测实际盐/袋量；关联calc_kf的assay_record_ID及calc_stock报废/样品历史，本过程视图不得重复量测。对全池全部营业、闭店、闲置、临时备用及维护时段，证明没有固定燃烧、外购供热/供冷、空调或制冷剂设备服务任何直接使用或共享服务区域。纳入房东/公共区域分配、远端供给设备、临时设备及维护服务；所有权或闭店不是不存在的证据。保留带日期完整服务区域/风管/回路/租约/设备图、时段日志及供应方声明。发生/覆盖矛盾或未知均阻断本路线。准入配置排除上述服务设备；实际AC照明/POS/风扇及必需具名零售IT/安防支持仍须遵照boundary_modules、calc_digital、calc_assets及cp_power，并按确切来源阶段/核心电表去重；HVAC/燃料/制冷剂发生为必须排除筛查，不是已覆盖运行或零清单。汇总方法：仅作适用门；量测保留为批次记录，不作标称每服务默认。 | Item(s)仅用于原物/服务件数；实际内容物、水和袋组件质量用kg；实测几何/体积用m3；事实/ID无数量单位；assay_record_ID复用原化验，不新增计量。原始量保留在除Q之前。 | 每次配置/批次及路线更改 | 全池及每个实际供应批次 | 实际门店及供应商发运/包装场址 | 每参考流 | 带日期门店证据、批号标签、供应商BOM、秤校准及样品谱系。 |
| cp_custody | retail | retail_service | 原物保管及验收台账 | ledger_ID; record_ID; source_ID; source_portion_ID; original_ID; event_ID; pool_ID; version; interval; evidence_ID; u; opening_goods_u; supplier_receipts_u; customer_goods_returns_u; supplier_goods_returns_in_u; internal_goods_in_u; gross_customer_goods_handovers_u; supplier_goods_out_u; internal_goods_out_u; condemnation_u; measured_delta_goods_u; confirmed_missing_goods_u; held_open_cu; generation_cu; waste_returns_cu; dispatch_cu; state_in_cu; state_out_cu; sample_out_cu; sample_return_cu; measured_delta_held_cu; confirmed_missing_held_cu; observed_close_u; observed_close_cu; transition_ID; sample_ID; lot; handover_ID; acceptance_ID; final_valid_acceptance; revocation_ID; physical_return_ID; event_date; original_owner_pool; current_owner; owner_evidence; reason; confirmed_missing_evidence; sample_condemnation_ID | 逐实际原物移动/验收在收货、交付、报废及期末记录有类型商品件数、盐/水/袋数量，使用calc_stock及calc_kf。独立记录确认丢失量，实测减预测残差另存。破坏采样开封原物仅报废一次，之后以同原物/样品/转变ID从暂存废物追样。共享来源视图仅复用一次同ledger_ID/record_ID。晚更正保留在原池及每个受影响历史分子。汇总方法：calc_acceptance及calc_stock；不同最终有效ID计Q；实体毛事件不得代替Q；每参考流。 | u=count_original用Item(s)；u=salt_as_received_kg/source_dry_salt_kg/water_kg/bag_component_kg各自用kg；各类型期初/期末、移动、delta及确认丢失保持对应u；ID/状态不是数量。共享台账/样品QA复用原记录；此处不对任何原量除Q。 | 每事件；每日库存核平及截止修订 | 所有成功和零销售队列，含历史未决ID及晚退 | 门店商品保管及实际外部接收方关联 | 每参考流 | 供应商/POS/检查/库存证据、时间戳、更正历史及有符号残差调查。 |
| cp_failure | failure | failed_original | 来源制造及入站责任 | original_ID; W_j; I_j; supplier_dispatch_gate; source_ID; provider_stage; original_denominator; actual_salt_kg; actual_complete_bag_BOM; manufacture_region; packing_region; current_owner; owner_evidence; N_F; pool_ID; version; stage_separation; recipient | 在发运门取得供应商实际完整原产品制造/包装向量、实际分母及单位链，并独立证明入站段。确认实际内容物及每个袋组件，不能只取纯NaCl/PE。跟踪原物ID至最终责任人并替换旧结果。丢失/未知身份待定仍标记，阻断完整性。汇总方法：calc_ownership；N_F/Q乘W_F/N_F一次，I_F独立；每参考流。 | Item(s)仅用于原失败袋件数；实际盐及各BOM质量用kg；W_j/I_j向量分别保持每个原交换单位及原分母。不按标称40 lb换kg/件；不预先除Q。 | 每来源/批次及责任更正 | 全部原始来源，含历史未决库存 | 供应商发运至零售责任人/接收方 | 每参考流 | 实际供应方/BOM/LCI原记录、装运门、分母及来源ID守恒。 |
| cp_transfers | retail | supplier_out; supplier_in; retained_out; retained_in | 实体未开封商品转移 | event_ID; original_ID; recipient; state; direction; actual_count; actual_contents_kg; actual_bag_kg; N_sup_out; N_sup_in; N_ext_out; N_ext_in; source_ID; pool_ID; version; acceptance_ID; transfer_receipt | 读取实际签收供应商/顾客交接及退回单并检查袋状态。每次实际移动及其返向分别保留；本过程视图复用同一原保管event_ID，不再观察一次。开袋或部分外留须先有具体质量扩展方可补全。汇总方法：calc_transfers；原始移动件数/Q一次；仅状态编辑不新增W或I；每参考流。 | 原袋实体移动件数用Item(s)；另行实测内容物/袋质量用kg；时间戳采用记录时间标准；状态/接收方/ID无数量单位。各项为事件原量，不是由件数推kg或已除Q的量。 | 每次实体移动或更正 | 全部退供应商及未验收外留/退回 | 实际门店与供应商/外接收方接口 | 每参考流 | 原物ID状态照片、签收单及保管交叉引用。 |
| cp_power | retail | store_electricity | 互斥AC电表池 | source_ID; raw_kWh_z; d_pz; all_d_bz; area_time; reserved_device_time; handling_time; parent_meter_ID; submeter_ID; meter_boundary; calibrated_load; operating_idle_hours; interval; pool_ID; version; voltage; provider_location; supply_mix; losses_scope | 读取校准回路电表、含母表图、账单及所有受益者实际面积/设备/搬运时间日志，含闲置保留容量。互斥池与包含总表核平。记录任何实测功率*时间估计及不确定性。汇总方法：calc_power后E_MJ/Q一次；与支持模块按核心/来源阶段去重；每参考流。 | raw_kWh_z用kWh；calibrated_load用kW；operating_idle_hours及handling_time用h；area_time用m2*h、reserved_device_time用设备*h，各回路全受益驱动采用匹配单位；电压用V。保留仪器原单位/换算及原表总量；最终MJ及Q归一化仅在calc_power进行。 | 电表间隔；每池截止汇总 | 全部营业/闭店/闲置/失败期间 | 实际门店回路及全部受益者 | 每参考流 | 电表校准、拓扑、全部受益者日志、账单核平及供应边界证据。 |
| cp_residual | residual | waste_whole_out; waste_whole_in; treat_whole; waste_salt_out; waste_salt_in; treat_salt; waste_bag_out; waste_bag_in; treat_bag; waste_brine_out; waste_brine_in; treat_brine | 实体载体、来源状态及处理历史 | ledger_ID; record_ID; source_ID; source_portion_ID; original_ID; event_ID; pool_ID; version; interval; evidence_ID; carrier_ID; state; salt_source_portion_ID; consignment_ID; attempt_ID; return_ID; transition_ID; held_waste_open; actual_generation; physical_waste_returns; gross_waste_dispatch; observed_closing; actual_outbound_net_kg; actual_returned_net_kg; finally_fully_treated_unique_kg; provider_stage; treatment_evidence; wet_source_mass; water_mass; other_identified_non_source_mass; direct_net_kg; V; rho; T; composition; measurement_mode; sample_ID; paired_reference_ID; recovery; scale; uncertainty; direct_effluent_kg; V_discharge; rho_discharge; liquid_mode; full_liquid_kg_inputs; source_origin_exports; liquid_stocks; original_owner_pool; validated_water_fraction; aliquot_kg; water_sample_kg; assay_record_ID; u; opening_goods_u; supplier_receipts_u; customer_goods_returns_u; supplier_goods_returns_in_u; internal_goods_in_u; gross_customer_goods_handovers_u; supplier_goods_out_u; internal_goods_out_u; condemnation_u; measured_delta_goods_u; confirmed_missing_goods_u; held_open_cu; generation_cu; waste_returns_cu; dispatch_cu; state_in_cu; state_out_cu; sample_out_cu; sample_return_cu; measured_delta_held_cu; confirmed_missing_held_cu; observed_close_u; observed_close_cu; pass_ID; carrier_pass_portion_ID; carrier_original_pass_ID; carrier_original_beneficiary_ID; carrier_owner_share_pc; carrier_owner_map_applied; carrier_owner_map_evidence; raw_dispatch_brine_j; raw_return_brine_j; raw_unique_treated_brine_j; attributed_dispatch_brine_p; attributed_return_brine_p; attributed_unique_treated_brine_p | 用校准秤在产生/发运/实体退回及期末称每个实际完整载体净重；记录组成/状态、签收及最终完整处理证明。液体体积须有同液实测密度/温度/组成。按calc_stock逐单位/状态核平，含商品转废物配对、独立确认丢失及样品移出/退回；测水仅复用一次calc_kf原assay_record_ID，不从湿重损失推断。用检查及完整核平证明不存在，未知差异不归零。共享含盐废液复用calc_cleaning实测遍次/载体/责任映射，作为QA/归属视图，不新增观察。原毛移动kg与目标服务归属D/R/U原始kg分开保留；carrier_owner_map_applied阻止重复乘份额。汇总方法：calc_stock、calc_salt_state、calc_dispatch及calc_cleaning液体部分；D_c/Q、R_c/Q和U_c/Q分开，均每参考流。 | 完整载体/来源/样品质量及D/R/U原记录用kg；复用u=count_original的QA用Item(s)，其他类型u质量QA用kg；V/V_discharge用m3，rho/rho_discharge用kg/m3，T用degC；质量基准的来源组成/回收/责任份额为无量纲kg/kg。不确定性保持其被测字段单位。共享台账/化验及载体责任QA仅复用一次原观察；原完整移动与目标归属原始kg分开，均不预先除Q。 | 每状态事件、实体发运/退回及最终处理；每日库存 | 全部失败及历史暂存/退回载体，直至最终去向 | 门店及每个实际接收方/供应方接口 | 每参考流 | 皮重/秤校准、基质化验/回收、完整载体谱系、实体退回单及最终匹配处理证明；未解释差异保持未知。 |
| cp_support | support | support_module_evidence | 必需来源模块及原始向量整合 | ledger_ID; record_ID; source_ID; source_portion_ID; original_ID; event_ID; pool_ID; version; interval; evidence_ID; trip_ID; leg_ID; consignment_ID; freight_source_ID; final_owner_ID; freight_stage; loaded_mode; binding_capacity_evidence; actual_leg_cargo_kg; actual_loaded_km; consignment_kg; all_consignment_kg; consignment_m3; all_consignment_m3; source_capacity_quantity; all_source_capacity_quantity; source_owner_quantity; all_source_owner_quantity; provider_loaded_vector_per_tkm; empty_mode; empty_leg_ID; empty_vehicle_km; provider_empty_vector_per_vehiclekm; idle_mode; idle_interval_ID; powered_idle_vehicle_h; provider_idle_vector_per_vehicleh; idle_reserved_capacity_time; all_idle_reserved_capacity_time; provider_included_leg_stage_IDs; proved_overlap_vector; asset_ID; asset_source_ID; asset_lifetime_version; I_j; containing_activity_quantity; containing_activity_unit; movement_mode; cause_trip_ID; empty_reservation_ID; reservation_frozen_at; empty_reserved_capacity_c; reserved_capacity_unit; actual_empty_distance_c; all_empty_capacity_distance; empty_distance_evidence; resolved_assignment_layer; assignment_source_ID; assignment_version; assignment_evidence; model_BOM; asset_stage; R_as; W_a; exposure_ap; expected_total_lifetime_exposure_av; all_historical_beneficiaries; actual_exposure_all; E_a; asset_version; old_A_asp; new_A_asp; delta_A_asp; dedicated_event_owner; dedicated_event_evidence; maintenance_event; terminal_net_kg; provider_exclusions; observed_source_residual; water_import; reuse_boundary; direct_effluent_kg; V_discharge; rho_discharge; liquid_mode; full_liquid_kg_inputs; source_origin_exports; liquid_stocks; formulation_source_ID; m0; g_e; area_ep; all_area_be; preuse_loss_kg; storage_area_time_p; all_storage_area_time_b; first_use_event_ID; original_container_ID; container_complete_BOM; container_source_vector; firstopen_event_ID; firstopen_area_p; all_firstopen_area_b; firstopen_share_p; unopened_container_loss_ID; container_state; source_history_version; W_formulation_source; I_formulation_source; assigned_originalkg_p; unopened_source_kg; opened_unused_source_kg; solution_source_kg; film_source_kg; tool_source_kg; held_source_kg; cumulative_final_source_exports_kg; measured_source_corrections_kg; pass_ID; water_measurement_mode; raw_water_import_kg_e; raw_water_import_m3_e; import_water_density_kg_m3_e; raw_water_vector_e; direct_pass_beneficiary_meter_ID; direct_water_owner_quantity; raw_effluent_pass_carrier_kg_ec; all_pass_carrier_contributions_c; carrier_pass_portion_ID; carrier_original_pass_ID; carrier_original_beneficiary_ID; carrier_owner_share_pc; carrier_owner_map_applied; carrier_owner_map_evidence; direct_effluent_owner_quantity; raw_dispatch_brine_j; raw_return_brine_j; raw_unique_treated_brine_j; attributed_dispatch_brine_p; attributed_return_brine_p; attributed_unique_treated_brine_p; paper_source_ID; paper_source_kg; actual_paper_basis_weight; job_ID; beneficiary_ID; line_rect_area_p; all_line_rect_area_b; exclusive_blank_cut_p; shared_blank_cut; used_paper_area; blank_job_mode; job_reserved_printer_seconds_p; all_job_reserved_printer_seconds_b; original_paper_m0; paper_preuse_loss_kg; paper_storage_area_time_p; all_paper_storage_area_time_b; printed_WIP_source_ID; print_meter_source_ID; paper_portion_ID; W_paper_source; I_paper_source; paper_container_ID; paper_container_complete_BOM; paper_container_source_vector; first_unwrap_event_ID; firstjob_share_p; unopened_paper_container_loss_ID; paper_container_state; paper_history_version; paper_unused_kg; paper_printed_WIP_kg; paper_held_source_kg; paper_final_exports_kg; paper_source_corrections_kg; paper_old_owner; paper_new_owner; old_print_numerator; new_print_numerator; capture_ID; original_capture_source_ID; capture_source_portion_ID; R_capture_k; V_k; capture_denominator; area_time_pk; all_area_time_bk; alpha_pk; connection_source_ID; P_conn_z; H_source_z; R_comm_z; endpoint_reservedsec_p; all_endpoint_reservedsec_b; processing_source_ID; P_proc_z; H_processing_source_z; R_proc_z; payment_event_ID; communication_event_ID; event_processingsec_e; all_event_processingsec_b; event_beneficiary_processingsec_ep; all_event_beneficiary_processingsec_b; original_beneficiary_ID; pi_kp; frozen_mapping_version; packet_ID; packet_capture_map; packet_capture_bytes; all_packet_capture_bytes; packet_creation_time; retention_interval; actual_stored_bytes; storage_source_ID; storage_source_denominator; storage_source_version; storage_mode; R_store_s; byte_time_sk; all_byte_time_sk; direct_packet_source_vector; provider_fixed_variable_split; AC_exclusion; owner_map_applied; source_owner_mode; module_ID; presence_evidence; V_m; D_m; module_version; provider_stage; raw_unit; all_beneficiary_driver; atomic_extension_ID; corrected_Q; full_served_zone_map; direct_shared_zone_ID; zone_plant_connection; lease_provider_evidence; served_interval; closed_idle_interval; temporary_backup_log; maintenance_plant_log; no_plant_screen_status | 采实际来源向量、账单/来源小时、行程/运单约束容量及路段/怠速日志、全部历史资产暴露及每个新旧分配、实际清洁遍次m2、来源储存面积*时间、完整首次开封容器ID/份额、纸面积划分/WIP来源历史、实测端点/处理秒、采集/包冻结映射及存储字节秒。严格用calc_transport/calc_assets/calc_cleaning/calc_paper/calc_digital/calc_completion；保留每个供应方/来源阶段排除及完整全受益分母。不得由建模者另选替代驱动。按boundary_no_plant筛查每个直接/共享服务区域及全营业/闭店/闲置/临时备用/维护期间；未知/矛盾阻断路线，不作运行零清单。模块元数据保持实际原单位、分子/分母及来源/份额/版本，最终仅除Q一次。汇总方法：calc_transport、calc_assets、calc_cleaning、calc_digital、calc_completion；先归属原始分子，再最终除Q一次，每参考流。 | 每个原供应交换保持自身属性/单位及原分母。载货活动用t*km、空车用车km、动力怠速用车*h；载货容量用kg或m3，空车预留驱动按实测约束用kg*km或m3*km，怠速容量驱动用kg*h或m3*h。来源/怠速小时用h；端点/事件秒用s；资产暴露用m2*h或设备*h；存储用byte*s。清洁/遍次/纸面积用m2；储存面积*时间用m2*h；来源/载体质量用kg；进口水/废液体积用m3、匹配密度用kg/m3；纸定量用kg/m2；容器/原物件数用Item(s)；比值无量纲。每个驱动/全分母独立；不相加向量单位，不预先对原量除Q。 | 每来源事件；每间隔；年度/寿命修订及最终报废 | 所有必需模块及全部历史受益者 | 实际场址、供应方及上游阶段边界 | 每参考流 | 签认供应边界/BOM/向量、校准表/秤、驱动完整性、来源ID排除矩阵、历史替换台账、存在/不存在及未决清单。 |
| cp_kf | residual | waste_salt_out; waste_salt_in; waste_brine_out; waste_brine_in | 水专属性化验原记录视图 | ledger_ID; record_ID; source_ID; source_portion_ID; original_ID; event_ID; pool_ID; version; interval; evidence_ID; KF_mode; sample_ID; paired_reference_ID; lot_matrix; field_state; sealed_vial_tare_kg; sealed_loaded_kg; aliquot_kg; water_signal_raw_kg; water_signal_corrected_kg; signal_mode; volumetric_titer; titrant_volume; headspace_loaded; headspace_blank; matched_blank_kg; blank_time_profile; drift_mode; run_time; temperature_scan; selected_temperature; decomposition_check; endpoint_drift; endpoint_hold_time; transfer_gas_flow; transfer_line_check; certified_water_standard; spike_added_kg; spiked_water_kg; unspiked_water_kg; recovery_ratio; recovery_uncertainty; linearity_aliquot_series; repeatability; matrix_interference_check; sample_scale; method_version; balance_calibration; assay_record_ID; vial_internal_m3; sample_occupied_m3; inert_support_m3; actual_remaining_headspace_m3; blank_fixed_path_kg; blank_headspace_slope_kg_m3; blank_calibration_volume_series; blank_validation_uncertainty; blank_mode; matched_matrix_blank_ID; needle_configuration; aerosol_check; coulometer_water_ug | 执行calc_kf固定固体烘箱库仑/液体烘箱容量KF方法；记录实际密封瓶皮重/样量、温度释水扫描、终点设置/漂移/时间、载气路径、原始或已更正信号模式、匹配相对顶空/时间空白、有证标、基质加标/回收/线性/复测及干扰结果。保留不同已消耗初始/末期样ID及来源放大；适用单过程视图复用一个assay_record_ID。原水kg及比例为除Q前量测，不再乘第二次空白/回收/组成。基质验证失败则水依赖计算保持不完整。汇总方法：每参考流 | 样品/皮重/水标/空白/更正水质量用kg；coulometer_water_ug先用ug，仅一次换kg；titrant_volume用mL、volumetric_titer用kg/mL；顶空/排体积用m3、空白顶空斜率用kg/m3；温度用degC、运行/保持时间用s、气流用m3/s、终点漂移用kg/s；回收/水比例无量纲，不确定性对应被测单位。QA视图复用原化验记录，不重复量测或预先除Q。 | 每基质/批次/状态及方法版本；每独立样及QA批 | 代表性初始/末期来源/状态样及每化验批空白/标 | 实际保留样品链及合格分析实验室 | 每参考流 | 校准、密封瓶谱系、原曲线/报告、基质验证及不确定性；失败化验保留 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_acceptance | retail_service | Q=count_distinct(original_ID with final_valid_acceptance=true)。重复扫描、退货后重售及同一原物多个小票不增加ID。撤销使final_valid_acceptance变为false，不得再从最终状态计数扣一次。毛交付和实体退回台账独立。待检、拒收、丢失及无合格验收的外留不产生服务。有效验收仍在的单纯退款/折扣不撤销验收。晚更正须替换原池/版本及其分子。 | original_ID; final_valid_acceptance; handover_ID; acceptance_ID; revocation_ID; physical_return_ID; pool_ID; version; cp_custody | Q |  |
| calc_ownership | failed_original | 每个original_ID j保留完整供应商发运W_j向量及独立入站I_j向量。原物当前S/F/T/O终责任人恰有一个且份额为1；不得按标称盐纯度拆W。F表示整个原物已不可逆地无法用于合格封袋销售，且必须有最终失败证据；未知/丢失商品留在O并保留原W/I，直至调查解决责任人，期间阻断完整性。N_F=count_distinct(F original_ID)；W_F=sum_F(W_j)；I_F=sum_F(I_j)。failed_original=N_F/Q，供应方为W_F/N_F，故只展开W_F/Q一次；N_F=0时须有无失败证据且不使用该比值。本卡为背景供给，不是全库存的第二次实体收货。S在此排除；只有另行具名GOODS系统加W_S/Q及I_S/Q一次；T连同W_j/I_j由具名接收方/来源清单持续负责，包括退供应商；O保留未决。背景责任转移不是实体发运。报废盐/袋废物回收不得另获W；完整原物恢复再售时通过替换使其原W/I归S。部分产品挽救须有独立审查的源组件责任划分及扩展，方可完整。 完整增量零售必须补全全部实际零售支持模块及F制造W_F和独立I_F，来源/阶段不得重复。S制造W_S和入站I_S排除在增量零售结果之外。只有另行具名的验收商品GOODS系统才加W_S/Q和I_S/Q一次，并有其系统标签和来源清单；此可选GOODS耦合不是零售完整性条件。保留S/F/T/O历史以守恒原责任，不在此添加S负荷。 | original_ID; W_j; I_j; current_owner; owner_evidence; supplier_dispatch_gate; source_ID; provider_stage; N_F; pool_ID; version; cp_custody; cp_failure | N_F; W_S; W_F; W_T; W_O; I_S; I_F; I_T; I_O |  |
| calc_stock | all processes | 按u=count_original、salt_as_received_kg、source_dry_salt_kg、water_kg和bag_component_kg分别保持有类型平衡；不得相加不同单位或由件数推质量。goods_close_u=opening_goods_u+supplier_receipts_u+customer_goods_returns_u+supplier_goods_returns_in_u+internal_goods_in_u-gross_customer_goods_handovers_u-supplier_goods_out_u-internal_goods_out_u-condemnation_u+measured_delta_goods_u-confirmed_missing_goods_u。对count_original，measured_delta_goods_u=0：水分/状态变化不能生成原物ID。对每种质量基准，使用配对独立量测及calc_kf测定实际吸水/释水或组成/状态更正；不得从湿重变化编造源干盐和袋组件量。confirmed_missing_goods_u为通过搜索/保管/调查独立证明的丢失原物/来源量，绝非实测减预测；未知丢失量保持未决。从库存开袋做破坏样时，先以当时各类型实测质量将整个原物报废至F/暂存废物。之后仅从暂存废物扣样，不再从商品扣一次。对状态c，held_close_cu=held_open_cu+generation_cu+waste_returns_cu+state_in_cu+sample_return_cu-dispatch_cu-state_out_cu-sample_out_cu+measured_delta_held_cu-confirmed_missing_held_cu。商品转废物报废仅以同一原物/转变ID及有类型数量配对产生一次；不得把发运再称为报废。每个废物状态转变有匹配源份额的输入/输出，含水或其他实际加入/移除及逐u实测delta；拆分载体数量不是原商品件数。实验室样品移出、消耗及任何变状态退回均保留样品/来源/载体ID和实际kg，配套实验室/处理扩展而非消失。商品及各暂存状态/单位独立比较observed_close减预测期末；正为未解释增加，负为未解释损失。残差不能成为confirmed_missing、排放、抵扣或归零截断。无移动编辑替换记录。 | u; opening_goods_u; supplier_receipts_u; customer_goods_returns_u; supplier_goods_returns_in_u; internal_goods_in_u; gross_customer_goods_handovers_u; supplier_goods_out_u; internal_goods_out_u; condemnation_u; measured_delta_goods_u; confirmed_missing_goods_u; held_open_cu; generation_cu; waste_returns_cu; dispatch_cu; state_in_cu; state_out_cu; sample_out_cu; sample_return_cu; measured_delta_held_cu; confirmed_missing_held_cu; observed_close_u; observed_close_cu; original_ID; transition_ID; sample_ID; source_ID; cp_custody; cp_residual; cp_kf | goods_balance_u; held_balance_cu; signed_residual_u; signed_residual_cu |  |
| calc_transfers | supplier_out; supplier_in; retained_out; retained_in | 每次实际完整未开封原袋移动采用不同实体event_ID和original_ID、方向及实际接收方/状态。N_sup_out、N_sup_in、N_ext_out及N_ext_in分别计所有相应实际实体移动；每个原始件数仅除Q一次。退回事件是输入，不是负输出或新制造。仅责任状态编辑不产生这些交换。退供应商/外留未验收完整移动不能算作服务，绝不产生避免制造抵扣。开封或部分丢失须有实际盐和袋状态的转移扩展及实测质量；完整原物计数不能隐藏缺失内容物。 | event_ID; original_ID; recipient; state; direction; actual_count; actual_contents_kg; actual_bag_kg; N_sup_out; N_sup_in; N_ext_out; N_ext_in; cp_transfers | physical product movement counts |  |
| calc_salt_state | waste_salt_out; waste_salt_in; waste_brine_out; waste_brine_in | 分别测量实际收到状态盐和袋质量；标称40 lb绝非实测净内容物。完整载体质量采用校准净称重，或针对同一含盐液体采用实际V*rho(T,composition)，两模式互斥。需要源干盐质量时，按calc_kf固定密封瓶烘箱转移Karl Fischer测水，并记录other_identified_non_source_mass：dry_source_mass=wet_source_mass-water_mass-other_identified_non_source_mass。普通干燥/调湿重量不自动等于干盐。原盐来源份额保留在当前完整袋/扫集物/卤水/膜/暂存库存及累计最终输出中，含原来源ID及替换状态。NaCl化验不是全部矿物盐质量；不得把典型99.6%乘入完整载体或实际供应方数量。湿重损失不能判定盐、水、粉尘或外部去向；组成/捕集未知即未知，不是1或0。采用validated_water_fraction=water_sample_kg/aliquot_kg及源实际湿kg放大；回收率为化验QA，不是另一个组成乘数。KF样/来源视图复用原化验ID；cp_applicability及cp_residual为单过程分离视图，不是重复量测。环境水交换仍须另证实际通量及介质；本化验本身不识别环境迁移。 | wet_source_mass; water_mass; other_identified_non_source_mass; direct_net_kg; V; rho; T; composition; measurement_mode; sample_ID; paired_reference_ID; recovery; scale; uncertainty; salt_source_portion_ID; source_ID; state; cp_residual; aliquot_kg; water_sample_kg; validated_water_fraction; cp_kf | carrier_kg; source_dry_salt_kg; source_water_kg | cargill-salt3201-2026; metrohm-kf-oven-2020 |
| calc_power | store_electricity | 对每个互斥实际AC回路z，G_z=raw_kWh_z*d_pz/sum(all_d_bz)；E_MJ=3.6*sum_z(G_z)；store_electricity=E_MJ/Q。计量边界纳入收银、展示、实际搬运及照明/通风电力，包括闭店/闲置时段。专属回路使用实际直接总量，不再乘份额。仅从实际包含分表的母表扣分表一次，不得从独立电表扣除。模块用电边界及全体受益者驱动须对账；无电表则采用有据实测功率*时间及不确定性和相同驱动，不得未经核实归零。 | raw_kWh_z; d_pz; all_d_bz; parent_meter_ID; submeter_ID; meter_boundary; calibrated_load; operating_idle_hours; pool_ID; version; cp_power | E_MJ; store_electricity |  |
| calc_dispatch | residual | 对状态c，D_c为每次实际实体运单/尝试的出站净kg之和；R_c为按原载体/运单/尝试/退回ID关联的同状态实际实体退回净kg之和。输出D_c/Q和输入R_c/Q分别表达；二者均不得再用库存变化或产生量修正。实体废物行仅记录移动：独立treat_c产品输入承担该实际处理时，不得再给实体废物行挂接另一完整处理供应方或制造/避免处理抵扣；运输/搬运独立分阶段计一次。U_c为有匹配完整处理供应方证实最终完全处理的不同原同状态载体kg，发运重试仍只计一次；处理需求=U_c/Q。仅收件、拒收、丢失、部分加工或去向未知均不能取得完整处理供应方。保留其实际运输、搬运和加工，增加阶段对应扩展。状态改变的退回须有正确新状态输入/转变卡及匹配供应方；不得用完整封袋或干盐卡覆盖卤水。共享含盐废液先用calc_cleaning：库存QA保留原完整实体移动/处理记录，清单D_c/R_c/U_c则分别为实际发运/退回/不同处理对应的独立目标服务归属原始kg。不得重复用载体责任映射，或用最终处理U_c替代实体发运D_c。 | carrier_ID; state; consignment_ID; attempt_ID; return_ID; actual_outbound_net_kg; actual_returned_net_kg; finally_fully_treated_unique_kg; provider_stage; treatment_evidence; source_ID; cp_residual; carrier_owner_map_applied; attributed_dispatch_brine_p; attributed_return_brine_p; attributed_unique_treated_brine_p; cp_support | D_c; R_c; U_c |  |
| calc_transport | support | 载货移动、空车移动和动力静止怠速保持互斥实际来源向量。载货原向量R_loaded=provider_loaded_vector_per_tkm*(actual_leg_cargo_kg/1000)*actual_loaded_km。实际承运毛质量含相关容器。按该实际车辆/载荷有证约束容量确定loaded_mode：质量约束alpha_loaded_c=consignment_kg/sum(all_consignment_kg)；体积约束alpha_loaded_c=consignment_m3/sum(all_consignment_m3)，使用含包装的实测占用容量及实际来源份额。不得挑方便驱动或仅按额定载荷推断约束；约束/全分母未知则阻断归属。空行程互斥empty_mode=provider_included，仅在确切实际empty_leg_ID及原来源阶段向量已证包含在载货供应方中时使用；否则empty_mode=separate，R_empty=provider_empty_vector_per_vehiclekm*empty_vehicle_km，实际km含零载荷行程。动力静止怠速互斥idle_mode=provider_included，须有确切实际idle_interval_ID/来源阶段覆盖；或idle_mode=separate，R_idle=provider_idle_vector_per_vehicleh*powered_idle_vehicle_h。其全受益者份额为idle_reserved_capacity_time/sum(all_idle_reserved_capacity_time)，按同一约束容量证据测保留质量/体积容量乘实际动力怠速小时。熄火停车不是powered_idle_vehicle_h；实际保留资产暴露仍在calc_assets。覆盖未知即不完整，绝非零。向量供应方须显示实际交换/属性/单位、燃料、直接排放及车辆寿命阶段，使确切已含行程/阶段ID可用proved_overlap_vector仅扣一次；不得扣不相关电表、燃料总量或未解释残差。供应方无法分离实测载货/空车/怠速重叠则完整性失败。每个移动向量先按alpha_lc归至实际运单，再按lambda_cs=source_capacity_quantity/sum(all_source_capacity_quantity)归至单内来源，最后按beta_sp=source_owner_quantity/sum(all_source_owner_quantity)归至原来源终责任人；G_lcsp=R_leg*alpha_lc*lambda_cs*beta_sp。每比值内基准一致；每个全分母保留全部实际来源及受益者，含失败/未决/未知份额，不把已知份额重归一。完整同质袋责任份额跟实际原物ID件数；配方/纸来源责任份额按calc_cleaning/calc_paper的原来源kg一次；资产取得、修理及EOL货运跟独立asset_source_ID及calc_assets全部历史份额，绝非只归当期收货销售。供应方已隔离来源/运单时专属记录仅用一次，只省略已解决的比值。I_F与W_F独立。实际零售失败/退回/废物运输即使拒收或部分加工仍保留；S制造/入站仅属于另行具名GOODS系统，不属增量零售。最终归属兼容向量仅除Q一次。对资产货运止于R_as=sum(R_leg*alpha_lc*lambda_cs)，不先用责任beta_sp：将此尚未归属责任人的资产来源向量送calc_assets，仅一次采用暂定f_apv或最终f_ap并替换全部历史分配。此处不得再乘beta_sp、对当前已知暴露重归一或重复乘寿命份额。包含模式空车/怠速段还须有记录containing_activity_unit内为正的实际containing_activity_quantity，并确切关联该已计来源。全空车/怠速行程若载货吨km为零且无正的包含来源，必须采用独立车km/车小时模式；零载货活动不能承载其负荷。对实际独立空车移动，alpha_empty_c=(empty_reserved_capacity_c*actual_empty_distance_c)/sum(all_empty_capacity_distance)。针对同cause_trip_ID，在出发前以empty_reservation_ID/reservation_frozen_at冻结每个实际货运容量预留，单位为有证约束容量相同kg或m3；包含失败、未用预留及每个因果运单。actual_empty_distance_c为服务该预留/因果路段的实测空车距离，以实际路线记录支持。all_empty_capacity_distance包含完整因果预留集合的上述乘积，绝非只取成功/已知目标。全分母为零/未知则保留实测空车源为无法分配/不完整，绝非载货零载荷比例。movement_mode=loaded时alpha_lc=alpha_loaded_c；movement_mode=empty时alpha_lc=alpha_empty_c；movement_mode=powered_idle时alpha_lc=alpha_idle_c=idle_reserved_capacity_time/sum(all_idle_reserved_capacity_time)。通式G_lcsp=R_leg*alpha_lc*lambda_cs*beta_sp仅用此已选份额一次。实际来源记录已归此前因果行程或运单时，resolved_assignment_layer及原来源/版本/证据仅允许跳过该已解决层；保留完整原来源/预留/运单谱系，对仍未解决的实际原来源仅一次使用lambda_cs及beta_sp。资产货运仍止于寿命责任beta_sp之前，仅进入calc_assets一次。 | trip_ID; leg_ID; consignment_ID; freight_source_ID; source_portion_ID; final_owner_ID; freight_stage; loaded_mode; binding_capacity_evidence; actual_leg_cargo_kg; actual_loaded_km; consignment_kg; all_consignment_kg; consignment_m3; all_consignment_m3; source_capacity_quantity; all_source_capacity_quantity; source_owner_quantity; all_source_owner_quantity; provider_loaded_vector_per_tkm; empty_mode; empty_leg_ID; empty_vehicle_km; provider_empty_vector_per_vehiclekm; idle_mode; idle_interval_ID; powered_idle_vehicle_h; provider_idle_vector_per_vehicleh; idle_reserved_capacity_time; all_idle_reserved_capacity_time; provider_included_leg_stage_IDs; proved_overlap_vector; asset_ID; asset_source_ID; asset_lifetime_version; I_j; cp_support; exposure_ap; expected_total_lifetime_exposure_av; E_a; asset_version; containing_activity_quantity; containing_activity_unit; movement_mode; cause_trip_ID; empty_reservation_ID; reservation_frozen_at; empty_reserved_capacity_c; reserved_capacity_unit; actual_empty_distance_c; all_empty_capacity_distance; empty_distance_evidence; resolved_assignment_layer; assignment_source_ID; assignment_version; assignment_evidence | attributed_transport_vectors; unallocated_asset_freight_vectors; I_F |  |
| calc_assets | support | 维护实际建筑、货架、可重复托盘/手推车、收银/扫描器、灯、风扇、安防及清洁工具资产ID和型号/BOM来源向量；HVAC资产/运行不通过boundary_no_plant，而非进入本路线。建筑/货架exposure_ap为实测保留面积*时间；带电设备为实测保留设备*时间，含每个闭店/闲置/失败受益时段。暂定版本v，f_apv=exposure_ap/expected_total_lifetime_exposure_av，对每个独立定义制造/安装源s取A_aspv=R_as*f_apv；累计份额将超过1前修订预期寿命。实际退役时，E_a=sum(actual_exposure_all)覆盖全部实际历史受益者；替换每个历史f_ap=exposure_ap/E_a及new_A_asp=R_as*f_ap，delta_A_asp=new_A_asp-old_A_asp作用到各原池/来源/版本，包括已结年份。绝不重启R_as，也不把缺失历史份额归最终/当前受益者。全部实际历史暴露及E_a须已知并核平；未解释来源残差R_as-sum(new_A_asp)保持调查/不完整，绝非最终受益分配。制造/安装、实际运行、事件维护/替换、取得/修理/EOL货运及末端处理/载体为互斥来源ID。每个维护/货运/EOL源使用同一全部历史f_ap并更新每个历史delta；只有实际专属事件证据证明独占受益者时，才把该独立来源直接归属一次。完整有据寿命包与分阶段来源互斥，含确切供应方排除ID。末端载体实际净kg*f_ap归属一次；不得再乘制造份额、从直接净称重再减已不存在部件，或再加供应方已含整机EOL。货运来源向量先用calc_transport，再按全部历史归属；未来寿命修订也替换货运/维护/EOL分配。历史未知不是缩小分母。 | asset_ID; model_BOM; asset_source_ID; asset_stage; R_as; W_a; exposure_ap; expected_total_lifetime_exposure_av; all_historical_beneficiaries; actual_exposure_all; E_a; asset_version; old_A_asp; new_A_asp; delta_A_asp; dedicated_event_owner; dedicated_event_evidence; maintenance_event; freight_source_ID; terminal_net_kg; provider_exclusions; observed_source_residual; cp_support | asset_vectors; lifetime_allocations; all_history_deltas; terminal_carriers |  |
| calc_cleaning | support; waste_brine_out; waste_brine_in | 进口清洁水表不得再减内部回用。直接完整含盐废液为direct_effluent_kg或同一实际液体V_discharge*rho_discharge，两模式互斥，均不扣蒸发/库存。重构为另一个互斥完整液体kg平衡，含实际水、盐、配方输入、库存及全部来源输出，排除新外部布/容器；纯水体积平衡无效。配方批次m0每次首次使用取料g_e若实体专属则直接归属，否则G_ep=g_e*area_ep/sum(all_area_be)，area_ep为该实测清洁遍次实际清洁m2，含重复/失败遍次及所有受益者，不用销售/时间替代。互斥使用前配方损失用G_loss_p=preuse_loss_kg*storage_area_time_p/sum(all_storage_area_time_b)，对损失时段所有来源受益者测实际保留储存面积*时间。全驱动为零/未知则保留来源为无法分配/不完整。每个source_portion_ID仅进入首次使用或互斥使用前损失一次；后续溶液/膜/工具/冲洗/暂存转移替换状态并追原份额，不再收制造或入站。累计最终来源输出加当前互斥未开/已开/溶液/膜/工具/暂存来源库存，与m0及实测更正核平，不用全部稀释冲洗液kg。完整原容器制造/入站为独立实际件数/来源向量，排除已计配方。每个container_ID恰选一个历史：确认未开封时丢失，用实际件数乘损失时段储存面积*时间份额；否则首次开封按firstopen_share_p=firstopen_area_p/sum(all_firstopen_area_b)将实际完整件数归属一次，面积为该首次开封配制作业供给所有受益者遍次的实际清洁m2，含失败。冻结首次开封份额；后续配方取用/膜/冲洗不再收容器。首次开封全分母未知或为零则保持未分配；后证替换原历史。同一原容器不得同时计未开损失和首次开封。须有袋体/封口/内衬/标签/胶及实际供应阶段；可重复容器用calc_assets。完整卤水已含来源盐/配方/水，不得拆成重复输出。原配方W_formulation_p=W_formulation_source*assigned_originalkg_p/m0及I_formulation_p=I_formulation_source*assigned_originalkg_p/m0，其中assigned_originalkg_p仅一次合计其互斥首次使用与使用前损失来源份额；这些仅配方向量排除原包装/容器来源。可执行持久平衡为m0+measured_source_corrections_kg=cumulative_final_source_exports_kg+unopened_source_kg+opened_unused_source_kg+solution_source_kg+film_source_kg+tool_source_kg+held_source_kg。各项为原配方来源kg，当前互斥状态加累计最终输出；载体新吸纳水/泥不在此来源方程中。水输入和完整废液在最终除Q前都必须有实际遍次责任归属。先对实际遍次及实体专属受益者直接计量/细分；否则对该实际遍次e固定s_clean_ep=area_ep/sum(all_area_be)，为实际清洁m2，含失败/重复遍次及全部受益者。water_measurement_mode=mass用raw_water_import_kg_e；volume用raw_water_import_m3_e*import_water_density_kg_m3_e仅一次，匹配实际供应水，绝不减内部回用。G_water_ep=raw_water_vector_e*s_clean_ep，保留该实际输入交换属性/单位；已直接按责任人计量的量直接保留，不再乘s_clean_ep。实际完整废液载体c逐遍次及原来源/份额保留实测raw_effluent_pass_carrier_kg_ec贡献；合计核平实际完整载体kg及匹配状态/供应边界，不再作蒸发/库存更正。G_effluent_pc=sum_e(raw_effluent_pass_carrier_kg_ec*s_clean_ep)，或在实际载体份额已专属计量给p时用direct_effluent_owner_quantity。令carrier_owner_share_pc=G_effluent_pc/sum(all_pass_carrier_contributions_c)，或对应专属实测责任kg除以该完整原载体kg；按这些实测遍次/受益份额冻结；仅在尚未按原来源责任归属时，将它一次用于相应实际同状态实体发运、实体退回及不同最终完整处理载体份额。attributed_dispatch_brine_p、attributed_return_brine_p及attributed_unique_treated_brine_p在除Q前仍为不同原始kg，分别由匹配载体/份额/供应阶段的raw_dispatch_brine_j、raw_return_brine_j及raw_unique_treated_brine_j得到。原完整运单仍用于全移动库存QA；目标服务归属分子不能把D改为U。记录carrier_owner_map_applied：已归属责任人的量不得再乘。实体改变/分选退回须用实际退回来源份额映射，不能假定此前整混合物份额仍适用。遍次贡献、来源映射或全面积分母未知均阻断完整性。原配方/盐来源G_ep及制造/入站责任保持独立原来源量，绝不再乘完整废液载体份额，也不从全部液体质量反推。 | water_import; reuse_boundary; direct_effluent_kg; V_discharge; rho_discharge; liquid_mode; full_liquid_kg_inputs; source_origin_exports; liquid_stocks; formulation_source_ID; m0; g_e; area_ep; all_area_be; preuse_loss_kg; storage_area_time_p; all_storage_area_time_b; source_portion_ID; first_use_event_ID; original_container_ID; container_complete_BOM; container_source_vector; firstopen_event_ID; firstopen_area_p; all_firstopen_area_b; firstopen_share_p; unopened_container_loss_ID; container_state; source_history_version; cp_support; cp_residual; W_formulation_source; I_formulation_source; assigned_originalkg_p; unopened_source_kg; opened_unused_source_kg; solution_source_kg; film_source_kg; tool_source_kg; held_source_kg; cumulative_final_source_exports_kg; measured_source_corrections_kg; pass_ID; water_measurement_mode; raw_water_import_kg_e; raw_water_import_m3_e; import_water_density_kg_m3_e; raw_water_vector_e; direct_pass_beneficiary_meter_ID; direct_water_owner_quantity; raw_effluent_pass_carrier_kg_ec; all_pass_carrier_contributions_c; carrier_pass_portion_ID; carrier_original_pass_ID; carrier_original_beneficiary_ID; carrier_owner_share_pc; carrier_owner_map_applied; carrier_owner_map_evidence; direct_effluent_owner_quantity; raw_dispatch_brine_j; raw_return_brine_j; raw_unique_treated_brine_j; attributed_dispatch_brine_p; attributed_return_brine_p; attributed_unique_treated_brine_p | cleaning_vectors; saline_effluent_kg; formulation_history; container_history |  |
| calc_digital | support | 原采集、连接容量、事件处理及存储保持互斥来源向量，含实际供应方单位/分母及确切来源阶段排除。安防采集k用V_k=R_capture_k/capture_denominator，由实际原采集生产向量及核实采集数分母得到；采集时对全部实际覆盖受益者冻结alpha_pk=area_time_pk/sum(all_area_time_bk)，含失败/闲置区域。原采集G_capture_p=sum(V_k*alpha_pk)不因后续存储改变。连接/端点容量时段z，R_comm_z=P_conn_z*H_source_z，P_conn_z为分解的实际每来源小时原向量，H_source_z为实际账单/计量来源小时；G_comm_p=R_comm_z*endpoint_reservedsec_p/sum(all_endpoint_reservedsec_b)。端点保留秒含实际保留闭店/闲置/失败容量及每个受服务端点/受益者，不用传输字节或销售件数替代。支付/通信可变处理使用独立实际每来源小时向量R_proc_z=P_proc_z*H_processing_source_z；先按event_processingsec_e/sum(all_event_processingsec_b)归每个实际事件e，含全部成功/失败/撤销事件，再按pi_ep=event_beneficiary_processingsec_ep/sum(all_event_beneficiary_processingsec_b)归原商品受益者。事件内秒数为实际测得处理/扫描子活动时间，不是价格、退款额、件数假定或毛小票数。处理时以original_ID/event_ID冻结事件至原受益者pi_ep；重复/失败处理保留实际时间但不生成服务。供应方固定/可变开销须有实际来源向量分离：固定闲置容量用保留秒，可变处理用处理秒；未分解来源包及全分母零/未知均不完整，绝非零或建模者自选驱动。数据包仅关联原采集/事件及冻结原受益映射一次：安防pi_kp=alpha_pk，事件产生记录用实测pi_ep。数据包含多采集/事件时，用packet_capture_map测实际字节份额；实际共享头仅按packet_capture_bytes/sum(all_packet_capture_bytes)分配，覆盖全部贡献者且不重复有效载荷。映射未知/有效载荷为零则来源未决。每个实际存储来源s用自身storage_source_denominator及期间/版本把归一化供应向量恢复为原R_store_s。互斥storage_mode=aggregate，beta_sk=byte_time_sk/sum(all_byte_time_sk)，按实际留存时段对该源服务的每个采集/事件及全受益者积分实际存储数据包/采集字节秒；G_store_p=sum_s(sum_k(R_store_s*beta_sk*pi_kp))。storage_mode=direct使用实际独立计量/供应方direct_packet_source_vector，每来源份额仅归k一次，再乘pi_kp一次，不再乘汇总beta_sk。全部来源开销及闲置容量保留在实际R_store_s及全部覆盖记录/时段；全存储驱动为零保持无法分配。后续留存仅改变存储beta_sk及历史存储分配，不能改原采集生产、事件处理或冻结pi_kp。保留来源->包/采集->原受益者谱系及替换版本；已按原责任人拆分的数据包份额不得再乘pi_kp。按确切阶段ID排除cp_power已含AC及calc_assets已含供应方设备寿命来源。记录source_owner_mode及owner_map_applied。上述方程要求原始来源尚未归属原受益者。导入已按责任人分配的向量，仅以其现有G_store_p按确切来源份额/版本使用一次，不再乘beta_sk或pi_kp；不得同时进入未拆来源方程。已应用映射标志未知则阻断整合。 | capture_ID; original_capture_source_ID; capture_source_portion_ID; R_capture_k; V_k; capture_denominator; area_time_pk; all_area_time_bk; alpha_pk; connection_source_ID; P_conn_z; H_source_z; R_comm_z; endpoint_reservedsec_p; all_endpoint_reservedsec_b; processing_source_ID; P_proc_z; H_processing_source_z; R_proc_z; event_ID; payment_event_ID; communication_event_ID; event_processingsec_e; all_event_processingsec_b; event_beneficiary_processingsec_ep; all_event_beneficiary_processingsec_b; original_beneficiary_ID; pi_kp; frozen_mapping_version; packet_ID; packet_capture_map; packet_capture_bytes; all_packet_capture_bytes; packet_creation_time; retention_interval; actual_stored_bytes; storage_source_ID; storage_source_denominator; storage_source_version; storage_mode; R_store_s; byte_time_sk; all_byte_time_sk; direct_packet_source_vector; provider_fixed_variable_split; AC_exclusion; cp_support; owner_map_applied; source_owner_mode | capture_vectors; connection_vectors; processing_vectors; storage_vectors; frozen_owner_maps |  |
| calc_completion | support | 每个必需零售模块取得实际存在/不存在证据、source_ID/source_portion_ID/阶段/版本、原始向量或归一化V_m及实际D_m；R_m=V_m*D_m仅恢复一次，保留每个交换/属性/单位，使用allocation_pools、calc_transport、calc_assets、calc_cleaning、calc_paper和calc_digital固定方法，再按来源份额去重兼容原G_r行，最后仅除corrected_Q一次。完整性成立前，逐实际新增交换添加双语原子过程/卡/协议/身份，含实际实验样/测试及变状态载体。模块包括I_F、零售搬运及失败/退回运输、实际准入建筑/货架/手推车/托盘/POS/灯/风扇/安防/工具资产、清洁卫生、纸/标签/购物袋、支付/通信/采集/存储、废物运输及实际完整或单列部分/拒收加工。按boundary_no_plant在全部服务区域/时段筛查HVAC/燃料/制冷剂不存在；本路线不覆盖其运行。发生、分母、单位、供应边界/历史未知或缺原子扩展均阻断完整增量零售。完整增量零售必须补全全部实际零售支持模块及F制造W_F和独立I_F，来源/阶段不得重复。S制造W_S和入站I_S排除在增量零售结果之外。只有另行具名的验收商品GOODS系统才加W_S/Q和I_S/Q一次，并有其系统标签和来源清单；此可选GOODS耦合不是零售完整性条件。保留S/F/T/O历史以守恒原责任，不在此添加S负荷。 | module_ID; presence_evidence; V_m; D_m; module_version; source_ID; source_portion_ID; provider_stage; raw_unit; all_beneficiary_driver; atomic_extension_ID; corrected_Q; cp_support | completed_raw_vector; completeness | jrc-retail-2013 |
| calc_kf | waste_salt_out; waste_salt_in; waste_brine_out; waste_brine_in | 固定水专属性方法为密封样品瓶烘箱转移Karl Fischer：晶盐采用库仑检测；实际含盐液体经转移后采用容量检测，取代表性称量等分样并对同液混匀。干燥惰性载气将释放水经检查的管线转移，盐/清洁剂基质留瓶。按实测基质固/液选择KF_mode，不能选择方便的干燥失重。另取同基质牺牲等分样做温度扫描，确定分解或干扰挥发释放之前最后可重现释水平稳段；在正式样之前由验证固定selected_temperature、气流、最短提取时间、endpoint_drift和endpoint_hold_time。最后释水峰后必须回到已验证匹配空白漂移带并保持固定时长；持续漂移、残渣变化、管线冷凝或无法完全释水使化验无效。采用实际密封称量瓶皮重/加样重、不同初始参照及末期分样/配对样、校准天平及至源批次的有据放大。每份样仅消耗一次。空白采用同瓶/隔垫、转移路径、时长及实测装样顶空，或验证过的相对顶空更正。原始模式water_sample_kg=water_signal_raw_kg-matched_blank_kg仅扣一次；库仑信号为实际校准积分水量，容量信号=titrant_volume*volumetric_titer，滴定度实际标定并按单位换算。仪器已更正模式water_sample_kg=water_signal_corrected_kg，不再扣空白/漂移；保留原始/已更正标志及报告。用有证烘箱水标、同基质独立未加标/加标等分样及spike_added_kg验证：recovery_ratio=(spiked_water_kg-unspiked_water_kg)/spike_added_kg须在实测扩展回收不确定度内与1相容。验证不同等分样质量、重复性及实际清洁剂/杂质干扰，包括氧化/还原物或产水分解；适用性失败/未知保持未决，不能改用失重或零。来源仅提供烘箱/温度/空白/回收一般原则；本PCR基质特定方法仍须实际验证，不导入温度、样量或回收限值默认。保留负的更正水观察值及不确定性用于调查；它不能成立负源水、排放、归零截断或可用干质量换算。固定固体针端在物料上方，液体针穿入液体，并实际检查气溶胶/冷凝转移。由校准瓶体/排体积量测计算actual_remaining_headspace_m3=vial_internal_m3-sample_occupied_m3-inert_support_m3，不用标称袋密度。按同瓶/隔垫/针/气路，在包围实际顶空体积及时长的条件校准空白。互斥blank_mode=headspace_calibrated时，在实际时长采用matched_blank_kg=blank_fixed_path_kg+blank_headspace_slope_kg_m3*actual_remaining_headspace_m3：固定气路/瓶/时间项和气相体积斜率由该校准分别实测，残差须在记录blank_validation_uncertainty内。不得将整个空瓶信号乘顶空比例。blank_mode=matched_matrix时，使用另行证明无水的实际基质空白，具有相同占用/剩余体积及气路并有基质适用证据；其实测matched_blank_kg替代校准模式。几何缺失、基质空白不适合或空白体积关系失败均阻断测水结果。两模式均只在原始signal_mode扣匹配空白；仪器已更正报告绝不再扣。titrant_volume记录mL，volumetric_titer记录kg/mL，由实际有证水标批次标定。库仑仪显示微克时保留coulometer_water_ug，先取water_signal_raw_kg=coulometer_water_ug*1e-9，再做所选一次空白更正；不得对结果再换算一次。 | KF_mode; sample_ID; paired_reference_ID; lot_matrix; field_state; sealed_vial_tare_kg; sealed_loaded_kg; aliquot_kg; water_signal_raw_kg; water_signal_corrected_kg; signal_mode; volumetric_titer; titrant_volume; headspace_loaded; headspace_blank; matched_blank_kg; blank_time_profile; drift_mode; run_time; temperature_scan; selected_temperature; decomposition_check; endpoint_drift; endpoint_hold_time; transfer_gas_flow; transfer_line_check; certified_water_standard; spike_added_kg; spiked_water_kg; unspiked_water_kg; recovery_ratio; recovery_uncertainty; linearity_aliquot_series; repeatability; matrix_interference_check; sample_scale; method_version; balance_calibration; cp_kf; assay_record_ID; vial_internal_m3; sample_occupied_m3; inert_support_m3; actual_remaining_headspace_m3; blank_fixed_path_kg; blank_headspace_slope_kg_m3; blank_calibration_volume_series; blank_validation_uncertainty; blank_mode; matched_matrix_blank_ID; needle_configuration; aerosol_check; coulometer_water_ug | water_sample_kg; validated_water_fraction; assay_suitability | metrohm-kf-oven-2020 |
| calc_paper | support | 每个实际小票/标签印刷作业测互斥完整面积划分：行矩形含其中实际空白像素及失败/作废行；exclusive_blank_cut_p及shared_blank_cut严格在所有行矩形之外。used_paper_area=sum(all_line_rect_area_b)+sum(exclusive_blank_cut_p)+shared_blank_cut。行面积为正时，A_p=line_rect_area_p+exclusive_blank_cut_p+shared_blank_cut*line_rect_area_p/sum(all_line_rect_area_b)。对实测完全空白且无行矩形作业，专属空白仍直接归属，共享shared_blank_cut仅按所有实际保留受益者job_reserved_printer_seconds_p/sum(all_job_reserved_printer_seconds_b)分配；记录blank_job_mode，不得双模式并用。全驱动未知/为零即不完整。G_paper_p=A_p*actual_paper_basis_weight，仅乘匹配实测kg/m2一次；涂层留在纸中，实际卷芯/包膜/纸箱不在净纸内。原纸制造W_paper_source和入站I_paper_source按各原来源份额G_paper_p/original_paper_m0一次归属；互斥使用前损失按全受益者实际保留纸储存面积*时间分配。印刷WIP再次领用不得再收原来源：在WIP、实际顾客交付、暂存废物及后续期间持续保留原paper_portion_ID、来源、印刷电表分子及责任人/版本，更正替换受影响旧分配。完整原纸容器/卷芯/包膜/纸箱BOM及制造/入站构成独立有据完整包件数向量，排除在净纸kg供应方外。每个实际paper_container_ID仅计一次：未开完整容器损失用实际损失时段保留储存面积*时间；否则首次拆封/开包实际件数按首作业确切行/外部空白划分（或固定空白作业保留时间模式）产生firstjob_share_p。冻结首次开封份额，与开封前完整容器损失互斥；后续作业/WIP不重启容器制造/入站。来源/供应方无法分离净纸与完整原容器则保持阶段/BOM完整性未决。按净纸来源kg保持original_paper_m0+paper_source_corrections_kg=paper_final_exports_kg+paper_unused_kg+paper_printed_WIP_kg+paper_held_source_kg。WIP责任人改变时，逐新旧责任人/版本替换原纸制造、入站及实际原印刷电表分子；不得留在旧责任人同时又收给新责任人。 | paper_source_ID; paper_source_kg; actual_paper_basis_weight; job_ID; beneficiary_ID; line_rect_area_p; all_line_rect_area_b; exclusive_blank_cut_p; shared_blank_cut; used_paper_area; blank_job_mode; job_reserved_printer_seconds_p; all_job_reserved_printer_seconds_b; original_paper_m0; paper_preuse_loss_kg; paper_storage_area_time_p; all_paper_storage_area_time_b; printed_WIP_source_ID; print_meter_source_ID; paper_portion_ID; W_paper_source; I_paper_source; paper_container_ID; paper_container_complete_BOM; paper_container_source_vector; first_unwrap_event_ID; firstjob_share_p; unopened_paper_container_loss_ID; paper_container_state; paper_history_version; cp_support; paper_unused_kg; paper_printed_WIP_kg; paper_held_source_kg; paper_final_exports_kg; paper_source_corrections_kg; paper_old_owner; paper_new_owner; old_print_numerator; new_print_numerator | paper_vectors; paper_source_history; printed_WIP_history; paper_container_history |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_applicability | all processes | 不得由目录、近似尺寸或旧版推断分店渠道、批次/BOM、单位或来源门。未证实实际门店范围即不适用，而非零交换。 | cp_applicability原证据及版本对比。 |
| quality_identity | all inventory rows | 流UUID必须有实际官方响应/回执哈希及观察状态/名称/type/属性/单位/状态/介质匹配。历史证据保持历史。未绑定候选行明确保留；盐体身份不能代表完整原盐袋，基本流介质不得猜测，Item(s)不得替代未定义支持活动。 | 逐行身份证据及未决完成登记。 |
| quality_measurement | all inventory rows | 用原ID、单位、校准及覆盖记录测什么/何地/何时；区分实际完整载体、源干盐、水及包装。未知量保持未知，给不确定性及方法，不得为零。不得编造袋重、阻湿、漏损系数或合规限值。 | 校准、配对样化验、称重单、不确定性及签认核平。 |
| quality_ownership | failed_original; retail_service | 每个完整原W及独立I在S/F/T/O中持续守恒；暂定未解决丢失和部分挽救阻断最终完整性。实体转移不等于责任变化。每次再售及晚退均保留原池/来源/版本。 | 原来源/向量登记、去向单据及全部历史替换记录。 |
| quality_modules | support | 完整增量零售仅需实际零售模块及F W_F/I_F；S W_S/I_S在外，仅由另具名GOODS系统加一次。按确切raw字段/Inputs核全部历史资产/货运/维护/EOL差量、有类型/样品/丢失平衡、固定测水验证、实际清洁/纸驱动、首次开封包装历史及冻结原数字责任映射。全驱动未知/为零及无设备服务区域不确定均阻断补全；绝不把未解释残差归最后一期。 | cp_support补全矩阵及兼容恢复原始向量核平。 |
| quality_waste | residual | 区分实体发运/退回量及不同最终完整处理量。供应方收件不证明完整处理。完整载体包含组件一次；来源份额不得超过原来源质量。实际部分/改变处理须具体阶段及载体；不得使之消失或假定回收。 | 载体/来源/尝试/退回谱系、最终供应证据及库存平衡。 |
| quality_alignment | all processes | 逐对象、direction/type、名称、UUID/单位、公式、条件、例外、门及义务核对双语；再比较实际解析业务数组、范围、来源、协议及计算输入。Schema/哈希成功本身不是科学批准。 | 双语原文阅读、parser对比、确定性重复同步及定点检查。 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_scope | all processes | 缺少boundary_scope、完整必需限定信息及确切SKU/批次/实体渠道证据则拒绝应用。不得因分类标题宽便拓展到全部62199或全部盐。 | un-cpc62199 |
| validation_quantity | all inventory rows | 用独立实体毛库存核对Q最终不同验收；检查原量->归属->除Q一次、实际单位及全部原来源/驱动平衡。Q=0保留且无法归一化。重复扣撤销、完整袋加组件重复、阶段重复、未审负排放及隐含未知归零均使完整性失败。 |  |
| validation_coverage | all processes | 核实每个条件发生/不存在及必需零售模块，含F的W_F/I_F。身份、数量、接收方/去向、来源阶段分离、寿命历史、组成或供应边界未解决则保持未验证。仅核心结果为部分。完整增量零售必须补全全部实际零售支持模块及F制造W_F和独立I_F，来源/阶段不得重复。S制造W_S和入站I_S排除在增量零售结果之外。只有另行具名的验收商品GOODS系统才加W_S/Q和I_S/Q一次，并有其系统标签和来源清单；此可选GOODS耦合不是零售完整性条件。保留S/F/T/O历史以守恒原责任，不在此添加S负荷。 | jrc-retail-2013 |
| validation_sources | all processes | 确保声明的过程/卡/协议/计算引用存在，每个协议只对应一个实际过程且flow_role行ID匹配，全部必需来源ID及双语对应字段实际投影。独立核实科学/来源原义；机器成功绝不提升方法学状态。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 增量零售服务；必须补全前为部分核心。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 遵照商品完成义务完成实际匹配增量零售服务：仅实际零售模块及F的W_F/I_F。另行具名验收商品GOODS系统可再加W_S/Q和I_S/Q一次；不得将合并结果重标为增量零售。 |
| excluded_use | 全部62199覆盖、通用盐零售、仅盐制造、顾客再生、认证标准符合性或未核实完整足迹。 |
| required_metadata | SKU/批次/BOM/地区; 门店/渠道证明; 供应商发运门; W/I来源向量; 实体及S/F/T/O来源历史; Q/池/版本/截止点; 实际模块/资产/表/供应方边界。 |
| required_quality_disclosure | 实际覆盖; 不存在/未决模块及身份; 计量模式、校准和不确定性; 历史来源日期; 废物最终处理证明; 全部更正及无法归一化队列。 |
| update_trigger | SKU/批次/BOM/路线/分店/供应方更改、晚退、来源修订、设备寿命/报废、新状态或新观察到支持交换。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62199 | official_guidance | UNSD，CPC Version3.0 code62199，完整解释清单。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62199 | 分类包含162组；不提供方法学或整叶覆盖。 |
| cargill-salt3201-2026 | handbook | Cargill，Diamond Crystal Solar Naturals Salt Crystals，Salt-3201 (1-26)，第1-2页。https://www.cargill.com/doc/1432076383770/salt-3201-solar-naturals-sell-sheet.pdf | 具体候选产品/太阳蒸发路线/原塑袋标识、无添加及近似规格限制；不推断批次/BOM、实重、排放或标准符合性。 |
| jrc-retail-2013 | official_guidance | 欧盟委员会JRC，Best Environmental Management Practice in the Retail Trade Sector，EUR25998 EN (2013)，第1.2节印刷4-6页（PDF52-54页）。https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 定性筛查直接零售能源/水/化学品/废物与间接商品/顾客链。本PCR公式及支持边界为声明设计选择，不是该源强制系数、阈值或完整标准符合性。 |
| metrohm-kf-oven-2020 | handbook | Metrohm，Frequently asked questions in Karl Fischer titration – Part2，2020年8月17日，KF oven第5-11节。https://www.metrohm.com/en_au/discover/blog/20-21/frequently-asked-questions-in-karl-fischer-titration---part-2.html | 烘箱转移、基质限制、温度释水扫描、高水容量法、空白及有证水标回收一般原则；并非已验证Solar Naturals/含盐清洁液化验，不给数值默认。 |
