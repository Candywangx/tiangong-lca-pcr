---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.additive-free-compacted-urea-fertilizer-round-tablets
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 无添加机械压实农业尿素圆片

## 1. 范围与适用性

本PCR覆盖IFDC确立的特定整品农业尿素圆片及无添加物理压实路线。完整范围、身份分类推断、阶段及核算条件保留在第5和9节，必须与各清单行一起阅读。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.additive-free-compacted-urea-fertilizer-round-tablets |
| classification_refs | CPC 3.0 34659; narrower product and route boundary |
| covered_products | 机械压实所得整品无添加农业尿素圆片 |
| excluded_products | 松散终产品颗粒；形态未证压块；NPK；外加粘结包衣强化；湿热合成；田间使用 |
| representative_product | 一个真实已证圆片等级；不规定比例尺寸质量 |
| production_route | 购入原生农业尿素；实际预处理喂料机械压实筛分回用干式控制包装验收 |
| market_state | 首次成品批次验收门的供货固态整品圆片；真实散装或包装另声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应后续使用的整品农业尿素圆片 |
| How much | 1 kg验收供货净产品 |
| How well | 实际农业等级、组成水分杂质、圆片形态及完整验收方法；无默认性能 |
| How long or cycle | 一个制造批群的首次验收；不声称田间响应或使用寿命 |
| reference_flow_link | accepted_tablets |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 真实圆片形态; 无添加农业尿素等级; 整品组成水分杂质; 原生氨二氧化碳上游供方; 真实机械路线阶段; 固定首次验收门及原Q; 原料在制成品及验收后谱系; 材料公用工程供方单位; 实际空气水分方法覆盖; 包装及整股受污染废物; 部件实物群服务史; 场址及连续时段 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_reference | accepted_tablets | 质量 | kg | 以固定首次验收门真实圆片整品供货净质量1千克为基准，排除皮重并以cp_product采集一次；不以氮当量、干尿素或发运量作分母。 |
| mass_phases | urea_feed; accepted_tablets; urea_reject; ambient_water_in; water_vapour | 质量 | kg | 分别记录供货湿基整品、实际尿素水杂质及每个真实相；体积件数转换须同等级实测密度状态或代表单件质量，不采用来源片重片径默认值。 |
| electric_reference | electricity | 净热值 | MJ | 保留真实原生电力参考属性单位，仅按3.6 MJ/kWh换算实测电量；匹配实际供方电压交付损耗，不推断燃料或强度。 |
| whole_component_waste | sack_waste; spent_sleeve; spent_roll | 质量 | kg | 一次称量真实整股受污染外运，包括滞留尿素水润滑剂；基材皮重为嵌套分账且独立核对，不等于整废物量，也不增加伴随交换。 |
| common_denominator | all inventory rows | 逐行声明属性 | kg; MJ | 所有数量均为每1千克参考流；各不重叠归属分子除以正且锁定Q，完整实物总量另留，后续批群服务沿用原Q0。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实购入原生氨二氧化碳农业尿素及外供电力材料交接 |
| starting_condition_role | 前景输入界面，不是上游负荷截断 |
| product_classification_scope | 特定无添加圆片；标注推断34659延续，不是全叶裁定 |
| recursive_input_rule | 自有回用在制配对并继承一次；购入尿素保留真实合成供方；购入成品片不属本制造路线 |
| upstream_dataset_requirement | 真实尿素制造运输、电力、维护、部件、包装及接收处理供方，匹配状态单位历史 |
| disclosure | 实际等级形态操作设备供方及条件未用证据；全部库存去向、热湿排除、方法和未决范围 |

产品是购入颗粒状或喷淋造粒尿素经机械压实所得的整品农业用尿素圆片，不故意添加粘结剂、包衣、强化剂或其他配料。IFDC《Urea Deep Placement Trainer Manual》2014年6月版印刷第2页明确说明不加其他物理或化学配料的机械压块，并将该特定产品称为圆片，照片展示原料、设备及成品。不得推断所有压块、超大颗粒、枕形块或大粒尿素都是片剂。仅纳入具有真实圆片形态证明及实际验收规格的产品。松散颗粒仅作投入，不是本成品。排除湿法溶解重结晶、热合成或转化、包覆及混合肥料、田间施用和农艺性能结论。IFDC中的片径、片重、包装重量、收率、剂量、田间损失或效益均不作默认值。

分类采用明确标注的延续性推断，不声称官方现行产品裁定。现行CPC3导言第26、50–51和55–56段将HS税目及注释用于可运输货物，第93段及当前Family说明适用原则未变。官方CPC2.1解释注释通过HS2007的3105.10定义34659，HS2017/CPC2.1对应表将3105.10完整对应34659，两侧partial标记均为0。当前34659仍名为未另分类肥料，未新增范围注释。HS2022第31章注2仅在不符合31.05形态或包装时，将包括尿素在内的氮肥归入31.02；3105.10明确覆盖本章片剂或类似形态货物，或毛重不超过10千克包装。特定IFDC圆片支持片剂分支，不依赖包装大小。未变的尿素34611名称、新增34647氮钾拆分及缺少现行详细对应表均保留为反证或限制；不能据此自动映射或覆盖全部尿素。后续权威更正或实际形态相反时须复审。

选定的原生整品尿素产品流具有CAS57-13-6、白色结晶尿素身份，并限定农业用等级及以氨和二氧化碳工业合成的原生来源；未限定仅为颗粒，也未限定地域。无添加机械压片不把整品改为养分量或另一种配制混合物。必须取得真实农业等级、包括微量杂质和水的供货组成、圆片证据及保留该合成来源的真实上游供应方。原生34611元数据作为分类反证披露；条件准入依据完整整品硬字段、现行规则及实际形态案例，不能仅凭分类标签。其概括性土壤有利措辞不提供安全性、环境效益、收率或负荷。以氮计尿素、饲料用肥料、NPK混合物或未合格供应方均不得替代。

一个前景聚合保留分阶段账：接收并净称实际尿素；调理筛分，且仅在实际安装时进行原料或回料粉碎；计量喂料与实际压机或辊穴；无添加压实；分离筛选完整圆片、细粉和不合格品；将兼容细粉返至父批次；捕集粉尘、干式清洁、取样、包装或散装装车、验收及管理已验收库存。IFDC确立真实尿素操作；SAHUT-CONREUR另列尿素压块应用，并说明条件性预处理及整线筛分、包装、公用工程和除尘。其一般粘结剂、热处理和薄片造粒选项不属于本路线。不得把已验收圆片粉碎成散粒后仍称圆片。设备及辅助选项须有实际证据，不规定机型、压力、速度、电耗、密度、收率或寿命。不得为了符合范围而隐藏真实阶段、化学品或热量。

实物账覆盖全部外部接收、返还、交付、取样、不合格物、排放，以及原料尿素、在制品、验收或隔离成品、细粉、粉尘、容器、油和资产的期初期末库存。每次内部转移须等量配对并保留实际组成，仅在聚合边界抵消循环。负荷账另行结转自有既有前景工作、新工作、上游供应、期末结转及终端归属。期初在制品向量仅继承一次，不重新加入已包含的投料或仪表量。供应方汇总量与其嵌入拆分只能择一，不得叠加历史。返工和旧验收库存保留原谱系，不得成为无负荷原料。

在一个固定圆片验收门，将原批群唯一真实首次验收的整品供货净千克之和锁定为Q。压机总通过量、内部细粉、复检、退货、返工再验收及期初成品发货均不增加事件。Q不是新增外部实物输出。原Q0须按原验收基准分为互斥的净剩余外部交付、全部真实场内已验收状态（含留存、隔离、返工或在制）、不可逆损失、样品及其他终端处置。退货和循环是转移，不是第二去向。后续外部新增另记，绝不得把已损尿素或水恢复到幸存量后又计一次损失。仅在证明其他所有验收后状态、出口及损失均不存在时，才能简化为交付加新增成品库存。后续储存、修复返工、包装及资产服务继续用原Q0。Q为零或未知时保留原始总量，归一化未解决。

分配前守恒整股湿物料及实际C/H/N/O和杂质或金属账，不能改用氮当量质量。尿素、水及每种真实转化物种须分别追踪。仅当真实记录支持时，物理压实才按无化学转化处理；水解、降解、氧化或热转化须记录真实生成消耗并审查扩展，不能假定反应物种守恒。吸湿是独立真实进水，失水是独立外出相。依据实测相态、库存组成和原批群谱系，不人为恢复干质量。捕集尿素、样品、不合格品与排放颗粒物互不重叠。PM整股质量与其中尿素、氮、水属于嵌套证据，不能为同一颗粒再加基本流排放。未测差额保持未解决，不能以收率、纯度、物种余量或分配份额强行闭合。

实物空袋接收、交付皮重、可复用外部返还、客户退回、报废及期初期末空袋或装料袋均按原袋标识记录，与圆片净重分开。真实制造或复用服务仅归属一次，复用不增加制造或共功能。每个真实受污染袋、滤件或辊件外运均作为一个接收方整股废物质量，包括实际滞留的尿素、水、油或润滑脂。基材皮重、污染物和水分为嵌套分账，不是额外粉体、水废物交换，也不重复处理负荷。只有在边界前有实际分离记录时才能另列残渣流。整股废物总量须等于嵌套组分，而包装或实物群库存桥按各自基材基准守恒，不得遗漏接收负荷中的污染物。

逐一追踪实际聚酯滤袋及合金钢辊件的实测质量或件数、尺寸、配置、装拆、维护、滞留尿素和原服务批群。完整实物群库存转移与供应方制造或服务需求分别保留。新件或替换件可跨期间继续安装，不能把全部质量列为当期粉体损失。服务需求仅由兼容供应方单位及真实历史推导，既有批群与后续服务只继承一次。禁止假设机器质量、寿命、年化更换率或回收抵扣，其他真实部件材质须另设卡。

电力为用户界面实际外供交流电。保留原生净热值属性和MJ参考约定；实测电量kWh乘3.6仅为单位换算，不代表燃烧、供热或能耗强度。真实兼容发电、交付供应方及损耗仅连接一次。本机械路线不故意使用蒸汽、燃烧器、热干燥或加加工水；实际热或湿工序须复审范围并保留完整真实界面，不能藏于匿名公用工程。计量实际驱动、粉碎、喂料、抽风、吸尘、筛分、包装、质检、待机及返工。核对实际能量或功、物料焓态、库存能量及有独立证据的散热和不确定性，不能为闭合差额编造热或水输出。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | tablet_compaction | 纳入上述完整来源合格路线的全部真实阶段辅助，未用须记录；新增真实材料物种须设原子行后才可构成完整数据集。 | ifdc-urea-tablets-2014; sahut-briquetting-2026 |
| boundary_identity | accepted_tablets | 应用完整圆片形态、农业整品尿素及上游合成限制，保留原生34611反元数据及明确现行延续推断限制。 | ifdc-urea-tablets-2014; wco-fertilizers-2022; unsd-cpc3-2025; unsd-cpc21-continuity |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tablet_compaction | 尿素圆片物理制造聚合 | required | 满足第5节完整条件的真实无添加圆片路线 | foreground | 每 1 kg参考流 |

### 过程：尿素圆片压实 (`tablet_compaction`)

#### 输入

##### 产品流

###### 购入粒状尿素 (`urea_feed`)

实际农业用尿素整品投入，含实测水分及微量杂质；须有原生氨与二氧化碳合成来源、真实等级供应方及净接收投料库存史。不得改为以氮计、免除上游制造或以购入成品片替代。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性/单位：质量 / kg
- 数量规则：由cp_material记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_material
- 来源：ifdc-urea-tablets-2014

###### 电动设备与辅助用电 (`electricity`)

实际分表记录混合喂料压机、粉碎筛分、风机吸尘、包装质检及归属待机返工用电；保留实测千瓦时与原生MJ换算，核对真实电压、供方时空及交付损耗边界。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：由cp_power记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_power
- 来源：sahut-briquetting-2026

###### 矿物液压油补充 (`hydraulic_oil`)

仅实际使用矿物油液压回路时纳入；测量供货配方等级、补充返还及油库存。它用于设备服务，绝不是圆片故意添加的粘结剂；其他实际油液须独立身份与卡片。

- 选定流：矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：由cp_maintenance记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_maintenance
- 来源：sahut-briquetting-2026

###### 轴承润滑脂 (`grease`)

仅安装设备实际使用锂皂基润滑脂时纳入整配方实测服务用量；记录封闭、残留及真实供方，污染物嵌套于真实去向，不自动成为产品配料。其他润滑脂化学类型须独立设卡。

- 选定流：锂皂基润滑脂
- 流属性/单位：质量 / kg
- 数量规则：由cp_maintenance记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_maintenance
- 来源：sahut-briquetting-2026

###### 空无内衬牛皮纸袋 (`sack_input`)

实际使用无内衬纸袋时纳入，核对结构与皮重；每项真实内衬、封口、标签、托盘或缠绕膜均须独立原子投入和转移桥，通用纸袋身份不证明其存在。散装交付仍须真实操作和交接记录。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 / kg
- 数量规则：由cp_pack记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：sahut-briquetting-2026

###### 聚酯滤袋服务 (`filter_sleeve`)

仅真实聚酯滤袋基材纳入，按实测配置和真实历史分别守恒入场物料或实物群与归属制造服务需求；不设默认寿命，不把仍安装的滤布算作当期外运。

- 选定流：聚酯除尘滤袋
- 流属性/单位：质量 / kg
- 数量规则：由cp_asset记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_asset
- 来源：sahut-briquetting-2026

###### 合金钢辊件服务 (`roll_segment`)

仅真实可更换合金钢辊或模穴辊件纳入，实测材质、尺寸和质量件数，保留新制、修复、安装历史及实际供方单位；其他工具须独立具体行。

- 选定流：合金钢压块辊件
- 流属性/单位：质量 / kg
- 数量规则：由cp_asset记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_asset
- 来源：sahut-briquetting-2026

##### 基本流

###### 真实吸收大气水分 (`ambient_water_in`)

仅计通过兼容实测水分和相态记录独立确认的尿素、库存或设备在声明空气界面的净吸水；不是购入工艺水，也不是虚构平衡项。未变载气不是购入氧气产品。

- 选定流：从环境空气吸收的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：由cp_water记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_water
- 来源：ifdc-urea-tablets-2014

#### 输出

##### 产品流

###### 首次验收圆片 (`accepted_tablets`)

固定首次验收门的整品供货净质量1千克真实无添加农业尿素圆片，包含实测水分杂质和声明形态等级；Q为独立事件基准，不是在真实库存交付之外额外增加一次实物装运。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_product
- 来源：ifdc-urea-tablets-2014; wco-fertilizers-2022

###### 交付纸袋皮重 (`sack_delivered`)

随圆片离厂的实际完整纸袋等效空袋皮重，排除内容物并保留原袋所有权和谱系；包装不形成第二参考产品、共功能或避免制造。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 / kg
- 数量规则：由cp_pack记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：sahut-briquetting-2026

###### 向场外返还可用纸袋 (`sack_returned`)

仅计真实向已识别场外所有者返还的可用空袋，内部复用留在库存或转移账；受污染损坏外运属于整股废物，不属于本产品返还行。

- 选定流：纸袋 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 / kg
- 数量规则：由cp_pack记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：sahut-briquetting-2026

##### 废物流

###### 单独外运尿素不合格残渣 (`urea_reject`)

一个真实分流的尿素不合格品或清洁粉体外运流，测量湿重、组成和接收方；内部细粉不是废物外运。不得在此重复已随袋或部件外运的附着物，不同去向须另设卡。

- 选定流：无添加尿素不合格残渣
- 流属性/单位：质量 / kg
- 数量规则：由cp_residue记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_residue
- 来源：ifdc-urea-tablets-2014

###### 整股受污染废纸袋 (`sack_waste`)

向实际接收方的一次整股实物外运，包含纸基材、附着尿素和水及实测污染物；皮重、尿素和水为嵌套分账，除非外运前真实分离，不得再同步列为外部流。

- 选定流：含滞留尿素的废弃牛皮纸袋
- 流属性/单位：质量 / kg
- 数量规则：由cp_pack记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_pack
- 来源：sahut-briquetting-2026

###### 整股受污染废滤袋 (`spent_sleeve`)

一个实际整件外运滤袋，含基材、滞留尿素、水及其他实测污染物；基材实物群另行核对，滞留物为嵌套组分，不再加入尿素残渣或PM。

- 选定流：含滞留尿素的废聚酯滤袋
- 流属性/单位：质量 / kg
- 数量规则：由cp_asset记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_asset
- 来源：sahut-briquetting-2026

###### 整股废弃辊件 (`spent_roll`)

实际废弃辊件存在时按整件记录，钢、附着尿素、润滑剂和水作为实测分账，并明确接收方；可用件送修须采用真实产品服务状态及经审查接口，不能自动当废钢或赋信用。

- 选定流：含滞留残余的废合金钢辊件
- 流属性/单位：质量 / kg
- 数量规则：由cp_asset记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_asset
- 来源：sahut-briquetting-2026

###### 外送废液压油 (`used_oil`)

仅真实单独收集并外送的废油液纳入整股实测组成和接收方；已滞留在废件或其他整股废物中的油不得再计本油液外运。

- 选定流：废矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：由cp_maintenance记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_maintenance
- 来源：sahut-briquetting-2026

###### 单独收集废轴承润滑脂 (`spent_grease`)

仅真实独立外送废润滑脂流纳入，并含实测污染物；已嵌套于整件或清洁废物的脂不能在本行再次外运。

- 选定流：废锂皂基润滑脂
- 流属性/单位：质量 / kg
- 数量规则：由cp_maintenance记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_maintenance
- 来源：sahut-briquetting-2026

##### 基本流

###### 实际含尿素颗粒物释放 (`dust_air`)

通过实际控制后跨越室外空气未特指子环境界面的真实颗粒物质量，旁路和无组织覆盖须另证；不推定粒径分级、来源案例因子或影响表征。尿素、氮及水含量为嵌套分析证据，不增加一次排放。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 / kg
- 数量规则：由cp_air记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_air
- 来源：epa-pm17-2017; epa-pm5-2017

###### 真实水蒸气释放 (`water_vapour`)

仅计尿素、库存或控制设施向室外空气释放且有实测或独立依据的净水量；滞留水和游离水与干颗粒质量分开，不编造干燥收率或默认蒸发。

- 选定流：向环境空气释放的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：由cp_water记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_water
- 来源：ifdc-urea-tablets-2014

###### 独立确认的散热 (`heat_air`)

仅实际驱动压机控制的散热有独立证据时纳入，保留状态、量测或模型及不确定性；未解释能量差额不是实测热交换，应保持未解决而非强填本行。

- 选定流：向环境空气排出的热
- 流属性/单位：能量 / MJ
- 数量规则：由cp_power记录每 1 kg参考流的本行实测归属量；以锁定Q归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：cp_power
- 来源：sahut-briquetting-2026

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_function | tablet_compaction | 真实圆片产品为唯一参考功能。废物滞留粉尘部件返还及包装转移为实物去向，不自动成为共功能或避免生产抵扣；真实新增销售功能须审查分配并保留全部真实实物数量。 |  |
| cohort_services | all inventory rows | 先按批次分表追踪，再按已证真实因果驱动分配共享服务。保留自有继承向量及原服务批群，供方汇总或不重叠拆分择一；分配仅改变负荷份额，不改实物质量、Q或真实废物PM数量。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | tablet_compaction | accepted_tablets | acceptance_record | 事件标识时间；父批群；真实圆片形态；农业等级；组成；毛皮净重；水分；原料在制成品边界；后续交付退货返工隔离取样损失；原基准 | 校准净称重，或可追溯体积配合真实密度状态；首次验收仅锁定一次并追踪所有后续状态。保留完整父链与实测组成，不重建为干基或氮当量。 | kg | 每次验收和状态改变 | 连续生产时段及完整原批群历史 | 一个真实圆片等级场址和固定验收门 | 每 1 kg参考流 | 秤校准；真实验收方法检验单；形态照片尺寸；事件唯一；原基准库存处置闭合 |
| cp_material | tablet_compaction | urea_feed | receipt_charge_stock | 供方品号；CAS；农业等级；原生氨二氧化碳合成；湿基净重；水分杂质；接收返还投料；原料在制库存；实际上游参考单位历史 | 整品供货尿素单独称量，按批核对库存投料返还。取得真实供方组成、完整适用采样分析程序及不确定度，并匹配制造运输清单。 | kg | 每次接收投料返还及盘库 | 同生产时段及继承供应在制历史 | 真实原料交接及相关原生合成供方 | 每 1 kg参考流 | 磅单；真实等级方法版本样本基准；供方单位路线；库存核对；不重复嵌入历史 |
| cp_power | tablet_compaction | electricity; heat_air | meter_state_energy | 表计设备；千瓦时及MJ；时间；电压供方；供应损耗边界；批次待机返工驱动；实际物料空气温度焓基准；有证据热转移；未决差额 | 分表计量真实驱动辅助设备，以有依据共享驱动核对全场总量；保留kWh乘3.6及真实原生净热值/MJ参考。热量仅由独立量测或有记录已验证状态模型确定，不强填差额。 | MJ | 连续或有界抄表时段；真实热观测 | 全生产期含待机返工及后续批群服务 | 真实用户电力及真实热转移界面 | 每 1 kg参考流 | 校准；原生换算；实际供方损耗；阶段时间驱动；焓或模型证据；披露原能量差额 |
| cp_pack | tablet_compaction | sack_input; sack_delivered; sack_returned; sack_waste | container_transfer | 袋标识材质结构；皮重件数；内容物；接收交付返还客户退回；空满库存；整股受污染废物；嵌套纸尿素水油；真实接收方；制造周转服务 | 配对空满袋及各外部转移称重，纸皮重独立守恒；每项受污染外运按整股称量并核对嵌套组分。未证明边界前实际分离时不增加伴随粉体交换。 | kg | 每次包装返还报废转移及库存边界 | 全生产过程及继承袋谱系 | 实际袋配置；散装操作另留真实证据 | 每 1 kg参考流 | 配对皮毛重票；所有权周转；整废物与基材闭合；接收供方范围；不设共功能抵扣 |
| cp_asset | tablet_compaction | filter_sleeve; roll_segment; spent_sleeve; spent_roll | asset_cohort_history | 部件标识材质；实测质量件数尺寸；配置；装拆修复；期初期末实物群和转移；原服务批群；滞留尿素水润滑剂；整件外运和嵌套基材；供方单位历史 | 称真实部件，分别核对实物群基材、整件受污染外运及滞留物。仅按真实历史归属兼容供方制造服务；后续更换保留原服务批群，不假定寿命。 | kg | 每次安装服务拆除及实物群盘点 | 跨生产期完整实际服役历史 | 真实滤袋及合金钢工具；其他部件单独准入 | 每 1 kg参考流 | 实测尺寸质量；工单；原批群；兼容供方单位；基材和污染质量闭合 |
| cp_maintenance | tablet_compaction | hydraulic_oil; grease; used_oil; spent_grease | fluid_grease_history | 逐项配方等级；供货量；水分污染；设备位置；接收返还；期初期末油脂库存；泄漏滞留；真实独立废物流和接收方；已含服务 | 逐项称真实配方及独立外送废物流；留在整件或废物上的材料仅作嵌套污染，库存及真实供方需求只核对一次。其他实际润滑清洁材料须独立设卡。 | kg | 每次加注服务排放及库存边界 | 全生产期及继承回路库存史 | 实际液压轴承界面，未使用须有明确证据 | 每 1 kg参考流 | 供方等级；称量；服务记录；库存污染闭合；真实接收方且不重复外运 |
| cp_residue | tablet_compaction | urea_reject | segregated_residue | 来源父批；整股湿重；尿素水杂质；真实独立流；捕集回用取样不合格状态；库存；接收方；去向状态 | 称量各真实独立外运残渣，采集真实组成去向；内部回用或仍留存粉尘列库存配对转移，不能重复已随袋滤件部件外运的污染物。 | kg | 每次外运及库存质量状态变化 | 全生产期含开机清洁返工 | 真实分流不合格物及接收界面 | 每 1 kg参考流 | 磅单；代表样及完整适用分析法；接收证据；组分库存闭合 |
| cp_air | tablet_compaction | dust_air | particulate_test | 排口无组织旁路；实际尿素水杂质；浓度；气流时长；滤膜洗液空白质量；温度无关证据；气体温压湿度；回收转化试验；漏气校准；工况；检出限；不确定度 | 使用完整且有独立依据、适用基质的程序；Method17须满足全部温度气体几何范围及Methods1/2/3/5依赖，证明真实尿素回收、水基准和无诱发变化。将同基准浓度乘体积流量对时间积分；无组织旁路可凝结覆盖另证。 | kg | 代表性监测运行及全部异常工况 | 生产期内生产待机储存清洁装车 | 全部真实环境出口；捕集另记 | 每 1 kg参考流 | 完整方法版本依赖；尿素回收和相态试验；空白校准漏气；覆盖；真实介质；PM和组分不重复 |
| cp_water | tablet_compaction | ambient_water_in; water_vapour | moisture_phase_ledger | 界面方向；实测水分时间状态；原料在制成品部件残渣水；实际空气湿度温压气流；吸放水；不确定度；原批群归属 | 代表性密封取样，采用有空白回收和不确定度的完整真实适用水分程序；用独立空气水交换证据核对相态库存，保留差额，不制造吸水蒸发来闭合。 | kg | 每批状态及代表性环境时段 | 同一生产期及原验收批群 | 真实原料在制成品粉尘部件及大气界面 | 每 1 kg参考流 | 样品保存；方法范围版本；校准回收；湿度状态证据；无隐藏水或干质量恢复 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_inventory | all inventory rows | 将各不重叠归属生产期交换除以正且锁定Q，报告每1千克参考流；保留实际实物总量，后续服务保留原Q0。 | 逐项实测交换; Q; cp_product; 相应行协议 | 逐项原行单位每1千克参考流 |  |
| acceptance_bridge | accepted_tablets | Q为唯一首次验收净质量之和；原Q0等于原基准互斥净剩余交付、全部场内验收状态、不可逆损失和其他终端处置，后续新增另扣；循环或恢复损失不增加Q。 | 唯一事件; 原净质量水分; 父链状态退货损失史; cp_product | 锁定Q及原批群处置残差 |  |
| physical_closure | all inventory rows | 期初实物库存加真实外部投入等于期末库存加真实外部输出，成对内部转移抵消。整湿物料、实际C/H/N/O、杂质金属及水相独立于负荷分配守恒；真实转化采用真实生成消耗并复审路线。整废物组分和PM组分保持嵌套，不增加流。 | 实际库存转移; 代表组成; cp_material; cp_residue; cp_water; cp_pack; cp_asset | 带不确定度的未分配整品组分元素相态残差 | ifdc-urea-tablets-2014 |
| burden_history | all inventory rows | 自有继承前景在制向量加互斥新工作及上游向量等于期末结转向量加终端归属向量；保留批群切口，供方汇总量或其经验证不重叠拆分择一，不叠加。 | 继承向量; 新实际服务; 供方范围; 期末库存; 原批群 | 不重复的归属负荷账 |  |
| energy_conversion | electricity | 电力MJ等于实测千瓦时乘3.6，仅用于匹配选定原生净热值/MJ参考。核对真实物料状态功和库存能量及有独立依据的热，不将未知差额强填heat_air。 | 表计千瓦时; 真实参考单位; 状态焓; cp_power | 匹配电力及有独立证据的能量账 | sahut-briquetting-2026 |
| pm_integral | dust_air | 将真实同基准浓度乘气体体积流量对时间积分，采用适用方法完整空白回收漏气状态校正。仅汇总互不重叠真实排口和独立确认无组织负荷；PM质量及其中实测尿素氮水为一个交换及嵌套分析证据。 | cp_air; 浓度; 体积流量; 时间; 真实基质和范围试验 | 真实大气颗粒物千克及覆盖缺口 | epa-pm17-2017; epa-pm5-2017 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | 核对真实整品组分类型、CAS、形态组成、原生限制及真实供方属性单位。必须满足真实无添加圆片准入及分类推断限制，仅分类标签不足。 | 完整原生记录；供方合成等级及真实形态验收证据 |
| basis_cohort | all inventory rows | 要求正且锁定Q、唯一事件和完整原基准验收后闭合，原料在制成品退货资产及继承负荷须同声明范围；Q未知则保留原总量，不形成完整归一化结果。 | cp_product；全部实物负荷账；父链事件审核 |
| matrix_methods | all inventory rows | 保留真实尿素水分残渣基质的完整实际采样保存、方法版本单位和校准空白回收不确定度；不从IFDC案例、原生分子式或有限检查推断等级、干质量换算或PM适用性。必要程序未知时阻止完整适用数据。 | 真实完整实验程序结果；代表样；基质与方法范围证据 |
| whole_waste_assets | sack_waste; spent_sleeve; spent_roll; filter_sleeve; roll_segment | 整股真实外运及嵌套污染与基材实物群皮重和供方服务需求分别保留；不设虚构分离粉体、默认寿命、重复处理或自动回收抵扣。 | cp_pack；cp_asset；整股嵌套质量及接收审核 |
| air_and_energy | dust_air; electricity; heat_air; ambient_water_in; water_vapour | 证明真实源基质适用性及完整出口覆盖，匹配真实供方状态单位。温度液滴饱和诱发变化或气道几何冲突须采用另行审查适用程序；未测水能量空气路径不为零，也不强行闭合。 | cp_air；cp_power；cp_water；完整方法依赖和真实表计状态试验 |
| coverage | all inventory rows | 覆盖连续代表时段的开机正常生产待机返工取样清洁维护包装装车及真实异常损失。实际UUID供方数量缺失须披露，来源方法缺陷及科学研究资格不能以机械检查成功替代。 | 九项协议；完整真实流程图；运行取样覆盖；明确未用与缺口记录 |

## 9. 校验规则

固定干粉取样须有完整适用基质的程序，不能假设颗粒物方法可互换。EPA Method17在真实烟道温度下用烟道内滤器等速取样，去除未结合水后重量定量。其明示范围要求实际源温区内PM与温度无关、无液滴或饱和气体、探头阻塞合格，并完整实施Methods1/2/3/5依赖方法、空白、漏气校准、回收、称量及气体状态计算。它是方法依据，不是现行法规符合性结论。须证明尿素回收、吸湿水分基准及取样分析不引起转化；加热Method5或烘箱处理不能自动用于尿素。条件不符或必要程序未知时不能形成完整适用结果，须取得独立审查的适用程序，不能强加经验修正。无组织、旁路、清洁和可凝结覆盖须另评估，未测不等于零。纳入场内测试时，实际每种试剂、材料与废物须设独立卡，或采用完整真实实验室供应方边界。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | accepted_tablets | 必须满足第5节完整特定产品形态路线、原生合成供方准入、全部有序限定和明确推断分类限制；纯养分基准、散粒或形态未证压块不能只凭肥料标签合格。 | ifdc-urea-tablets-2014; wco-fertilizers-2022; unsd-cpc3-2025; unsd-cpc21-continuity |
| validate_cohort | accepted_tablets | 核查完整首次原事件及互斥验收后桥，不恢复损失或再计循环去向，涵盖全部库存退货及后续新增；Q未知或零时不能形成归一化完整结果。 |  |
| validate_physical | all inventory rows | 独立核对整湿质量、真实元素物种相态、完整包装资产基材库存及含嵌套组分的整股受污染接收外运；不编造闭合交换或重复组分PM废物负荷。 |  |
| validate_history | all inventory rows | 归一化或分配前核查自有在制继承、原服务资产批群服务、完整外部供方及不重叠嵌入历史，缺失真实操作或供应不等于零。 |  |
| validate_methods | dust_air; ambient_water_in; water_vapour | 应用上述完整基质方法来源限制。有限一致性通过不证明真实采样适用、科学批准或研究资格；必要程序未合格、路径未测或供方未匹配仍明确阻止完整适用数据。 | epa-pm17-2017; epa-pm5-2017 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅在形态等级供方匹配且清单合格时作实际圆片供应背景 |
| allowed_use | 采集真实场址时段批群的无添加圆片物理制造清单 |
| excluded_use | 覆盖全部34659；全部尿素压块映射；养分当量；田间剂量性能；默认配方收率因子；未合格基质 |
| required_metadata | 全部有序限定；完整第5/9节条件；真实供方单位；原Q谱系；原始实物负荷账；方法证据及不确定度 |
| required_quality_disclosure | 披露真实身份方法供方数量缺口、分类推断限制及历史来源范围；不以机械检查提升科学研究就绪 |
| update_trigger | 真实形态配料等级、热湿阶段、设备供方、采样基质、验收批群、包装部件或权威分类变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ifdc-urea-tablets-2014 | handbook | IFDC, Urea Deep Placement Trainer Manual (June2014), PDF5/printed2; cover/backcover. https://api.hub.ifdc.org/server/api/core/bitstreams/c68c2573-f0ba-4f8e-8921-48e03cf538b5/content | 真实无添加物理压实及圆片产品，含原料设备产品图；来源尺寸重量收率剂量农艺表现和环境结论均不作默认值。 |
| sahut-briquetting-2026 | handbook | SAHUT-CONREUR, Briquetting Process; Fields of Application; complete lines, undated web documents, snapshot2026-11-08. https://sahutconreur.com/en/equipment-briquetting-process.html ; https://sahutconreur.com/en/equipment-briquetting-fields.html ; https://sahutconreur.com/en/ | 独立设备制造商背景：存在尿素压块；预处理公用工程除尘整理为真实可配置界面。热铁粘结剂数值工况效益及薄片造粒条件不证明本尿素圆片路线。 |
| wco-fertilizers-2022 | official_guidance | WCO HS Nomenclature2022 Chapter31, complete pp1-3, note2(a)(viii), notes3-6 and31.05/3105.10. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0631_2022e.pdf?la=en | 真实片剂类似形态或小包装条件及氮肥形态例外；仅分类背景，不是现行个案法律裁定，也不提供净产品包装质量换算。 |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Introduction §§26,50-56,72-74,93,105 and Explanatory Notes (30June2025) PDF164-167; current Family detail. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Introduction.pdf ; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; https://unstats.un.org/unsd/classifications/Family/Detail/2100 | 现行HS适用及延续规则、未变34659名称和相关全部肥料邻类；新增氮钾拆分及缺少详细现行对应限制明确推断的窄解释。 |
| unsd-cpc21-continuity | official_guidance | UNSD CPC Version2.1 complete publication, PDF81/printed67 andPDF297-299/printed283-285; official CPC2.1–HS2017 CSV header and fertilizer rows2059-2082. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPCv2.1_complete(PDF)_English.pdf ; https://unstats.un.org/unsd/classifications/Econ/tables/CPC/CPCv21_HS2017/CPC21-HS2017.csv | 历史明确通过HS2007的3105.10定义34659，以及两侧partial均0的HS2017完整对应；仅限相应版本，不冒充官方现行CPC3对应。 |
| epa-pm17-2017 | official_guidance | US EPA Method17,3August2017 Internet version, complete pp1-7 including §§1-2,6-12 and Figures17-1/2. https://www.epa.gov/sites/default/files/2017-08/documents/method_17.pdf | 条件性不加热烟道内等速可过滤PM重量法、范围温度气体几何限制及Methods1/2/3/5依赖；不证明尿素基质普遍有效、无组织可凝结覆盖、粒径归属或现行法律合规。 |
| epa-pm5-2017 | official_guidance | US EPA Method5,2August2017 Internet version, complete dependent sampling/recovery/calibration/analysis/calculation sections. https://www.epa.gov/sites/default/files/2017-08/documents/method_5.pdf | 保留Method17依赖及完整重量质控回收气态框架；加热或烘箱变体不自动移用于尿素，仍须真实保持基质且合格的程序。 |
