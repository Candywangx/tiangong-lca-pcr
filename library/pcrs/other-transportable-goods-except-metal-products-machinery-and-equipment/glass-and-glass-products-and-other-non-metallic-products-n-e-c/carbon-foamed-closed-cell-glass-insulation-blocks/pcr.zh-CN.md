---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.carbon-foamed-closed-cell-glass-insulation-blocks
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 碳发泡闭孔玻璃保温块板

## 1. 范围与适用性

本PCR覆盖单一语义产品及实质制造方法需求：由再生玻璃和矿物熔制、冷却玻璃与炭黑研磨、装模、热发泡、受控退火、切割研磨及首次质量放行的未覆面闭孔泡沫玻璃保温矩形块板。它是CPC3.0:37117的较窄子集，不是整个合并分类叶。复用兼容的玻璃熔制、参考流、分配及数据质量原则，但粉末反应、泡孔留存及退火终端不能由浮法原片、机械磨边退火片、Danner管或热钢化淬冷方法替代。 `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`

完整出版方来源构成透明技术综合，不声称同一SKU、工厂、配方或当代订单。实际2026版EPD采用1m3及2023两场址实测密度；本PCR声明1kg实际产品净质量，体积或服务换算须有实测几何密度。历史手册大于66%、现行网页50%及来源配料比例炉温均受具体上下文限制，不是通用配方、反应、能耗、产率或性能默认值。BAU含甘油或水玻璃骨料示例及骨料标准，均不能替代此炭黑闭孔块路线。下述方法为归因制造生产指导，不是EPD项目认证。 `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-process-brochure`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.carbon-foamed-closed-cell-glass-insulation-blocks |
| classification_refs | CPC3.0:37117; 仅较窄炭黑发泡未覆面块板子集; 较窄关联已接受，以 classifications/mappings/cpc-3.0-to-pcr.yaml 及其决策记录为准；科学审查仍待完成 |
| covered_products | 完整炭黑发泡路线及首次质量放行后的未覆面闭孔泡沫玻璃保温矩形块板 |
| excluded_products | 覆面涂层板; 骨料碎石; 开孔吸声品; 冷粘团聚体; 玻璃棉纤维; 实心压砖; 中空玻璃; 镜; 原片; 钢化片; 已安装组件; 仅碳酸盐甘油水玻璃或SiC发泡路线 |
| representative_product | 首次放行的一种实际声明未覆面闭孔块板配置; 不强制品牌尺寸配方 |
| production_route | 原料碎玻璃 → 熔制 → 冷却 → 加炭黑研磨 → 装模 → 发泡 → 退火 → 切割检验 → 首次放行; 另列放行后包装仓储服务账 |
| market_state | 必要制造试验后裸露未覆面矩形块板; 表面平衡状态有记录; 可移除包装另记 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为兼容建筑用途提供声明未覆面闭孔泡沫玻璃保温材料 |
| How much | 1kg首次放行净参考产品; 服务等效须有实测尺寸密度导热系数及指定期间 |
| How well | 实际声明闭孔结构尺寸密度热工力学性能及其试验方法适用产品标准; 不用目录通用默认值 |
| How long or cycle | 一个制造首次质量放行周期; 不假设安装寿命或不同密度等级自动可比 |
| reference_flow_link | first_release |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 玻璃（成型和加工） `82b33e71-bfaa-49b4-9627-ee5963433f6e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 未覆面闭孔块板及声明功能; 炭黑粒子牌号结构及供方路线; 玻璃组分及整份供货形态; 碎玻璃来源处理及负荷移交; 实际熔制研磨模内发泡退火切割路线; 同配置实测密度及外尺寸; 热工力学试验方法结果及适用产品标准; 唯一首次质量放行批次及原Q; 平衡表面水分及泡孔留存气体状态; 原料在制成品非在制充注数量及逐交换历史; 失败空载启停及零产出覆盖; 真实气体组成温压密度低位热值及表状态; 电力地域电压组合及供方边界; 独立质量元素分子物种及水相证据; 包装件组成水分存量总移动及真实维修; 原交付冲回及返还成品新增返工链接; 真实外返水状态焓及供方约定; 分配细分因果剩余门及同期证据 |

每个必需限定信息均须在数据包元数据、产品说明或等效字段声明。该通用成型玻璃身份未限定泡沫等级、路线、地域及性能；必须保留first_release和本完整范围中的实际闭孔产品上下文。它不提供强度、密度、导热系数或符合性批准。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用切割及必要试验后首次放行平衡状态1kg实际产品净质量。Q为所选批次唯一首次放行质量。排除可移除包装和表面污染，保留产品内真实泡孔气碳。 |
| volume_conversion | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 质量为主基准。若需m3，对同一实际配置同状态测外体积和净质量，声明实测体积密度及透明换算。名义95或来源2023实测91kg/m3不是本场址密度。不从无关流次级属性推密度。 |
| single_normalization | all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 原始采集不除。convert_raw和attribute_raw先形成A_j，normalize_exchange再执行一次A_j/Q。清单及采集基准均为每1kg参考流；卡片及汇总只引用同一结果。Q=0保留原始负荷且不出单位结果。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | 纳入实际原生矿物和外来兼容碎玻璃的上游负荷及入厂运输，直到配料混合、熔制、冷却玻璃与炭黑研磨、装钢模、热发泡、受控退火、矩形切割研磨、检验及首次质量放行。每种真实配料、燃料、电力、水、辅料及出口分别原子化。仅采购泡沫玻璃成品再包装不能满足此制造边界。 | `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-process-brochure` |
| boundary_reference_gate | manufacture and service | Q为必要试验后、声明平衡状态下唯一首次放行未覆面闭孔块板的经校准净质量，单位kg。真实留存泡孔气体和残碳属于产品质量；可移除包装不属于。失败批及放行前破坏试样不进入Q但真实负荷保留。新放行期末成品已包含于Q。交付、复验、维修、退回及后续发运不产生新产量。唯一参考行为first_release。 | `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025` |
| boundary_stocks | all inventory rows | 保留完整代表期、启停、零产出、空载、清理、失败及返工。分别测量期初期末原料、熔体、粉末、块体在制品，以及润滑油、冷却水和其他真实流体的非在制充注存量。每种存量保留物理数量和逐交换历史负荷向量。纳入的模具/工具/设备资产实物存量须与有记录的剩余及已消耗服务向量分开，不编寿命、不重复整台采购。制造期末仅含未首放原料/WIP及未归属充注/服务库存，不含已首次放行成品。已按充注变化校正的原始计量消耗不重复调整。厂内碎料回用及工序转移合并时抵消，不成为新采购。 | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| boundary_fg_services | service | 按批次保留首次放行实物接收、期初期末成品、总发运、收到外返、原交付冲回、单独向外返还、破损及实际维修增加或移除、水分与气体变化。退货或返工成品保留原放行及历史向量。服务负荷归属原服务放行批次并用其原始Q，维修仅计实际新增；旧成品及冲回不得转给无关当期Q。制造转出与服务接收在合并时抵消。原批次已执行的服务即使货物仍留期末成品也保留于其A_j。不替换为净交付分母。 | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| boundary_species | manufacture and service | 全物理质量及C/S/N/O/H等相关元素须与反应物种和相态证据独立。纳入真实湿空气总进出并逐种气体记录、产品留存气碳、边角料、粉尘及处理出口。不以一个残差拟合两个未知，不从泡孔密度推气体反应产率，不将NOx/COD/VOC当作指定化学质量，不将泡孔气体作为新外购。实际新增原料、净化试剂、滤材、维修件及新检出物种须逐一建卡采集后方可完成；不得归入other集合或无依据零值。 | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025` |
| boundary_supply | all inventory rows | 每份外购制剂、矿物、包装件或混合物按完整供货状态只采购一次；含量、载水及活性物作为组分子账，不重复采购同一材料。可移除运输包装另有实物接收账；识别供方已包含的负荷，不重复采购该隐含负荷。实际厂内配制逐项列外购材料以及真实混合能耗、损失和水。匹配UUID全部原生限制、供方地域、路线、形态、介质及参考属性；辅流UUID未定不能省略交换。披露上游回收、废物终止及负荷移交，不默认再生原料免费或为边角料计信用。 | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| boundary_water_heat | manufacture and service | 区分供水、载水、游离水、结构水、反应水、湿污泥、真实空气湿度及凝水来源。采用独立实测的物质特定密度及热状态；液气积分体积本已是数量，仅真实速率才对时间积分。真实外部换热水或凝水返还按实测温度或焓及供方水能约定作为Product交换。不从回收箭头虚构蒸汽系统、锅炉、凝水产率、外供热或自动能量信用。 | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025` |
| boundary_exclusions | dataset applicability | 排除覆面涂层沥青板、骨料或碎石、纤维棉、开孔吸声泡沫、冷粘结玻璃团聚体、中空玻璃、实心压制玻璃砖、镜、钢化及已安装系统。仅碳酸盐、甘油或水玻璃及SiC发泡不属此炭黑路线。普通表面修整仍纳入；真实核心化学或成型变化须重评适用性。来源EPD的全生命周期模块及BAU项目声明不能将本制造PCR变成完整EPD或授权模块D信用。 | `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收门内实际独立整份矿物盐炭黑及兼容回收碎玻璃; 回收状态和上游负荷移交有记录; 完整厂内玻璃及泡沫块制造 |
| starting_condition_role | 带历史负荷的上游外购材料加真实完整前景制造; 非成品块再包装 |
| product_classification_scope | CPC3.0:37117; 较窄炭黑发泡闭孔未覆面块板 |
| recursive_input_rule | 内部碎料保留原向量并抵消。外来同类别退回或回收块须有实际物理状态回收处理及记录负荷移交; 不静默视为零负荷原生替代 |
| upstream_dataset_requirement | 匹配每份完整供货材料公用工程包装及外部回收运输处理的路线状态地域参考属性; 保留逐交换历史 |
| disclosure | 声明完整原料至首次放行路线及独立放行后服务范围和原批次分母; 不截断制造不默认安装寿命或EPD模块D声明 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 集成配料熔制研磨碳发泡退火切割质量放行 | required | 完整实际原料至终端路线及全部失败存量记录 | foreground | first_release |
| service | 放行后包装仓储搬运发运 | required | 实际服务及总实物移动归属原放行批次; 不产生新产量 | foreground | 每1kg原参考批次; 不新增Q |

### 过程：集成制造 (`manufacture`)

制造内源级计量分别覆盖配料熔制、冷却研磨、装模发泡退火及切割放行。这是一个集成清单控制体；工序间材料及内部热转移有记录并抵消，不重复采购。真实新增公用工程、耗材、反应物种或处理分支须在数据集完成前拆分。

#### 输入

##### 产品流

###### 外来再生碎玻璃原料 (`cullet`)

按实际回收及废物终止门记录整份外来兼容碎玻璃，采集来源玻璃、污染物、水分、分选及运输。它不是厂内回料、晶圆原料或外购泡沫玻璃成品；不采用通用废玻璃候选UUID。实际上游回收负荷只计一次。

- 选定流：清洁分选钠钙碎玻璃
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 硅质配料 (`silica`)

厂内配料用石英或硅砂矿物，原生身份未固定含量及级配。核对实际玻璃配料矿物并记录整份来料质量；不可替代为直接环境资源开采或纳米二氧化硅。

- 选定流：石英 `ddee14c5-2a28-4224-9b84-68dc5956972f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 长石配料 (`feldspar`)

玻璃配料用矿物长石，厂内生产混合。原生备注的用量来自配方估算；此处只采用身份，采集本场址数量。独立测定碱组分、水分及级配；不继承电瓷前景。

- 选定流：长石 `ec8f6638-6f17-4849-8ee4-fbe743d52e80`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 整份来料纯碱 (`soda_ash`)

条件身份为化工厂天然碱加工的95%碳酸钠，CAS497-19-8。整份来料盐只采购一次；含量、结晶或游离水及杂质为子账。羧酸分类是孤立分类错误，CAS、名称及备注一致指向碳酸盐。其他纯度或合成、回收路线须另核实身份；不强制配方采用95%等级。

- 选定流：碳酸钠 `2099dae8-ad14-4496-87eb-d339b26e09f7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 无水硫酸钠 (`sodium_sulfate`)

无水元明粉，CAS7757-82-6，厂内生产混合；原生备注说明无水矿物及可能水化。核对整份来料盐及水分，不采用月桂醇聚醚硫酸钠或其他水合盐身份。不采用原生晶体密度或硫酸盐转化产率。

- 选定流：元明粉 `eb53c69e-ff4b-47f4-b8b3-879d82e2f9bb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 硝酸钠配料氧化剂 (`sodium_nitrate`)

实际配方使用该盐时纳入，整份盐、含量及水分分别记录。基本流硝酸盐或亚硝酸盐候选不能作为采购产品身份。氮须在玻璃、残余物及逐种气体中追踪；不假设NOx产率。

- 选定流：来料硝酸钠盐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 氧化铁玻璃配料 (`ferric_oxide`)

矿物来源三氧化二铁或赤铁矿，CAS1309-37-1，厂内生产混合；原生备注为开采加工赤铁矿，不是乳液聚合胶粘剂。核对实际Fe(III)氧化物形态及含量；FeO、Fe3O4、组成未知铁矿或特定合成颜料路线需另用身份。

- 选定流：三氧化二铁 `27dcbd61-ba08-45f3-a87b-2a87b5fb2423`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 条件白云石配料 (`dolomite`)

仅实际配方含白云石矿物或白云岩时纳入，原生身份为厂内钠钙玻璃配料原料，来源未报告用量。测定碳酸盐组成、水分及煅烧状态；煅烧白云石不是此原矿。

- 选定流：白云石 `c15705ab-58b1-420f-ac59-3938bf8cda76`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-route`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`

###### 条件氧化钙配料 (`quicklime`)

条件实际煅烧氧化钙固体，CAS1305-78-8，厂内生产混合；原生备注说明碳酸盐煅烧及吸收空气CO2。核对真实粉料牌号含量水分，排除熟石灰及碳酸盐。本所选身份为Mass/kg；已拒绝散装磨细Volume参考候选，因缺乏堆积密度不得换算。不假设煅烧或水化产率。

- 选定流：氧化钙 `61666bfa-0357-473f-b080-dcc6e7ac560a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-route`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`

###### 炭黑发泡剂 (`carbon_black`)

商品固体炭黑粒子聚集体，CAS1333-86-4；原生同义词涵盖乙炔黑、槽黑、炉黑、灯黑及热裂黑而不固定某路线。以供方证据核对实际牌号、聚集结构、粒径、灰分、硫及水分。石墨族分类为孤立分类问题；不替代为石墨、直接黑38染料、SiC或水泥烟炱混合物。整份来料试剂只计一次，并保留残碳及泡孔气体子账。

- 选定流：炭黑 `a65e28e0-46ce-4288-8348-dc4c00f77df0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-process-brochure`

###### 制造用电 (`electricity_mfg`)

计量本集成门内熔制辅助、输送、研磨、发泡、退火、切割、抽尘、压缩空气制备、冷却及控制的全部用电，包含失败和空载批次。采用身份限定中国低于1kV的用户端电网平均消费组合；其他地域、电压或发电组合须匹配身份和供方。原生Net calorific value属性在此承载MJ电能，不是燃烧热。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 制造炉燃料 (`natural_gas`)

实际消费端符合适用燃气标准、经压缩和管道输送的气态天然气，CAS74-82-8为原生甲烷族身份。不可替代为纯甲烷、LNG、粗气或某江苏热电厂组成。原生参考属性是Volume；保留实际计量温度、压力、压缩因子及供方基准状态并核实供方兼容。原生次级Mass系数1不是物理密度。质量和能量平衡所需实际组成及低位热值须独立测量；不默认气源或锅炉。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 制造供水 (`water_mfg`)

厂内经处理市政或饮用供水，须匹配当地水源及处理，原生参考为Mass/kg。原始账内分别记录补水、清洗及真实冷却用水。原生次级0.001m3/kg不证明本场址密度。闭路循环不重复计入；保留非在制水存量及逐交换历史向量。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 条件机械润滑 (`lubricant`)

仅在真实存在时记录机械矿物油补充及充注。记录整份来料牌号、添加剂制剂、期初期末充注量及逐交换历史向量；已校正消耗量不再校正。不设油耗率。

- 选定流：矿物润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 条件除尘滤布 (`filter_fabric`)

仅真实除尘器使用聚酯滤布时，记录实际完整替换滤布、尺寸、牌号及存量变化。其他真实集尘介质须另建具体卡；不假设滤材数量寿命。

- 选定流：聚酯除尘滤布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_mfg`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

##### 基本流

###### 分子氧进入 (`oxygen_in`)

同一实测控制体内进入的环境空气该物种总量，采用实测进气组成及湿度，不采用固定干空气配方。物理进气量与化学消耗量及外购氧氮区分。配对实际逐种出气及泡孔留存账，不从单一气体残差推氧耗。已绑定的原生空气资源身份仅用于输入。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 二氮进入 (`nitrogen_in`)

同一实测控制体内进入的环境空气该物种总量，采用实测进气组成及湿度，不采用固定干空气配方。物理进气量与化学消耗量及外购氧氮区分。配对实际逐种出气及泡孔留存账，不从单一气体残差推氧耗。已绑定的原生空气资源身份仅用于输入。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进气水蒸气进入 (`humidity_in`)

同一实测控制体内进入的环境空气该物种总量，采用实测进气组成及湿度，不采用固定干空气配方。物理进气量与化学消耗量及外购氧氮区分。配对实际逐种出气及泡孔留存账，不从单一气体残差推氧耗。已绑定的原生空气资源身份仅用于输入。

- 选定流：进气水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进气氩气进入 (`argon_in`)

同一实测控制体内进入的环境空气该物种总量，采用实测进气组成及湿度，不采用固定干空气配方。物理进气量与化学消耗量及外购氧氮区分。配对实际逐种出气及泡孔留存账，不从单一气体残差推氧耗。已绑定的原生空气资源身份仅用于输入。

- 选定流：进气氩气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进气二氧化碳进入 (`ambient_co2_in`)

同一实测控制体内进入的环境空气该物种总量，采用实测进气组成及湿度，不采用固定干空气配方。物理进气量与化学消耗量及外购氧氮区分。配对实际逐种出气及泡孔留存账，不从单一气体残差推氧耗。已绑定的原生空气资源身份仅用于输入。

- 选定流：进气二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

#### 输出

##### 产品流

###### 首次质量放行未覆面泡沫玻璃块 (`first_release`)

通用成型加工玻璃Product身份，Mass/kg；原生未固定牌号、路线、CAS、地域、粒子规格或性能数据。37199分类不能确立或否定由独立证据建立的闭孔板块边界。须有实际炭黑发泡、受控退火、切割矩形未覆面块板、声明密度尺寸、热工及力学试验和放行状态；通用身份不证明这些属性。Q为记录平衡状态下成品净质量，包含真实留存在泡孔内的气体及残碳，排除可移除包装和表面污染物。每件只首次放行一次；已含于Q的期末成品不是另一个产出。

- 选定流：玻璃（成型和加工） `82b33e71-bfaa-49b4-9627-ee5963433f6e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_release`
- 来源：`foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025`

###### 条件外部换热水返还 (`cooling_water_return`)

仅工厂真实向外部供方返还所供液态水时记录质量、纯度、实测返还温度或焓及供方水能约定。厂内循环抵消。它不是默认蒸汽凝水、废水或自动热信用。

- 选定流：返还换热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

##### 废物流

###### 未熔玻璃配料废料 (`batch_reject`)

外送处理的真实混合配料废料，作为一种物理材料记录实测组分及水分向量。厂内回用仍属内部。

- 选定流：未熔玻璃配料废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 未覆面泡沫玻璃制造废料 (`glass_reject`)

实际外送处理的边角料、失败块及破坏试验材料，逐去向及组成批次记录。厂内循环碎料保留负荷并抵消，不形成外部再采购或负信用。 原生Waste/Mass身份覆盖厂内玻璃生产固体废料，未固定粒径配方回收处置路线。本行保留独立实测具体泡沫玻璃材料及去向，不使用上游晶圆生产或废水身份。

- 选定流：玻璃生产废料 `9e75655e-039d-421e-abec-bbe625491bc6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 捕集泡沫玻璃切割粉尘 (`captured_glass_dust`)

切割研磨实际捕集并外送的粉尘，区别于空气排放及回用碎料。切割释放的留存气体按真实物种另记。 原生Waste/Mass身份覆盖厂内玻璃生产固体废料，未固定粒径配方回收处置路线。本行保留独立实测具体泡沫玻璃材料及去向，不使用上游晶圆生产或废水身份。

- 选定流：玻璃生产废料 `9e75655e-039d-421e-abec-bbe625491bc6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 废聚酯除尘滤布 (`filter_media`)

条件实际聚酯集尘滤布；记录含尘整件质量并以粉尘为组分子账，不把该粉尘再作另一笔输出质量。其他滤材另建原子卡。

- 选定流：废聚酯除尘滤布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 废矿物润滑油 (`spent_oil`)

仅记录充注存量核对后的实际外送废油，保留污染、水分、接收方及去向；不预设润滑油缺失或成为联产品。 原生Waste身份为产生点的石油基或合成废润滑油，未固定处理路线。本行选择真实矿物来源废油，不预计再生或燃料处理信用。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 泡沫玻璃厂清洗废水 (`effluent`)

实际外送处理的水相物流，记录全湿质量、溶解及悬浮组分、温度与去向，不当作直接河流排放。厂内处理后的物种转移须另建真实基本流。COD不是具体化学物质量。

- 选定流：泡沫玻璃厂清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

##### 基本流

###### 化石二氧化碳排放 (`co2_fossil`)

实际进入室外空气的新增化石CO2，实测并识别来源，区别于进气背景、碳酸盐CO2及泡孔留存气体。CAS124-38-9原生为空气未指定子环境排放；不设化学产率。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 碳酸盐分解二氧化碳 (`co2_mineral`)

独立测定实际进入空气的矿物碳排放，不替代化石或生物源身份，不假设碳酸盐完全转化。泡孔留存CO2包含在产品质量内，不重复排放。

- 选定流：碳酸盐分解二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 化石一氧化碳排放 (`co_fossil`)

真实室外化石CO，CAS630-08-0原生为空气未指定子环境排放。区别于CO2及非化石CO，不设燃料排放系数。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 一氧化氮排放 (`nitric_oxide`)

测定真实室外NO，CAS10102-43-9原生为空气未指定子环境排放。以NO2当量报告的总NOx不是真实NO或NO2质量；须独立确定物种。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进入空气的二氧化氮 (`nitrogen_dioxide`)

仅真实实测NO2物种，CAS10102-44-0；检索到CAS14797-65-0的亚硝酸根候选不兼容。不用总氮或NOx倒拟。

- 选定流：进入空气的二氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进入空气的二氧化硫 (`sulfur_dioxide`)

实际进入室外空气的SO2；室内空气及水土候选不可重绑定为此烟囱。硫氧化还原、留存硫酸盐或硫化物及粉尘须独立确定。 采用的原生Elementary/Mass身份是空气未指定子环境排放的真实分子物种CAS 7446-09-5；不是空气资源输入或水土室内排放，须匹配实际室外介质及相态。原生多语同义词不是实测混合组成，也不允许替代同位素或相态变体。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进入空气的硫化氢 (`hydrogen_sulfide`)

仅纳入发泡、切割或储存中真实测得的H2S排放，区别完整泡孔内气体与释放气体。不假设硫酸盐还原或水解产率。

- 选定流：进入空气的硫化氢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进入室外空气的水蒸气 (`water_vapor_out`)

记录真实出气水蒸气，分别追踪进气湿度穿透、燃料反应水、游离或载水蒸发及相变。水体候选不可标识空气排放，不以残差拟合。 采用的原生Elementary/Mass身份是空气未指定子环境排放的真实分子物种CAS 7732-18-5；不是空气资源输入或水土室内排放，须匹配实际室外介质及相态。原生多语同义词不是实测混合组成，也不允许替代同位素或相态变体。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进入空气的分子氧 (`oxygen_out`)

同一物理控制体排气及通风中的真实未反应O2，实测而非假设氧完全消耗。不用空气资源输入UUID作排放。 采用的原生Elementary/Mass身份是空气未指定子环境排放的真实分子物种CAS 7782-44-7；不是空气资源输入或水土室内排放，须匹配实际室外介质及相态。原生多语同义词不是实测混合组成，也不允许替代同位素或相态变体。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进入空气的二氮 (`nitrogen_out`)

真实N2出气，包含实测载气穿透；不替代总氮，不假设全部硝酸盐氮转化为N2。 采用的原生Elementary/Mass身份是空气未指定子环境排放的真实分子物种CAS 7727-37-9；不是空气资源输入或水土室内排放，须匹配实际室外介质及相态。原生多语同义词不是实测混合组成，也不允许替代同位素或相态变体。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进入空气的氩气 (`argon_out`)

真实实测惰性空气物种出气，仅作总进出配对，不编干空气比例。

- 选定流：进入空气的氩气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 进气来源的二氧化碳出气 (`ambient_co2_out`)

为总物理闭合记录实测穿透背景CO2，并与进气独立抵消后报告净新生成物种；不标为工艺新生化石排放。

- 选定流：进气来源的二氧化碳出气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 空气中泡沫玻璃粉尘 (`glass_dust_air`)

按声明粒径计量及接收空气环境记录实际未捕集颗粒材料，不从全厂总尘或捕集残渣推算。若熔制前真实排放晶质原料石英尘，另加独立卡。

- 选定流：空气中泡沫玻璃粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

### 过程：放行后服务 (`service`)

cp_service保留成品实物移动及原制造向量，不再设first_release行。真实维修及水分气体损失需逐材料物种实测扩展。服务结果仅用原受服务批次Q；无关旧成品服务不加入当期制造。

#### 输入

##### 产品流

###### 放行后用电 (`electricity_service`)

首次放行后的真实包装、仓储、搬运、抽尘及发运用电，归属原服务批次。与制造相同的中国低于1kV用户端电网平均供应限制；不形成新生产Q。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 放行后供水 (`water_service`)

放行后真实处理市政供水及清洗用水，原生供水限制相同。记录来源处理、独立相态物种移动及真实存量，不重复校正已校正消耗。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 新供包装件—LDPE包装薄膜 (`pefilm_purchase`)

实际整份LDPE包装薄膜；CAS9002-88-4原生为PE片膜。箱包分类为孤立错误；原生备注的PET是竞争聚合物，不是所选材质。独立核对LDPE组成、厚度、再生含量及供方。 新外购或已由供方随货含入的实物接收量，恰好计一次。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 收到外部退回包装件—LDPE包装薄膜 (`pefilm_return_received`)

实际整份LDPE包装薄膜；CAS9002-88-4原生为PE片膜。箱包分类为孤立错误；原生备注的PET是竞争聚合物，不是所选材质。独立核对LDPE组成、厚度、再生含量及供方。 仅真实收到的外部返还，保留原批次及历史负荷，不作新采购。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 新供包装件—木制运输托盘 (`pallet_purchase`)

实际完整木板或木条托盘，Mass/kg；原生Product供货为木材厂生产混合、木板/木条形态，关联供方前须匹配该供货阶段；原生未固定尺寸、处理及树种。电力分类是孤立错误，与一致木质物理身份及保留的木制分类冲突。核对真实托盘、实测水分及配件；不默认欧标尺寸或固定回用次数。 新外购或已由供方随货含入的实物接收量，恰好计一次。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 收到外部退回包装件—木制运输托盘 (`pallet_return_received`)

实际完整木板或木条托盘，Mass/kg；原生Product供货为木材厂生产混合、木板/木条形态，关联供方前须匹配该供货阶段；原生未固定尺寸、处理及树种。电力分类是孤立错误，与一致木质物理身份及保留的木制分类冲突。核对真实托盘、实测水分及配件；不默认欧标尺寸或固定回用次数。 仅真实收到的外部返还，保留原批次及历史负荷，不作新采购。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 新供包装件—纸板护角 (`cardboard_purchase`)

实际一种外购纸板护角，不是包装集合或纸箱。按配置记录组成、涂层、实测水分及质量；不套用整纸箱例外。 新外购或已由供方随货含入的实物接收量，恰好计一次。

- 选定流：纸板护角
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 收到外部退回包装件—纸板护角 (`cardboard_return_received`)

实际一种外购纸板护角，不是包装集合或纸箱。按配置记录组成、涂层、实测水分及质量；不套用整纸箱例外。 仅真实收到的外部返还，保留原批次及历史负荷，不作新采购。

- 选定流：纸板护角
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 新供包装件—纸质不干胶识别标签 (`label_purchase`)

实际整份外购印刷纸标签，含随供胶层及油墨；只采购一次，组分仅设子账。真实厂内印刷或配胶另加逐种材料及能耗。 新外购或已由供方随货含入的实物接收量，恰好计一次。 原生纸标签为印刷贴标材料，全球厂内生产混合，Mass/kg，未固定胶墨配方或纸基等级。核实完整来料标签，不导入零售容器标签基材身份。

- 选定流：纸质标签 `6e3bea7a-9e89-4f50-a065-79feaac682db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 收到外部退回包装件—纸质不干胶识别标签 (`label_return_received`)

实际整份外购印刷纸标签，含随供胶层及油墨；只采购一次，组分仅设子账。真实厂内印刷或配胶另加逐种材料及能耗。 仅真实收到的外部返还，保留原批次及历史负荷，不作新采购。 原生纸标签为印刷贴标材料，全球厂内生产混合，Mass/kg，未固定胶墨配方或纸基等级。核实完整来料标签，不导入零售容器标签基材身份。

- 选定流：纸质标签 `6e3bea7a-9e89-4f50-a065-79feaac682db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

#### 输出

##### 产品流

###### 随总实物发运包装件—LDPE包装薄膜 (`pefilm_gross_out`)

实际整份LDPE包装薄膜；CAS9002-88-4原生为PE片膜。箱包分类为孤立错误；原生备注的PET是竞争聚合物，不是所选材质。独立核对LDPE组成、厚度、再生含量及供方。 随所有发运批次的总实物外运，与净产品Q分开；同件日后返还不抹除此移动。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 单独向外返还包装件—LDPE包装薄膜 (`pefilm_return_sent`)

实际整份LDPE包装薄膜；CAS9002-88-4原生为PE片膜。箱包分类为孤立错误；原生备注的PET是竞争聚合物，不是所选材质。独立核对LDPE组成、厚度、再生含量及供方。 实际单独返还外部所有者，不是内部回用或已含于总发运的包装。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 随总实物发运包装件—木制运输托盘 (`pallet_gross_out`)

实际完整木板或木条托盘，Mass/kg；原生Product供货为木材厂生产混合、木板/木条形态，关联供方前须匹配该供货阶段；原生未固定尺寸、处理及树种。电力分类是孤立错误，与一致木质物理身份及保留的木制分类冲突。核对真实托盘、实测水分及配件；不默认欧标尺寸或固定回用次数。 随所有发运批次的总实物外运，与净产品Q分开；同件日后返还不抹除此移动。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 单独向外返还包装件—木制运输托盘 (`pallet_return_sent`)

实际完整木板或木条托盘，Mass/kg；原生Product供货为木材厂生产混合、木板/木条形态，关联供方前须匹配该供货阶段；原生未固定尺寸、处理及树种。电力分类是孤立错误，与一致木质物理身份及保留的木制分类冲突。核对真实托盘、实测水分及配件；不默认欧标尺寸或固定回用次数。 实际单独返还外部所有者，不是内部回用或已含于总发运的包装。

- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 随总实物发运包装件—纸板护角 (`cardboard_gross_out`)

实际一种外购纸板护角，不是包装集合或纸箱。按配置记录组成、涂层、实测水分及质量；不套用整纸箱例外。 随所有发运批次的总实物外运，与净产品Q分开；同件日后返还不抹除此移动。

- 选定流：纸板护角
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 单独向外返还包装件—纸板护角 (`cardboard_return_sent`)

实际一种外购纸板护角，不是包装集合或纸箱。按配置记录组成、涂层、实测水分及质量；不套用整纸箱例外。 实际单独返还外部所有者，不是内部回用或已含于总发运的包装。

- 选定流：纸板护角
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 随总实物发运包装件—纸质不干胶识别标签 (`label_gross_out`)

实际整份外购印刷纸标签，含随供胶层及油墨；只采购一次，组分仅设子账。真实厂内印刷或配胶另加逐种材料及能耗。 随所有发运批次的总实物外运，与净产品Q分开；同件日后返还不抹除此移动。 原生纸标签为印刷贴标材料，全球厂内生产混合，Mass/kg，未固定胶墨配方或纸基等级。核实完整来料标签，不导入零售容器标签基材身份。

- 选定流：纸质标签 `6e3bea7a-9e89-4f50-a065-79feaac682db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 单独向外返还包装件—纸质不干胶识别标签 (`label_return_sent`)

实际整份外购印刷纸标签，含随供胶层及油墨；只采购一次，组分仅设子账。真实厂内印刷或配胶另加逐种材料及能耗。 实际单独返还外部所有者，不是内部回用或已含于总发运的包装。 原生纸标签为印刷贴标材料，全球厂内生产混合，Mass/kg，未固定胶墨配方或纸基等级。核实完整来料标签，不导入零售容器标签基材身份。

- 选定流：纸质标签 `6e3bea7a-9e89-4f50-a065-79feaac682db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

##### 废物流

###### 废弃包装件—LDPE包装薄膜 (`pefilm_waste`)

实际整份LDPE包装薄膜；CAS9002-88-4原生为PE片膜。箱包分类为孤立错误；原生备注的PET是竞争聚合物，不是所选材质。独立核对LDPE组成、厚度、再生含量及供方。 实际外送处理废件，记录湿干组成及去向；Product UUID不能标识Waste状态。

- 选定流：LDPE包装薄膜废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 废弃包装件—木制运输托盘 (`pallet_waste`)

实际完整木板或木条托盘，Mass/kg；原生未固定尺寸、处理及树种。电力分类是孤立错误，与一致木质物理身份及保留的木制分类冲突。核对真实托盘、实测水分及配件；不默认欧标尺寸或固定回用次数。 实际外送处理废件，记录湿干组成及去向；Product UUID不能标识Waste状态。

- 选定流：木制运输托盘废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 废弃包装件—纸板护角 (`cardboard_waste`)

实际一种外购纸板护角，不是包装集合或纸箱。按配置记录组成、涂层、实测水分及质量；不套用整纸箱例外。 实际外送处理废件，记录湿干组成及去向；Product UUID不能标识Waste状态。

- 选定流：纸板护角废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 废弃包装件—纸质不干胶识别标签 (`label_waste`)

实际整份外购印刷纸标签，含随供胶层及油墨；只采购一次，组分仅设子账。真实厂内印刷或配胶另加逐种材料及能耗。 实际外送处理废件，记录湿干组成及去向；Product UUID不能标识Waste状态。

- 选定流：纸质不干胶识别标签废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 放行后泡沫玻璃损失 (`fg_breakage`)

真实原已放行成品批次损失，含搬运后返货拒收。不作新的首次放行输出；继承原制造负荷并记录实测泡孔气体释放，不转给无关当期产量。

- 选定流：未覆面泡沫玻璃搬运废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

###### 放行后清洗废水 (`service_effluent`)

实际送往明确处理方的湿清洗废水，测定固体及溶解物种。核对供水、蒸发及存量；仅在处理真实位于门内时加入实际下游基本排放。

- 选定流：泡沫玻璃仓储清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此交换的唯一单位结果q_j；原始记录及唯一计算见第8节；不再相除。
- 数值来源模式：计算前景 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | each shared exchange | 归因清单首先独立归属专属实测负荷，并以真实设备时间、计量工序或有记录工程模型进行物理或虚拟细分。保留真实共同损失及失败空载负荷，不因命名专属步骤而删掉。 | `ilcd-attributional-2010` |
| allocate_causality | each residual exchange | 对剩余共享交换j，检验其与实际产品功能及产量变化间决定性的物理因果关系。密度、研磨细度、发泡配方、保温时间及热状态不同可能改变驱动；引用EPD的全厂质量分配只是案例实践，不证明该因果。不任意选质量、体积、能量或经济比例。 | `ilcd-attributional-2010`; `foamglas-t3plus-epd-2026` |
| allocate_residual_value | genuinely residual multifunctional common process | 仅当细分及决定性物理因果仍无法解决真实剩余多功能性时，才使用同一共同过程门、同期实际状态市场价值，并对齐数量、币种、水分质量及时间。比较价值前剥离不同下游加工、运输及销售服务。记录理由及敏感性，不设固定比例。废料可售本身不构成联产品或自动替代信用。 | `ilcd-attributional-2010` |
| allocate_cohort | all stocks and service | 每项交换负荷随原材料或放行批次穿过在制、成品、充注、退回及真实维修。共享服务归属实际受服务批次，保留原交付冲回链接和原Q，并另保留总物理账。外来再生原料处理及包装返还遵循明确负荷移交和重复服务记录；内部回用不是再采购或负信用。 | `ilcd-attributional-2010`; `bau-foam-glass-pcr-2025` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集计算及质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mfg | manufacture | 原料公用工程及辅料 | 前景生产记录 | 供方及整份交付状态; 批配方; 含量及水分; 每种原料质量; 原始表读及单位; 实际气体组成状态密度及低位热值; 电力供应电压地域; 运行启停空载失败返工; 原料及非在制充注存量; 逐交换历史向量; 逐材料及方式入厂运输 | 采用经校准秤表并核对接收、配方及完整真实路线设备日志。整份外购制剂只计一次；核实操作方实际流程及逐种真实燃料材料。运输记录实际质量距离方式；现场运营的运输逐列燃料排放，门外运输匹配运输服务数据集。 保留未除原始总量。convert_raw和attribute_raw先于每1kg参考流的唯一normalize_exchange结果，采集不除。 | kg; MJ; 声明气体状态m3; 原始表单位 | 每批及每计量区间 | 完整代表期含全部零产出运行 | 声明场址及至首次放行的设备边界 | 每 1 kg 参考流 | 校准; 票据; 实际配方; 供方规格; 表界; 存量向量 |
| cp_balance | manufacture | 物理质量相态物种及排放记录 | 测量及实验室记录 | 逐种进出物种; 原始体积或速率; 时间; 温压湿度压缩因子; 实际排气水分及O2; 泡孔留存气和残碳; 玻璃氧化物及硫酸盐硫化物物种; 湿干废物; 溶解悬浮含量; 真实废水接收介质; 真实返还水温度焓; 期初期末熔体粉末块体在制及流体存量; 向量历史 | 在一致控制体内独立校准质量体积采样并识别实际气体物种。区分烟囱、无组织及各接收介质。区分实测物种与分析指标，以独立记录确定气体反应、结合游离水及相态移动，不以残差拟合。负荷分配前核验物理质量及元素。 保留未除原始物理及物种观测。另行使用physical_gates，仅归属后交换总量进入每1kg参考流唯一normalize_exchange。 | 逐物种kg; 原始m3或速率; 实测状态及焓 | 每运行存量门及代表物种采样 | 同一制造期及存量历史 | 制造物理控制体及真实处理出口 | 每 1 kg 参考流 | 采样报告; 检出限; 气体校准; 独立元素分析; 水分及流状态记录 |
| cp_release | manufacture | first_release | 质量放行及净称量 | 唯一放行标识; 产品配置; 组成及碳路线; 实际尺寸密度; 闭孔证据; 导热及抗压试验方法结果; 适用标准; 退火切割试验记录; 净平衡质量; 皮重表面状态; 首次放行时间; 破坏试验损失; 期末成品归属 | 采用经校准秤在记录平衡条件称量真实验收未覆面块板；排除可移除包装污染，保留真实泡孔气体残碳。每个唯一放行关联试验、批次、几何及失败。对同配置独立测量质量及外体积，不导入目录名义密度。 仅采集原始kg的Q；release_denominator定义Q，first_release代表1kg参考流。采集时不归一原始放行记录。 | kg; 实测尺寸及试验单位 | 每块或可追溯称量批首次放行时 | 同一所选首次放行批次 | 全部必要制造质量试验后的首次放行门 | 每 1 kg 参考流 | 秤校准; 唯一放行登记; 试验结果; 皮重; 可追溯配置及平衡状态 |
| cp_service | service | 包装成品返还及服务 | 批次存量移动及计量记录 | 原放行批次及Q; 原交付及冲回; 期初期末成品; 总发运; 收到和对外返还; 破损; 实际维修增减; 每种包装空件附着在制附着成品可回用存量; 外购随供已含接收外部返还接收总外运单独返还废物; 木纸水分; 实际维修板钉质量及来源; 整件与组分; 逐交换历史向量; 原始能水及流体存量 | 逐真实包装配置及水分条件称量，核对互斥物理存量移动。旧批次仍保留完整成品及包装总账；退回冲回关联原交付、真实维修及历史负荷。计量真实仓储搬运包装清理服务。声明完整前将真实维修材料及气水变化逐一建行，不虚构其发生。 采集未除原始量。attribute_raw前核对packaging_ledger及physical_gates；对原受服务批次及原Q使用每1kg参考流唯一normalize_exchange。旧批次服务与无关当期制造结果分开。 | kg; MJ; 原始件数及水分 | 每移动及匹配服务计量区间 | 所选放行批次及原存量历史 | 放行后物理及服务门 | 每 1 kg 参考流 | 存量发运记录; 返还链接; 校准包装重量; 实际维修证据; 历史向量; 服务计量覆盖 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | 在存量和负荷归属前将每条实际原始记录转换为其行单位及声明状态。电力MJ = kWh * 3.6。仅真实质量或体积速率按实测时间积分；累计表差和已积分体积本是数量，不再乘时间。质量体积换算采用实测状态下独立物质特定密度；计数换算用实际配置单件质量。气体原生次级系数不得替代实测密度或实际低位热值。 | raw readings; unit factors; measured density and state; article configuration | converted raw totals | `bau-foam-glass-pcr-2025` |
| attribute_raw | all inventory rows | 归属前区分实物移动数量与负荷/消耗分子。对每个制造交换j核对：期初未首放原料/WIP及未归属在装/服务向量+真实换算新增=对应期末未首放/未归属向量+首放转移B_j^Q+有证据归属其他真实批次/功能的量。制造负荷A_j为完成有记录细分及真实剩余分配后的B_j^Q，包含全部新增首放成品，即使期末留库也不能再扣该成品向量。普通废物、边角料、失败批和破坏试验仍保留其引起的制造及搬运/处理负荷；仅实物外送或出售不能把继承负荷当作转移别处扣除或形成信用。归属别处须追溯不同真实批次/功能及适用分配或负荷移交决定。成品历史另核：期初成品向量+B_j^Q+按原发运向量计真实返回+真实服务增量=期末成品向量+毛发运向量+其他可追溯移除/去向。返回恢复原制造仅为追溯，不再次新增制造。服务负荷A_j按原受服务批次及原Q计入每项已实际执行增量，即使已服务货物仍留期末成品；只修正互斥的未消耗/未归属服务或充注库存。明确采购/接收、毛发运、返回及废物移动卡的A_j是换算后的真实实物移动，负荷/消耗向量另账，不能用未耗库存扣减毛接收。每个B保留本交换分子单位，不能用存量kg替代所有负荷，已按库存修正的消耗不得再修正。合并账仅抵消一次内部转移。 | converted raw totals; exchange-specific stock vectors; cohort and return links; allocation records | A_j attributable raw exchange totals | `ilcd-attributional-2010` |
| release_denominator | first_release | Q = 所选产品批次必要质量试验后唯一首次放行块板的实测净质量之和，单位kg。采用记录平衡状态，剔除包装及表面污染，保留真实泡孔气体和残碳。放行前失败及破坏试验不计Q，其负荷保留。首次放行期末成品已在Q内。发运、返还、维修和复验不增加Q。 | cp_release; unique release registry; net mass; quality tests | Q in kg | `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025` |
| normalize_exchange | all inventory rows | q_j = A_j / Q，条件Q > 0。在convert_raw及attribute_raw后仅执行此次除法；q_j为同一放行批次每1kg参考流的交换。Q = 0时保留A_j及原始负荷，不输出单位结果。流卡及协议汇总仅引用同一次计算结果，不再除。 | A_j; Q; convert_raw; attribute_raw; cp_release | q_j per 1 kg reference flow | `ilcd-attributional-2010`; `bau-foam-glass-pcr-2025` |
| physical_gates | all inventory rows | 制造：期初原料+期初在制+期初非在制充注+外来供货材料+实测总进气物种 = 期末原料+期末在制+期末充注+Q+逐种实物外送废物+逐种实测出气+逐种真实产品返还。成品服务：期初成品+首次放行内部接收+收到外部成品返还+实际维修增加+实测物理吸收 = 期末成品+总发运+单独向外成品返还+废料+维修移除+实测气水损失。使用一致湿度相态热基准，独立测定相关元素及化学物种；一个残差不是两次测量。合并抵消制造至服务接收。制造期末不含已首放成品；合并门抵消内部Q及首放向量，不抵消已完成制造或已执行服务。主体载气总观测用于实物闭合；真实环境取用或新增过程释放须有独立来源、反应、留存、相态及原生流约定证据。同化学名称不使资源输入和排放UUID可互换，也不证明表征抵消。不将期末成品加到生产Q，也不将泡孔留存气体作外排。 | cp_mfg; cp_balance; cp_release; cp_service; independent species and phase measurements | separate and consolidated physical and elemental gates | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025` |
| packaging_ledger | all inventory rows | 对每种实际包装件：期初空件+期初附着在制+期初附着成品+期初可回用+新外购+供方已含接收+收到外返 = 期末空件+期末附着在制+期末附着成品+期末可回用+随总实物发运+单独对外返还+废物。各类别互斥，每笔接收只计一次。必要时以另列实测项加入真实包装吸失水及维修件增减；完整托盘与维修组分分开且不重复计组分。内部回用抵消；负荷分配及逐交换历史向量独立。包装不进入Q或自动联产品信用。 | cp_service; article stocks; physical receipts and dispatch; moisture; real repairs; inherited vectors | each article physical ledger and burden reconciliation | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 每行保留完整原生限制及真实匹配供方状态；UUID不是默认数量、符合性证书或配方证据。辅流未定仍保留单一命名交换。 | 原生直读; 供方规格; 实际产品试验 |
| dq_period | all inventory rows | 保留完整原始计量覆盖及零产出失败启停空载。代表生产数据须区别于旧供方案例和厂商营销声明。 | 原始表读; 校准日志; 批次登记 |
| dq_species | all physical gates | 相态及分子物种测量独立于总质量元素平衡。泡孔CO2残碳、硫酸盐硫化物、实际游离反应结构水及排气O2须有真实证据。指标与分子物种区分。 | 独立物种分析; 相态记录; 不确定性检出限 |
| dq_stocks | all stocks and service | 每种原料在制成品充注包装存量都有物理量及逐交换历史向量。保留原放行及交付冲回；实际返工增加及水分物种变化不能省略。 | 期初期末测量; 批次链接; 向量历史; 真实维修文件 |
| dq_unknown | dataset completion | 未知、不发生、实测零及低于检出限是不同状态。真实核心路线终端缺失或因果未明须保留真实暂停项。供方匹配、辅流未绑定及未来活动量为显式普通生产缺口；不造默认值或科学审批。 | 缺口登记; 适用性判断; 原始观测 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference product and route | 核验完整制造路线所得真实未覆面闭孔碳发泡玻璃块板，以及实际放行试验、尺寸、密度及表面状态。通用Glass (formed & finished)不证明闭孔、建筑适用性、导热系数、抗压强度或法规符合性。不将整个CPC叶等同单一产品，不以其他发泡剂替代炭黑路线。 | `foamglas-route`; `foamglas-t3plus-epd-2026`; `foamglas-t3plus-pds-2025`; `bau-foam-glass-pcr-2025` |
| validate_identity | each inventory row | 采用UUID前核验完整原生名称、全部同义词备注、CAS、等级、路线、地域、形态及粒子结构、介质、类型、每条属性及精确参考链。每个限制须保留于描述及真实供方证据。孤立分类问题与物理一致性分别披露；CAS、路线或介质硬矛盾不豁免。 | `bau-foam-glass-pcr-2025` |
| validate_physical | manufacturing service and consolidated gates | 先独立闭合制造及成品服务总物理门，再抵消匹配内部转移。凭独立实测组成及相态证据纳入所有真实物种、水相、泡孔留存气碳、粉尘及水分。物理质量元素守恒独立于负荷分配。未知及不平衡须显式保留不确定性或暂停项，不用一个残差拟合两个未知反应。 | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025` |
| validate_normalization | all raw quantities | 先换算单位及状态，再核对存量历史向量并分配，最后以A_j/Q执行一次normalize_exchange。采集保留未除原始值；卡片及汇总只引用同一结果，不再除。Q=0保留全部真实原始负荷但不出单位结果。制造生产Q、总发运及净交付必须区分。按attribute_raw区分首放制造、已执行服务、未归属库存及实物移动；期末成品或普通废物外送均不能自动扣掉已引起负荷。 | `ilcd-attributional-2010`; `bau-foam-glass-pcr-2025` |
| validate_packaging | each packaging article | 每种包装须有互斥的期初期末空件、附着在制、附着成品及可回用存量；新外购、随供方已含实物、收到外返、随总实物发运、单独对外返还及废物。每件实物只接收计一次。内部回用抵消且不改变Q。真实木纸水分、钉、替换木板及其他维修件须区别于完整托盘采购；不虚构维修。 | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| validate_coverage | dataset completion | 真实核心制造、终端或因果负荷关系未知时不能宣称数据集完成。保留检索失败、来源版次差异、机械适用性不符及未知、缺失、实测零和低于检出限的区别。普通未来场址测量、供方匹配及辅流UUID缺口仍为显式数据生产要求；投影和计量工程检查不构成科学、翻译、映射或发布审批。 | `foamglas-t3plus-epd-2026`; `bau-foam-glass-pcr-2025`; `ilcd-attributional-2010` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明首次放行状态的合格未覆面泡沫玻璃产品上游; 适用时另报原批次包装搬运服务 |
| allowed_use | 兼容组成路线状态密度性能及供方边界; 必要时透明实测质量体积换算 |
| excluded_use | 自动EN15804或产品认证; 任意材料等级热工等效; 再包装替代完整玻璃制造; 覆面产品或碎石; 用总发运或净交付当Q; 自动节能或模块D信用 |
| required_metadata | 未覆面闭孔块板及声明功能; 炭黑粒子牌号结构及供方路线; 玻璃组分及整份供货形态; 碎玻璃来源处理及负荷移交; 实际熔制研磨模内发泡退火切割路线; 同配置实测密度及外尺寸; 热工力学试验方法结果及适用产品标准; 唯一首次质量放行批次及原Q; 平衡表面水分及泡孔留存气体状态; 原料在制成品非在制充注数量及逐交换历史; 失败空载启停及零产出覆盖; 真实气体组成温压密度低位热值及表状态; 电力地域电压组合及供方边界; 独立质量元素分子物种及水相证据; 包装件组成水分存量总移动及真实维修; 原交付冲回及返还成品新增返工链接; 真实外返水状态焓及供方约定; 分配细分因果剩余门及同期证据 |
| required_quality_disclosure | 原始数量换算; 真实覆盖失败; 每个物理门及逐交换存量向量; 分子相态证据; 原批次服务边界; 全部身份供方限制; 辅流UUID未定; 未知及检出限区别 |
| update_trigger | 核心化学成型产品状态变化; 涂覆覆面; 实际供方路线形态地域; 气体参考状态; 电力组合电压; 质量标准; 存量批次或分配方法 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| foamglas-route | handbook | Owens Corning FOAMGLAS. What is cellular glass insulation? https://www.foamglas.com/en/advice-center/general-advice/what-is-cellular-glass-production-process | 一手完整制造说明，涵盖再生玻璃矿物、加炭研磨、模内发泡、受控冷却及切割成品。现行50%再生含量声明不是配方默认值。 |
| foamglas-t3plus-epd-2026 | dataset | Pittsburgh Corning Europe NV; IBU. FOAMGLAS T3+ EPD-PCE-20260415-IBA1-EN issued2026-08-18 valid to2031-08-17. https://www.foamglas.com/-/media/project/foamglas/public/shared/files/certifications/b---common-certificates/epd-environmental-product-decl/epd-foamglas-t3plus-en.pdf | 完整出版方PDF实际2026版：印刷1–4页产品、原料、13步图、未覆面放行、包装及2023两场址1m3声明上下文。来源实测91kg/m3不同于名义95；组分比例、温度、生命周期结果、质量分配及模块D情景均属案例，不作通用默认值。 |
| foamglas-process-brochure | handbook | Pittsburgh Corning. FOAMGLAS insulation general brochure; publisher retained legacy process illustration p5. https://www.foamglas.com/-/media/project/foamglas/public/corporate/foamglascom/files/brochures/industry/brochures-2019/brochure---foamglas-insulation---general-brochure.pdf | 完整一手工业手册及第5页制造图，保留邻近工业用途上下文。历史大于66%再生含量及炉温不移植；不是独立第二厂商，也不证明同一当代工厂订单。 |
| foamglas-t3plus-pds-2025 | handbook | Owens Corning. FOAMGLAS T3+ Product Data Sheet version08.05.2025. https://www.foamglas.com/-/media/project/foamglas/public/shared/files/foamglas-b/foamglas-t3-plus/pds/pds-foamglas-t3plus-int-en.pdf | 完整2页一手建筑板块终端、尺寸表、性能元数据类别及应用限制。目录密度尺寸导热强度、无粘结剂及寿命声明均不转为未经测量的场址值。 |
| bau-foam-glass-pcr-2025 | official_guidance | Bau EPD GmbH. PCR2.22.2.3 Foam glass Part B version1.0 dated2025-09-09 §§2.5–2.8 3.1 5.4.5–5.4.6. https://www.bau-epd.at/fileadmin/user_upload/PCR_product_specific_A2_English/BAU-EPD-PKR-B-2.22.2.3-Foam_glass-Version1.0-20250909-EN15804_A2-English-website.pdf | 独立项目指南，支持原辅料披露、工序包装身份、声明单位换算、物理质量水平衡及能源防重复计数。邻近骨料标准及99.8%再生水玻璃甘油示例是不同产品路线。项目1m3默认允许透明使用其他单位；不证明炭黑配方或本PCR符合EN15804。 |
| ilcd-attributional-2010 | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA Detailed guidance First edition March2010 §§7.9.2–7.9.3. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅归因多功能性：专属或虚拟细分、逐交换决定性物理因果，仅真实剩余才用实际状态同期共同过程门市场价值分配。非工业配方因子、默认比例或自动替代信用。 |
