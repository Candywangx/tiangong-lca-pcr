---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.thorium-dioxide
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 已制造固态二氧化钍工厂供货核算

## 1. 范围与适用性

本PCR规定公开民用、已制造并供货单物种固态二氧化钍（ThO2，CAS 1314-20-1）的产品/废物流LCA方法。前景从在原有标识容器中、等待本门首次验收的已制造供货化合物开始，到制造商固定工厂交付门结束；不改变化学物种，不提供制造操作。上游制造负荷必须通过匹配供应方数据补全，缺失不得视为零。实际接收、储存、首次验收和交付聚合为一个前景单元，分阶段保留独立计量。化合物整体质量、元素钍质量和逐核素活度分别记账。混合物、供货溶液、金属、合金、陶瓷成品、其他钍盐、贫铀产品和废物处置服务不属于该参考身份；同位素标签本身不足以产生新PCR身份。开采/矿物精矿沿用现有矿石方法，不纳入本化合物厂门。提纯分离、富集、燃料或武器相关制造操作全部排除。本方法不证明完整CPC覆盖、辐射剂量或合规许可。`merck-thoria-89170`, `jrc-sic-2007`, `epa-marlap19-2004`

“单物种”指以ThO2命名的未配方产品等级，不表示分析纯度100%。实际杂质、水分及含量分母仍须作为整产品组成实测。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.thorium-dioxide |
| classification_refs | CPC 3.0 33630; narrower product and route boundary |
| covered_products | 制造商工厂内已制造并供货的单物种固态ThO2，仅民用厂门核算 |
| excluded_products | 贫铀；其他钍物种；混合物/溶液；矿石/精矿；金属/合金/陶瓷制品；废物处置服务；提纯分离/富集/燃料和武器制造 |
| representative_product | 固态二氧化钍 |
| production_route | 制造商工厂中已制造化合物的接收、储存、首次验收和交付；化合物制造由明确链接的上游数据覆盖，不是零负荷截断 |
| market_state | 原有标识容器中已制造单物种固态ThO2；工厂端生产混合、成品；声明实际组成及供货状态，不设默认纯度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造商固定工厂门供给首次验收的已制造固态二氧化钍 |
| How much | 1 kg |
| How well | 已制造单物种固态ThO2及CAS 1314-20-1; 实际SKU/批次及供方和来源; 独立实测首次验收产品整体净质量Q及批群关联; 组成及含量分母及游离水和结构水; 民用预期用途; 原容器/包装及皮重; 固定接收与制造商工厂交付门及首次验收准则; 原生工厂端生产混合及已制造成品状态; 上游制造/运输/包装覆盖; 报告期间及储存时长; 供电及电压; 实际清洁/事故范围; 残余物/废物接收方; 核素物种及活度单位及样本基准及参考日期及不确定度和检出能力; 不设纯度或收率或配方或能耗或活度默认值 |
| How long or cycle | 一个明确报告期间内的厂门供货；另记录储存时长 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | U235的贫化铀及其化合物，钍及其化合物，合金、分散体、陶瓷制品及包含U235的贫化铀、钍或该制品的化合物的混合物 `f9e02fdf-db98-4802-9f1d-10d680f67065` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 已制造单物种固态ThO2及CAS 1314-20-1; 实际SKU/批次及供方和来源; 独立实测首次验收产品整体净质量Q及批群关联; 组成及含量分母及游离水和结构水; 民用预期用途; 原容器/包装及皮重; 固定接收与制造商工厂交付门及首次验收准则; 原生工厂端生产混合及已制造成品状态; 上游制造/运输/包装覆盖; 报告期间及储存时长; 供电及电压; 实际清洁/事故范围; 残余物/废物接收方; 核素物种及活度单位及样本基准及参考日期及不确定度和检出能力; 不设纯度或收率或配方或能耗或活度默认值 |

数据包须在元数据、参考流备注或等效字段中声明全部限定信息。所选原生产品流比本PCR宽，仅使用其中已制造固态ThO2子集，并保留工厂端生产混合与成品状态。UUID不确定具体组成，也不自动选定ThO2供应商清单。必须核实实际完整产品名称、路线、物态、组成、备注及提供方端点；不得平均不同类别成员，或替换成矿石、天然/富集铀、组分、服务或基本排放。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_product | reference_product | Mass | kg | Q为报告期间在固定门首次验收的、独立实测产品整体净质量：新验收交付加新验收期末成品库存，每个首次验收事件仅计一次。期初已验收成品、退货、复检、改标签及内部转移不得计入新Q；cp_reference_product记录Q及唯一首次验收批次/事件关联。所有行按每 1 kg 参考流归一化。 |
| compound_element_activity | reference_product, feed_tho2, waste_tho2, th232_air, th232_water | Mass; Radioactivity | kg; kBq | 产品整体质量包含实测杂质和水分；单独记录游离水、结构水及含量分母。供货溶液不自动视作固体，溶质/载水分开，须另行适用性审查。元素钍质量来自已明确分母的实测元素含量；不得将产品kg等同元素kg或活度。逐核素活度须明确样本分量、日期、单位、不确定度和检出能力；不假定子体平衡。Bq除以1000得到kBq。 |
| energy_water | electricity, clean_water, waste_water | Net calorific value; Volume; Mass | MJ; m3; kg | 保留原始电表和水表读数；kWh乘3.6得MJ。水体积转质量使用对应温度/组成的实测密度，不采用数据库筛查密度。耗水、收集废水、内部循环、库存和实际环境排放分别核算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 等待本工厂门首次验收的原容器已制造供货单物种固态ThO2批次；明确制造终点、接收门及首次验收准则 |
| starting_condition_role | supplied intermediate |
| product_classification_scope | CPC33630中固态ThO2子集，非整个混合分类 |
| recursive_input_rule | 同类购入料链接独立上游提供方；内部搬运/回用抵消，不新增供给或信用 |
| upstream_dataset_requirement | 必须补全实物供货化合物、运输、原包装、电力、水及实际废物处理背景数据，逐一公开缺口 |
| disclosure | 已制造单物种固态ThO2及CAS 1314-20-1; 实际SKU/批次及供方和来源; 独立实测首次验收产品整体净质量Q及批群关联; 组成及含量分母及游离水和结构水; 民用预期用途; 原容器/包装及皮重; 固定接收与制造商工厂交付门及首次验收准则; 原生工厂端生产混合及已制造成品状态; 上游制造/运输/包装覆盖; 报告期间及储存时长; 供电及电压; 实际清洁/事故范围; 残余物/废物接收方; 核素物种及活度单位及样本基准及参考日期及不确定度和检出能力; 不设纯度或收率或配方或能耗或活度默认值 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_supplier | gate | 本PCR选定部分厂门供货边界，核算明确供货起点至制造商固定工厂交付终点；原料提供方负荷不为零，端点必须防止制造/运输/包装重复核算。 | merck-thoria-89170 |
| boundary_controls | gate | 实测纳入储存/交付及实际清洁或事故产生的用能、用水、残余物、废水和排放；封闭容器无排放须有覆盖证据。新增实际燃料、清洁药剂、包装组分、滤材、擦拭物及各污染物须逐项原子行，不给默认正量。 | jrc-sic-2007 |
| boundary_identity | gate | 排除任何提纯分离、富集或制造操作说明。原容器供货不证明上游制造过程完整；缺失覆盖单独报告。 | merck-thoria-89170 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| gate | 供货接收、储存、验收、交付及环境账 | required | 制造商工厂内已制造原容器固态ThO2；保留阶段计量；纳入实际清洁/事故 | Foreground gate service | 每 1 kg 参考流 |

### 过程：供货厂门核算（`gate`）

#### 输入

##### 产品流

###### 二氧化钍 （`feed_tho2`）

验收原有标识容器中实测净质量的固态二氧化钍；保留批次组成、水分、含量和上游提供方。供货溶液、矿石和混合氧化物不属于该身份。

- 选定流：U235的贫化铀及其化合物，钍及其化合物，合金、分散体、陶瓷制品及包含U235的贫化铀、钍或该制品的化合物的混合物 `f9e02fdf-db98-4802-9f1d-10d680f67065`
- 流属性/单位：质量 / kg
- 数量规则：采集期间实际跨界数量，按cp_feed_tho2校正库存和归属后除以Q；没有实测量则保持未定，不能默认零。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed_tho2`
- 来源：`merck-thoria-89170`

###### 交流电 （`electricity`）

计量实际厂门服务用电。该身份仅适用于电网平均供电、到用户消费组合、1-35千伏；核实提供方、地理、供电电压和损耗，不设生产能耗默认值。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：采集期间实际跨界数量，按cp_electricity校正库存和归属后除以Q；没有实测量则保持未定，不能默认零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`
- 来源：`jrc-sic-2007`

###### 纸盒 （`paperbox`）

仅在实际增加裁切、折叠、层压纸板折叠盒时纳入，称量完整纸盒。身份不包括内层容器、盖、衬垫、刚性运输箱或全部包装。保留原容器包装负荷归属，逐项另加实际新增材料。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：质量 / kg
- 数量规则：采集期间实际跨界数量，按cp_paperbox校正库存和归属后除以Q；没有实测量则保持未定，不能默认零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_paperbox`
- 来源：`jrc-sic-2007`

###### 处理后自来水 （`clean_water`）

仅计入纳入范围的实际事故或清洁事件中实测清洁用水；完整容器供货不默认常规正用量。体积进入水质量平衡时须核实供水处理/交付边界及实测密度。

- 选定流：处理后自来水
- 流属性/单位：体积 / m3
- 数量规则：采集期间实际跨界数量，按cp_clean_water校正库存和归属后除以Q；没有实测量则保持未定，不能默认零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_clean_water`
- 来源：`jrc-sic-2007`

#### 输出

##### 产品流

###### 二氧化钍 （`reference_product`）

在制造商固定工厂门首次验收的已制造固态ThO2产品整体净质量恰为1千克，不含容器和包装；保留实测批次含量和水分。Q将新验收交付与新验收期末成品各计一次；期初已验收库存、退货及复检不产生新输出。分别观察实际交付与首次验收。

- 选定流：U235的贫化铀及其化合物，钍及其化合物，合金、分散体、陶瓷制品及包含U235的贫化铀、钍或该制品的化合物的混合物 `f9e02fdf-db98-4802-9f1d-10d680f67065`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_reference_product`
- 来源：`merck-thoria-89170`

##### 废物流

###### 二氧化钍粉末残余物 （`waste_tho2`）

仅计入实际清除并移交具名外部废物接收方的二氧化钍粉末残余物；测定组成和残余物整体质量。污染擦拭物、滤材、容器或混合固体须分设原子行。收集不等于排放，内部回用不属于外部废物。

- 选定流：二氧化钍粉末残余物
- 流属性/单位：质量 / kg
- 数量规则：采集期间实际跨界数量，按cp_waste_tho2校正库存和归属后除以Q；没有实测量则保持未定，不能默认零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_tho2`
- 来源：`jrc-sic-2007`

###### 含钍清洁废水 （`waste_water`）

仅计入实际收集并移交具名外部处理接收方的清洁废水。称量液体或用实测密度换算实测体积，另存溶解/悬浮物和活度。该转移不属于向环境水体排放的基础流。

- 选定流：含钍清洁废水
- 流属性/单位：质量 / kg
- 数量规则：采集期间实际跨界数量，按cp_waste_water校正库存和归属后除以Q；没有实测量则保持未定，不能默认零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_water`
- 来源：`jrc-sic-2007`, `epa-marlap19-2004`

##### 基本流

###### 钍-232 （`th232_air`）

仅在实际监测确认钍-232跨越场址边界进入未特指室外空气时纳入；工作场所浓度、留存活度、总α和长期处置不得替代。Bq除以1000换成kBq；保留日期、样本分量、不确定度、检出能力和实际排出量。

- 选定流：钍-232 `08a91e70-3ddc-11dd-997f-0050c2490048`
- 流属性/单位：放射性 / kBq
- 数量规则：采集期间实际跨界数量，按cp_th232_air校正库存和归属后除以Q；没有实测量则保持未定，不能默认零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_th232_air`
- 来源：`epa-marlap19-2004`

###### 钍-232 （`th232_water`）

仅在钍-232实际排入淡水且经监测确认时纳入，不代替送处理的液体、未特指水体、地下水、海水或长期处置。活度浓度须与实际排出质量/体积、采样覆盖、日期和不确定度对应，不假定平衡或默认排放比例。

- 选定流：钍-232 `08a91e70-3ddc-11dd-9983-0050c2490048`
- 流属性/单位：放射性 / kBq
- 数量规则：采集期间实际跨界数量，按cp_th232_water校正库存和归属后除以Q；没有实测量则保持未定，不能默认零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_th232_water`
- 来源：`epa-marlap19-2004`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | gate | 优先实测直接归属和单元细分；共享设施按实证物理关系分配前须检查细分/系统扩展，特定能源/运输规则优先。该初稿不预设联产品或份额；cp_site记录实际驱动及覆盖，不用核素活度作为自动分配键。 | ef-allocation-2021 |
| allocation_physical_ledger | gate | 完整保留分配前实物质量、水和核素账；另保留分配后的负荷账，记录提供方分配。不得机械用负荷份额缩减实测成品或废物流。内部链接两端同量；回用、收集粉末和废物运输不自动成为联产品或避免负荷信用。 | ef-allocation-2021 |

## 8. 前景数据采集、计算与质量规则

权威Q是在固定参考门按唯一首次验收事件独立实测、去重汇总的净数量，各批群数量锁定原事件。下文所有“新发出加新期末成品”表达式，均为不存在其他验收后净去向时才成立的二项桥。一般情况须在原验收量基准核对Q = D_new + F_new_close + L_new：L_new单列已验收、但损失、处置或转入其他后续状态而未进入D_new或F_new_close的物料。三项为互斥净包组状态，不是毛流转量。内部循环、退回、返工、复检和暂时状态变化不能让同一验收物料重复计数。保留实际事件数量及未决库存桥，不得缩减Q掩盖损失。验收Q是参考事件账，不能再作为另一笔外部实物输出加到发货或废物上。后续服务仍用原批群正Q；原数量缺失时不得归一化。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feed_tho2 | gate | feed_tho2 | meter and acceptance record | 接收批次和容器；供方制造终点；上游负荷向量；毛重/皮重/净重kg；校准秤；含量分母；游离水分；接收日期；原料/在制品库存及批群 | 用可追溯毛皮重或校准净重记录称量或独立核实接收净质量；实物接收量、上游负荷与本门首次验收分别核对。 | kg | 每批/事件和期间汇总 | 同一声明报告期间 | 所选实际供货厂门，含全部适用阶段 | 每 1 kg 参考流 | 原始计量、校准、交接、化验和完整性证据 |
| cp_electricity | gate | electricity | meter and acceptance record | 分表起止值；kWh；倍率/复位；时间段；实际电压/地理；损耗覆盖；待机/清洁负荷；因果共享驱动及批群 | 读取完整厂门周期的校准分表，核对倍率和复位后求起止差；保留实际账单，kWh乘3.6换算MJ；使用有证据的逐交换分配。 | MJ | 每批/事件和期间汇总 | 同一声明报告期间 | 所选实际供货厂门，含全部适用阶段 | 每 1 kg 参考流 | 原始计量、校准、交接、化验和完整性证据 |
| cp_paperbox | gate | paperbox | meter and acceptance record | 纸盒结构；供方批次；实测净质量；收发存/报废；原包装覆盖；批次/批群；秤校准 | 称量实际折叠纸板盒，或用已核实数量乘实测代表性单盒净质量；核对库存领用及上游已含包装；其他每个包装组件单列。 | kg | 每批/事件和期间汇总 | 同一声明报告期间 | 所选实际供货厂门，含全部适用阶段 | 每 1 kg 参考流 | 原始计量、校准、交接、化验和完整性证据 |
| cp_clean_water | gate | clean_water | meter and acceptance record | 清洁事件；实际供水方/处理边界；水表起止；m3；实际温度/组成的密度；库存及循环；批群 | 计量匹配事件的实际清洁供水，记录来源和交付边界；仅在独立水质量核对时使用实测密度，不预设常规正需求。 | m3 | 每批/事件和期间汇总 | 同一声明报告期间 | 所选实际供货厂门，含全部适用阶段 | 每 1 kg 参考流 | 原始计量、校准、交接、化验和完整性证据 |
| cp_reference_product | gate | reference_product | first acceptance ledger | 唯一批次/事件；首次验收时间/准则；实测毛重及皮重；产品整体净质量；新验收交付；新验收期末成品；期初已验收库存；退货/复检标识；含量/水分基准；原批群Q | 使用校准秤及独立验收记录，批次/事件标识去重；将新验收交付加新验收期末成品与独立首次验收记录核对。Q排除包装和全部已验收过的数量。 | kg | 每批/事件和期间汇总 | 同一声明报告期间 | 所选实际供货厂门，含全部适用阶段 | 每 1 kg 参考流 | 原始计量、校准、交接、化验和完整性证据 |
| cp_waste_tho2 | gate | waste_tho2 | meter and acceptance record | 残余物流；物种/含量；毛重/皮重/净重kg；水分；捕集日期；暂存；具名外部接收方；转移单；批群 | 用校准秤称量具体粉末残余物，核对捕集、暂存及外部转移；保留物不是排放，其他受污染固体单列卡片。 | kg | 每批/事件和期间汇总 | 同一声明报告期间 | 所选实际供货厂门，含全部适用阶段 | 每 1 kg 参考流 | 原始计量、校准、交接、化验和完整性证据 |
| cp_waste_water | gate | waste_water | meter and acceptance record | 清洁液流；收集体积/质量；实际温度/组成的密度；溶解/悬浮含量；核素活度；储存；接收方和转移日期；批群 | 称量收集清洁废水，或用实测密度换算计量体积；核对暂存及送处理转移，匹配实验室样本；送处理液体不得归为直接淡水排放。 | kg | 每批/事件和期间汇总 | 同一声明报告期间 | 所选实际供货厂门，含全部适用阶段 | 每 1 kg 参考流 | 原始计量、校准、交接、化验和完整性证据 |
| cp_th232_air | gate | th232_air | boundary monitoring | 核素；介质/子介质；逐时间段活度和排出量；样本分量；日期；空白；检出能力；不确定度；流量/覆盖；单位 | 保留合格实验室逐核素测定及实际边界监测；活度浓度配对应排出量，不把厂内浓度当环境排出。 | kBq | 每批/事件和期间汇总 | 同一声明报告期间 | 所选实际供货厂门，含全部适用阶段 | 每 1 kg 参考流 | 原始计量、校准、交接、化验和完整性证据 |
| cp_th232_water | gate | th232_water | boundary monitoring | 核素；介质/子介质；逐时间段活度和排出量；样本分量；日期；空白；检出能力；不确定度；流量/覆盖；单位 | 保留合格实验室逐核素测定及实际边界监测；活度浓度配对应排出量，不把厂内浓度当环境排出。 | kBq | 每批/事件和期间汇总 | 同一声明报告期间 | 所选实际供货厂门，含全部适用阶段 | 每 1 kg 参考流 | 原始计量、校准、交接、化验和完整性证据 |
| cp_site | gate | scope and attribution | site ledger | 实际路线/边界图；内部成对链接；首次验收Q；逐交换共享驱动；原料/在制品/成品期初期末库存；继承与当前负荷向量；原批群服务；上游覆盖；无流证据 | 核对分配前实物流和分配后负荷账，复核实际驱动物理关系及提供方覆盖 | kg; m3; MJ; kBq | 每期间 | 同一报告期间 | 完整声明场址/厂门 | 每 1 kg 参考流 | 原始平衡表、提供方定义、实际时间/数量及监测范围 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 保留完整期间原始跨界交换，含实际失败、不合格、返工、待机、清洁及零产出区间。先守恒实物量，再用已论证的逐交换共享驱动分配负荷。按acceptance_stock_vectors核对原料/在制品/成品库存及继承向量后，各归属本期新验收批群的交换负荷只除以其正Q一次；参考产品为1千克。采集与卡片中的相除均指同一次最终报告归一，不再做第二次相除。 | period records; Q; cp_site | normalized exchange | merck-thoria-89170; ef-allocation-2021; jrc-ilcd-lci-2010 |
| activity_reporting | th232_air, th232_water | 实际逐核素排出活度[kBq]除以Q[kg]；Bq除以1000换算，保留日期/样本基准和不确定度。单物种核素与总活度不可同时作为同一放射性负荷重复表征。 | activity; matched discharge quantity; Q | kBq per kg reference flow | epa-marlap19-2004 |
| acceptance_stock_vectors | all inventory rows | Q等于独立实测的新验收交付加新验收期末成品，每个首次验收事件仅计一次。分别保留原料、在制品和成品的期初期末库存、历史逐交换负荷向量及原门/产品/路线/状态/批群关联。对每项交换e核对：期初继承负荷加本期完整期间归属负荷，等于归属新验收输出的负荷、期末结转负荷及另行披露的其他输出或原批群服务负荷之和。该式为负荷恒等式，不是实物输出计算式。期初成品交付、退货、复检和内部转移不能增大Q或重置继承负荷。已验收输出后续储存/交付服务应归回原批群及原验收Q，不得除以新Q。缺少继承向量或批群归属未决时，归一结果不完整。Q为零或无证据时保留原始总量及全部库存/向量，暂停单位结果，不借用其他分母。 | cp_reference_product; cp_site; complete exchange totals and stock vectors | once-only accepted cohort and conserved burden accounts | jrc-ilcd-lci-2010 |
| species_balance | feed_tho2, reference_product, waste_tho2, waste_water, th232_air, th232_water | 使用实测组成与不确定度分别核对总物料、水和元素钍平衡。元素钍质量、化合物质量及核素活度不能互换。若存在本不变物种厂门以外的实际转化，须另行审查生产边界并使用由实际反应计量及实测反应程度支持的物种生成量G_X与消耗量C_X；元素总量或环境分配因子不能确定G或C。本PCR不规定此类转化，也不给默认数量。 | independent masses; measured assays; cp_site; cp_th232_air; cp_th232_water | separate physical and activity reconciliations | epa-marlap19-2004; jrc-ilcd-lci-2010 |
| acceptance_event_bridge | all inventory rows | Q锁定唯一且独立实测的首次验收事件。仅L_new为零时用新发出/期末成品二项桥；否则在原验收基准核对互斥D_new、F_new_close和实际验收后净去向L_new。后续损失/服务保留原事件Q，内部/退回/返工毛流转不得重复计数。Q不另作外部实物输出。事件/库存证据未决时完整归一化不成立。 | original acceptance events; net parcel-state bridge; original cohort quantities | auditable positive event Q and separate physical stock bridge |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | 化学物种、CAS、组成、名称、实际路线和供货状态一致；支持引用按真实属性/单位链核验，身份不证明背景基准兼容。 | 商品/批次原件、实测组成、提供方定义和原始数据库元数据 |
| measurement_quality | gate | Q独立且正；完整化合物质量、元素量、逐核素活度、容器和水分各存原始账。不设统一纯度、收率、消耗、清洁效率、排放量、活度或剂量。 | cp_reference_product; cp_site; epa-marlap19-2004 |
| coverage_quality | gate | 期间/场址/储存时长与全部相关收发存及监测对应；漏测、低于检出、无流和零值分别披露。存在实际其他核素、颗粒物、清洁物、容器废物时增加独立行；颗粒物粒径嵌套不重复合计；不因温室气体口径删除实际生物CO2。 | cp_site; actual stream and monitoring register |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | 共同确认原生产品整体参考链和精确固态ThO2限定信息；化学身份缺失不能用近物种、矿石、元素或放射性流替代。上位原生身份本身不能证明化学组成和提供方证据完整。 | merck-thoria-89170 |
| validate_balance | gate | 双语参考量均为1kg；每行和采集聚合同一分母Q；仅一个成品产品输出。实物质量/水/元素账闭合到测量不确定度并披露差额；先前输入、成品、废物、环境输出和库存分别计量，不能用输入减假定废物得到成品。 | epa-marlap19-2004 |
| validate_release | th232_air, th232_water | 逐核素与介质/子介质/时间范围匹配，属性Radioactivity/kBq而不是Mass/kg。污染废水送处理不能再记作本站淡水排放；处理系统排出与存留分开，物质PM账和核素活度账同源标识，避免同一放射性负荷重复表征。缺测和未知保持未决。 | epa-marlap19-2004 |
| validate_cohort | gate | 将唯一首次验收Q与独立原始验收记录、新验收交付及新验收期末成品核对。原料/在制品/成品实物库存与继承/当前逐交换负荷向量分别守恒；旧库存交付及退货/复检不得增大Q。后续服务归回原验收批群Q。Q为零或缺失、原始数据缺失或继承向量缺失时暂停单位结果，保留原始总量和可审查缺口。 | jrc-ilcd-lci-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅在数据包独立完整验收后，用于限定供货厂门数据；方法创作不代表科学审查或数据集资格确认 |
| allowed_use | 限定民用固态ThO2供货LCA，厂门增量与含上游覆盖结果分别披露 |
| excluded_use | 完整CPC代理；其他化学/物理状态；提纯分离/富集/燃料或武器制造；剂量和安全/合规判定；把废物处置服务当产品供货 |
| required_metadata | 已制造单物种固态ThO2及CAS 1314-20-1; 实际SKU/批次及供方和来源; 独立实测首次验收产品整体净质量Q及批群关联; 组成及含量分母及游离水和结构水; 民用预期用途; 原容器/包装及皮重; 固定接收与制造商工厂交付门及首次验收准则; 原生工厂端生产混合及已制造成品状态; 上游制造/运输/包装覆盖; 报告期间及储存时长; 供电及电压; 实际清洁/事故范围; 残余物/废物接收方; 核素物种及活度单位及样本基准及参考日期及不确定度和检出能力; 不设纯度或收率或配方或能耗或活度默认值 |
| required_quality_disclosure | 身份缺口；上游/现场覆盖；不确定度/检出限；分配驱动；背景属性/数量基准；实物流和负荷账各自完整性 |
| update_trigger | 物种/供货状态/实际路线、提供方或背景定义变化；新增实际流或监测；参考UUID解决；权威来源或边界/分配修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-sic-2007 | official_guidance | European Commission, SIC BREF, August 2007; Scope PDF27/29, printed xxv/xxvii; section2.3 PDF48, printed18. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/sic_bref_0907.pdf | 仅支持通用化学品操作/储存清单考虑，不支持钍特定合成、BAT限值或因子。 |
| merck-thoria-89170 | literature | Merck/Sigma-Aldrich official product89170, Thorium oxide; product identity/formula/CAS block, snapshot2026-10-13. https://www.sigmaaldrich.com/US/en/product/aldrich/89170 | 支持一个供货ThO2化合物身份；商品含量/活度值不是通用默认值或排放测量。 |
| epa-marlap19-2004 | official_guidance | US EPA et al., MARLAP, July2004, chapter19 sections19.1,19.3.2,19.3.8; PDF1,5,9-10 / printed19-1,19-5,19-9–19-10. https://www.epa.gov/sites/default/files/2015-05/documents/402-b-04-001c-19-final.pdf | 支持被测量、样本/日期基准和测量不确定度报告，不提供实验室分离程序或数量默认值。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU)2021/2279, AnnexI section4.5, PDF/printed63. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 仅支持一般多功能性层级和实证物理关系，特定章节规则优先；不设分配份额默认值，不声称全面符合PEF。 |
| jrc-ilcd-lci-2010 | official_guidance | European Commission JRC，ILCD Handbook General guide for Life Cycle Assessment Detailed guidance，2010年3月第一版，7.4.2.6-7及7.4.2.9节，印刷页200-204（PDF页220-224）。https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 支持完整运行周期覆盖和原始交换向匹配参考输出的比例换算。首次验收去重、库存/批群逐交换负荷守恒向量及非正Q暂停是由此推导的本PCR保守一致性规则；不声称手册逐字规定这些账本公式，不提供二氧化钍生产数量或配方。 |
