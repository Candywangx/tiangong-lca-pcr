---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.five-layer-birch-faced-softwood-lumber-core-blockboard
language: zh-CN
translation_status: reviewed
status: candidate
sync_with: pcr.en-US.md
---

# PVAc 芯条胶拼及 UF 单板胶接的五层桦木面针叶木条芯细木工板

## 1. 范围与适用性

本规则涵盖未饰面的非结构用五层板：一层边胶拼实木松木／云杉条芯，芯材两侧各一层桦木横向单板，另有两层桦木表背板，实际纹理轴交替为 0/90/0/90/0。表背板及横向单板均须由供应商核实为温带来源的 Betula pendula 或 Betula pubescens。“桦木”“波罗的海”“阔叶木”等商品名或销售国家不能证明树种或产地。须逐单板批采集植物学树种、采伐来源及监管链证据；外层身份不明或混有热带木材时不适用。Paged 证明桦木面实木条芯产品实际在售，JRC 图集支持指定欧洲阔叶桦木身份；两者均不能证明未测供应批的组成。来源：paged-blockboard-2026；paged-blockboard-2020；jrc-european-birch-2016。

路线始于外购窑干未处理针叶锯材及干燥未胶合桦木单板，采用外购水性 PVAc 芯条边接胶及外购即用型水性 UF 单板胶，使用外购净热水供热热压，随后调湿、裁边、砂光、验收和包膜。胶配方及固化须实际采集，不能从胶合等级推断。排除全单板胶合板、针叶木面细木工板、热带木面板、三层／双芯结构、MDF／刨花芯、覆膜／另贴装饰单板、压密木、结构认证主张及厂内锅炉／原木湿料生产。若厂内配胶或单独加入化学品，须先逐项增加实际原料交换后才能应用扩展路线。来源：unido-panel-adhesives-1977；epa-plywood-2002。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.five-layer-birch-faced-softwood-lumber-core-blockboard |
| classification_refs | CPC 3.0 31423 保留为候选 narrower coverage 关联；依据 docs/adr/2026-11-10-hold-blockboard-cpc-associations.md，mapping_acceptance = held_pending_classification_review。2026-11-06 batch-03 接受记录为历史，不建立当前正向映射。官方 31413 说明包含细木工板，并允许中央芯采用不同材料；31423 也有交叉单板条件，不能仅因实木条芯就排除 31413 或判定 31423。不主张替代分类或整个叶类覆盖。 |
| covered_products | 未涂饰五层桦木面松木／云杉条芯细木工板，PVAc 芯条胶接、UF 面层胶接；两张表背单板及横向单板均核实为温带 Betula pendula/pubescens。 |
| excluded_products | 全单板胶合板；针叶或热带面层；MDF／刨花芯；双芯；三层；覆面；结构或压密产品；湿料／厂内锅炉路线。 |
| representative_product | 净验收、已砂光、非结构用五层未饰面板，供后续家具／细木加工；尺寸、胶配方及性能为实际批描述，不设固定默认值。 |
| production_route | 干锯材定尺和芯条胶拼；四张桦木单板铺装；外购热 UF 热压；调湿及精加工；首次验收和包装。 |
| market_state | 工厂门验收未饰面板；包装另报；不主张寿命或全生命周期功能。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应未饰面桦木面条芯板，作为指定家具或细木加工的中间产品。 |
| How much | 按声明最终含水状态计 1 kg 净验收板，不含包装。 |
| How well | 每批证明实际五层构造、树种、尺寸、纹理轴、胶合质量及约定非结构等级；不设通用强度或含水等级。 |
| How long or cycle | 工厂门一个完工／首次验收批群；下游寿命不在此参考内。 |
| reference_flow_link | panel |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 贴面板及类似胶合木材，至少一层外单板为非热带的非针叶木 `53392205-1fb0-44c6-a275-cd064bf6d54a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 工厂及期间；芯材树种；每张单板植物学树种及采伐来源；五层及纹理轴；干料含水率；外购 PVAc 及 UF 组成；尺寸；最终含水率及测法；净验收质量；唯一首次验收批群；等级／胶合试验；供电电压及供应方；净热界面；存量／负荷历史；包装／处理范围 |

每项限定信息均须在数据包中明确。参考 UUID 是更宽的本地产品身份，不能证明较窄构造或供应者。其真实类型为 Product flow，支持 Mass／kg，分类为 3142／31423。备注重复官方交错单板措辞；原生 3142／31423 标签不是分类裁决。官方 31413 说明也包含细木工板及其他中央芯材料，因此依据 docs/adr/2026-11-10-hold-blockboard-cpc-associations.md，该关联保持 held_pending_classification_review。实木条芯不自动排除 31413，也不据此改归 31413。来源：un-cpc-3-2025；un-cpc-31413-2025。仅在四张单板加实木条芯、两面植物学身份、实际胶及状态均证明且供应者兼容时使用；无可用匹配保持缺口。标题相似或该定位符均不建立映射接受。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考输出为 1 kg。Q 是批群 c 在声明门独立称量的唯一首次验收事件整板净质量之和，按实测验收含水率／组成锁定并排除包装，采用 cp_accept。按 unique_acceptance 核对 Q = D_new + FG_new + L_new；仅有证据证明其他去向为零时才用二项桥接。退回、损失、降级、报废及返回在制品均不扣减原 Q；旧期初成品、购入成品、发运、复测及再验收不创造 Q。每项可归属交换 q 按 normalize_reference 仅换算一次：q_ref = q / Q。Q 须为正实测值；为零／缺失时保留绝对记录及不确定结论。不得用绝干木、胶固体或发运质量替代整板 Q。 |
| moisture_basis | 未胶合锯材及单板 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录湿质量 m 及由样品绝干质量测得的干基含水率 u；干木 d = m / (1 + u)；水 w = m - d。干基百分含水率须先除以 100。此式不得代入湿基比例；含胶板／废物须采用适合基质的水分测法，不得自动将烘干损失视为水。来源：usda-wood-handbook-2021。 |
| energy_conversion | 电力及压机热 | 所选电力身份为 Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`；热量属性待解决 | MJ | 电力 1 kWh = 3.6 MJ；保留所选流的本地能量属性。热量须核实交付焓差及兼容属性／单位支持；不得靠改名把总热改为交付净热。 |
| count_volume | 已称量板批 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 汇总逐件实测净质量。件数或立方米仅为描述，除非实测同批同含水及几何状态下的密度；制造商密度区间或名义厚度不得代替 Q。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂收料口外购窑干未处理松木／云杉锯材及干燥未胶合桦木单板；上游林业、锯切及干燥属于兼容上游数据集。 |
| starting_condition_role | 干料制造的门到门前景边界；组装摇篮到门模型时保留上游负荷。 |
| product_classification_scope | 仅上述五层桦木面实木条芯产品；分类不负责选择材料或供应者。 |
| recursive_input_rule | 外购同类板材及其上游数据集和原始负荷向量只进入一次；不得变为新木材，亦不得因重新验收增加首次验收 Q。基础干料路线不含外购板生产；返工扩展须保留历史并披露。 |
| upstream_dataset_requirement | 匹配实际树种、含水率、处理、运输界面、外购胶状态、电压及净热基准；无兼容匹配时保持明确缺口。 |
| disclosure | 声明所有收料／存量／在制品／成品、公用工程、胶路线、包装、排放、废物及厂外处理。仅前景数据不能代表林业或全生命周期表现。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_operations | birch_blockboard_manufacture | 纳入机械加工／芯条胶拼、四张单板铺装和热压、调湿、裁边／砂光、抽排、清洗、验收及实际包装。纳入归属于该批群的停机／启动损耗；不得由外购热推断厂内锅炉。 | unido-panel-adhesives-1977; epa-plywood-2002 |
| b_stock | 原料、在制品及已验收成品 | 分别保留期初／收料／消耗／转移／期末质量、组成及继承的材料／服务负荷向量。内部转移仅在工厂聚合边界相消；不得让前期负荷消失或重复计入上游干燥。 | ilcd-handbook-2010 |
| b_interfaces | 供应及处理界面 | 在声明界面各连接一次上游供应和外运废物处理。捕集尘或外送废水不得视为直接环境排放；不设避免能源、再生或碳储存默认抵扣。 | ilcd-handbook-2010; epa-plywood-2002 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| birch_blockboard_manufacture | 干料加工／芯条胶拼 → 桦木铺装／热压 → 调湿／裁边／砂光 → 验收／包膜 | required | 精确符合树种、构造及胶／供热路线 | 按阶段采集记录的聚合前景制造过程；芯板／板坯转移保留为内部记录 | 1 kg 净验收参考板 |

### 过程：桦木面条芯板制造 (`birch_blockboard_manufacture`)

#### 输入

##### 产品流

###### 芯条原料 (`core_timber`)

仅限供应商核实树种及含水率的窑干未处理松木或云杉锯材；称量包含加工损耗的领用量。排除生材、阔叶材芯条及重复计入林业或干燥。

- 选定流：针叶锯材 `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood`
- 来源：usda-wood-handbook-2021; paged-blockboard-2026

###### 桦木表背单板 (`face_birch`)

恰为两张外层单板；分别记录表背板植物学身份、厚度、纹理方向及干物质／水组成；不得用已胶合胶合板或装饰膜代替。

- 选定流：干燥未胶合温带桦木表背单板
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood`
- 来源：paged-blockboard-2026; jrc-european-birch-2016

###### 桦木横向单板 (`cross_birch`)

木条芯两侧各一张内层单板，纹理与芯条及表背板垂直。即使供应商相同也与外层单板分账。

- 选定流：干燥未胶合温带桦木横向单板
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wood`
- 来源：paged-blockboard-2026; usda-wood-handbook-2021

###### 芯条拼接胶 (`pvac`)

称量芯条边接所用外购湿胶，记录配方及水／非水组分。通用胶、纯聚合物及聚乙烯醇不得互换。

- 选定流：外购水性聚醋酸乙烯酯木工胶
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glue`
- 来源：unido-panel-adhesives-1977

###### 单板胶接胶 (`uf_mix`)

记录入厂完整配方湿胶，与 PVAc 分开；供应商须明确实际固化剂／填料及湿组成。不得重复计入所含树脂、固化剂、填料或载体水。不涵盖厂内配胶。

- 选定流：外购即用型水性脲醛木材胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glue`
- 来源：epa-plywood-2002; unido-panel-adhesives-1977

###### 工厂电力 (`electricity`)

仅适用于用户侧 1–35 kV 交流电；电表 kWh 乘 3.6 转为 MJ。核对不重叠的芯条、压机、抽排、精加工及包装回路。其他电压须另核实流。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：epa-plywood-2002

###### 压机回路外购热 (`heat`)

在具名边界计量供回焓差；供应商须从交付量中排除上游损失。总热值流或燃料质量不得代替该热量。本路线不含厂内锅炉。

- 选定流：压机回路界面外购净热水供热
- 流属性/单位：Delivered thermal energy (identity unresolved) / MJ
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：epa-plywood-2002

###### 设备清洗用水 (`wash_water`)

只计量外购清洗水；体积换算采用实测密度。循环水为内部转移；外购胶中载体水已包含，不得再作为新水投入。

- 选定流：外购胶接设备清洗自来水
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：epa-plywood-2002

###### 出厂包装膜 (`pe_wrap`)

称量验收批附带薄膜净量及实测膜损耗；期初／期末膜卷和早期验收批保留各自批群。实际其他包装组件须逐项补充独立卡片后使用。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：ilcd-handbook-2010

###### 砂光耗材 (`abrasive`)

砂光确用此砂纸时采集更换净质量及背材／磨料规格。其他磨料须另列交换，不得默默省略。

- 选定流：氧化铝涂附砂纸
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：epa-plywood-2002

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收参考板 (`panel`)

输出为 1 kg 净验收未饰面板；按 normalize_reference 归一化。Q 锁定唯一首次验收事件，并按 unique_acceptance 核对全部互斥净去向，包括验收后损失及期末返回在制品；排除包装。归一化 1 kg 是参考坐标，不是额外实物输出或发运。退回板再验收保留原事件／批群 Q。

- 选定流：贴面板及类似胶合木材，至少一层外单板为非热带的非针叶木 `53392205-1fb0-44c6-a275-cd064bf6d54a`
- 流属性/单位：Mass / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accept`
- 来源：paged-blockboard-2026

##### 废物流

###### 胶前加工刨花 (`clean_shavings`)

称量接触胶前外运的未处理刨花并披露去向。厂内复用是保留负荷的转移，不得同时作为外运及新投入。

- 选定流：未处理针叶木加工刨花废物
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue`
- 来源：usda-wood-handbook-2021

###### 胶合板边角料 (`bonded_trim`)

胶合裁边料与清洁刨花分称；记录桦木、芯材、固化胶及水组分并核实处理路线。以原事件／批群关联区分验收前拒收与验收后报废；后者按原验收基准进入 L_new，不扣减 Q。实际实测废物质量／状态及相关处理和失败返工负荷保留在各自原批群账。

- 选定流：UF／PVAc 胶合桦木面细木工板裁边废物
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue`
- 来源：epa-plywood-2002

###### 收集砂尘 (`sanding_dust`)

称量捕集砂尘并核对集尘系统存量；不得把捕集物再算为空气排放或假定其为未处理锯屑。

- 选定流：含 UF／PVAc 的细木工板砂尘废物
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue`
- 来源：epa-plywood-2002

###### 拼接胶残余 (`pvac_waste`)

称量外运 PVAc 残胶，保留湿组成及槽罐存量；与 UF 残余分开，内部回用单记。

- 选定流：未固化 PVAc 木工胶残余废物
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glue`
- 来源：unido-panel-adhesives-1977

###### 单板胶残余 (`uf_waste`)

称量外运 UF 配方残胶，记录实际固化剂／填料状态及湿组成；固化胶块须有独立实物记录及处理匹配。

- 选定流：未固化配方 UF 木工胶残余废物
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glue`
- 来源：unido-panel-adhesives-1977

###### 外送清洗废水 (`wash_effluent`)

计量外送清洗废水、悬浮物及溶解组分；厂外处理是废物交换，不是直接向水体的基本流排放。

- 选定流：送厂外处理的胶接设备清洗废水
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：epa-plywood-2002

###### 包装膜边角料 (`film_waste`)

只计包装时膜损耗，并保留聚合物及接收方证据；不得用通用混合塑料代替。

- 选定流：聚乙烯包装膜裁切废物
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：ilcd-handbook-2010

###### 废砂纸 (`spent_abrasive`)

称量废砂纸及附着砂尘；依据实测组成从另称捕集尘中排除这部分附着尘以免重复。

- 选定流：废氧化铝涂附砂纸
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：epa-plywood-2002

##### 基本流

###### 向空气排放甲醛 (`formaldehyde_air`)

测量生产／调湿期间治理后排气及逸散甲醛质量，并与留存含量核对。所选本地流分室为向空气排放、未指定；仅经实际分室核实后细化。成品气候箱等级不是工厂排放因子。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：epa-plywood-2002

###### 向空气排放甲醇 (`methanol_air`)

供应胶中存在或排气检出时量化；保留检出限及未检出状态。不得假定为零或用总 VOC 质量替代。

- 选定流：向空气排放甲醇，未指定分室
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：epa-plywood-2002

###### 未捕集可过滤木尘 (`dust_air`)

按方法及捕集范围测量治理后及逸散颗粒物质量；不得同时重复计入总颗粒物及粒径分量。本交换排除已捕集尘。

- 选定流：向空气排放可过滤木质颗粒物，未指定分室
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：epa-plywood-2002

###### 蒸发水 (`water_vapour`)

通过匹配测量及有依据的物种核算确定实际失水；如有证据须纳入固化产水／耗水。胶固含量损失或强制残差闭合均不能证明水蒸气量。

- 选定流：向空气排放水蒸气，未指定分室
- 流属性/单位：Mass / kg
- 数量规则：完工批群按 q / Q 计算；cp_accept 提供 Q；数量不明时保留缺失，不补零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：usda-wood-handbook-2021; unido-panel-adhesives-1977

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_single_product | 规定路线 | 基础过程仅有验收板产品及外运废物。生产负荷及所需废物处理归于该板批群。废物有售价本身不能证明是共产品。保留未分配的实物废物质量，不计避免产品抵扣。 | ilcd-handbook-2010 |
| a_multifunction | 实际联合生产 | 优先依据实测阶段／回路／批次记录细分，分离板材专用胶及包装。若售出残余确为共产品，先增加正确产品身份、产量、功能及供应／市场证据，再仅对不可分的共有负荷论证因果分配；披露替代方法及敏感性。区域针叶胶合板的质量分配仅为背景证据，不能强制套用于本外购干料阔叶面路线。 | ilcd-handbook-2010; corrim-western-plywood-2025 |
| a_ledgers | 全部质量、物种及负荷账户 | 实物守恒与环境负荷分配使用不同账本。板、水、胶或废物实物质量不得乘负荷分配份额。内部返工保留既有材料及已实施服务负荷，只增实际新服务，不能生成额外首次验收输出。验收后损失、报废、降级或返回在制品不能撤销 Q；失败返工及后续服务仍归于原批群及原 Q，不用当前产出或剩余库存。 | ilcd-handbook-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

过程按四阶段实测：芯条准备、胶接／热压、调湿／精加工、验收／包装。即使发布为聚合前景过程，也须保留阶段边界及内部转移。协议规定待采集证据，不声称工厂已提供。每项交换采用同一个 1 kg 验收板参考基准。能够证明不存在的条件交换可凭证据标记不适用；存在但未测量的交换保持缺失。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_accept | birch_blockboard_manufacture | panel 及批群存量 | foreground_record | 板／板件 ID；批；首次验收 ID／时间／门；独立实测锁定净质量及整板验收含水率／组成；包装皮重；构造／树种／等级；互斥 D_new/FG_new/L_new 记录；发运毛量及关联退货；期末验收成品；验收后损失／耗用／降级／报废；期末返回在制品；返工／复测／再验收关联；旧期初成品及购入成品收料；原 Q0／批群；实际后续质量及实测基准变化；原料／在制品／成品实物位置 | 调湿及等级／胶合验收后校准净称量，独立于销售／发运。原事件／板件 ID 去重，按带符号净去向核对完整 unique_acceptance 桥接。另记实际后续组成／水分，仅依据实测匹配板件／组分历史换算原验收等效量；协调 cp_wood/cp_glue/cp_water/cp_residue/cp_emission。事件、净退货、去向或换算证据缺失保持未解决，不用损失估算补平 | kg | 每次验收、交接／库存变化及关联后续服务 | 完工期间及原存量／批群期间 | 单厂精确路线／配置 | 采用锁定 Q 的每 1 kg 参考流 | 校准、验收／板件去重、净退货／去向证据、实测基准换算及原 Q0／服务历史 |
| cp_wood | birch_blockboard_manufacture | core_timber; face_birch; cross_birch | foreground_record | 供应方及植物学树种；采伐来源；处理及干燥状态；湿样／绝干样质量；尺寸／纹理轴；收料／领用／退料；期初／期末原料及在制品；干木及水组分；继承负荷向量 | 称量批领用及阶段转移；按树种及单板角色分别采样未胶合木材，采用有效水分分析；每张单板追溯至铺装 | kg | 每批及期初／期末存量 | 同完工期间，保留来料存量历史 | 与 cp_accept 同厂同批 | 每 1 kg 参考流 | 供应证明、采样法、秤、窑干／起始状态证据及铺装记录 |
| cp_glue | birch_blockboard_manufacture | pvac; uf_mix; pvac_waste; uf_waste | foreground_record | 外购湿质量；配方；PVAc／UF 区分；水／非水组分；实际固化剂／填料；批损耗；槽罐／在制品期初期末状态；界面涂布；夹持／压制时间温度压力；固化程度；有依据产水 G 及耗水 C；原始负荷 | 分别称量外购完整胶配方，核对涂布／退回／残余质量；结合供应组成与基质有效水分／挥发物分析。以有依据的化学计量乘实测反应程度，或匹配的有效分析，确定同批前景固化 G／C；无证据保持未知 | kg | 每胶批及压制批 | 完工期间及继承胶料／在制品历史 | 同厂同产品批 | 每 1 kg 参考流 | 配方／SDS、组成分析、秤、工艺记录、胶合试验及实际固化证据 |
| cp_energy | birch_blockboard_manufacture | electricity; heat; 旧验收存量后期服务 | foreground_record | 回路／表；电压；kWh／MJ；供回质量及焓；运行／空转小时；批／阶段；共享服务归属；实际服务期间；原验收批群及原 Q；期初／当前／期末继承负荷向量 | 读不重叠的表并核对账单；在具名界面计量压机交付净热。后续储存／换包装／返工服务追溯至原验收批群，不得用当前首次验收 Q 归一化旧批群 | MJ | 连续计量；每期间及服务事件 | 完工期间、服务事件及原批群期间 | 匹配工厂／界面／供应方 | 每 1 kg 参考流 | 表校准、同期账单、焓差测法、电压及供应兼容性 |
| cp_water | birch_blockboard_manufacture | wash_water; wash_effluent | foreground_record | 新水质量／体积及密度；循环转移；废水质量；溶解／固体组分；槽罐期初期末；去向；外购胶内含水归属 | 计量外部水与废水，仅以实测密度换算；采集组成分析并核对槽罐；内部循环不计入外部总量 | kg | 每清洗事件及期间边界 | 同批同期间及槽罐结转 | 同厂具名厂外处理 | 每 1 kg 参考流 | 仪表、密度／化验及处理联单 |
| cp_residue | birch_blockboard_manufacture | clean_shavings; bonded_trim; sanding_dust | foreground_record | 阶段；湿质量；树种；胶状态；水／干组分；捕集尘；内部转移；料箱期初期末；接收方／处理；原批群／首次验收 ID；验收前拒收与验收后报废／损失；实际状态及原验收基准等效量；原始负荷历史 | 分称未胶合刨花、胶合裁边及收集砂尘；以适合基质的方法测水及干组分；核对内部返工及外送单据。将验收后报废与 cp_accept 的 L_new 核对一次，实际湿／干／组分废物量另行保留；处置及失败返工均不取消原 Q 或已实施负荷 | kg | 每次移出／返回及边界存量 | 同完工批及结转 | 同厂及实际废物接收方 | 每 1 kg 参考流 | 秤、组成分析、实物隔离及废物票据 |
| cp_pack | birch_blockboard_manufacture | pe_wrap; abrasive; film_waste; spent_abrasive | foreground_record | 聚合物／背材规格；收料／消耗／期末；包装净皮重；更换砂纸质量；附着砂尘；废物路线；验收批群；后期换包装事件 | 逐项独立称量实际耗材及损耗；核对膜卷／砂纸存量；排除附着尘重叠；用于旧成品的包装连至原验收批群 | kg | 每批、换料及服务事件 | 完工及原验收批群期间 | 精确工厂／产线及出厂批群 | 每 1 kg 参考流 | 皮重／称重记录、材料规格及废物单据 |
| cp_emission | birch_blockboard_manufacture | formaldehyde_air; methanol_air; dust_air; water_vapour | foreground_record | 排放物种／分室；排气量；进出口浓度；时间；捕集效率；逸散测法；检出限；冷凝／留存质量；水专用测法；实际固化 G／C；运行状态 | 对匹配气量和运行时间积分治理后浓度，增加不重叠逸散量，保留不确定度。水须与非水挥发物及胶反应分开；通用 VOC、气候箱或针叶材调查因子不可替代 | kg | 覆盖实际稳态／启动／空转状态的代表性监测并核对完整期间 | 同完工批及存量 | 工厂向空气排放；处理在外部 | 每 1 kg 参考流 | 认可方法、完整试验条件、检出限、工况覆盖及核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| unique_acceptance | panel | Q = 独立实测唯一首次验收事件净质量之和，按声明门各原整板含水率／组成基准锁定。完整桥接为 Q = D_new + FG_new + L_new，采用同基准、相互排斥的带符号板件净交接／去向记录，该新首次验收批群期初库存为零。D_new 为扣除关联退货后的净验收发运；FG_new 为期末验收成品；L_new 为全部其他验收后净去向，包括实际损失／耗用／降级／报废／废物及期末返回返工／在制品。仅所有其他去向均有证据为零时才可用 Q = D_new + FG_new。首次验收 100 kg = 净发运 60 kg + 期末成品 30 kg + 验收后损失 10 kg；Q 保持 100 kg 而非 90 kg。内部毛循环及复测／再验收不是额外去向或事件；再验收后板件从期末在制品移至成品／净发运一次，不新增 Q。旧期初成品与购入成品保留独立原批群／收料，不纳入新 Q。后续水分、PVAc／UF 固化／挥发物、补加胶／水、裁边及材料状态须依据实际匹配板件／组分历史核对；原验收等效量不包含后加材料，不能代替实物质量，也不假定物种守恒。复合材烘干失重及通用木材／胶固体系数不能建立换算。基准变化未知或去向残差未解释时保持未解决；不得虚构损失、重置 Q 或用销售／仓库移动作为事件证据。即使整批验收品以后全部损失，仍保留 Q。 | cp_accept; cp_wood; cp_glue; cp_water; cp_residue; cp_emission; 事件／板件及净去向历史 | 锁定 Q，kg；独立实际实物账 | ilcd-handbook-2010 |
| normalize_reference | 每项当前批群交换 | q_ref = q / Q；q 是存量及服务核对后归属于同一完工验收批群的实际交换量。Q 由 cp_accept 按 unique_acceptance 独立实测锁定，不用发运和剩余存量反推，必须 Q > 0。纳入可归属的失败／零产出、停机／启动、清理、损失相关及返工服务，既有负荷仅保留一次。已验收批群后续服务按 old_cohort_service 使用原 Q；归属缺失保持未解决。按需保留 kg/kg 或 MJ/kg；Q 缺失或为零时保留绝对量 q，结论不完整。 | q; Q; cp_accept; 对应采集协议 | 每 1 kg 参考板的 q_ref | ilcd-handbook-2010 |
| old_cohort_service | 先前已验收成品后期服务 | s_ref,c = s_c / Q_c_original；s_c 为仅归属于原验收批群 c 的实测后期服务。Q0 = Q_c_original 是锁定的原首次验收事件之和。即使损失、报废、降级、返回在制品、返工失败或当前仅发运部分存量，仍保留它及全部既有负荷。全部实际后续材料／能源／包装／废物／排放服务仅归属原批群一次，保留失败服务，不因退回或失败取消。不得除以当前 Q、剩余存量或出库质量。原 Q 缺失／为零时保留未归一化服务并阻断完整性。 | s_c; Q_c_original; cp_accept; cp_energy; cp_pack | 原批群追加服务向量 | ilcd-handbook-2010 |
| stock_conservation | 每阶段及工厂边界 | 期初实物质量 + 外部收料 + 内部收料 = 外部输出 + 内部转移 + 期末质量，输出须包括板、废物及排放。制造门边界下实际新验收输出位于门外，不能又列为门内期末存量。扩展边界包含成品时，计入期初成品、购入成品收料、实际净发运／转移、损失及期末存量；验收为内部状态事件，不能另加为外部输出。退回在制品保留原验收关联。工厂聚合时内部转移只相消一次。实际湿／干／组分状态实测质量与原验收等效量分开。分别保留各树种干木、胶组分、H2O、化石／生物碳及实测不确定度；内部反应守恒总质量／元素，不必守恒每个物种。不得把未知残差强塞为排放。 | cp_wood; cp_glue; cp_water; cp_residue; cp_emission; cp_accept | 可审计未分配实物及元素账本 | usda-wood-handbook-2021 |
| water_species | 实际 H2O 平衡 | 聚合边界 H2O_open + H2O_external_in + G_H2O = H2O_external_out + H2O_close + C_H2O。纳入锯材／单板／胶／产品／废物水及实际蒸发；G／C 是 cp_glue 支持的实际前景反应项，不得假定为零、完全固化或套用通用树脂合成。上游胶合成不得再次算为前景项。G／C 或基质有效水分数据缺失时，本检查保持不完整。 | cp_glue; cp_wood; cp_water; cp_emission; cp_residue | 水平衡及明确未解决项 | unido-panel-adhesives-1977; usda-wood-handbook-2021 |
| inherited_vectors | 原料／在制品／成品及服务 | 对每个原始材料／服务组分分别核对 B_open + B_receipts + B_current_services = B_transferred + B_exported + B_close。既有隐含负荷随在制品及成品继承；实际当前服务仅增加一次。区分售出旧成品与新验收当前成品；未验收期末在制品保留自身负荷，不得把全部当期费用装入 Q。结转到未来首次验收分母仅适用于未验收材料；已验收板返回在制品时保留原 Q0 及已实施负荷，后续服务按 old_cohort_service 追加。 | 全部协议；阶段／批群转移记录 | 已核对环境负荷向量 | ilcd-handbook-2010 |
| electricity_units | 电力 | MJ = 3.6 × kWh，然后按实际回路／批群归属，并视情况使用 normalize_reference 或 old_cohort_service。 | cp_energy; Q 或 Q_c_original | 正确批群的 MJ/kg | ilcd-handbook-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 产品及投入 | 证明每张表背／横向单板植物学树种及产地、条芯结构、纹理轴及实际胶状态。商品名、通用数据库标签及制造商示例变型不能证明供应批。 | cp_wood; cp_glue; cp_accept; jrc-european-birch-2016; paged-blockboard-2026 |
| dq_coverage | 数量及期间 | 声明代表实际路线的连续期间，保留期初／期末存量及关联旧批群；论证覆盖及不确定度，不设虚构年限／产量阈值。缺失、零、未检出及有证据不适用须明确区分。事件 Q、完整同验收基准去向及原 Q0／服务归属均需独立证据；仅实物平衡不能证明这些关系。 | 所有协议及原始来源记录 |
| dq_chemistry | 实物／物种检查 | 保留外购湿配方，分开实物质量与负荷分配，测量相关水／挥发组分及实际 UF 固化项。实测总损失或通用树脂反应不能闭合单个物种账户。 | cp_glue; cp_emission; cp_residue |
| dq_linkage | 上游及处理 | 流身份不能证明供应者兼容。核实实际属性、参考单位／单位组、地区、日期、含水、电压、外购胶组成、废物含胶状态及接收方；无可用匹配保持缺口。 | 完整本地记录及供应／处理证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 目标产品 | 拒绝层数、芯材、单板树种、热带／身份不明面层、配胶路线或供热边界不符者；全部参考限定信息必需。制造商通用桦木变型不能证明批次植物学身份。 | paged-blockboard-2026; jrc-european-birch-2016 |
| v_basis | 全部交换 | 当前批群须有实测唯一首次验收 Q 和一致 q/Q；旧服务／Q_c_original 单独检查。Q=0、Q 未知或原 Q 未知时保留未归一化记录并给出不完整结论，不得报零影响。核对完整互斥同基准 Q = D_new + FG_new + L_new 桥接、净关联退货及全部验收后损失／报废／降级／期末在制品；二项式须有证据证明其他去向为零。旧期初成品、购入成品、退回、发运、复测及再验收不得增加 Q 或扣减锁定 Q0。水分／组成换算无支持或残差未解释时不得通过；失败返工／后续服务负荷仍用原 Q0。事件等效量与实际实物／组分清单分开。 | ilcd-handbook-2010 |
| v_balance | 质量、水及负荷 | 分开检查实物总量／元素及物种平衡，纳入原料／在制品／成品及继承服务向量。计入实际固化 G／C 及测量不确定度；不得猜测水排放填补化学证据或抹去前期负荷。 | usda-wood-handbook-2021; unido-panel-adhesives-1977 |
| v_inventory | 每项本地交换 | 每卡仅一个原子交换；核对真实 Product／Waste／Elementary 类型、本地参考属性、完整单位组换算、供应状态及环境分室。操作性使用数据集前须解决参考流／其他流 UUID 及供应者缺口；分别报告已执行、跳过和未解决检查。 | ilcd-handbook-2010 |
| v_release_scope | 解释 | 工厂过程数据及前景检查不能证明科学审批、结构合规、EPD、室内空气性能达标或全生命周期环境优势。投影／检查通过不意味独立审查或发布状态。 | paged-blockboard-2026; epa-plywood-2002 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 精确限定未饰面五层桦木面条芯板的前景制造单元过程数据集。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 以匹配上游材料／能源及处理数据集组装明确限定、供应兼容的摇篮到门模型；下游家具／细木加工模型保留本工厂门／状态。 |
| excluded_use | 整个分类叶覆盖、针叶／热带面或全单板替代、结构主张、使用期／气候箱排放、全生命周期比较及通用密度／配方／因子默认值。 |
| required_metadata | 全部参考限定信息；阶段／批群／存量谱系；本地流／属性／单位及供应者身份；方法边界；实际试验／测量证据；分配和归一化公式；缺失项。 |
| required_quality_disclosure | 仅前景或组装边界；参考／其他 UUID 或供应者未知项；实际覆盖／不确定度／检出限；植物学／化学缺口；科学及翻译审查状态；held_pending_classification_review 候选关联及决定 ADR；原事件 Q／Q0、实测验收基准及完整净去向残差。 |
| update_trigger | 树种供应、芯材／层几何、外购胶配方、电压／供热源、测量／存量／批群基准、废物去向、本地身份变化或新相关证据。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| paged-blockboard-2026 | literature | PAGED Plywood S.A.，Paged Blockboard 技术资料，2026年4月1日，第1–3页；https://pagedplywood.com/wp-content/uploads/2026/04/20260401_TDS_Paged-Blockboard_EN.pdf | 实际实木针叶条芯及两侧各两层桦木／桤木或松木单板的未饰面非结构产品。仅采用桦木子集；不迁移数值性能、供应批植物学身份、配方或工厂清单。 |
| paged-blockboard-2020 | literature | PAGED，Paged Blockboard 产品规格，2020年2月；https://www.pagedplywood.com/wp-content/uploads/2020/08/Paged_Blockboard_ProductSpecificationSheet_022020.pdf | 制造商历史资料佐证五层实木芯及桦木外层变型；同一制造商不算独立第二来源。不推断树种／配方／因子。 |
| jrc-european-birch-2016 | official_guidance | Beck、Caudullo、de Rigo 和 Tinner，European Atlas of Forest Tree Species，2016，第70–73页，Betula pendula、Betula pubescens 及欧洲其他桦木；https://forest.jrc.ec.europa.eu/media/atlas/Betula_spp.pdf | 欧洲阔叶桦木植物学背景；批身份及采伐来源仍需供应证据。不把树木数据转换为板材数量。 |
| unido-panel-adhesives-1977 | official_guidance | UNIDO ID/WG.248/9，人造板工业合成树脂胶的工业应用与配制，1977年10月10日，第2.2节印刷页15及第3.1节；https://downloads.unido.org/ot/47/90/4790807/00001-10000_07656.pdf | 历史 PVAc 芯条边接及热固性面层胶接背景；不证明当前供应配方、用量、固化程度或性能。 |
| usda-wood-handbook-2021 | handbook | USDA 林产品实验室，Wood handbook—wood as an engineering material，FPL-GTR-282，2021，第4、10、11章；https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 未胶合木材含水基准及复合材／胶／层次背景；复合材烘干失重不普遍等于水，不采用密度／收率／固化因子。 |
| epa-plywood-2002 | official_guidance | 美国 EPA AP-42 第10.5节胶合板制造，2002年1月，第10.5-1–4页；https://www.epa.gov/sites/default/files/2020-10/documents/c10s05.pdf | 内用 UF 胶接、压制、精加工、抽排及排放源的定性问题。更广胶合板路线包含本干料边界之外上游环节；不采用数值配方、压制参数或排放因子。 |
| ilcd-handbook-2010 | official_guidance | 欧盟委员会 JRC，ILCD Handbook General guide for Life Cycle Assessment—Detailed guidance，2010年3月第一版，第7.9节；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因法细分及透明多功能处理；前景存量／批群协议落实可审计实物及负荷核算，不是官方工厂默认值。 |
| corrim-western-plywood-2025 | literature | CORRIM，Life Cycle Assessment of Softwood Plywood Production—Western Region，2025年7月22日修订，第3.2.6节；https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Western-Plywood-Report-Final-07222025.pdf | 区域针叶胶合板集成路线质量分配及产品专用包装的反例背景；不直接支持本路线因子、密度、收率、胶配方或强制分配。 |
| un-cpc-3-2025 | official_guidance | 联合国统计司，CPC 3.0，2025年6月30日说明及当前31423／上级3142；https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31423 | 31423 标题及交叉单板条件须与 31413 细木工板／芯材说明一起考虑，不能独立裁定本实木条芯结构。不推断官方纠正或当前映射接受。 |
| un-cpc-31413-2025 | official_guidance | 联合国统计司，CPC 3.0 子类31413，层级及说明；https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31413 | 反向证据：尽管层级／标题为仅木片，说明包含细木工板且允许中央芯为单板或其他材料。实木条芯不自动排除 31413；不推断改归或权威裁定。 |
