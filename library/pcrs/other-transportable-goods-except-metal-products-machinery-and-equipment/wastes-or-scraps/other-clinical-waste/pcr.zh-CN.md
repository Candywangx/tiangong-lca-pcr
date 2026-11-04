---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-clinical-waste
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未处理的已用 Injekt/Sterican 静脉采血锐器

## 1. 范围与适用性

本 PCR 保持“其他临床废物”原身份，仅覆盖成人诊断性静脉采血产生的一种具体临床物料：已用且仍连针的 Injekt Luer Solo 2 ml REF 4606027V 与 Sterican 标准 21 G x 1.5 inch REF 4657527 组件。本方法不是混合医院废物选择器。原聚合物/金属/涂层组件及真实残留血液保持整体，收集容器质量独立。本规则是已识别制造商文件与 WHO 操作/管理指南的透明技术综合，不是某医院或某当代采购订单的观察记录。不提供组成比例、残液量、器械 kg/件、密度、病原阈值或默认负荷份额。

不得用未用器械、纯 PP 废料、回收颗粒、分离钢或处理服务替代。药物废物（39931）、城市废物（39910）、混合锐器、分离针头、其他针筒材质/配置以及经化学/热处理物料均不属于本参考。真实临床实践、法律分类、运营许可及接收接受须有现行当地第一手证据，本 PCR 不授予这些状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-clinical-waste |
| classification_refs | CPC 3.0:39939；更窄的临床物料范围；不表示已接受 mapping |
| covered_products | 已用未处理且连针的 Injekt 4606027V / Sterican 4657527 成人静脉采血组件，含真实滞留血液 |
| excluded_products | 未用器械；纯聚合物废料；分离针头；混合医院废物；沾药/细胞毒/放射废物；散装血液；标本管；手套/擦拭物/帽/包装；已处理或已回收物料；处理服务 |
| representative_product | 未处理的已用 Injekt/Sterican 静脉采血锐器 |
| production_route | 已制造无菌针筒及针头 → 有记录的成人静脉采血和标本转移 → 连针弃置 → 实际 Medibox 2.4 L REF 9193600 隔离 → 封闭标识内部移动密闭称量检查 → 受控库首次接收；后续储存/发运保持原 cohort |
| market_state | 声明受控实物交接门的使用后未处理临床锐器；不意味无害或废物终止状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应已识别隔离且未处理的已用采血物料，供后续受控管理 |
| How much | 在声明受控库门新增首次接收的 1 kg 实收已用组件净质量 |
| How well | 确切有记录的器械配对及来源；附针；真实残留血液及未处理状态；已接受密闭容器；可追溯净质量及接收准则 |
| How long or cycle | 一个原始首次接收 cohort Qc；后续服务不形成另一生产数量 |
| reference_flow_link | first_release_sharps |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他医疗废物 `3fa36111-2daf-45fd-ad0b-474703389035` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 确切针筒/针头物件及供应批; 成人诊断性静脉采血来源和标本转移记录; PP 筒身与 PE 推杆以及钢针管 PP 针座和有机硅（silicone）涂层; 实际固有标记添加剂及供方组成限制; 附着未护套针头和滞留残血证据; 使用后未处理状态及无未经核实消毒或病原主张; 未混入药品放射性及细胞毒物的证据; 密闭实收组件净质量及每项实测皮重; 首次接收 Q 原 cohort Qc 和接受准则; 期初期末 WIP FG 未用库存和逐交换继承向量; 实物毛量 V 与归属 A 独立; 每个真实组件 P N_ext ER 实收及 S EO W 出口; 所有权 provider 已含范围和真实增量合同服务; 场址地区期间真实设施和计量不确定性; 真实地区现行条款与接收接受; 原生 Product 质量 在工厂 未指定处理限制及真实 provider 兼容性 |

全部限定信息须进入真实数据包元数据或交换上下文。有依据的不存在应明示，未知不等于实测零。所选原生身份为泛化的 Product 流，正式名为“其他医疗废物”：生产混合、在工厂，未指定处理；唯一属性为质量；未固定 CAS、组成、牌号、地理、消毒状态或病原阈值。其唯一一般注释仅说明其他临床废物。这不确立 provider，也不允许混合医院废物平均。只将其绑定于本规定已用且连针的 Injekt/Sterican 采血组件和声明的未处理门，保留实测残留血液及所有固有组分。不得改用未用注射器、PP 回收颗粒、分离金属或焚烧服务。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_net_mass | 参考产品及 first_release_sharps | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_gate 实测密闭毛重并只扣一次确切真实组件皮重。保留组件内血液，排除桶体/封盖/其他收集包装。针筒标称容量和容器体积不确立质量。 |
| raw_then_once | 所有清单行 | 原实测属性 | 依各行 | 仅采原量，真实换算和归属完成后执行 calc_inventory。卡片采用已有 n 或 n_service，不再除一次。采集汇总仅标识最终参考目标，不对原记录做除法。Q0 保留全部负荷而不出单位结果。 |
| physical_separation | 组件血液及每个容器组件 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 独立保留实物 V 与组件账、负荷 A、溶液/元素/物种证据及不确定性。不默认密度、比例、单件质量或残差拟合组成。cp_body/cp_lid 独立保留 P/N_ext/ER。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 诊断标本转移后已经用过的连针组件；显式关联并继承无菌器械制造及临床使用历史 |
| starting_condition_role | 上游临床操作后的实物输入；不是未用器械采购边界 |
| product_classification_scope | 仅限声明的单一 39939 物料；39931/39910 独立 |
| recursive_input_rule | 同类别已收集或退回批保持原 cohort 与向量，不重设 Q，也不递归重建原制造/使用 |
| upstream_dataset_requirement | 有代表性的器械制造/灭菌/包装及真实上游静脉采血操作各链接一次。披露临床共同功能分配及未解决负荷。收集服务与供货容器已含范围互不重复 |
| disclosure | 确切来源/配置；残液及未处理状态；首次 Q/原 Qc；库存与继承向量；全部组件实物实收；法律/接收条件；provider 限制；真实后续服务 |

### 规范性系统边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_scope | reference_product | 仅覆盖成人诊断性静脉采血后已用的 Injekt Luer Solo 2 ml 中央 Luer 接口针筒 REF 4606027V 与仍附着的 Sterican 标准长斜面 21 G x 1.5 inch（0.80 x 40 mm）针头 REF 4657527。PP 筒身、PE 推杆、PP 针座、铬镍不锈钢针管、有机硅（silicone）涂层（实际供货配方仍须核实）、固有标记/添加剂和实际残留血液作为同一组件保留。各组分质量、合金牌号、涂层身份、添加剂及血液含量须有供应商/前景记录；不规定百分比。排除沾染药品、放射性、细胞毒性、未用、针头分离、无针、带安全护罩、AD、混合器械及散装液体废物流。 | `un-cpc3-2025`; `braun-syringes-needles-2022`; `who-phlebotomy-2010`; `who-health-care-waste-2014`; `braun-injekt-current`; `braun-sterican-current` |
| b_history | upstream_history_and_collection | 追溯真实历史：已制造的无菌针筒和另行供应的无菌针头，经一次有记录的采血和标本转移，立即作为连针组件弃置。器械制造（各聚合物/金属/涂层、加工、装配、实际灭菌和无菌包装）及临床使用交换由有代表性的上游 provider 或显式建模的上游单元承担一次。收集模块接收已经用过的组件及逐交换继承负荷向量；不得再次采购器械，也不得平行重建同一制造/使用历史。诊断标本作为该临床活动的共同功能记录在本实物废物供应之外。未知上游负荷保持未解决，不自动为零，也不默认将全部患者护理清单归给废物。 | `braun-syringes-needles-2022`; `who-phlebotomy-2010`; `ilcd-attributional-2010`; `braun-injekt-current`; `braun-sterican-current` |
| b_gate | first_release_and_service | 实物前景始于连针组件弃置，纳入使用点隔离、实际容器/封盖、标识、内部移动、安全暂存、密闭称量、检查以及作为一个隔离待交付 cohort 首次有记录地被源医疗机构受控废物库接收。Q 为首次通过该门的新增组件净质量，包含残留血液，排除所有收集包装。Q 已包括该新增放行 cohort 在期末 FG 中的部分，不得再加期末 FG。后续储存、搬运和发运保留于原 cohort Qc 的独立服务账；H 仅为服务活动量。声明发运门之后的外部运输、处理和回收须用独立下游数据集。 | `who-phlebotomy-2010`; `who-health-care-waste-2014`; `ilcd-attributional-2010` |
| b_safety_state | isolation_and_unperformed_treatment | 本方法描述有记录的既有临床废物路线，不指导选择采血技术。WHO 指出更安全的器械替代方案；其附录 G 的例外器械拆卸不属于本连针路线。Medibox 目录还提供拆针入口：使用该入口将改变实物参考，本路线不纳入。不得为采集 LCA 数据开启已装满的锐器盒、拔针或手工分拣污染器械。采用安全的密闭容器计量以及使用前/供应商皮重证据。本参考不发生废物高压灭菌、化学消毒、粉碎、聚合物回收或焚烧；不得编造反应排放、消毒效率、已用器械灭菌、无害性、病原流行率或合法授权。 | `braun-syringes-needles-2022`; `who-phlebotomy-2010`; `who-health-care-waste-2014` |
| b_stocks | all_physical_gates | 逐原始批保留期初/期末 WIP、未开封用品和已放行 FG，并为每项交换保留继承向量。保留失败/拒收批、零产出期间、启停、空转、泄漏、清理和真实返工。临床组件实物账为：期初 WIP + 本期新形成已用组件 = 期末 WIP + Q + 放行前拒收组件质量 + 独立实测损失。FG 账为：期初 FG + Q + 有先前对外发运史的真实组件退回 = 期末 FG + 组件实物毛发运 S + FG 损失。退回和重验保持 Qc，不产生新 Q。合并模块时抵消内部 WIP/FG 领用及其向量；已净额领用不得再次扣减库存。 | `ilcd-attributional-2010`; `who-health-care-waste-2014` |
| b_receipts | each_actual_container_and_attached_component | 每个实际组件 j 在同一实物门闭合：期初空件 + 期初附着 WIP/FG + 期初可重复用件 + 采购实收 P + 首次外部非采购实收 N_ext + 真实外部退回实收 ER = 期末空件/附着件/可重复用件 C + 随实物毛发运外出的组件 S + 对外退回 EO + 废物 W。P 指真实新增采购实收，包含在已付款整批价内而未单独开票的组件。N_ext 仅含不属于 P 的真实首次供方随货、受托、借入或租入实物。ER 须有同一物件先前对外发运记录。P/N_ext/ER 事件分类互斥；期初库存不能代替当前收货。内部领用/复用抵消，不新增 P、Q 或共产品。即使一起供货，Medibox 桶体和盖也分别通过 cp_body/cp_lid 记录明确材质/形态/类型/方向/数量的实收接口，包含三类收货。不得推定一次性容器可复用；已用污染退回件不得默入清洁库存。 | `braun-syringes-needles-2022`; `who-health-care-waste-2014`; `ilcd-attributional-2010` |
| b_receipt_burdens | purchased_and_nonpurchased_interfaces | 实物收货、所有权和环境负荷相互独立。每次桶体/盖收货关联真实供应 bundle、原 cohort、组件向量、provider 已含范围及发票/受托条款。一个供货套件只采购一次：组件实收是不可叠加的拆分，其 provider 向量经有依据的组件归属只转移一次，不得整份复制到两个组件，也不得再叠加套件。首次非采购实收不意味制造零负荷；保留继承向量，并独立记录供应范围尚未包含的真实增量租用/返还/收集服务。真实 ER 保留原向量，不新增采购负荷或信用。委托收集及合同服务遵循相同合同。任何实际组件都不得因免费或未单独开票而遗漏。 | `ilcd-attributional-2010`; `braun-syringes-needles-2022` |
| b_atomic | each_exchange_and_material_interface | 基线路线为不处理废物的密闭隔离收集。计量真实电力；表面清理有条件纳入，不构成废物已消毒。外购清理制剂按完整供货产品采购一次；有效氯和载水仅为分析子账，不重复采购。厂内稀释记录实际外购成分、稀释水、能耗和损失。每件实际 PPE、无菌包装、保护帽、标签、封签、衬层、外包装、燃料、制冷剂、清洁成分、废水、残渣及真实排放物种，在声称完整前必须有明确的单一交换或组件收货接口。未知材质/物种或缺失实际接口会使具体数据包不完整。不得将 OTHER 总量作为选定流；发现新增 F 时，只有 X 是该总量内同侧完全重复项才能删除 X。混合出口总量与来源分区不可叠加，使用一个 provider。 | `who-phlebotomy-2010`; `who-health-care-waste-2014`; `ilcd-attributional-2010` |
| b_mass_species | physical_and_element_accounts | 总实物质量账与有依据的化学/元素子账独立闭合。组件净质量包含真实残留血液；质量闭合不证明血液组成、病原身份、密度、聚合物比例或涂层质量。使用独立的安全计量/供应商数据，不得用一个残差拟合两个未知量。不默认干燥或反应水。体积换算保留真实溶液温度/状态及实测密度；不得将水密度套给血液或制剂。已积分的气/液体积不再乘时间；仅对真实实测速率积分。COD/VOC 指标不代表某种化学排放质量。 | `who-health-care-waste-2014`; `who-phlebotomy-2010` |
| b_jurisdiction | identity_and_acceptance | CPC 39939 仅为分类背景，不是危险废物代码、许可或废物终止认定。39931 药物废物及 39910 城市废物独立。NHS SHTN 03-01 V8 第 5.23–5.25、6.35–6.36、11、15 节仅提供苏格兰指南背景与反例，不构成普遍合法的液体容许量。需要时记录真实适用地区、现行规则版本/条款、设施授权、接收者接受、容器批准及处理去向。未经核实则明示未解决；不得根据泛 UUID、容器标签或未发现某病原而推断合法/无害。 | `un-cpc3-2025`; `nhs-waste-2024`; `who-health-care-waste-2014` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| collection | 连针器械隔离与首次接收 | required | 真实定义来源和 Medibox 配置 | 已用组件输入及原上游向量；首次 Q 门 | Q |
| services | 原 cohort 储存搬运及发运 | required | 仅真实服务及真实退回 | 放行后账；不新增 Q | Qc; H |
| cleanup | 实际表面/事件清理 | conditional | 仅真实操作；不推定废物消毒 | 可归属增量清理及独立废物出口 | Q; Qc |

以下非参考行的 n 或 n_service 为第 8 节已有的单次结果。毛实物量和方向保留在独立事件账中。卡片不执行第二次归一化。有条件不存在须有证据。真实新增交换及每个附着组件，在数据包完整前须有具体原子行/接口。

### 过程：连针器械隔离与首次接收（`collection`）

#### 输入

##### 产品流

###### 已用连针采血组件（`used_assembly_in`）

本流为定义的静脉采血来源在诊断标本转移后实际新增弃置的连针组件，不是采购未用针筒。通过 cp_origin 记录组件毛入量 V 和逐交换上游向量。所选原生身份为泛化的 Product 流，正式名为“其他医疗废物”：生产混合、在工厂，未指定处理；唯一属性为质量；未固定 CAS、组成、牌号、地理、消毒状态或病原阈值。其唯一一般注释仅说明其他临床废物。这不确立 provider，也不允许混合医院废物平均。只将其绑定于本规定已用且连针的 Injekt/Sterican 采血组件和声明的未处理门，保留实测残留血液及所有固有组分。不得改用未用注射器、PP 回收颗粒、分离金属或焚烧服务。

- 选定流：其他医疗废物 `3fa36111-2daf-45fd-ad0b-474703389035`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_origin.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_origin`
- 来源：`braun-syringes-needles-2022`; `who-phlebotomy-2010`; `ilcd-attributional-2010`

###### 新增采购实收 P——桶体（`body_purchase`）

仅含实际收货的新增采购组件。已在完整容器套件或整批价内付款但未单独开票的组件也属于 P，不得列作 N_ext。 通过 cp_body 独立记录这一种具体模塑 PP 组件。每事件含材质/形态/类型/方向和实测 kg；套件实收与组分/provider 拆分不可叠加。出厂标记保留在供货范围内；另收或另附标签/衬层/封签须有各自真实材质接口。本流 UUID 未绑定，不得用树脂或 PP 废料身份替代已制成组件。

- 选定流：Medibox 2.4 L 聚丙烯锐器盒桶体 REF 9193600
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_body.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_body`
- 来源：`braun-syringes-needles-2022`; `who-health-care-waste-2014`; `ilcd-attributional-2010`

###### 首次非采购实收 N_ext——桶体（`body_nonpurchase`）

仅含未采购的真实首次外部供方随货、受托、借入或租入组件。识别所有权、原 cohort、继承向量及真实增量服务。已付费整批中的组件属于 P。 通过 cp_body 独立记录这一种具体模塑 PP 组件。每事件含材质/形态/类型/方向和实测 kg；套件实收与组分/provider 拆分不可叠加。出厂标记保留在供货范围内；另收或另附标签/衬层/封签须有各自真实材质接口。本流 UUID 未绑定，不得用树脂或 PP 废料身份替代已制成组件。

- 选定流：Medibox 2.4 L 聚丙烯锐器盒桶体 REF 9193600
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_body.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_body`
- 来源：`braun-syringes-needles-2022`; `who-health-care-waste-2014`; `ilcd-attributional-2010`

###### 真实外部退回实收 ER——桶体（`body_return`）

仅含同一已对外发运物件从外部持有者退回，并关联发运及原向量。不得虚构退回来代替首次收货。一次性设计不授权复用污染容器。 通过 cp_body 独立记录这一种具体模塑 PP 组件。每事件含材质/形态/类型/方向和实测 kg；套件实收与组分/provider 拆分不可叠加。出厂标记保留在供货范围内；另收或另附标签/衬层/封签须有各自真实材质接口。本流 UUID 未绑定，不得用树脂或 PP 废料身份替代已制成组件。

- 选定流：Medibox 2.4 L 聚丙烯锐器盒桶体 REF 9193600
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_body.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_body`
- 来源：`braun-syringes-needles-2022`; `who-health-care-waste-2014`; `ilcd-attributional-2010`

###### 新增采购实收 P——盖（`lid_purchase`）

仅含实际收货的新增采购组件。已在完整容器套件或整批价内付款但未单独开票的组件也属于 P，不得列作 N_ext。 通过 cp_lid 独立记录这一种具体模塑 PP 组件。每事件含材质/形态/类型/方向和实测 kg；套件实收与组分/provider 拆分不可叠加。出厂标记保留在供货范围内；另收或另附标签/衬层/封签须有各自真实材质接口。本流 UUID 未绑定，不得用树脂或 PP 废料身份替代已制成组件。

- 选定流：Medibox 2.4 L 聚丙烯锁闭盖 REF 9193600
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_lid.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_lid`
- 来源：`braun-syringes-needles-2022`; `who-health-care-waste-2014`; `ilcd-attributional-2010`

###### 首次非采购实收 N_ext——盖（`lid_nonpurchase`）

仅含未采购的真实首次外部供方随货、受托、借入或租入组件。识别所有权、原 cohort、继承向量及真实增量服务。已付费整批中的组件属于 P。 通过 cp_lid 独立记录这一种具体模塑 PP 组件。每事件含材质/形态/类型/方向和实测 kg；套件实收与组分/provider 拆分不可叠加。出厂标记保留在供货范围内；另收或另附标签/衬层/封签须有各自真实材质接口。本流 UUID 未绑定，不得用树脂或 PP 废料身份替代已制成组件。

- 选定流：Medibox 2.4 L 聚丙烯锁闭盖 REF 9193600
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_lid.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_lid`
- 来源：`braun-syringes-needles-2022`; `who-health-care-waste-2014`; `ilcd-attributional-2010`

###### 真实外部退回实收 ER——盖（`lid_return`）

仅含同一已对外发运物件从外部持有者退回，并关联发运及原向量。不得虚构退回来代替首次收货。一次性设计不授权复用污染容器。 通过 cp_lid 独立记录这一种具体模塑 PP 组件。每事件含材质/形态/类型/方向和实测 kg；套件实收与组分/provider 拆分不可叠加。出厂标记保留在供货范围内；另收或另附标签/衬层/封签须有各自真实材质接口。本流 UUID 未绑定，不得用树脂或 PP 废料身份替代已制成组件。

- 选定流：Medibox 2.4 L 聚丙烯锁闭盖 REF 9193600
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_lid.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_lid`
- 来源：`braun-syringes-needles-2022`; `who-health-care-waste-2014`; `ilcd-attributional-2010`

###### 收集用电（`collection_electricity`）

采集真实秤、搬运、局部通风及可归属储存用电，保留空转/失败期间。不得凭目录推定电动工序。已核 CN 电网平均 <1 kV 流不是普遍场址供电；本未绑定交换须明确真实地区、电压、发供电路线和 provider。原始 kWh 在归属前换为 MJ；本行不隐藏热/蒸汽/燃料。

- 选定流：供给收集设备的电力
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用已有 n；原量见 cp_energy.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy`
- 来源：`who-health-care-waste-2014`; `ilcd-attributional-2010`

##### 废物流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

##### 基本流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

#### 输出

##### 产品流

###### 首次验收隔离锐器 cohort（`first_release_sharps`）

在受控库首次接收门恰为 1 kg 已用组件净质量，含真实残留血液，排除桶体/盖、标签、无菌包装及针帽。Q 仅为新增首次验收净质量，后续再次发运不新增放行。所选原生身份为泛化的 Product 流，正式名为“其他医疗废物”：生产混合、在工厂，未指定处理；唯一属性为质量；未固定 CAS、组成、牌号、地理、消毒状态或病原阈值。其唯一一般注释仅说明其他临床废物。这不确立 provider，也不允许混合医院废物平均。只将其绑定于本规定已用且连针的 Injekt/Sterican 采血组件和声明的未处理门，保留实测残留血液及所有固有组分。不得改用未用注射器、PP 回收颗粒、分离金属或焚烧服务。

- 选定流：其他医疗废物 `3fa36111-2daf-45fd-ad0b-474703389035`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_gate`
- 来源：`braun-syringes-needles-2022`; `who-phlebotomy-2010`; `who-health-care-waste-2014`

##### 废物流

###### 拒收的已用采血组件（`rejected_assembly`）

实测拒收量保留于 Q 之外，记录原因、状态和去向；区分拒收容器与拒收组件。混合或沾药物流是路线偏离，不得改名混入本参考。不虚构处理或回收信用。

- 选定流：拒收的连针 Injekt/Sterican 采血组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_gate.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_gate`
- 来源：`who-health-care-waste-2014`; `ilcd-attributional-2010`

##### 基本流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

### 过程：原 cohort 储存搬运及发运（`services`）

#### 输入

##### 产品流

###### 已对外发运组件 cohort 的真实退回（`assembly_true_return`）

将真实退回的先前已对外发运密闭 cohort 关联原 Qc，一致反向处理原交付归属。接收/重称/再组托不产生新废物 Q。只计真实增量搬运/返工；保留历史和容器组件收货，不重新采购。所选原生身份为泛化的 Product 流，正式名为“其他医疗废物”：生产混合、在工厂，未指定处理；唯一属性为质量；未固定 CAS、组成、牌号、地理、消毒状态或病原阈值。其唯一一般注释仅说明其他临床废物。这不确立 provider，也不允许混合医院废物平均。只将其绑定于本规定已用且连针的 Injekt/Sterican 采血组件和声明的未处理门，保留实测残留血液及所有固有组分。不得改用未用注射器、PP 回收颗粒、分离金属或焚烧服务。

- 选定流：其他医疗废物 `3fa36111-2daf-45fd-ad0b-474703389035`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n_service；原量见 cp_service.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_service`
- 来源：`ilcd-attributional-2010`; `who-health-care-waste-2014`

##### 废物流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

##### 基本流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

#### 输出

##### 产品流

###### 随实物毛发运的容器组件——桶体（`body_shipped`）

记录随实物毛发运 S 外出的真实组件，与组件净量 Q 和归属负荷 A 独立。一个供货 Medibox 的桶体和盖独立闭合；承载相同内容物不使其质量成为 Q。若容器总量已拆为组件，不再为其创建第二 provider。

- 选定流：Medibox 2.4 L 聚丙烯桶体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n_service；原量见 cp_body.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_body`
- 来源：`braun-syringes-needles-2022`; `who-health-care-waste-2014`; `ilcd-attributional-2010`

###### 组件对外退回 EO——桶体（`body_returned_out`）

只有这一已识别组件实际退还外部供方/所有者才是 EO，并保留物件历史和继承向量。与装载临床组件的发运 S、废物 W 和内部移动独立。真实增量返还服务只计一次。不推定复用、负采购、新生产或信用。

- 选定流：Medibox 2.4 L 聚丙烯桶体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n_service；原量见 cp_body.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_body`
- 来源：`ilcd-attributional-2010`; `braun-syringes-needles-2022`

###### 随实物毛发运的容器组件——盖（`lid_shipped`）

记录随实物毛发运 S 外出的真实组件，与组件净量 Q 和归属负荷 A 独立。一个供货 Medibox 的桶体和盖独立闭合；承载相同内容物不使其质量成为 Q。若容器总量已拆为组件，不再为其创建第二 provider。

- 选定流：Medibox 2.4 L 聚丙烯锁闭盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n_service；原量见 cp_lid.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_lid`
- 来源：`braun-syringes-needles-2022`; `who-health-care-waste-2014`; `ilcd-attributional-2010`

###### 组件对外退回 EO——盖（`lid_returned_out`）

只有这一已识别组件实际退还外部供方/所有者才是 EO，并保留物件历史和继承向量。与装载临床组件的发运 S、废物 W 和内部移动独立。真实增量返还服务只计一次。不推定复用、负采购、新生产或信用。

- 选定流：Medibox 2.4 L 聚丙烯锁闭盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n_service；原量见 cp_lid.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_lid`
- 来源：`ilcd-attributional-2010`; `braun-syringes-needles-2022`

###### 原验收组件发运（`assembly_dispatched`）

以 cohort/接收者/实收单记录实物毛发运及真实再次发运，保持已首次放行的 Qc。本行是 first_release_sharps 的实物转移视图，不是携带同一上游负荷的另一个产品 provider。外部公路运输及后续全部废物处理独立链接下游。所选原生身份为泛化的 Product 流，正式名为“其他医疗废物”：生产混合、在工厂，未指定处理；唯一属性为质量；未固定 CAS、组成、牌号、地理、消毒状态或病原阈值。其唯一一般注释仅说明其他临床废物。这不确立 provider，也不允许混合医院废物平均。只将其绑定于本规定已用且连针的 Injekt/Sterican 采血组件和声明的未处理门，保留实测残留血液及所有固有组分。不得改用未用注射器、PP 回收颗粒、分离金属或焚烧服务。

- 选定流：其他医疗废物 `3fa36111-2daf-45fd-ad0b-474703389035`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n_service；原量见 cp_service.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_service`
- 来源：`who-health-care-waste-2014`; `ilcd-attributional-2010`

##### 废物流

###### 弃置容器组件——桶体（`body_waste`）

仅记录真实弃置组件 W 及污染状态/去向。装原锐器对外发运的容器已计组件毛发运 S，在同一门不再计本 W。使用前损坏和泄漏污染的容器损失与参考 Q 独立。

- 选定流：废弃Medibox 2.4 L 聚丙烯桶体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n_service；原量见 cp_body.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_body`
- 来源：`who-health-care-waste-2014`; `ilcd-attributional-2010`

###### 弃置容器组件——盖（`lid_waste`）

仅记录真实弃置组件 W 及污染状态/去向。装原锐器对外发运的容器已计组件毛发运 S，在同一门不再计本 W。使用前损坏和泄漏污染的容器损失与参考 Q 独立。

- 选定流：废弃Medibox 2.4 L 聚丙烯锁闭盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n_service；原量见 cp_lid.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_lid`
- 来源：`who-health-care-waste-2014`; `ilcd-attributional-2010`

##### 基本流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

### 过程：实际表面清理（`cleanup`）

#### 输入

##### 产品流

###### 次氯酸钠水基表面清理制剂（`cleanup_solution`）

仅在真实泄漏后表面使用时适用，不是本参考锐器消毒。整份外购制剂只采一次，记录真实产品身份、浓度、含水量、数量和安全资料。场内配制时逐项记录真实外购成分及稀释水；分析子账不可叠加。不默认标准浓度、剂量、效力或气体排放。

- 选定流：次氯酸钠水基表面清理制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_cleanup.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_cleanup`
- 来源：`who-phlebotomy-2010`; `who-health-care-waste-2014`

###### 实际表面清理或制剂稀释用自来水（`cleanup_water`）

仅在真实独立供水时适用，不重复采购外购制剂中的载水。保留仪表原单位；换算体积时须有实测密度/状态，不得以水密度替代血液/制剂密度。不默认锅炉、蒸汽、冷凝水或换热水。

- 选定流：实际表面清理或制剂稀释用自来水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_cleanup.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_cleanup`
- 来源：`who-phlebotomy-2010`; `who-health-care-waste-2014`

###### 棉擦拭布（`cleanup_cloth`）

仅用于实际棉布的可归属泄漏/表面清理，按包含真实整理剂的一个供货布件采集。纸巾、化纤擦巾、手套及其他 PPE 必须有各自具体真实材质接口，不使用本身份。

- 选定流：棉擦拭布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_cleanup.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_cleanup`
- 来源：`who-phlebotomy-2010`; `who-health-care-waste-2014`

##### 废物流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

##### 基本流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

#### 输出

##### 产品流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

##### 废物流

###### 废表面清理液（`spent_cleanup_liquid`）

仅含真实液体排出，实测总质量并记录残留化学状态和真实去向。本流不是仍留在参考组件中的血液，也不是废水处理服务。不得仅由总液体质量、COD 或氯分析推算物种或排放。

- 选定流：废次氯酸钠水基表面清理液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_cleanup.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_cleanup`
- 来源：`who-phlebotomy-2010`; `who-health-care-waste-2014`

###### 污染棉清理布（`spent_cleanup_cloth`）

仅含真实可归属清理后的棉布，包含真实滞留液体，排除已经另记的回收液体。其为另一临床废物，不属于本单一针筒—针头参考 Q。记录独立接受和去向，不绑定连针器械 Product UUID。

- 选定流：沾血棉擦拭布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用已有 n；原量见 cp_cleanup.
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_cleanup`
- 来源：`who-phlebotomy-2010`; `who-health-care-waste-2014`

##### 基本流

不默认设置交换。任何真实跨门交换均须在完整性成立前增设具体原子行。不意味存在未发生处理的排放。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_dedication | clinical_origin_and_current_services | 采用归因模型，并声明临床功能与废物供应边界。先分离专属操作并执行真实或虚拟细分。将各器械/材料及继承向量追溯到真实上游临床活动，不假设废物截断，也不将全部临床服务转给废物。弃置后专属隔离/收集负荷归于该活动。 | `ilcd-attributional-2010` |
| a_causality | unresolved_joint_exchanges | 仅在细分之后，对每项剩余联合交换独立识别起决定作用的物理因果关系。诊断标本效用、人工、锐器容量和公用工程不自动共用一个质量比。展示机制、实测驱动量及全部共同功能；物质体现不自动证明每项能耗/服务的因果关系。 | `ilcd-attributional-2010` |
| a_residual | genuinely_unresolved_joint_process | 仅真正无法再分的剩余交换可使用同一过程门、同一实物状态下真实共同功能的同期市场价值，并保留证据和敏感性分析。处置费不是正的材料价格或避免影响信用。缺少因果/价值证据时不得给数值分配结果；不允许任意物理/经济选择、固定比例或自动替代。 | `ilcd-attributional-2010` |
| a_services | cohort_and_contracts | 实际储存、搬运、收集、租用及返还服务的增量，在排除 provider 已含范围后归给原 cohort Qc。H 与发运量仅为活动驱动量，不是新增生产 Q。跨所有权变化及 P/N_ext/ER 事件保留组件继承。不因本未处理转移产生额外原生材料、回收、能源或处置信用。 | `ilcd-attributional-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

全部协议保留原始原量和未归一继承向量。aggregation_rule 单元格仅命名最终目标基准，不执行除法；只有 calc_inventory 执行单次 A/Q（服务为 A_service/Qc）。真实新增组件/服务接口须与 cp_body/cp_lid 同样具有明确实物属性和数量。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_origin | collection | used_assembly_in | 来源及逐交换继承账 | 临床活动 ID; 来源科室; 时间; 针筒 REF 4606027V; 针头 REF 4657527; 有记录的配置; 实际器械收货及制造/灭菌/无菌包装 provider; 已知时的原生组分质量和添加剂; 血液标本转移记录; 弃置组件 V; 残留血液计量证据; 每项交换继承向量; provider 已含范围; 分配证据; 期初/期末 WIP 和未用库存; 失败及 Q0 | 使用采购/产品/批次及临床操作记录，结合安全的使用前器械质量和密闭容器差重。无菌针筒、针头制造/使用历史通过一个上游 provider/接口保留。LCA 账不需要患者身份资料，采用可追溯非身份事件 ID。不得由针筒标称容积推残留体积。保留未归一原量和继承向量。 | kg; 供应商/仪表原单位 | 逐来源批及期间 | 全部临床形成及失败/空转期间 | 一个声明的成人静脉采血来源 | 每 1 kg 参考流 | 器械/批次记录; 匿名操作关联; 供应商范围; 可追溯质量; 分配评估 |
| cp_gate | collection | first_release_sharps; rejected_assembly | 密闭称量及首次接收记录 | 批 ID; 密闭容器 ID; 校准秤 ID; 密闭毛重; 同配置未用桶体/盖/标记实测皮重; 其他真实附着皮重; 单位; 不确定性; 来源历史关联; 首次接收 ID/时间; 接收者; 接受准则; 首次 Q; 拒收量/原因; 期初/期末 WIP; 泄漏/损失; 处理前后状态 | 密闭称量已标识容器，不开启。皮重采用确切配置可追溯、安全的使用前或供应商组件计量，并计真实水分/附着物。皮重只扣一次得到组件净质量，以独立形成和接收记录核对。标称容积、盒数或装填线不是 kg 换算。原始记录不做除法。 | kg | 逐密闭批及接收事件 | 完整 cohort 含拒收及 Q0 | 源医疗机构受控废物库 | 每 1 kg 参考流 | 秤校准; 重复皮重样本和不确定性; 密闭批链; 真实接收签认 |
| cp_body | collection | body_purchase; body_nonpurchase; body_return; body_shipped; body_returned_out; body_waste | 原子组件实收和流转接口 | 事件 ID; 确切组件 模塑聚丙烯 Medibox 2.4 L 桶体 REF 9193600; 材质; 形态; 类型; 输入/输出方向; 实测量及单位; 物件/cohort; 供方/持有者; bundle/发票/受托凭证; 收货类别 P/N_ext/ER; ER 对应的先前外部发运; 期初空件/WIP/FG/可复用; 期末空件/WIP/FG/可复用; 毛外出 S; 对外退回 EO; 废物 W; 内部领用; 组件继承向量; bundle 向量; provider 已含范围; 真实增量服务 | 逐事件记录本单一组件的所有真实实收和外出，无论采购、含在已付款整批、免费随货、首次受托/借入/租入，或有对外发运史的真实退回。P/N_ext/ER 互斥。使用组件/样本可追溯计量 kg，不开启污染容器；真实件数仅作子校验。套件与其桶体/盖拆分不可叠加；闭合组件实物和 bundle 向量。库存不能代替缺失实收记录。采集阶段不做除法。 | kg | 逐组件事件及盘点 | 完整期间与原 cohort | 本组件全部供应/来源/库/发运门 | 每 1 kg 参考流 | 收货及非采购交接记录; 实测质量; ER 发运证据; 所有权和 provider 范围记录 |
| cp_lid | collection | lid_purchase; lid_nonpurchase; lid_return; lid_shipped; lid_returned_out; lid_waste | 原子组件实收和流转接口 | 事件 ID; 确切组件 模塑聚丙烯 Medibox 2.4 L 锁闭盖 REF 9193600; 材质; 形态; 类型; 输入/输出方向; 实测量及单位; 物件/cohort; 供方/持有者; bundle/发票/受托凭证; 收货类别 P/N_ext/ER; ER 对应的先前外部发运; 期初空件/WIP/FG/可复用; 期末空件/WIP/FG/可复用; 毛外出 S; 对外退回 EO; 废物 W; 内部领用; 组件继承向量; bundle 向量; provider 已含范围; 真实增量服务 | 逐事件记录本单一组件的所有真实实收和外出，无论采购、含在已付款整批、免费随货、首次受托/借入/租入，或有对外发运史的真实退回。P/N_ext/ER 互斥。使用组件/样本可追溯计量 kg，不开启污染容器；真实件数仅作子校验。套件与其桶体/盖拆分不可叠加；闭合组件实物和 bundle 向量。库存不能代替缺失实收记录。采集阶段不做除法。 | kg | 逐组件事件及盘点 | 完整期间与原 cohort | 本组件全部供应/来源/库/发运门 | 每 1 kg 参考流 | 收货及非采购交接记录; 实测质量; ER 发运证据; 所有权和 provider 范围记录 |
| cp_energy | collection | collection_electricity | 仪表记录 | 仪表 ID; 地区; 电压; 供应路线; 读数; 原单位; 真实功率速率的区间; 运行/空转/启停/失败/清理时间; 专属/共享负荷; 分配证据; provider 范围 | 计量包含失败期间的真实能耗。保留原始 kWh/MJ；仅对真实实测速率积分，不对已积分读数再积分。单位转换和归属在单次清单计算之前执行。采集不做除法。 | kWh; MJ | 连续记录并按期间核对 | 完整形成及储存期间 | 真实临床来源及受控库 | 每 1 kg 参考流 | 仪表校准和账单; 驱动量证据 |
| cp_service | services | assembly_true_return; assembly_dispatched | FG cohort 与增量服务账 | 原 Qc; 期初/期末 FG; 首次 Q; 毛发运 S; 真实退回 ID 及先前发运; 原交付反向归属; H; 服务时间; 逐一实物名称的真实增量设备/公用工程/运输/租用/返还服务交换; provider 已含范围; 各继承向量; 重验/返工/损失 | 逐收货和发运匹配原 cohort。声称完整前，每项真实新增服务交换通过具体原子接口记录方向、材质/类型、原始单位和数量。保留真实 H 和原量；本协议不产生新 Q、不做除法。服务发票不授权重复计算供方容器制造。 | kg; 服务/仪表原单位 | 逐事件及期间 | 原 cohort 至最终发运 | 声明源库; 下游边界明确 | 每 1 kg 参考流 | 库存核对; 接收/发运签认; 真实合同及增量仪表 |
| cp_cleanup | cleanup | each conditional cleaning exchange | 逐制剂/水/布/排出物记录 | 事件/表面 ID; 确切供货制剂身份及 SDS; 浓度及载水分析; 完整采购质量; 真实场内配制成分; 稀释水; 棉布输入; 废液输出; 污染布输出; 实际滞留液体; 去向; 各真实 PPE 和新增组件的材质/形态/类型/方向/数量接口; 仅实测物种; 原单位和密度/状态证据 | 记录真实具体清理路线，不套默认消毒配方。完整制剂只计一次，组分分析为不可叠加子账。水与废物分开称量；任何体积换算需要独立测定的相关密度/状态。不编未测反应或基本排放。实际接口缺失会使数据包不完整；真实未使用时记录 not_applicable。原量采集不做除法。 | kg; 原计量单位 | 逐真实清理事件 | 全部事件含 Q0 及失败期间 | 实际可归属表面和废物流出口 | 每 1 kg 参考流 | 采购/SDS; 秤/仪表记录; 去向实收; 事件及组件账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | all raw measured exchanges | 归属前换算原始计量：kg = measured g / 1000; MJ = metered kWh * 3.6。件数换质量须有真实同配置物件实测质量及不确定性；体积换质量须有记录状态下该物质的实测密度。实测速率只积分一次，已积分总量直接保留。不假设器械质量、制剂密度或临床组成。 | raw_amount; raw_unit; measured_article_mass; density_state_evidence | converted_raw_amount |  |
| calc_gate | first_release_sharps | 逐密闭批：组件净质量 = 密闭毛质量 - 实际桶体皮重 - 实际盖皮重 - 全部其他真实附着包装皮重。Q = 声明门本次新增首次接收组件净质量之和。不得通过两个未知量的差推算残留血液。拒收批和已放行退回件不入新增 Q。 | gross_mass; body_tare; lid_tare; other_actual_tare; first_acceptance_ID | Q | `who-health-care-waste-2014`; `who-phlebotomy-2010` |
| calc_component_balance | each individual actual component | 同一组件和实物门：opening_empty + opening_attached_WIP_FG + opening_reusable + P + N_ext + ER = C + S + EO + W。P/N_ext/ER 为互斥真实收货类别；ER 有先前对外发运证明；C 包括空件/附着件/可复用状态；S 采用随实物毛发运的组件量，不是废物净 Q。内部流转/复用抵消。逐真实材质/形态/类型及 bundle 不可叠加关系独立校验。 | opening_empty; opening_attached_WIP_FG; opening_reusable; P; N_ext; ER; C; S; EO; W | component_balance_residual | `ilcd-attributional-2010`; `braun-syringes-needles-2022` |
| calc_attribute | each exchange and its original cohort | 按各交换真实期初/收货继承向量与当前增量，经有依据的细分/分配形成未归一归属分子 A；期末 WIP/未用库存和后续服务份额结转其原 cohort。包含失败/空转/清理/Q0 负荷，并一致反向处理真实退回。provider 已含组件和服务只计一次。保持独立实物毛量 V 账，不以 A 闭合实物质量。 | converted_raw_amount; inherited_vectors; current_increments; closing_stock_vectors; allocation_evidence; provider_scope | A | `ilcd-attributional-2010` |
| calc_inventory | all inventory rows | 仅在原单位转换与有依据的归属后执行一次 n = A / Q。后续服务采用 n_service = A_service / Qc，保持原 Qc；H 不是生产分母。流卡和采集汇总仅引用已有结果，不再做除法。若 Q = 0 或所需 Qc 不可用，保留全部原始负荷及库存向量，不给单位结果。 | A; Q; A_service; Qc | n; n_service | `ilcd-attributional-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_origin | 每个参考批 | 每个参考批须具备确切两种物件 REF、真实来源操作、连针状态、未混入药品/放射性/细胞毒物的记录、残留液体证据和原 cohort。供应商目录组成仅为定性证据，不提供场址数量。 | 供应商/批次及匿名临床来源记录 |
| dq_safe_mass | 每个密闭批 | 逐密闭批使用校准秤及确切配置皮重，并保留样本分布/不确定性。不得为 LCA 手动开启/分拣污染锐器。核对各独立实测净量/毛量/库存账，实物质量与元素/物种证据分离；报告差异，不强行残差拟合。 | 校准; 安全的使用前皮重; 密闭称重; 独立闭合与不确定性 |
| dq_complete_receipt | 每个真实包装组件和服务 | 每个 P、N_ext、ER 实收及外出事件须有明确原子材质/形态/类型/方向接口和实测量。缺少实际接口、组件/bundle 向量重复未解释、供方已含范围未知或遗漏首次非采购实收，都会使具体数据包不完整。 | 采购实收及受托凭证; cp_body; cp_lid; 完整新增组件接口 |
| dq_history | 完整形成/服务期间 | 保留全部失败/空转/清理/Q0 期间及期初/期末 WIP/FG/未用向量。来源取得日期/技术与真实设施/参考期间分开。本方法为制造商与 WHO 独立资料的透明技术综合，不是同一当代医院订单的证据。 | 期间覆盖; cohort 账; 供方/临床与独立方法证据 |
| dq_acceptance | 真实地区和接收门 | 独立采集现行适用规则/条款、运营方授权、接收接受及转移凭证。苏格兰指南和 CPC 名称不证明当地合法、无害、液体容许阈值或已经处理。未核项须明示并阻止依赖它的实际数据主张。 | 现行地区适用第一手文件及签认接收 |
| dq_identity | 各 provider/交换 | 逐 provider/交换核完整原生名称/类型/路线/形态/CAS/地区/牌号/注释及全部属性。泛临床 Product 身份只是定位符，不是废物批准。明确保留具体未绑定辅助身份；不改用树脂/废料替代，也不因普通 provider 缺口虚设全局方法暂停。 | 确切原生直读记录; 精确属性/单位链; 供方兼容性评估 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference_lot | 核实确切已用连针 Injekt/Sterican 静脉采血组件及首次门。排除邻近器械/状态及 39931/39910 物流，不默平均混装容器。要求全部限定信息和参考/清单说明内原生限制。 | `un-cpc3-2025`; `braun-syringes-needles-2022`; `who-phlebotomy-2010` |
| v_gate | first_release_and_fg | Q 只计新增首次接收，并将期末 FG 中该 cohort 计一次。核对期初/期末 WIP、独立 FG 账、实物毛发运、具先前发运史的真实退回和原 Qc 向量。重验、退回、H 及再发运不产生新 Q。 | `who-health-care-waste-2014`; `ilcd-attributional-2010` |
| v_components | each_actual_packaging_component | 逐真实材质/形态/类型要求实测原子 P/N_ext/ER 收货接口，并在同一门满足 opening_empty + opening_attached_WIP_FG + opening_reusable + P + N_ext + ER = C + S + EO + W。校验收货互斥和 ER 发运证据；期初库存不是本期收货。抵消内部复用/领用，区分已付款整批 P 与真实 N_ext；组件/cohort/继承向量、provider 已含范围和真实增量服务各计一次。实际接口缺失即数据不完整，不是符号通过。 | `braun-syringes-needles-2022`; `ilcd-attributional-2010` |
| v_quantities | all_inventory_rows | 原分子采集不做除法，先换算实测单位并论证归属，再执行一次 A/Q，或后续服务一次 A_service/Qc；卡片/汇总只引用该结果。Q0 负荷保留但不出单位结果。实物 V 和混合出口分区与 A 独立且不可叠加。不猜密度、每件 kg、组成、物种或第二个残差未知量。 | `ilcd-attributional-2010`; `who-health-care-waste-2014` |
| v_treatment | state_and_legal_claims | 核实保持未处理状态及真实接受凭证。不编灭菌效力、反应水、病原、基本排放、回收材料、信用或合法许可。表面清理不能凭声明变成废物已消毒。声明完整前补齐全部真实材料/服务/排出物/物种接口。 | `who-phlebotomy-2010`; `who-health-care-waste-2014`; `nhs-waste-2024` |
| v_allocation | history_and_shared_services | 核实专属/虚拟细分证据、逐交换决定性因果及仅真正剩余项的同门同期价值。核实上游器械/临床/组件向量只计一次，以及合同和非采购实收的 provider 范围。缺因果/价值证据时不能数值分配，不得改用固定份额或零负荷。 | `ilcd-attributional-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单一已识别未处理已用临床组件的归属实物供应 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 使用确切来源与未处理状态、单一上游 provider 及原 cohort 继承的后续受控收集/运输/处理研究 |
| excluded_use | 混合医院废物平均；未用针筒制造；纯 PP 供应；回收聚合物；焚烧/消毒服务；法律或临床批准；未核实零负荷废物 |
| required_metadata | 确切针筒/针头物件及供应批; 成人诊断性静脉采血来源和标本转移记录; PP 筒身与 PE 推杆以及钢针管 PP 针座和有机硅（silicone）涂层; 实际固有标记添加剂及供方组成限制; 附着未护套针头和滞留残血证据; 使用后未处理状态及无未经核实消毒或病原主张; 未混入药品放射性及细胞毒物的证据; 密闭实收组件净质量及每项实测皮重; 首次接收 Q 原 cohort Qc 和接受准则; 期初期末 WIP FG 未用库存和逐交换继承向量; 实物毛量 V 与归属 A 独立; 每个真实组件 P N_ext ER 实收及 S EO W 出口; 所有权 provider 已含范围和真实增量合同服务; 场址地区期间真实设施和计量不确定性; 真实地区现行条款与接收接受; 原生 Product 质量 在工厂 未指定处理限制及真实 provider 兼容性 |
| required_quality_disclosure | 真实来源/基准/不确定性；确切首次门；原量及继承向量完整性；P/N_ext/ER 组件覆盖；供方范围；独立 V 与 A 账；有条件缺失接口；未解决 provider/法律/接收证据；无无据数值主张 |
| update_trigger | 器械/配置/来源操作、残液或处理状态、真实地区/接收准则、容器组件、provider 已含范围、分配证据或计量方法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p.205; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持 39939 与 39931、39910 的分类层级，不证明组成或合法批准。 |
| braun-syringes-needles-2022 | handbook | B. Braun, Precision in Preparation, Injection and Application, revision 11.2022, printed pp.12–13, 68–71, 88–91; complete manufacturer PDF hosted by distributor: https://www.cantaertmedical.be/_userfiles/products_groups_documents/20231024065003single-use-syringesneedlescatalog.pdf | 确切物件身份、定性组分材质、标准/钝针/安全型差别、使用/弃置和 Medibox 桶体/盖/封闭；不提供实测废物组成、当前合法批准或 LCA 分配。 |
| braun-injekt-current | literature | B. Braun Injekt Luer Solo current manufacturer description; https://catalogs.bbraun.com/en-01/p/PRID00003171/injekt-luer-solo | 当前第一手确认 PP 筒身、PE 推杆、一次性及体液抽吸用途；地区供应/适应范围仍须当地核实。 |
| braun-sterican-current | literature | B. Braun Sterican naalden current manufacturer description; https://catalogs.bbraun.nl/nl-NL/p/PRID00000511/sterican-naalden | 当前第一手确认铬镍不锈钢、PP 针座及有机硅（silicone）涂层；不提供定量比例或特定合金牌号。 |
| who-phlebotomy-2010 | official_guidance | WHO Guidelines on Drawing Blood: Best Practices in Phlebotomy, 2010, ISBN 9789241599221, sections 2–3 and 8 and Annex G; WHO text https://www.ncbi.nlm.nih.gov/books/NBK138665/ ; complete WHO PDF mirror https://healthacademyonline.co.uk/wp-content/uploads/2020/10/WHO-guidelines-on-drawing-blood-best-practices-in-phlebotomy-Eng.pdf | 静脉采血形成历史、标本转移及立即整体弃入锐器盒；保留更安全器械和例外拆卸的反例背景；不规定临床实践、场址质量、废物负荷比例或病原值。 |
| who-health-care-waste-2014 | official_guidance | WHO Safe management of wastes from health-care activities, second edition 2014, ISBN 9789241548564, sections 2.1, 2.8 and 7; https://www.who.int/publications/i/item/9789241548564 ; official full PDF https://iris.who.int/server/api/core/bitstreams/4daece5e-1220-47f5-903c-8c2a14fcd778/content | 锐器与其他废物的区分、隔离称量、来源/封闭标识、储存及交接凭证；不提供通用组成比例、普遍法律阈值或未发生处理排放。 |
| nhs-waste-2024 | official_guidance | NHSScotland SHTN 03-01 Waste Management Guidelines, V8 December 2024, sections 5.23–5.25, 6.35–6.36, 11 and 15; https://www.nss.nhs.scot/media/5724/shtn-03-01-v8-dec-2024.pdf | 限定范围的锐器相对药物/散装液体物流指南与反例，以及接收特性凭证；真实地区现行条款仍须独立核实。 |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for Life Cycle Assessment: Detailed Guidance, first edition March 2010, sections 7.9.2–7.9.3, pp.255–265; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因多功能性层级、逐交换决定性因果及剩余过程门市场价值；作为方法综合使用，不当作临床产品组成或默认废物截断。 |
