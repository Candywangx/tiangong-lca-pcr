---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.human-hair-unworked-whether-or-not-washed-or-scoured-waste-of-human-hair
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 天然本色未加工剪取发束：采购批次接收与放行

## 1. 范围与适用性

本 PCR 规定一条有界的采购供货路线：已剪取、清洁、彻底干燥、保持原始发根方向的天然本色人发束，接收、称量、检验、固定和包装，至接收方首次质量放行。限未经漂白、染色或其他加工的实物；需要真实卖方、批次、历史和验收证据。用途可以是后续假发制造，但本产品仍是未加工人发。不得把商家的后续配色备发、梳理或假发制作当作本路线。手工检验和固定既有发束不包括打薄、抽齐、梳理加工或将混向发重新倒顺。

采购是本路线；捐赠指南仅用于独立核对清洁、干燥与剪取固定条件及反例。两家机构不是同一批次。捐赠不等于零环境负荷，也不表示已验收。慈善机构可接受的部分染发不属于本限定产品。头发生长、人体代谢不建模为投入；剪发服务、供应清洗干燥、采购与实物验收须分别识别。未加工人发废物虽在 38971 内，混合地面扫发和废物处理服务不在本参考产品内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.human-hair-unworked-whether-or-not-washed-or-scoured-waste-of-human-hair |
| classification_refs | CPC 3.0:38971，未加工本色剪取发束的较窄映射已获接受。38972 的已加工人发和假发不在本范围内。 |
| covered_products | 天然本色清洁干燥未加工剪取发束 |
| excluded_products | 38972 已梳理、打薄、漂白或其他加工的人发、假发及制品；动物毛、合成纤维；混向扫发 |
| representative_product | 实际采购批次中首次验收的未加工发束 |
| production_route | 清洁干燥剪取发束接收 → 检验称重 → 固定包装 → 首次放行 |
| market_state | 待后续加工的松散原发中间品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供给合格未加工天然本色剪取人发 |
| How much | 首次放行的 1 kg 净人发 |
| How well | 记录买方验收、清洁干燥状态、原始发根方向和实际长度分布；不声称消毒效果 |
| How long or cycle | 一个可追溯接收批次；无佩戴寿命 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未加工天然本色剪取人发束 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 真实卖方和批号；采购而非捐赠；原发本色和无处理历史；发根方向及毛鳞片状态；长度分布；接收规格及通过/拒收记录；干燥和水分测量条件；净发量与皮重；接收与放行时间；存货和退货；供应方清洗干燥剪取及运输边界与负荷；包装材质；计量和共享服务分配证据；处理去向；场址和时期 |

必需限定信息须在数据包元数据、过程说明或等效字段完整声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | reference product | Mass | kg | Q 为首次质量放行的人发净质量；经校准秤称量，排除束带、封套和可分离杂物，记录实测水分与环境条件。干燥不代表绝干或规定回潮率。 |
| count_mass | all inventory rows | Mass | kg | 束数或长度只能描述批次，不能替代质量。需同批实测配对称量才能换算。g 乘 0.001 得 kg。商家按盎司支付不能证明其盎司制式，未确认前不作交易质量换算。 |
| denominator | all inventory rows | Actual exchange property | native unit | 所有清单行每 1 kg 参考流；分子保持各自单位，以正的同批首次放行量 Q 归一化。拒收、退回、废物、期初成品和重复放行不计入 Q。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收已剪取、清洁干燥、方向保持的本色原发 |
| starting_condition_role | 有上游负荷的供货实物；交易接受与物理到达分开 |
| product_classification_scope | 38971 内较窄的采购原发路线；38972 不适用 |
| recursive_input_rule | 同类原发保留实际供应边界及负荷；内部移交抵消，不重复生产 |
| upstream_dataset_requirement | 匹配实际供货清洗干燥剪取、运输、用电及逐项包装；缺失链接保持显式未知 |
| disclosure | 公开前景起点、供应接口、拒收处理、库存、时间与场址；未完成上游组装时不声称完整摇篮到大门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_unworked | intake | 只允许接收检验、称量和保持既有发根方向的固定。洗净本身不排除 38971，但本路线不假定接收处再洗。后续梳理、打薄、倒顺混向发、漂白、染色、配色备发、发帘和假发制作均排除。 | un-cpc-3-2025; banbury-ethical |
| boundary_acceptance | intake | 保留所有到达批次及处置。只有满足实际买方规格且书面放行的实物进入 Q，邮寄或付款不替代验收。拒收退回单独记录。 | banbury-selling |
| boundary_upstream | intake | 记录供应方真实洗净、干燥、剪取和运输服务及其可归属负荷；不得计入人体生长、完整个人理发负荷或默认为零。清洁干燥指南不能提供能耗或水耗数值。 | banbury-selling; lpt-donation-2025 |
| boundary_complete | intake | 条件流仅在有证据表明实际不存在时不适用，缺数据或 UUID 不等于零。逐项增列实际新增物质、清洗剂、水、干燥能源、废物和排放的原子卡片，并复核路线适用性。失败批次与零产量期间仍保留全部负荷。 |  |
| boundary_packaging | intake | 每种束带、封套和容器分别执行 boundary_packaging_interfaces 的完整实收与退返账式。物理流数量与负荷是否已包含分开记录，首次随货或借入不能遗漏。包装不进入 Q，内部复用不形成新采购；原发提供者已含的生产负荷不重复加载。 |  |
| boundary_origin_gate | intake | 首次扎束剪取记录须关联来源取得/自愿授权及适用合规证据、卖方批号、保持的发根方向、清洗干燥剪取运输负荷及首个合格原料放行事件。买方此前已作同质合格原料放行的发束，其重新检查、转售、换包或重复入库不得产生新增 Q。无法证实首次门的批次隔离，不计入 Q；不公开个人身份信息。 | banbury-selling; banbury-ethical |
| boundary_unreleased_carry | intake | 跨期未放行发束逐批携带净发量、水分状态及逐项已发生的上游和前景交换负荷向量，结转至下期期初，不丢弃负荷或提前进入 Q。最终首次放行时归属所结转及新增负荷；退还时按 allocation_inherited_returns 转出继承向量，真实失败服务仍归属，期末未决不分摊为已产出。 |  |
| boundary_packaging_interfaces | intake | 每种物件分别列：期初空包装及附着/借入库存 + 新采购实收 + 首次随供货已含实收 + 首次非采购/借入实收 + 已发出同物件的真正退返收到 = 期末各类库存 + 随合格发发出 + 随拒收发退回 + 借物归还 + 其他外发 + 废物。各事件互斥，以物件号或有据的批次对应识别；内部移交抵消。逐接口记录附带负荷是否已含于原发提供者、独立购入或借用服务；仅加载一次。未知材质/所有权/负荷接口保持待证，不用默认零闭账。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| intake | 采购原发接收检验和首次放行 | required | 所声明采购路线 | 接收质量门及其包装与后续可归属服务 | per 1 kg reference flow |

没有可核实的通用产率、配方或用能范围。上述来源仅提供定性接收要求，数量须实测。输出发束是唯一参考产品；包装不是共产品。所有卡片遵守第 5、7 节完整条件。

### 过程：采购原发接收与放行（`intake`）

#### 输入

##### 产品流

###### 接收的剪取发束 （`raw_hair`）

记录全部接收批次，包括未接收并退回的批次。来料已清洁干燥；水分和杂质作为不重复相加的组成记录。供应方清洗、干燥、剪取和运输负荷须有上游证据。

- 选定流：未加工天然本色剪取人发束
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_hair。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hair`
- 来源：`banbury-selling`; `banbury-ethical`

###### 接收用电 （`intake_electricity`）

实际使用照明、称量、搬运或储存电力时纳入；取得可归属的计量电量。不虚构接收处的干燥能耗。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：每参考流可归属实测交换数量；采用 cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 新投入的束发带 （`band_input`）

仅适用于已确认采购天然橡胶束发带。随发束到达的既有带单列实物账，不重复计入生产负荷。其他束带材质须另列卡片。

- 选定流：天然橡胶束发带
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 新投入的发运封套 （`envelope_input`）

实际使用纸板封套时纳入，称量包装净质量。纸箱或塑料袋是不同交换，须增列卡片。

- 选定流：纸板封套
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 随人发到达的天然橡胶束发带 （`band_received`）

仅在材质核实时适用。逐件记录附带束发带的首次实收，包括供方已含和非采购实收。关联所有者、批次及其生产负荷是否已含在人发供应数据中；只继承一次，不作为再次采购新带。

- 选定流：天然橡胶束发带
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

###### 随人发到达的纸板封套 （`envelope_received`）

实际为该材质时适用。记录首次随供货已含或非采购封套实收、实测质量和继承负荷边界，与新采购及此前发出同一封套的真正退返分开。

- 选定流：纸板封套
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

###### 借入的聚丙烯运输箱实收 （`borrowed_box_received`）

仅在真实借入且已核实为聚丙烯箱时适用。记录箱号、所有者、实收事件、质量、既往使用、上游服务负荷及约定归还。首次借入不是外部退返，也不是采购。其他材质须另列卡片。

- 选定流：可重复使用的聚丙烯人发运输箱
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

#### 输出

##### 产品流

###### 已验收原发 （`reference_product`）

只有首次有据的合格实物放行进入 Q。数量为 1 千克。剪取时保留发根方向不代表实施了后续梳理加工。

- 选定流：未加工天然本色剪取人发束
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hair`
- 来源：`banbury-selling`; `banbury-ethical`

###### 退回寄件人的未接收发束 （`returned_hair`）

即使交易未完成，也记录退回实物发量。这是退货，不是额外合格产品或废物抵扣。

- 选定流：退回寄件人的未接收剪取人发束
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_hair。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hair`
- 来源：`banbury-selling`; `banbury-ethical`

###### 随合格发束出厂的束发带 （`band_attached`）

仅适用于所声明的束带材质。包装不计入 Q，也不是共产品。随来料继承的束带进入实物账，不重复采购。

- 选定流：天然橡胶束发带
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 随合格发束发出的封套 （`envelope_attached`）

实际发运时纳入。区分首次入库放行和后续发运，不重复计入发量产出。

- 选定流：纸板封套
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 随拒收人发退回的实收束发带 （`band_returned`）

实际退回同一束带时适用。关联来料物件/批次、退回事件及继承负荷向量；不得又计入合格发运出或废物。无关替代品是新物件，不是真正退返。

- 选定流：天然橡胶束发带
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

###### 退回寄件人的实收封套 （`envelope_returned`）

实际退回同一实收封套时适用。标识事件与物件，携带原继承负荷。丢弃封套计废物；另用的新退货封套须单列采购。

- 选定流：纸板封套
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

###### 归还所有者的借入聚丙烯箱 （`borrowed_box_returned`）

实际归还已识别借入箱时适用。匹配同箱借入和留存库存；实际返程运输与清洗服务分别记录。不产生第二次实收或新箱生产抵扣。

- 选定流：可重复使用的聚丙烯人发运输箱
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`

##### 废物流

###### 废弃人发 （`hair_waste`）

实际废弃而非退回时纳入，记录去向与付费方。拒收批次不自动成为废物。

- 选定流：废弃剪取人发
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_hair。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hair`
- 来源：

###### 废弃束发带 （`band_waste`）

该材质束带实际废弃时纳入，与人发、纸板分开。

- 选定流：废弃天然橡胶束发带
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

###### 废弃封套 （`envelope_waste`）

封套实际废弃时纳入，采用有据的处理路线。

- 选定流：废弃纸板封套
- 流属性/单位：Mass / kg
- 数量规则：每参考流可归属实测交换数量；采用 cp_pack。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_services | intake | 优先细分和直接计量；共享称量、仓储和运输等按实测可归属驱动量分摊，记录时间、载量与完整分母。不得把销售收入或捐赠价格零用作环境负荷驱动量。 |  |
| allocation_haircut | supplier | 人发物料与理发服务的共同负荷须先细分，只归属实际为收集该发束发生的服务及有据的共享部分，记录因果依据。无法证明的分配保持未知，不自动将整次理发或零负荷赋给人发。 |  |
| allocation_returns | intake | 本路线没有假定有价共产品。拒收退回、废发、包装和废物不能产生额外 Q 或避免处置抵扣。失败与退回的收集、检验和处理负荷保留在同批可归属分子中。真实有价副产品需要另行分配与边界评审。 |  |
| allocation_inherited_returns | raw_hair; returned_hair | 实物到达不证明买断。对代保管且退回的未购入发，不额外加载一次人发采购提供者；对实际购入后退回的人发，原继承的上游交换向量随退回实物转出，不同时留在合格发的分子中。自身已发生的接收、失败检验和退回服务负荷仍按有据驱动量归属。实物账保持完整，不作避免处置抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_hair | intake | raw hair; accepted hair; returns; discarded hair | weighing | 批号；采购/捐赠；卖方；颜色历史；发根方向；长度；水分；毛重皮重；接收、Q、退回、废发和期初期末未放行存量 | 校准秤逐批净称重；核对首次扎束剪取事件、来源授权/合规证据、供方批号与负荷向量，匹配首次放行；查重此前同质放行并隔离转售批次；跨期按批携带量及负荷，签认结转、放行或退还；发束不作抽齐或梳理加工 | kg | 逐批 | 完整批次及退回结案 | 收集方与接收方分别记录 | 每 1 kg 参考流 | 验收单、秤校准、水分条件、存货记录 |
| cp_exchange | intake | electricity and shared services | meter and activity ledger | 分表电量；期初期末表读数；服务驱动量及全部服务对象；供应与运输接口 | 直接计量优先；共享部分以有据驱动量归属；保留零产量和失败批次 | kWh | 每接收批次和计量期间 | 同批与同期完整窗口 | 实际供货与接收场址 | 每 1 kg 参考流 | 表计、时间日志、供应接口及分配依据 |
| cp_pack | intake | each packaging article and its waste | article ledger | 逐材质包装质量；采购；来料附着量；库存；运出量；外部退回与废物去向 | 逐物件/材质净称量；记录所有者、首次收货类别（新购、供货已含、非采购或借入）、实际同物退返关联、各期空/附着/借入库存及最终发运/退还/废弃；核对 boundary_packaging_interfaces 互斥账式；逐项核对继承负荷与人发提供者包含关系，已有覆盖不重复收费 | kg | 逐批及期末 | 同批覆盖后续包装窗口 | 接收与发运场址 | 每 1 kg 参考流 | 材质单、发票、库存、处理凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| inventory_normalization | all inventory rows | 对同批每项交换，以可归属总量除以正的首次净放行量 Q，得到每 1 kg 参考流数量；不再乘束数或除长度。Q 为零时保留总量，不输出单位结果。 | cp_hair; cp_exchange; cp_pack; Q | 每 1 kg 参考流的各项交换 |  |
| hair_balance | intake | 期初未放行发 + 到达发 = 首次放行 Q + 退回发 + 废弃发 + 期末未放行发 + 有独立证据的水分/杂物净损失。Q 内含本批期末已放行库存；后续发运不重复计入 Q。独立测量组成，不用余额同时推算水分和未知发损失。 | cp_hair | 闭合物料账与显式差异 |  |
| supplier_interface | raw_hair | 接收实物包括其继承的供应服务负荷。供应方真实水、清洗剂、干燥能源和运输逐项记录其自身收集基准及到达本批量的换算，不假设处理配方或数值；接收处不得再次计入同一上游负荷。 | cp_hair; cp_exchange; supplier data | 可追溯供应边界与缺口 | lpt-donation-2025 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_intake | intake | 逐批证明本色、无处理、根端保持、清洁干燥和真实接收要求。商家最低 14 英寸与慈善方最低 10 英寸且鼓励 12 英寸是各自条件，不是普遍行业门槛或相同批次规格。 | banbury-selling; banbury-ethical; lpt-donation-2025 |
| quality_numbers | all inventory rows | 没有可信通用范围则使用实测，不补写产率、用能、水耗、回潮率或假发寿命；来源提供定性条件而非本批数据。 | cp_hair; cp_exchange; cp_pack |
| quality_identity | all inventory rows | 逐项确认 UUID、实际提供者、包装材质与处理路径，身份待决期间不宣称数据库匹配完成。 | 可核实原始数据与供应记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | intake | 核对未经加工的真实来料史；38972 备发或制品、捐赠数据替代采购批次均不能通过本适用性校验。 | un-cpc-3-2025; lpt-donation-2025 |
| validate_reference | reference_product | 唯一产品输出链接 reference_product，参考量 1 kg；Q 必须正且只含首次验收实物，不含拒收或包装。 |  |
| validate_completeness | all inventory rows | 确认逐项实测分子、同批 Q、库存闭合、缺口和所有条件流的存在证据；无法解释差异、缺失上游或未决身份保持显式，不声称完整或已批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 后续加工前的有界原发供货输入 |
| allowed_use | 仅在实际起点、状态、规格和供应负荷相符时使用；完成独立数据质量评审 |
| excluded_use | 假发成品或佩戴服务；梳理打薄染发；捐赠绩效；零负荷或避免处置声称 |
| required_metadata | 卖方批号、质量门、净质量/水分、方向/长度、场址时期、供应与包装接口 |
| required_quality_disclosure | 测量覆盖、拒收退回、库存、共享服务、UUID 与上游缺口及科学评审状态 |
| update_trigger | 供货起点、处理、买方规格、包装材质或提供者改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC 3.0 Structure and Explanatory Notes, 30 June 2025, PDF p.197, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 38971/38972 边界；该页无额外工艺数值说明 |
| banbury-selling | literature | Banbury Postiche, Selling your hair, https://www.banburypostiche.co.uk/sellingYourHair | 第一方采购及拒收退回条件；不是本批实测或下游假发库存 |
| banbury-ethical | literature | Banbury Postiche, Ethical Policy, https://www.banburypostiche.co.uk/EthicalPolicy | 第一方原发采购、保持发根方向与毛鳞片；不等于独立伦理认证或未加工终点证明 |
| lpt-donation-2025 | literature | The Little Princess Trust, Hair Donation Guidelines, May 2025, https://www.littleprincesses.org.uk/Documents/Hair%20Donation%20Guidelines%20-%20English%20-%20May%202025%20WEB.pdf | 独立捐赠路线的清洁干燥、洗净护发产品、剪取固定和纸板封套指引；接收染发的条件是本范围反例，不为采购批次提供数值 |
