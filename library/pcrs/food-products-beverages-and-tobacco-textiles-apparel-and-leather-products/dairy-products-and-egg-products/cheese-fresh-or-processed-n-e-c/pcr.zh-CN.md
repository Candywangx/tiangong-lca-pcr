---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-fresh-or-processed-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 鲜或加工奶酪，未另分类

## 1. 范围与适用性

本 PCR 仅适用于有可审计分类决定将产品归入 CPC 3.0 子类 22259 的奶酪产品。CPC 22259 是以动物物种划分的剩余类，适用于以牛、水牛、绵羊或山羊以外动物的乳生产的鲜或加工奶酪。只有通过下述物种 gate 后，鲜奶酪、乳清奶酪和凝乳、磨碎或粉状奶酪、加工奶酪、蓝纹奶酪及其他奶酪才可能纳入。Tiangong 中的通用流名 `Cheese` 只标识数据库流，并不证明所有奶酪均属于本 PCR。

以下为硬性适用 gate：

1. 可归入牛乳奶酪（CPC 22251）、水牛乳奶酪（CPC 22252）、绵羊乳奶酪（CPC 22253）或山羊乳奶酪（CPC 22254）的产品不得使用本 PCR。
2. 数据集必须识别决定产品奶酪身份的乳、乳配料或奶酪原料中涉及的每一种产乳动物物种。
3. 混合物种产品或其他动物物种产品仅在数据包保留明确支持将该产品归入 CPC 22259 的可审计 CPC 分类依据时方可使用本 PCR。商品名、“奶酪”一词或 Tiangong 通用流均不是充分证据。
4. 证据不能确立 CPC 22259 时，分类状态为 `manual_review`，在有权审核人记录分类决定之前不得选用本 PCR。

具体数据包必须声明产品为鲜/未成熟、成熟、霉菌成熟或加工状态；是否在盐水中销售、保存或成熟；商业净含量是否包含游离盐水；所有具有特征作用的非乳配料及加工添加物；整块、分装、切片、磨碎或粉状等产品形态；以及声明工厂门状态下的包装配置。CXS 221-2001 只用于鲜/未成熟分支。CXS 283-1978 只用于符合其奶酪定义的产品。不得把 Codex 成分或质量条款换算成统一 LCI 收率、配方或投入量，也不得从这些标准推定统一加工奶酪配方。

本 PCR 的前景范围从乳、乳配料或奶酪原料进入制造场址开始，覆盖生产、适用的成熟或盐水处理、加工、最终整理、场内冷藏，以及声明的包装或未包装工厂门产品。上游乳生产、外购配料和包装生产、进出厂运输、零售、消费者使用及寿命终结在研究纳入时应连接独立数据集，不得在本 PCR 中以臆造前景数值替代。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-fresh-or-processed-n-e-c |
| classification_refs | CPC 3.0：22259，鲜或加工奶酪，未另分类（`exact` 语义范围；接受映射证据另行管理） |
| covered_products | 通过动物物种 gate 后，有可审计分类依据将产品归入 CPC 22259 的鲜/未成熟、成熟、霉菌成熟、乳清、凝乳、磨碎、粉状或加工奶酪 |
| excluded_products | 可归入 CPC 22251、22252、22253 或 22254 的奶酪；植物基奶酪替代品；不满足适用奶酪身份要求的乳制备品；CPC 22259 分类未解决或不可审计的产品 |
| representative_product | 来自牛、水牛、绵羊或山羊以外动物物种的一种已声明工厂门奶酪产品，或经明确审核归入 CPC 22259 的混合物种产品 |
| production_route | 批次特定的声明路线：以乳或乳配料进行初级奶酪制造，和/或以奶酪原料制造加工奶酪，并包含适用的鲜制、成熟、霉菌成熟、盐水处理、磨碎、制粉、分装或包装工序 |
| market_state | 具有已声明成熟/加工状态、盐水及沥干约定、并入配料/涂层状态、产品形态、储存条件和包装或未包装状态的工厂门产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门状态下已声明的 CPC 22259 奶酪产品 |
| How much | 1 kg 奶酪产品净重 |
| How well | 满足声明的产品规格及硬性物种/分类 gate，并披露状态、组成、盐水约定、产品形态和包装 |
| How long or cycle | 到达工厂门的一生产批次；报告批次生产日期、场内储存时长以及声明的货架期或成熟条件，不作统一规定 |
| reference_flow_link | 参考流等于按声明沥干约定测得的合格奶酪净重，排除包装质量；默认排除游离盐水，除非数据包明确规定并报告不同的商业净含量约定 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 声明工厂门状态下 1 kg 奶酪产品净重 |
| 参考产品流 | Cheese `8b7b59ae-0b3c-4424-9d8f-a7fc304c7e77` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 每一乳源组分的动物物种及质量份额或形成该份额的文件依据；可审计 CPC 22259 分类决定；鲜/未成熟、成熟、霉菌成熟或加工状态；初级奶酪制造或加工奶酪路线；游离盐水纳入情况及沥干约定；并入的配料、涂层和表面处理；整块、分装、切片、磨碎或粉状形态；用于产品身份的水分或干物质规格；包装计入清单且包装不计入参考质量；工厂门储存条件及时长；批次和场址 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考奶酪输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用有文件记录的批次方法计量合格奶酪净重。排除包装质量。对盐水产品，声明沥干方法以及商业净含量约定是否排除或包含游离盐水。 |
| `ingredient_mass_basis` | 乳、奶酪原料、乳配料、盐、菌种、凝乳剂、添加剂和其他配料 | Mass | kg | 记录实际批次领用或消耗质量，并在相关时标明水分、固形物或浓度基准；不得采用类别统一配方或换算因子。 |
| `species_composition_basis` | 用于确定 CPC 范围的乳源投入 | Mass 或供应商组成依据 | kg 或有文件记录的份额 | 保留动物物种的供应商和批次证据以及各物种份额依据。不得从通用流名或商品名推断物种。 |
| `energy_carrier_preservation` | 电力、燃料、蒸汽、热和制冷 | Energy 或载能体质量/体积 | 原始单位及 MJ 或 kWh 换算 | 保留原始计量或发票单位及载能体身份。只能采用有文件记录的因子换算，不得把电力、燃料、蒸汽和冷量合并成无依据的能源总量。 |
| `water_stream_separation` | 工艺用水、盐水补充水、冷却水和清洗水 | Mass 或 Volume | kg 或 m3 | 按用途记录，仅在有文件记录密度及条件时把体积换为质量。分别记录新鲜水、循环水和冷凝水。 |
| `packaging_mass_separation` | 工厂门前安装的一级、二级和运输包装 | Mass | kg | 分别记录包装材料和每批质量。包装可计入清单，但不得计入 1 kg 奶酪参考质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入制造场址门的乳、乳配料、奶酪原料、特征配料、加工助剂、清洗材料、包装、水和载能体，并声明供应商身份及状态 |
| starting_condition_role | 前景制造起点；上游生产和交付负荷通过独立数据集连接 |
| product_classification_scope | 仅限在排除可归入 22251、22252、22253 或 22254 的产品后，有可审计 CPC 3.0 子类 22259 证据的产品 |
| recursive_input_rule | 同一产品类别的奶酪进入加工奶酪或混合工序时，仅作为采购或转移产品投入记录一次，连接其上游数据集并声明物种/分类依据；不得在当前前景包内递归展开同一生产 |
| upstream_dataset_requirement | 每种乳或奶酪原料、其他材料投入、载能体、供水、包装材料、研究范围内的运输服务及废物处理服务均需要独立且有代表性的上游数据集 |
| disclosure | 声明纳入的单元过程、动物物种及 CPC 决定、产品路线与状态、游离盐水及沥干约定、配料和涂层、包装状态、场内储存、共享运行、分配选择、上游数据集身份、排除项、数据缺口和任何边界偏离 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope_gate` | PCR 选择 | 保留的证据必须支持 CPC 22259 并排除 CPC 22251、22252、22253 和 22254，否则应在建模前停止。混合物种和其他物种产品必须有可审计分类记录。 | `unsd-cpc-3-0` |
| `boundary_foreground_extent` | 制造前景 | 纳入从接收到合格工厂门奶酪输出所必需的全部场址操作，包括适用的凝固、乳清分离、盐渍、盐水处理、成熟、加工、最终整理、包装、冷藏、清洗和场内处理。报告过程排除项。 | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `boundary_recursive_cheese_input` | 同类别奶酪投入 | 在采购或转移奶酪投入处停止递归；连接独立上游数据集，并保留该投入的物种、分类、组成、数量和分配状态。 | `eu-pef-2021-2279` |
| `boundary_packaging_and_storage` | 工厂门状态 | 如存在，纳入声明边界内安装的包装及工厂门前场内储存，但从奶酪参考质量中排除包装质量。单独声明盐水和沥干约定。 | `eu-pef-2021-2279` |
| `boundary_no_default_lci_from_standards` | 来源使用 | 不得把 Codex 产品定义和 EU BAT 方法或绩效信息换算成统一收率、能源、水、配方、排放或废物数值。数量采用场址和批次记录。 | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_scope_control` | 配料接收与 CPC 范围控制 | `required` | 始终 | 在接受生产数据前建立投入身份、动物物种、批次可追溯性和适用性 | 与参考输出关联的每一生产批次 |
| `primary_cheesemaking` | 初级奶酪制造及凝乳/乳清分离 | `conditional` | 声明路线凝固乳或乳材料并分离凝乳、鲜奶酪或乳清奶酪时纳入 | 前景转化 | 每一过程实测凝乳或奶酪输出 |
| `ripening_and_brining` | 成熟、表面处理和盐水处理 | `conditional` | 产品经成熟、霉菌成熟、盐水处理、涂层或表面处理时纳入 | 前景调理 | 每一实测调理奶酪输出 |
| `processed_cheese_manufacture` | 加工奶酪混合及热加工 | `conditional` | 奶酪或乳原料被配制并加工成加工奶酪时纳入 | 前景转化 | 每一实测加工奶酪输出 |
| `finishing_and_factory_gate` | 分装、磨碎、制粉、包装和工厂门储存 | `required` | 始终；仅记录实际存在的操作 | 最终产品调理及门端输出 | 每一实测合格奶酪净输出 |
| `cleaning_and_on_site_treatment` | 清洗、卫生处理及场内废水或废物处理 | `required` | 始终；处理子步骤仅在场内运行时纳入 | 共享或过程特定支持 | 按生产批次直接计量或分配并归一化至参考输出 |

### 过程：配料接收与 CPC 范围控制（`receipt_and_scope_control`）

#### 输入

##### 产品流

###### 接收的乳、乳配料或奶酪原料（`received_milk_or_cheese_feedstock`）

记录决定产品身份的每种乳源原料，包括动物物种、供应商、批次、物理状态、质量和上游数据集。混合物种或其他物种产品必须在获准使用本 PCR 前附有可审计 CPC 分类决定。

- 选定流：场址特定乳、乳配料或奶酪原料
- 流属性/单位：Mass / kg
- 数量规则：按原料及动物物种实测接收和验收批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格奶酪参考净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_identity_and_scope`
- 来源：`unsd-cpc-3-0`; `codex-cxs-206-1999`; `codex-cxs-283-1978`

#### 输出

##### 废物流

###### 被拒收或改向的接收材料（`rejected_received_material`）

按实际去向记录生产前被拒收或改向的材料。仍保持产品身份的可用改向产品不得记作废物。

- 选定流：被拒收或改向的乳材料
- 流属性/单位：Mass / kg
- 数量规则：按原因及目的地实测批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格奶酪参考净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_and_destination`
- 来源：

### 过程：初级奶酪制造及凝乳/乳清分离（`primary_cheesemaking`）

#### 输入

##### 产品流

###### 投入奶酪制造的乳及乳材料（`cheesemaking_dairy_charge`）

按动物物种和材料状态分别记录实际投入声明路线的乳、稀奶油、乳清稀奶油、酪乳、乳固体或其他乳材料批次。

- 选定流：场址特定乳及乳材料
- 流属性/单位：Mass / kg
- 数量规则：投入奶酪制造设备的批次秤量或经核实转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一 `primary_cheesemaking` 实测输出，随后归一化至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials_and_recipe`
- 来源：`codex-cxs-283-1978`; `codex-cxs-221-2001`

###### 菌种、凝乳剂、盐和加工配料（`cheesemaking_minor_inputs`）

根据实际批次领用记录分别记录每种菌种、酶或凝乳剂、盐、适用加工配料及加工助剂。Codex 仅在相应产品标准范围内列出可能配料，不规定 LCI 配方。

- 选定流：场址特定菌种、凝乳剂、盐、配料或加工助剂
- 流属性/单位：Mass / kg，或有质量换算的活动单位
- 数量规则：按材料名称记录实际批次领用或消耗，并保留浓度和活性基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一 `primary_cheesemaking` 实测输出，随后归一化至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials_and_recipe`
- 来源：`codex-cxs-283-1978`; `codex-cxs-221-2001`

###### 奶酪制造工艺用水（`cheesemaking_process_water`）

把成为配料或接触产品的饮用水或工艺用水与冷却水、清洗水分别记录。

- 选定流：Process water
- 流属性/单位：Volume 或 Mass / m3 或 kg
- 数量规则：按用途计量、称量或批次投加的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一 `primary_cheesemaking` 实测输出，随后归一化至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_cleaning_records`
- 来源：`eu-fdm-bat-2019`

###### 奶酪制造所用电力、热、冷量和燃料（`cheesemaking_utilities`）

分别记录乳预处理、凝固、切割、蒸煮、排乳清、压榨、冷却和相关转移的载能体。不得把 EU BAT 绩效水平用作批次 LCI 默认值。

- 选定流：场址特定电力、热、冷量、蒸汽或燃料载能体
- 流属性/单位：Energy 或载能体数量 / kWh、MJ、kg、m3 或原始单位
- 数量规则：过程仪表读数，或从生产期场址仪表总量作有文件记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一 `primary_cheesemaking` 实测输出，随后归一化至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_refrigeration_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

#### 输出

##### 产品流

###### 凝乳、鲜奶酪或乳清奶酪中间产品（`primary_cheese_intermediate`）

在声明排乳清和温度条件下计量批次输出。输出状态决定后续是否进入成熟、盐水处理、加工或最终整理。

- 选定流：奶酪中间产品
- 流属性/单位：Mass / kg
- 数量规则：按批次及声明排乳清条件实测合格中间产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一 `primary_cheesemaking` 实测输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_and_state`
- 来源：`codex-cxs-283-1978`; `codex-cxs-221-2001`

###### 乳清或回收乳制共产品（`whey_or_dairy_coproduct`）

甜乳清、酸乳清、稀奶油、透过液或其他回收乳流作为产品或共产品离开过程时应分别记录，并保留组成、目的地及产品/废物决定。

- 选定流：场址特定乳清或回收乳制共产品
- 流属性/单位：Mass / kg
- 数量规则：转移时实测批次质量及固形物或组成基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一 `primary_cheesemaking` 实测输出，随后归一化至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_and_destination`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 奶酪制造损失和废水（`cheesemaking_losses_and_wastewater`）

按实际收集点和目的地记录洒漏或不合格材料、细小凝乳、未回收乳清和工艺废水。不得将可回收乳清并入废水。

- 选定流：奶酪制造废物或废水
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按流及目的地计量、罐量或根据有文件记录的场址记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一 `primary_cheesemaking` 实测输出，随后归一化至参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_and_destination`
- 来源：`eu-fdm-bat-2019`

### 过程：成熟、表面处理和盐水处理（`ripening_and_brining`）

#### 输入

##### 产品流

###### 进入成熟或盐水处理的奶酪（`cheese_for_conditioning`）

记录进入奶酪批次的质量、状态、水分基准和前序过程链接。

- 选定流：奶酪中间产品
- 流属性/单位：Mass / kg
- 数量规则：进入调理步骤的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一实测调理奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_and_state`
- 来源：`codex-cxs-283-1978`

###### 盐水、盐、菌种、涂层和表面材料（`conditioning_materials`）

把补充盐水和盐与循环盐水分别记录，并记录实际使用的菌种、涂层、洗液、香草、香辛料或其他表面材料。声明哪些材料留在参考产品中。

- 选定流：场址特定盐水、盐、菌种、涂层或表面材料
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：扣除有文件记录回收量后的实际批次投加、补充或净消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一实测调理奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials_and_recipe`
- 来源：`codex-cxs-283-1978`

###### 成熟、盐水处理和制冷公用工程（`conditioning_utilities`）

按实际停留期和使用设备记录电力、热、制冷、加湿、通风及其他公用工程。

- 选定流：场址特定电力、热、冷量或燃料载能体
- 流属性/单位：Energy 或载能体数量 / kWh、MJ、kg、m3 或原始单位
- 数量规则：按批次占用时间和储存条件计量或作有文件记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一实测调理奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_refrigeration_records`
- 来源：`eu-fdm-bat-2019`

#### 输出

##### 产品流

###### 经调理、成熟或盐水处理的奶酪（`conditioned_cheese_output`）

按声明成熟、表面或沥干条件记录输出质量，并记录停留时间、温度制度及产品是否带有游离盐水。

- 选定流：奶酪中间产品
- 流属性/单位：Mass / kg
- 数量规则：按声明沥干及表面约定实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一实测调理奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_and_state`
- 来源：`codex-cxs-283-1978`

##### 废物流

###### 盐水排放、表面损失和调理废物（`conditioning_waste`）

按处理或回收目的地分别记录盐水排放、洗脱物、作为废物去除的外皮或修边、不合格产品和废水。

- 选定流：调理废物、废盐水或废水
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按批次及目的地实测排放、去除或处置数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一实测调理奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_and_destination`
- 来源：`eu-fdm-bat-2019`

### 过程：加工奶酪混合及热加工（`processed_cheese_manufacture`）

#### 输入

##### 产品流

###### 投入加工奶酪制造的奶酪和乳原料（`processed_cheese_feedstocks`）

按供应商或内部批次、动物物种、CPC 依据、组成和质量记录每种奶酪及乳原料。同类别奶酪投入遵守递归投入规则。

- 选定流：场址特定奶酪或乳原料
- 流属性/单位：Mass / kg
- 数量规则：按原料记录实际批次配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一实测加工奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials_and_recipe`
- 来源：`unsd-cpc-3-0`; `codex-cxs-206-1999`

###### 水、盐、特征配料、添加剂和加工助剂（`processed_cheese_other_inputs`）

按材料名称、浓度、功能及并入/去除状态记录实际批次配方。本 PCR 不规定统一配方或收率。

- 选定流：场址特定水、盐、配料、添加剂或加工助剂
- 流属性/单位：Mass / kg
- 数量规则：按材料名称及浓度记录实际批次领用或消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一实测加工奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_materials_and_recipe`
- 来源：

###### 混合、熔化、冷却和制冷公用工程（`processed_cheese_utilities`）

按实际设备和批次分别记录电力、热、蒸汽、冷量和燃料。

- 选定流：场址特定电力、热、冷量、蒸汽或燃料载能体
- 流属性/单位：Energy 或载能体数量 / kWh、MJ、kg、m3 或原始单位
- 数量规则：批次计量用量或有文件记录的过程分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一实测加工奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_refrigeration_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

#### 输出

##### 产品流

###### 加工奶酪中间产品（`processed_cheese_output`）

记录合格输出质量及最终整理前的实际配方、产品规格、温度和状态。

- 选定流：奶酪中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测合格批次输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一实测加工奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_and_state`
- 来源：

##### 废物流

###### 加工奶酪残留和不合格材料（`processed_cheese_waste`）

按实际去向记录设备残留、开机和换产损失、不合格产品及废水。

- 选定流：加工奶酪残留、不合格材料或废水
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按流及目的地实测或以文件记录的批次数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一实测加工奶酪输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_and_destination`
- 来源：`eu-fdm-bat-2019`

### 过程：分装、磨碎、制粉、包装和工厂门储存（`finishing_and_factory_gate`）

#### 输入

##### 产品流

###### 进入最终整理的奶酪（`cheese_for_finishing`）

记录进入最终操作的奶酪质量和状态，并连接前序过程或采购原料记录。

- 选定流：奶酪中间产品
- 流属性/单位：Mass / kg
- 数量规则：进入最终整理的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格奶酪参考净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_and_state`
- 来源：

###### 工厂门前安装的包装材料（`packaging_materials`）

记录声明边界内安装的每种一级、二级和运输包装材料。包装质量永不计入 1 kg 奶酪参考数量。

- 选定流：场址特定包装材料
- 流属性/单位：Mass 或 count / kg 或经实测单件质量换算的 item
- 数量规则：实际包装领用、物料清单，或按经核实单件质量换算的计数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格奶酪参考净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_gate_state`
- 来源：`eu-pef-2021-2279`

###### 最终整理、包装和冷藏公用工程（`finishing_and_storage_utilities`）

记录实际使用工序的电力、热、压缩空气、冷量和燃料，包括批次的实际场内储存时长。

- 选定流：场址特定电力、热、冷量、压缩空气或燃料载能体
- 流属性/单位：Energy 或载能体数量 / kWh、MJ、kg、m3 或原始单位
- 数量规则：最终整理和实际场内储存期的计量用量或有文件记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格奶酪参考净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_refrigeration_records`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

#### 输出

##### 产品流

###### 合格工厂门奶酪（`reference_cheese_output`）

本行为定量参考。所选 Tiangong 流是通用流；必需限定信息和 CPC gate 赋予产品特定含义。

- 选定流：Cheese `8b7b59ae-0b3c-4424-9d8f-a7fc304c7e77`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在声明沥干、配料、产品形态、储存及包装状态下实测 1 kg 合格奶酪净重
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格奶酪参考净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 修边、细料、拒收产品和包装废物（`finishing_waste`）

分别记录奶酪修边或细料、不合格产品和包装废料，并说明每种流是返工、销售、回收、处理还是处置。

- 选定流：最终整理或包装废物
- 流属性/单位：Mass / kg
- 数量规则：按材料、状态及目的地实测批次数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格奶酪参考净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_and_destination`
- 来源：

### 过程：清洗、卫生处理及场内废水或废物处理（`cleaning_and_on_site_treatment`）

#### 输入

##### 产品流

###### 清洗水及清洗或卫生处理剂（`cleaning_inputs`）

按回路或分配操作记录水、清洗化学品和卫生处理剂。在记录允许时分别记录 CIP 回收量和新鲜补充量。

- 选定流：场址特定清洗水或清洗剂
- 流属性/单位：Mass 或 Volume / kg 或 m3
- 数量规则：按清洗事件计量、罐量、采购或批次投加的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：直接归属或分配至生产批次，随后按每 1 kg 参考输出归一化
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_cleaning_records`
- 来源：`eu-fdm-bat-2019`

###### 清洗和场内处理公用工程（`cleaning_treatment_utilities`）

分别记录清洗和场内处理所用电力、热、蒸汽、燃料及处理化学品。

- 选定流：场址特定公用工程或处理化学品
- 流属性/单位：Energy、Mass 或 Volume / kWh、MJ、kg、m3 或原始单位
- 数量规则：清洗和处理操作的计量用量或有文件记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：直接归属或分配至生产批次，随后按每 1 kg 参考输出归一化
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_refrigeration_records`
- 来源：`eu-fdm-bat-2019`

#### 输出

##### 废物流

###### 送处理废水（`wastewater_to_treatment`）

在尽可能特定的计量边界记录废水体积或质量、处理路线及可得负荷或浓度测量。保持乳清、盐水排放和产品损失可识别。

- 选定流：Wastewater to treatment
- 流属性/单位：Volume 或 Mass / m3 或 kg
- 数量规则：按流及处理目的地计量或罐量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：直接归属或分配至生产批次，随后按每 1 kg 参考输出归一化
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_and_direct_emissions`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 制造及场内处理的直接排放（`direct_site_emissions`）

记录对空气、水或土壤的实测排放，或依据场址活动记录和已识别因子计算。不得用产品质量限值或 BAT 相关水平替代实际 LCI 排放。

- 选定流：场址特定基本排放
- 流属性/单位：Mass / kg 或实测原始单位
- 数量规则：直接测量，或依据已采集场址活动数据及有文件记录因子计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：直接归属或分配至生产批次，随后按每 1 kg 参考输出归一化
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_and_direct_emissions`
- 来源：`eu-fdm-bat-2019`; `eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 多输出前景过程 | 首先通过分表计量和拆分直接归属操作避免分配；仅在研究目标和完整附加功能支持时研究系统扩展。 | `eu-pef-2021-2279` |
| `allocation_coproduct_status` | 乳清、稀奶油、透过液、回收奶酪、盐水及其他输出流 | 依据有文件记录的质量、法律状态、目的地以及收入或服务证据确定产品、共产品、可回收材料或废物状态。不得仅为避免分配而把可回收流归为废物。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_physical_then_other` | 剩余共享负荷 | 无法拆分或合理系统扩展时，采用场址数据支持的相关因果物理关系。不存在该关系时，采用经济价值等其他有文件记录关系，报告期间和价格，并测试实质性敏感性。本 PCR 不提供默认因子。 | `eu-pef-2021-2279` |
| `allocation_shared_operations` | 清洗、制冷、成熟室、公用工程、储存及场内处理 | 优先采用直接仪表、占用时间、设备负荷、体积或其他因果驱动。记录驱动因子，并确保共享操作的全部分配份额与完整实测总量核对一致。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_upstream_feedstocks` | 外购乳、乳配料和奶酪原料 | 不在本前景 PCR 中重新建立上游畜牧或乳分配。使用与声明物种、地域、技术及分配方法一致的代表性上游数据集，并披露不匹配。 | `eu-pef-2021-2279` |
| `allocation_brine_and_rework` | 循环盐水和返工奶酪 | 记录总投入、回收或循环、排放、带出和库存变化。只把实测净需求和处理负荷归给输出；不得把回收材料视为零负荷或作为新投入重复计数。 | `eu-fdm-bat-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_identity_and_scope` | `receipt_and_scope_control` | 产品身份及 CPC gate | 供应商记录、接收记录、配方、产品规格及分类决定 | site; lot; supplier lot; animal species; species-share basis; material name; product designation; CPC code; reviewer; decision reference; decision date | 将经批准供应商和批次文件与生产订单核对；保留 CPC 22259 适用且具名子类不适用的明确理由 | document 及 kg 或 fraction | 每一接收批次及每次配方或分类变化 | 数据集代表的所有批次 | 每个制造场址及产品 | 不得跨未解决物种或 CPC 决定平均；仅聚合具有相同声明分类依据的已接受批次 | 受控分类记录、供应商证据、生产订单和审核追踪 |
| `cp_batch_materials_and_recipe` | `primary_cheesemaking`; `ripening_and_brining`; `processed_cheese_manufacture` | 材料和配方投入 | 秤量单、批次表、库存领用、罐液位及组成证书 | lot; material; supplier lot; animal species where milk-derived; gross and net amount; concentration; solids; activity basis; rework; returned amount; incorporated state | 将实际批次领用及退回与生产记录核对；分别记录新鲜、回收和循环材料 | kg、m3 或有文件记录的活动单位 | 每一生产批次 | 数据集代表的所有批次 | 过程线及场址 | 按材料汇总实际净使用量，仅在测得合格输出后归一化 | 经校准秤或罐记录、库存核对、证书及操作员批准 |
| `cp_product_output_and_state` | `primary_cheesemaking`; `ripening_and_brining`; `processed_cheese_manufacture`; `finishing_and_factory_gate` | 中间及最终产品输出 | 秤量单、生产报告、质量放行、储存记录及沥干方法记录 | lot; process; gross mass; net cheese mass; free-brine mass or inclusion; packaging mass; drainage method; product form; ripening or processing state; storage time and condition; conforming and rejected mass | 在规定转移及门端点称量；把质量放行和声明状态核对至同一批次 | kg、time、temperature 及有文件记录的 state | 每一批次和转移；储存按实际停留期 | 数据集代表的所有批次 | 过程线、储存区及场址 | 仅汇总同一参考约定下的合格输出；其他状态单独报告 | 秤校准、放行记录、批次谱系、沥干作业指导及储存日志 |
| `cp_energy_and_refrigeration_records` | `primary_cheesemaking`; `ripening_and_brining`; `processed_cheese_manufacture`; `finishing_and_factory_gate`; `cleaning_and_on_site_treatment` | 电力、热、冷量、蒸汽和燃料 | 分表、公用工程总表、燃料领用、运行小时日志及工程分配 | meter id; start and end reading; carrier; unit; equipment; operating time; product lot; storage occupancy; allocation driver; conversion factor | 优先采用过程分表；否则核对场址仪表总量并采用有文件记录的因果驱动分配 | kWh、MJ、kg、m3 或原始单位 | 可计量时按批次；否则不低于场址核算期并关联批次 | 覆盖实际运行和储存的代表性生产期 | 设备、过程区及场址 | 保留载能体；仅扣除有文件记录输出；分配核对后的总量；归一化至合格输出 | 仪表校准、发票、燃料记录、运行日志和分配核对 |
| `cp_water_and_cleaning_records` | `primary_cheesemaking`; `cleaning_and_on_site_treatment` | 工艺、冷却、清洗水和清洗剂 | 水分表、投加记录、CIP 日志、采购和库存记录 | water source; fresh, recycled, or condensate status; use; volume or mass; agent; concentration; cycle; recovery; meter id; lot or line | 按用途计量或批次投加；核对清洗剂采购和库存变化；分别记录工艺流与清洗流 | m3、kg 及 concentration | 可得时每一生产或清洗周期；否则为有关联过程的核算期 | 每个场址的代表性周期 | 过程线、清洗回路及场址 | 按来源和用途汇总；仅扣除经核实循环且不得重复计数；按有文件记录驱动分配共享清洗 | 仪表校准、投加系统记录、CIP 日志及库存核对 |
| `cp_coproduct_waste_and_destination` | `receipt_and_scope_control`; `primary_cheesemaking`; `ripening_and_brining`; `processed_cheese_manufacture`; `finishing_and_factory_gate` | 共产品、返工、拒收、废物、盐水排放及目的地 | 秤、罐、发运、废物联单、销售记录及返工日志 | stream; product or waste status; mass or volume; solids or composition; destination; revenue if used; treatment; rework linkage; stock change | 转移时计量；把产品、共产品、返工、废物及库存移动核对至同一生产期 | kg、m3、composition，以及经济分配时的 currency | 每一批次或发运；每核算期核对 | 所有代表生产期和核算期，包括库存变化 | 所有相关过程线及场址 | 仅在批次核对后按状态和目的地聚合；不得合并乳清、盐水、废水和固体废物 | 秤或罐证据、发运文件、法律状态、目的地收据及台账核对 |
| `cp_packaging_and_gate_state` | `finishing_and_factory_gate` | 包装清单及门端配置 | 包装物料清单、领退记录、单件计数、单件质量试验及成品规格 | material; component; count; verified unit mass; gross issue; return; scrap; packaged state; product net mass; packaging level | 核对物料清单与实际领退；按受控计划定期核实单件质量 | kg 及 item | 每种包装配置和生产批次；按受控计划检查单件质量 | 所有代表包装配置及生产期 | 每条生产线及场址 | 按材料计算净安装包装并归一化至奶酪净重；包装不计入参考质量 | 受控物料清单、计数核对、秤量试验及产品规格 |
| `cp_wastewater_and_direct_emissions` | `cleaning_and_on_site_treatment` | 废水和直接基本流 | 流量计、罐记录、实验室结果、烟道或排口测量、活动记录及因子记录 | stream; point; flow; pH; temperature; measured parameter; concentration; load; sampling time; air, water, or soil compartment; activity; factor; treatment route | 在尽可能特定点采用场址监测；无法直接测量时仅依据已采集活动及有文件记录因子计算 | m3、kg、concentration 及原始单位 | 按适用场址监测频率并关联生产期 | 代表性生产及排放期，包括正常和相关异常运行 | 所有相关排放点 | 用匹配流量和浓度计算负荷；核对处理及旁路流；仅在场址总量完整后分配 | 仪表及实验室 QA、采样记录、因子引用、处理日志和排放核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_net_mass` | 最终参考输出 | 参考奶酪净重 = 实测单件或批次总质量 - 排除的包装质量 - 声明沥干约定所排除的游离盐水。商业净含量采用其他约定时，报告两种质量并明确选择一种参考约定。 | 总质量；包装质量；游离盐水质量；沥干方法；合格状态 | kg 合格奶酪净重 | `codex-cxs-283-1978`; `eu-pef-2021-2279` |
| `calc_inventory_normalization` | 每一清单数量 | 归一化数量 = 可归属至代表批次的核对数量 / 同批次合格奶酪参考净输出。 | 核对后的行数量；合格净输出；适用时的分配份额 | 每 1 kg 参考输出的行数量 | `eu-pef-2021-2279` |
| `calc_batch_mass_reconciliation` | 每一生产过程 | 核对投入质量、奶酪输出、共产品、返工、废物、直接质量释放、蒸发或水分变化及库存变化。报告并调查残差；本 PCR 不提供默认奶酪收率。 | 批次材料记录；实测输出；废物；排放；库存变化；水分或蒸发证据 | 过程质量平衡表及未解决残差 | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `calc_energy_conversion` | 公用工程记录 | 仅以适用于载能体及条件的有引用因子换算原始能源或载能体单位；保留原始数量并分别报告各载能体。 | 仪表或发票数量；载能体；换算因子及来源 | kWh 或 MJ，并保留原始数量 | `eu-pef-2021-2279` |
| `calc_water_and_wastewater_load` | 水和废水 | 未直接测得负荷时，水或废水负荷 = 匹配的流体体积 × 实测浓度。分别记录工艺、冷却、清洗、盐水及冷凝流。 | 流体体积；浓度；采样期；质量换算所用密度 | 各期流数量及污染物负荷 | `eu-fdm-bat-2019` |
| `calc_shared_operation_allocation` | 共享公用工程及支持操作 | 可归属数量 = 完整核对共享总量 × 有文件记录的因果分配份额；同一总量和期间的全部用户份额之和必须为一。 | 共享总量；分配驱动；全部用户份额；生产期 | 可归属共享操作数量 | `eu-pef-2021-2279` |
| `calc_coproduct_allocation` | 剩余多输出负荷 | 应用第 7 节层级。在为同一代表期记录输出状态、数量、物理关系及适用经济数据前，不得计算分配因子。 | 完整过程清单；输出数量及状态；所选关系；适用时的价格期 | 有文件记录的分配因子和敏感性结果 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | PCR 选择及参考产品 | 每一代表批次均通过 CPC 22259 gate 并保留动物物种和分类证据。未解决混合物种分类不得纳入聚合。 | 受控分类决定、供应商证据、配方及审核人身份 |
| `dq_product_state` | 参考输出 | 鲜/未成熟、成熟、霉菌成熟或加工状态，盐水及沥干约定，配料和涂层，产品形态，包装及储存信息完整，并在参考质量和清单间一致。 | 产品规格、批次记录、标签或放行记录、沥干作业指导及包装物料清单 |
| `dq_temporal_representativeness` | 前景活动数据 | 报告日期、批次数、产量、运行模式、储存期和异常事件。实质性季节或生产活动差异应予保留。 | 批次谱系、生产日历、仪表期间及代表性评估 |
| `dq_technological_and_geographical_representativeness` | 场址及路线 | 声明制造场址、设备路线、产能或运行模式、上游数据集地域和技术及任何不匹配。不得在无分别结果时合并实质不同的鲜、成熟或加工路线。 | 过程流程图、场址记录、路线说明及上游数据集元数据 |
| `dq_measurement_and_reconciliation` | 材料、能源、水、废物及排放记录 | 保留单位、仪表或秤身份、校准或 QA 证据、数据转换、分配及核对残差。缺失数值保持为明确数据缺口，不得以 Codex 限值或 EU BAT 绩效水平填补。 | 校准及实验室 QA、原始记录、公式、来源引用及核对报告 |
| `dq_completeness` | 前景过程 | 量化纳入过程的所有已知材料和能源投入、产品、共产品、废物、废水及直接基本流，或说明某行不适用或仍为缺口的原因。 | 已完成过程检查表、原始字段覆盖矩阵及经批准缺口日志 |
| `dq_source_scope` | 标准及指南使用 | 记录每项来源条款支持身份、边界、采集或分配的范围。不得把鲜奶酪规则外推至成熟或加工奶酪，也不得把质量限值用作 LCI 数量。 | 来源—规则矩阵及审核检查 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_gate` | 产品类别 | 动物物种证据或可审计分类决定缺失、CPC 22259 未解决，或产品可归入 CPC 22251、22252、22253 或 22254 时失败。 | `unsd-cpc-3-0`; `codex-cxs-206-1999` |
| `validate_reference_identity` | 参考流 | 产品流 UUID、Mass UUID、单位组 UUID、kg 单位、1 kg 数量或净重约定与第 3 节不一致时失败。仅有 `Cheese` 一词永不满足范围。 | `eu-pef-2021-2279` |
| `validate_state_qualifiers` | 产品状态 | 成熟/加工状态、盐水及沥干约定、并入配料及涂层、产品形态、包装状态、储存条件、批次或场址缺失时失败。CXS 221-2001 只用于鲜/未成熟产品，CXS 283-1978 只在其范围内使用。 | `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `validate_process_route` | 过程清单 | 声明存在的路线过程缺少详细清单，或详细过程未连接过程图及代表批次时失败。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `validate_mass_and_flow_reconciliation` | 过程及工厂门平衡 | 参考输出未实测、包装或被排除游离盐水在未披露时计入、共产品或废物遗漏，或报告残差未调查时失败。不接受默认收率。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `validate_foreground_quantities` | LCI 数量 | 任何从 Codex 产品质量条款、EU BAT 绩效水平或无引用假设复制的类别统一默认值均失败。材料、能源、水、配方、收率、废物和排放数量必须来自场址/批次记录或基于其透明计算。 | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `validate_allocation` | 多输出及共享操作 | 使用分配但未记录避免分配的尝试、输出状态、方法、数据期、因子、与完整总量的核对，以及非物理关系实质性敏感性时失败。 | `eu-pef-2021-2279` |
| `validate_upstream_and_recursive_inputs` | 外购乳、奶酪、其他投入和处理服务 | 实质性投入缺少代表性上游数据集，或同类别奶酪被递归展开而非以分类和物种依据连接一次时失败。 | `eu-pef-2021-2279` |
| `validate_source_scope` | 证据使用 | 来源被用于其产品或设施范围之外，或质量、组成、许可或 BAT 数值被视为实测 LCI 数量时失败。 | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明 CPC 22259 奶酪路线和工厂门状态的产品特定前景制造数据集 |
| downstream_use | 用作有文件记录研究的 `secondary_dataset`；仅在用户产品、物种/分类依据、路线、地域、技术、时间、盐水约定和包装状态具有充分代表性时用作 `background_dataset` |
| allowed_use | 对声明的鲜/未成熟、成熟、霉菌成熟或加工 CPC 22259 奶酪进行工厂门建模；连接独立上游、分销、使用和寿命终结数据集的下游生命周期模型 |
| excluded_use | 归入 CPC 22251—22254 的任何奶酪；分类未解决的混合物种奶酪；植物基替代品；通用“全部奶酪”平均；把 Codex 限值或 EU BAT 绩效水平作为实测清单；在实质不同产品状态或路线间未披露转用 |
| required_metadata | 所用 PCR id 和版本；CPC 决定及证据；动物物种及份额依据；产品和路线状态；盐水及沥干约定；配方和并入配料；产品形态；包装及参考质量约定；场址和地域；技术；代表日期和批次；储存；过程图；上游数据集；分配；来源版本 |
| required_quality_disclosure | 各过程及原始字段覆盖；实测值与计算值；仪表、秤、实验室及校准证据；质量、能源、水及废物核对；分配驱动及敏感性；代表性；数据缺口；不确定性；来源范围限制；偏离 |
| update_trigger | 动物物种或 CPC 决定、配方或产品身份、鲜/成熟/加工路线、盐水或沥干约定、包装或参考质量基准、场址或技术、分配或共产品目的地、上游数据集、实质性供应商、监测方法或代表期发生变化；或证据表明引用来源有实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | 联合国统计司，《Central Product Classification Version 3.0 Explanatory Notes》，子类 22259 及同级子类 22251—22254，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，访问日期 2026-08-12 | 剩余类别范围、具名物种排除及分类 gate |
| `codex-cxs-206-1999` | `standard` | Codex Alimentarius，《General Standard for the Use of Dairy Terms》，CXS 206-1999，2022 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B206-1999%252FCXS_206e.pdf，访问日期 2026-08-12 | 乳制品身份、动物物种声明、乳制品及复合乳制品术语；不作为定量 LCI 证据 |
| `codex-cxs-283-1978` | `standard` | Codex Alimentarius，《General Standard for Cheese》，CXS 283-1978，2024 年修订，Codex 官方标准入口：https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/，访问日期 2026-08-12 | 适用时的一般奶酪身份及成熟/未成熟状态、可能配料和表面状态披露；不作为统一收率、配方或 LCI 数值 |
| `codex-cxs-221-2001` | `standard` | Codex Alimentarius，《Group Standard for Unripened Cheese Including Fresh Cheese》，CXS 221-2001，2022 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B221-2001%252FCXS_221e.pdf，访问日期 2026-08-12 | 仅用于鲜/未成熟分支的身份及适用配料披露；不作为成熟或加工奶酪 LCI 证据 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，《Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods》，附件 I 产品环境足迹方法，英语合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng，访问日期 2026-08-12 | 功能单位及参考流、过程边界披露、企业特定前景数据、归一化、数据质量、上游数据集及多功能层级 |
| `eu-fdm-bat-2019` | `official_guidance` | 欧盟委员会，《Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries》，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng，访问日期 2026-08-12 | 水、能源、原料、废水、排放、残余物的过程级清单及监测策略；BAT 绩效和质量水平不作为前景 LCI 默认值 |
