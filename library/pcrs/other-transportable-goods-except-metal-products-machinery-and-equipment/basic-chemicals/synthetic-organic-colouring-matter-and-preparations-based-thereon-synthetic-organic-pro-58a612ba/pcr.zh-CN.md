---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-organic-colouring-matter-and-preparations-based-thereon-synthetic-organic-pro-58a612ba
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 盐析法酸性橙7钠盐粉末


## 1. 范围与适用性

本PCR适用于由对氨基苯磺酸和2-萘酚在水相中制造单一染料酸性橙7钠盐（Orange II；CAS 633-96-5），并经氯化钠盐析、过滤、洗涤、干燥、粉末整理和包装的路线。适用产品为该染料与实测残盐、水分构成的已声明粉末牌号，不假定为纯分子。使用前核实实际批次组成和路线。钠盐染料物种的分子式为C16H11N2NaO4S；这是物种身份，不是每千克商业产品的组成。`bcho-orangeii-2015`中的实验室氯化钠盐析支持方法序列，不能确立工业消耗量、干燥器设计、收率或工厂配置。来源：`jrc-ofc-2006`、`basf-us4560745-1985`、`thermo-orangeii-spec`、`bcho-orangeii-2015`。

排除液态供货、其他反离子、色淀、金属络合染料、混合染料、荧光增白剂、无机发光体、膜法或萃取回收以及仅购入染料配制的路线。专利中胺萃取实例最终产出二乙醇胺盐溶液，不能据此确立钠盐粉末整理路线。供方规格证明商业钠盐粉末身份，不能证明其制造路线或通用纯度。

本PCR所限定的外购蒸汽、兼容供电、间接闭路冷却和厂外液体废物处理配置，须有实际场址证据才能适用。所引文献不能证明生产场址采用该配置。即使标称闭路，仍须有回路图、运行记录以及补水、排污、泄漏、添加剂和实际制冷剂损失的计量清单；使用前须分别增加每个实际交换。厂外转移须由废物联单、接收验收和处理文件证明。冷却或废物去向未知不能确立适用性或零排放。场内燃烧、生物废水处理、直接液体排放和开放冷却水交换，须先经有文件支持的扩展并列全实际原子交换后才能适用。该限定仅是PCR边界，不意味着这些路线在行业中不存在。历史工厂数量或专利配方均不得用作默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-organic-colouring-matter-and-preparations-based-thereon-synthetic-organic-pro-58a612ba |
| classification_refs | CPC 3.0 34310; narrower; 映射接受另行裁定 |
| covered_products | 单一染料酸性橙7钠盐粉末，声明残余NaCl和水分 |
| excluded_products | 液态或胺盐供货；色淀；混配；其他染料；增白剂；仅购入配制 |
| representative_product | 已声明批次的Orange II钠盐粉末，无名义纯度默认值 |
| production_route | 水相重氮化/偶合；盐析；过滤；洗涤；干燥；整理；包装 |
| market_state | 厂门验收供货净粉末；参考质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于后续配制或染色的Orange II钠盐粉末 |
| How much | 1 千克供货净粉末 |
| How well | 符合所声明批次/SKU的染色强度、身份、反离子、水分和残盐验收规格，不设统一性能门槛 |
| How long or cycle | 一次生产交付至厂门的周期，不作使用阶段耐久性声明 |
| reference_flow_link | out_dye |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 染料 `08a96ffe-4db5-4405-abdd-d4d03b8b0a55` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CAS；钠反离子；批次/SKU；染料含量及湿/干基与方法；残余NaCl；水分；路线；粉末牌号和验收；来源/供方；厂门；蒸汽状态/回流基准；废物接收方 |

广义参考身份受酸性橙7钠盐粉末范围和必需限定信息约束，不是通用背景配方。质量流身份不证明浓度或供方背景兼容性。该声明单位不能确立不同染料强度或色相的比较等价性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass | kg | 采用验收供货净粉末质量，不含包装；残盐和水分仍包含在该质量内，采用cp_product采集。 |
| `composition_basis` | 所有化工产品输入及out_dye | Mass | kg | 保留实际供货质量，独立测量活性分数、载水和反离子；干基含量须有记录的水分换算，载水不得重复投入。 |
| `utility_basis` | in_electricity; in_steam | Energy; Mass | MJ; kg | 保留电能和实测蒸汽质量，明确匹配供汽压力、焓、凝结水抵扣和供方参考基准；未知兼容性阻止背景链接。 |
| `ledger_basis` | p_dye | Mass | kg | 分别保留未分配总湿质量、水、有机碳、钠、氮、硫和氯离子账。水和染料物种包含反应生成/消耗项，元素平衡守恒原子。载水及场内反应产物与采购交换分开。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购对氨基苯磺酸、2-萘酚及各辅助物资入厂；前景涵盖合成至包装净成品 |
| starting_condition_role | foreground_gate |
| product_classification_scope | 仅CPC 34310中上述合成偶氮染料粉末子集 |
| recursive_input_rule | 外购同类染料记录一次并核实上游来源；仅购入配制不属于本合成PCR，内部回收染料不重新触发上游生产。 |
| upstream_dataset_requirement | 匹配各供货试剂状态、浓度、供方和参考数量，纳入外部蒸汽/电力及废物处理负荷；数据缺失须披露 |
| disclosure | 场址、生产周期、路线、批次牌号、计量器具、内部回收、公用工程限定及废物去向，并披露所有不满足的边界条件 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_complete` | 纳入收货、分阶段投料、反应、盐析、洗涤、干燥、整理、粉尘/酸气捕集、清洗和包装，计入实测损失及辅助能源，包括失败批次。 | jrc-ofc-2006 |
| `boundary_transfers` | 厂外液体废物按实际流/负荷记录技术圈转移并链接接收方处理；不得在本前景厂门重复记转移组分的水排放。若废水处理在厂内，使用前须修订过程边界并增加处理药剂、污泥和实际基本流排放。 | jrc-ofc-2006 |
| `boundary_configuration_evidence` | 核实实际冷却回路及每种外部损失或供给，使用前增加实际原子交换。核实废物负荷、接收方和处理，方可将液体流作为厂外技术圈转移。文献路线或缺少计量器具不能证明水、废物或空气交换为零。 | jrc-ofc-2006 |
| `boundary_no_synthetic_union` | 不得借用膜法或胺萃取数量、金属络合染料排放或其他着色产品配方。清单路线以外的实际辅助组分须另列具体命名、计量及核实的原子行。 | jrc-ofc-2006; basf-us4560745-1985 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| p_dye | 水相合成、盐析和粉末整理 | required | 声明路线和公用工程/废物配置符合范围 | foreground | 1 千克验收供货粉末 |

实物流阶段图：收货 → 对氨基苯磺酸重氮化和单独的碱性2-萘酚溶解 → 偶合 → NaCl盐析 → 过滤/洗涤 → 干燥/整理 → 包装。同一实物染料的这些阶段聚合为一个前景单元，但保留独立阶段计量和取样。内部液体、滤饼和粉末交接的两端质量相等，不增加参考产品输出。母液、洗涤废液和捕集残渣按分别记录的接收路线处理。来源：`jrc-ofc-2006`；`bcho-orangeii-2015`支持实验室NaCl盐析、过滤、水洗和干燥；`basf-us4560745-1985`仅支持偶合原料。BCHO步骤采用流动自来水冷却并可选重结晶，这些条件不移植到本限定工业配置。

### 过程：水相合成、盐析和粉末整理（`p_dye`）

#### 输入

##### 产品流

###### 对氨基苯磺酸 （`in_sulfanilic`）

CAS 121-57-3；称量重氮组分原料，声明牌号、纯度和供货水分。

- 选定流：对氨基苯磺酸
- 流属性/单位：Mass / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-ofc-2006`, `bcho-orangeii-2015`

###### 2-萘酚 （`in_naphthol`）
采用的广义萘酚身份明确包括两种异构体；本行限定实际2-萘酚（CAS135-19-3），须独立核实其含量及β异构体供方背景。宽泛染料分类不是该化合物分类。


CAS 135-19-3；称量偶合原料，排除1-萘酚。

- 选定流：色酚 `a201a6a7-1d73-46d3-ac6d-9f02af4cdc78`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-ofc-2006`, `bcho-orangeii-2015`

###### 亚硝酸钠 （`in_nitrite`）

记录亚硝酸钠称量、纯度、过量投加和终点检测，不假定按理论计量消耗。

- 选定流：亚硝酸钠
- 流属性/单位：Mass / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-ofc-2006`, `bcho-orangeii-2015`

###### 盐酸溶液 （`in_hcl`）

记录供货溶液质量和HCl质量分数，载水仍计入实物水账。

- 选定流：盐酸 `a118a682-1600-4855-b959-c78777b75ee8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-ofc-2006`, `bcho-orangeii-2015`

###### 氢氧化钠溶液 （`in_naoh`）
采用的溶液记录限定蒸馏水稀释和氯碱生产，链接前独立核实实际供方路线及供货浓度；其药物制造用途背景不提供本染料配方。


分别记录溶解、pH控制和吸收各阶段的溶液投加，必须记录浓度和载水。

- 选定流：氢氧化钠溶液 `608efe06-bdb9-4927-8485-82637c1b89fd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-ofc-2006`, `bcho-orangeii-2015`

###### 氯化钠 （`in_nacl`）
采用身份要求纯度至少99.5%，这是身份条件，不是通用投加量或纯度默认值；链接前核实实际供货牌号。


计量采购的盐析或最终强度调整用盐，与反应生成盐区分。

- 选定流：氯化钠 `a413ea86-0887-42c8-be77-3bee86d5863b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-ofc-2006`, `bcho-orangeii-2015`

###### 去离子水 （`in_water`）

按阶段计量采购液态水，包括场内制冰用水；溶液载水不再计作额外投入。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-ofc-2006`, `bcho-orangeii-2015`

###### 电力 （`in_electricity`）
采用身份为中国（CN）低于1 kV交付的电网平均交流电，仅用于供电和地域均兼容的实际计量；其他电压、国家或供方组合须另行核实身份和背景。数据库参考属性为净热值、低位热值，不意味着电力是燃料。


计量反应、泵、闭路冷却、干燥辅助和除尘用电；1 kWh = 3.6 MJ。核对供应方参考属性口径。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`jrc-ofc-2006`

###### 外购工艺蒸汽 （`in_steam`）
已核记录仅提供通用化工蒸汽质量身份，未给出压力/回流基准。可保留实物身份，但实际压力、焓和供方背景兼容仍是必须完成的采集要求。


记录入口蒸汽质量、绝压、温度、干度及回流凝结水质量/焓；净交付热量由焓平衡计量，不能仅由数据库MJ字段推定。以管线图核实间接加热，蒸汽与凝结水分别跨越公用工程边界。凝结水是实测回流，不是染料产品的联产品或自动避免热量抵扣。直接蒸汽注入须另列过程水平衡并修订边界。

- 选定流：蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`jrc-ofc-2006`

###### 活性炭 （`in_carbon`）

仅在实际使用时纳入澄清助剂，记录原料来源、牌号、投加量和截留染料，采用供应方特定上游数据。原生路线字段写“吸收”，实物说明描述“吸附”；保留该不一致并向供方澄清，不默认其原料为木材、煤或其他来源。

- 选定流：活性炭 `5cad53b5-252a-4e2f-8197-8be465707405`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-ofc-2006`

###### 聚乙烯内衬薄膜 （`in_pe`）
PE薄膜实物身份及CAS9002-88-4兼容，CPC29220箱包分类是已知孤立瑕疵，须向来源/供方澄清。


仅在实际使用PE内衬时纳入，记录聚合物、厚度、牌号和供方，不含外袋质量。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`jrc-ofc-2006`

###### 未涂布牛皮纸袋 （`in_sack`）

仅适用于未涂布牛皮纸外袋，实际复合或涂布包装使用前须按具体组件另列原子行。

- 选定流：未涂布牛皮纸袋
- 流属性/单位：Mass / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`jrc-ofc-2006`

#### 输出

##### 产品流

###### 酸性橙7钠盐粉末 （`out_dye`）
采用的染料身份明确允许粉末用途。本PCR限定为酸性橙7钠盐粉末（CAS633-96-5）及实测批次组成，不暗示其他染料或背景配方。其CPC35120分类与该广义身份不一致，须向来源澄清。


1 千克验收供货净粉末；实测染料含量、残盐和水分属于同一产品，排除运输包装。

- 选定流：染料 `08a96ffe-4db5-4405-abdd-d4d03b8b0a55`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_product`
- 来源：`thermo-orangeii-spec`

##### 废物流

###### 酸性橙7盐析母液 （`w_mother`）

计量每次外送盐析母液的质量、组成及接收方；这是技术圈废物转移，不是淡水基本流排放。

- 选定流：酸性橙7盐析母液
- 流属性/单位：Mass / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ofc-2006`, `bcho-orangeii-2015`

###### 酸性橙7滤饼洗涤废液 （`w_wash`）

单独采集计量滤饼洗涤废液；若与母液合并转移，组分质量须与合并负荷核对，禁止重复计算。

- 选定流：酸性橙7滤饼洗涤废液
- 流属性/单位：Mass / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ofc-2006`, `bcho-orangeii-2015`

###### 氯化氢废气吸收器排污液 （`w_scrub`）

仅在水洗吸收器实际排污时纳入，计量HCl捕集、氯离子和碱；已捕集污染物不能同时计为直接空气排放。

- 选定流：氯化氢废气吸收器排污液
- 流属性/单位：Mass / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ofc-2006`

###### 含酸性橙7的废活性炭 （`w_carbon`）

仅在实际产生时纳入固体澄清废物；须记录湿质量、干物质、染料负载和接收处理路线。

- 选定流：废活性炭 `aff33890-3f08-40f9-9310-a7f77213de05`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ofc-2006`

###### 拒收酸性橙7钠盐粉末 （`w_reject`）

仅对外送处置的不合格粉末记废物；场内返工为内部流，影响实测收率和能耗。

- 选定流：拒收酸性橙7钠盐粉末
- 流属性/单位：Mass / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ofc-2006`

###### 收集的酸性橙7粉尘 （`w_dust`）

区分外送处理的捕集粉尘与内部回用，捕集质量不得再次计为空气颗粒物。

- 选定流：收集的酸性橙7粉尘
- 流属性/单位：Mass / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-ofc-2006`

##### 基本流

###### 氯化氢，排放至室外空气 （`air_hcl`）

CAS 7647-01-0；覆盖完整批次，计量治理后烟气及无组织残余HCl。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-ofc-2006`

###### 一氧化氮，排放至室外空气 （`air_no`）

仅在源筛查证明确实排放时纳入实测分子NO（CAS 10102-43-9），NO2当量NOx总量不是该质量。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-ofc-2006`

###### 二氧化氮，排放至室外空气 （`air_no2`）

仅在实际排放时纳入实测分子NO2（CAS 10102-44-0），排除N2O，不再叠加重叠的NOx汇总量。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-ofc-2006`

###### 颗粒物（粒径小于或等于2.5微米），排放至室外空气 （`air_pm25`）

计量经收集后排出厂界的干燥、粉碎和包装颗粒物，该粒径区间互斥。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-ofc-2006`

###### 颗粒物（粒径大于2.5且小于或等于10微米），排放至室外空气 （`air_pm10`）

采用实测互斥粒径分段；累积PM10包含PM2.5，须先核对同源条件再求差。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-ofc-2006`

###### 颗粒物（粒径大于10微米），排放至室外空气 （`air_pmover10`）

采用实测互斥分段；总悬浮颗粒物仅用于核对，不作为额外排放行。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-ofc-2006`

###### 水蒸气，排放至室外空气 （`air_water`）

记录凝结回收后实际排出的干燥水蒸气，不是淡水取用或液态水排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产周期数量除以验收供货净粉末质量，保留阶段记录及条件性不发生的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-ofc-2006`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_no_coproduct_default` | 声明路线只有一种预期销售染料，不得假定残余NaCl、混合母液或废物为联产品。将可归属前景负荷计入验收染料，包括拒收批次和废物处理；若实际有独立销售的回收输出，保留其具体输出行并采用allocation_physical_ledger。 | jrc-ilcd-2010; jrc-ofc-2006 |
| `allocation_physical_ledger` | 未分配总湿质量、水、有机碳、Na、N、S和Cl账与已分配环境负荷分开。若实际有独立销售的回收输出，先调查可实测细分或有依据的系统扩展。二者均不可行时，记录相关因果物理关系；若须采用其他关系，应论证并做敏感性分析。在声明的负荷基准上记录合计为一的份额。不得将实物联产品质量乘负荷份额，输出质量和内部交接两端维持实测值。 | jrc-ilcd-2010; jrc-ofc-2006 |
| `allocation_campaigns` | 共享生产周期采用阶段计量及经核实的运行时间/负荷，不仅按不同商业染料强度、商品名或不相关历史工厂组合分配。停机/清洗和损失只记录一次。 | jrc-ilcd-2010; jrc-ofc-2006 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | p_dye | out_dye | foreground_record | 批次；SKU；CAS；反离子；净质量Q；退回/再次验收；期初期末成品库存及在制品；库存结转负荷；水分；染料含量/基准及物种定义；残盐；Na/N/S/Cl及有机碳；验收 | 校准净称重；代表性批次取样及可追溯分析方法/证书；排除包装及拒收成品 | kg; mass fraction | 每批次/负荷；运行全程能源和排放曲线 | 一个已声明完整代表性生产周期，含清洗、拒收及库存变化；披露日期和覆盖缺口 | 声明前景路线及共享辅助单元 | 每 1 kg 参考流 | 校准；分析方法；原始记录；不确定性；核对 |
| cp_material | p_dye | 试剂；澄清助剂 | foreground_record | 化学品；CAS；牌号；供方；阶段；毛重/皮重/净重kg；溶液含量；载水；纯度；库存变化 | 称量各供货和阶段投料；核对收货库存、消耗、退回及内部回收；测定浓度 | kg; mass fraction | 每批次/负荷；运行全程能源和排放曲线 | 一个已声明完整代表性生产周期，含清洗、拒收及库存变化；披露日期和覆盖缺口 | 声明前景路线及共享辅助单元 | 每 1 kg 参考流 | 校准；分析方法；原始记录；不确定性；核对 |
| cp_water | p_dye | in_water; air_water | foreground_record | 阶段；供水kg；冰kg；溶液载水；湿滤饼；成品水分；凝结水；排气水；库存变化 | 校准计量/称重；体积换算采用实测密度；计量凝结水及排气湿度/流量，或仅在其他全部水输入、输出、库存及反应生成/消耗项均有独立证据时，采用有界水平衡余项并传播不确定性；不得用同一余项拟合未知反应生成水和排气水 | kg | 每批次/负荷；运行全程能源和排放曲线 | 一个已声明完整代表性生产周期，含清洗、拒收及库存变化；披露日期和覆盖缺口 | 声明前景路线及共享辅助单元 | 每 1 kg 参考流 | 校准；分析方法；原始记录；不确定性；核对 |
| cp_energy | p_dye | in_electricity; in_steam | foreground_record | 阶段；计量kWh；蒸汽kg；绝压；温度；干度；入口焓；凝结水质量/焓；间接加热回路；冷却回路图及补水/排污/泄漏/添加剂记录；供给地域；供方基准 | 阶段计量完整运行及清洗；由实测质量/焓计算蒸汽净热；披露缺失回流或供货基准，不链接不兼容背景 | kWh; MJ; kg | 每批次/负荷；运行全程能源和排放曲线 | 一个已声明完整代表性生产周期，含清洗、拒收及库存变化；披露日期和覆盖缺口 | 声明前景路线及共享辅助单元 | 每 1 kg 参考流 | 校准；分析方法；原始记录；不确定性；核对 |
| cp_pack | p_dye | in_pe; in_sack | foreground_record | 组件；供方；聚合物/纸牌号；厚度；皮重；件数；拒收；批次 | 分别称量实际组件，并核对包装数量、损失和供方规格 | kg | 每批次/负荷；运行全程能源和排放曲线 | 一个已声明完整代表性生产周期，含清洗、拒收及库存变化；披露日期和覆盖缺口 | 声明前景路线及共享辅助单元 | 每 1 kg 参考流 | 校准；分析方法；原始记录；不确定性；核对 |
| cp_waste | p_dye | w_mother; w_wash; w_scrub; w_carbon; w_reject; w_dust | foreground_record | 流；阶段；转移kg；实测密度；水/干物质；AO7；对氨基苯磺酸；2-萘酚；氯离子；钠；亚硝酸根；总氮；总硫及硫酸根；COD和TOC及分析口径；pH；接收方；处理；回收 | 对分流转移进行计量/称重并按流/负荷取样；核对母液、洗液和吸收液混合；保留转移及接收验收记录，对实际污染物、毒性和处理抑制扩展分析 | kg; mg/L; mass fraction | 每批次/负荷；运行全程能源和排放曲线 | 一个已声明完整代表性生产周期，含清洗、拒收及库存变化；披露日期和覆盖缺口 | 声明前景路线及共享辅助单元 | 每 1 kg 参考流 | 校准；分析方法；原始记录；不确定性；核对 |
| cp_air | p_dye | air_hcl; air_no; air_no2; air_pm25; air_pm10; air_pmover10 | foreground_record | 源/阶段；运行周期；物种；分子基准；浓度；湿干参考；T/P；排气体积/时间；治理；无组织估计；粒径分段；不确定性；检出限 | 取样覆盖投料/反应/干燥/整理/包装完整周期及清洗、旁路；采用分物种的经核实取样，以同基准浓度和气量计算排气负荷；源筛查决定NO/NO2条件性发生 | kg; mg/m3; m3 | 每批次/负荷；运行全程能源和排放曲线 | 一个已声明完整代表性生产周期，含清洗、拒收及库存变化；披露日期和覆盖缺口 | 声明前景路线及共享辅助单元 | 每 1 kg 参考流 | 校准；分析方法；原始记录；不确定性；核对 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_denominator` | 所有清单行 | x = 周期原始交换总量 / Q；Q为cp_product计量的同一正值验收供货净粉末千克数。先汇总完整兼容路线/状态/牌号周期的原始数量，包括失败或零产出批次、清洗及返工，再仅相除一次；不得平均批次单位比值或再次归一化每千克值。核对退回、再次验收、成品库存及在制品和相应结转负荷，使Q仅确认一次，归属负荷分子覆盖同一产出。内部返工不是新增验收产出。Q为零时保留总量并披露无单位结果，不得相除或删除负荷。保留分子单位，成品输出为1千克。 | cp_product；对应行协议 | x | jrc-ofc-2006 |
| `composition_ledger` | 所有化工产品输入及out_dye | 活性质量 = 供货质量 × 实测供货基活性质量分数；载水和残盐是独立平衡组分，不是重复技术圈投入。仅凭配套水分测量换算干基含量。须明确含量报告按游离酸、钠盐、干物质或染色强度计，只有经验证的分析物种换算才能得到钠盐染料质量。钠盐物种已含其结合Na和S，残余NaCl另含Na和Cl。不得将全部未测定余量归为NaCl或水。 | cp_material; cp_product | 活性质量；载水；残盐 | thermo-orangeii-spec |
| `physical_balances` | p_dye | 对总湿质量及守恒元素核对：未分配外部输入 + 期初库存 = 外部成品 + 转移废物 + 实际释放 + 期末库存 + 披露余项。分别记录总湿质量、Na、N、S、Cl及有机碳。纳入试剂和染料结合Na、对氨基苯磺酸/染料S、亚硝酸根及有机N、采购盐及酸的Cl。有机碳变化须说明物种转化及向无机碳的实际转移；COD为需氧量指标，不是碳质量。水或染料物种账须加入场内反应生成项并扣除消耗项：重氮化/中和生成水及染料生成不作为额外采购流。场内NaCl生成不是采购盐析盐。保留化学物种和元素基准、密度、不确定性及库存变化，不假定收率或固定反应生成水量。核对同一内部流两端，并另行核对公用工程蒸汽/凝结水回路。 | cp_material; cp_product; cp_water; cp_waste; cp_air | 平衡余项及不确定性 | jrc-ofc-2006 |
| `delivered_steam_heat` | in_steam | 净交付热量 = 入口蒸汽质量×入口比焓的总和 − 回流凝结水质量×回流比焓的总和；声明共同焓参考及供方回流约定，质量与热记录分开保存。 | cp_energy | 分别记录MJ及蒸汽kg | jrc-ofc-2006 |
| `air_loads` | 空气基本流输出 | 对各运行周期积分同基准物种浓度×排气量，加有证据的无组织负荷；仅在相同源、时段、湿干基和取样基准下由累积质量相减取得互斥颗粒物分段。 | cp_air | 各物种或互斥颗粒物分段kg | jrc-ofc-2006 |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `quality_identity` | 所有流 | 核实完整身份元数据、CAS、路线、介质、属性和单位，调查矛盾。UUID确认与供方基准兼容是独立检查。 | 供方规格；原始身份记录 |
| `quality_amount` | 所有数量 | 采用可追溯实测、含量、水平衡和能源计量，披露检出限、缺失阶段及未闭合平衡，禁止移植专利/单厂数值。 | cp_product; cp_material; cp_water; cp_energy; cp_waste; cp_air |
| `quality_completeness` | p_dye | 筛查实际添加物、包装、清洗剂、直接释放和异常/旁路条件；宣称数据集完整前，增加有已核身份的具体原子行。缺失计量或UUID均不等于零。 | jrc-ofc-2006 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_reference` | 恰好一个产品输出为out_dye，使用声明的1千克供货净粉末基准。要求已核参考UUID/属性/单位组及钠反离子、路线和批次含量，不能用游离酸或胺盐记录替代。 | thermo-orangeii-spec; basf-us4560745-1985 |
| `validate_amounts` | 两种语言的参考数量、全部行分母、采集聚合和计算均采用相同验收净粉末Q；根据实测评估收率、活性分数、盐、水和蒸汽净热，不虚构数值。 | jrc-ofc-2006 |
| `validate_releases` | 防止转移废水与直接水排放、捕集粉尘与空气颗粒物及嵌套粒径区间重复计算。分子NO/NO2与NO2当量汇总量不同，不从NOx推定N2O。若扩展路线实际产生生物CO2，应独立于气候报告口径保留。 | jrc-ofc-2006 |
| `validate_ledgers` | 要求独立核对未分配总湿质量、水、有机碳、Na、N、S及Cl，物种账含反应生成/消耗及实测外部交接端点。分配份额不进入实物账。化学关系缺失或水平衡余项无界须审核，不能填零或套用理论计量默认值。 | jrc-ofc-2006; thermo-orangeii-spec |
| `validate_readiness` | 身份缺失、元数据矛盾、供方基准不兼容或计量未决均阻止完整数据集。科学审核和映射接受与方法编写完成另行进行。 | thermo-orangeii-spec; jrc-ofc-2006 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅在身份及数量核实后：声明染料强度和厂门的钠盐粉末路线 |
| excluded_use | 整个CPC叶覆盖；色相/强度间等价性；其他盐、液态配方、色淀及仅购入配制 |
| required_metadata | 场址；周期；批次/SKU；CAS/反离子；供货含量/水分/盐；路线；公用工程；接收方；参考身份 |
| required_quality_disclosure | UUID及背景兼容状态；来源/计量覆盖；平衡余项；分配；不确定性；缺失交换；candidate状态 |
| update_trigger | 路线、反离子、强度/配方、回收、公用工程基准、接收方或排放变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-ofc-2006 | official_guidance | [JRC OFC BREF, August 2006](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/ofc_bref_0806.pdf) | 2.5.4节（印刷43–44/PDF73–74）、4.3.2.4节（198/PDF228）、5.2.1节（380–381/PDF410–411）：路线原型、不同废物流和运行工况相关计量。历史实例及BAT水平不作清单默认值。 |
| basf-us4560745-1985 | literature | [BASF US4560745A, 1985, original patent](https://patentimages.storage.googleapis.com/0b/5f/8f/4afae7653438da/US4560745.pdf) | 实施例2，第4栏/PDF3：对氨基苯磺酸/2-萘酚偶合。后续二乙醇胺盐萃取排除，不移植个案配方或回收率。 |
| thermo-orangeii-spec | handbook | [Thermo Scientific Orange II product specification, catalog 416561000](https://assets.thermofisher.com/chem-specs-pdf/retrievePdf?countryCode=cn&erp_type=CN_E1_LCD&rootSku=41656&sku=416561000) | 原始PDF第1页，打印日期2026年10月14日：CAS633-96-5、钠盐身份、粉末市场状态和SKU特定染料含量试验。不推定通用组成或路线。 |
| unsd-cpc3-2025 | official_guidance | [UNSD CPC 3.0 explanatory notes, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 印刷/PDF第162页，34310子类：仅作为宽分类背景。支持narrower建议，不建立方法身份或配方。 |
| bcho-orangeii-2015 | official_guidance | [第23届波罗的海化学奥林匹克实际考试，2015年4月](https://www.eko.ut.ee/pdf/bcho/bcho2015e.en.pdf) | 第2题，PDF/印刷9–12页：实际对氨基苯磺酸/NaNO2/HCl/NaOH/2-萘酚合成、NaCl盐析、过滤、水洗及干燥。仅为实验室方法证据，不移植工业配方、收率、冷却配置或热因子。 |
| jrc-ilcd-2010 | official_guidance | [JRC ILCD手册，LCA通用指南详细指引，2010](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | 第6.5.3.2节，印刷74–80/PDF94–100：细分、有依据的系统扩展和优先因果物理分配，随后才考虑其他关系。仅为方法参考，不预设染料分配份额或声称合规。 |
