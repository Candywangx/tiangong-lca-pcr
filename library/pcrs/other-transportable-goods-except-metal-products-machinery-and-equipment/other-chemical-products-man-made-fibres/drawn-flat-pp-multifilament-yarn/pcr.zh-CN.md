---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.drawn-flat-pp-multifilament-yarn
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 原生 PP 平滑拉伸交络复丝纱制造

## 1. 范围与适用性

本方法覆盖从外购原生 PP 颗粒到新增质量放行已包装平滑拉伸、气流交络单束连续长丝工业纱的制造，用于后续工业纺织加工。固定采用独立纺丝／卷绕 → 拉伸 → 分等／包装的平滑纱分支，初纺筒纱为内部物料，不采用销售 POY 或变形／加捻分支 [chemosvit-pp-2016]。代表性工业 HP 规格及包装支持供货门，不是工厂实测消耗或通用产品规格 [chemosvit-pp-list-2024]。独立设备证据确认工业 PP FDY 纺丝／拉伸能力；其集成纺丝—拉伸—卷绕配置不被声称为独立阶段的 Chemosvit 分支，也不替代进入本路线 [lohia-pp-sdw]。

排除缝纫线、多股／缆线纱、零售包装及第 2 节其他排除项。单束内长丝的气流交络与膨体气流变形、合并独立纱线有别。实际批次须有订单／TDS 和试验；不提供默认能耗、收率、油剂剂量、密度或回潮率。native 广泛身份仅支持 PP 长丝物理身份；完整限制保留在输出卡及边界规则中。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.drawn-flat-pp-multifilament-yarn |
| classification_refs | CPC 3.0：35520，较窄语义子集；尚未建立已接受映射 |
| covered_products | 原生 PP 本体着色实心圆截面平滑拉伸连续复丝纱；单束纱，未加捻、气流交络；工业筒装 |
| excluded_products | POY、变形／膨体纱、加捻纱、多股／缆线纱、缝纫线、零售纱、单丝、切膜／裂膜扁丝、短纤纱、再生聚合物、中空／异形长丝、功能助剂特种牌号及聚合物共混物 |
| representative_product | 平滑交络 PP FDY，以工业 PROLEN HP 330 dtex／66 根长丝实心圆截面选项为代表；逐批声明实际颜色和验收规格 |
| production_route | 原生 PP 颗粒及色母粒接收 → 熔融／过滤 → 喷丝、冷却、施加油剂及初次卷绕 → 独立退绕／拉伸及气流交络与最终收卷 → 分等、称重、包装及首次质量放行；不含后续变形或加捻 |
| market_state | 生产放行门处新增质量放行的已包装工业筒纱；不是实际发运数量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应用于针织／机织加工的已声明平滑拉伸 PP 长丝中间产品 |
| How much | 1 kg 新增验收的供货状态净纱 |
| How well | 单束未加捻实心圆截面 PP 复丝，实际 dtex、长丝数、颜色、交络点、强度、伸长率、收缩率、油剂及水分按订单／TDS 检验；通过批次分等和包装身份验收 |
| How long or cycle | 一个匹配的生产核算期间及同产品／路线／状态群组；不主张使用寿命 |
| reference_flow_link | `released_yarn` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 丙纶长丝 `26f0ce1c-fd85-402c-8993-4e843df4f762` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 原生 PP 牌号与供应批次; 单束且无并股／缆线／缝纫／零售用途; 实心圆截面及实际色母粒配方; 独立纺丝／卷绕后拉伸路线且不替代为销售 POY／变形纱; dtex 和长丝数及其试验方法; 交络及无施加捻度与验收试验; 强度、伸长率、收缩率及批次处置; 油剂分析、水分、调湿及供货状态质量基准; 实测筒管、袋、箱、托盘及裹膜皮重; 唯一首次放行标识且排除退回再验收; 生产放行 Q 及独立成品库存／发运账; 工厂、地理、期间、公用工程供给及供应背景限制; 期初／期末 WIP 及结转负荷和失败／返工运行; native 广泛生产混合身份及分类／路线措辞债务 |

在具体数据包中声明每项限定信息；此质量声明单位不确立等效织物服务或寿命。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_release 使用经校准秤称量验收供货状态净纱，减去实测筒管及所有运输包装皮重；分别记录调湿、油剂和水分。Q 仅包含已声明群组的唯一首次质量放行 |
| `linear_density` | 纱线身份及长度换算 | Linear density | dtex; den; m | 独立测量线密度与长丝数：dtex 为 g/10000 m，den 为 g/9000 m；匹配的实测长度与 dtex 可交叉检查质量，但不能替代经校准的放行净重称量。线密度不是 kg/m3 材料密度；名义筒号及目录最大筒重不是 Q |
| `finish_water` | 树脂、油剂、纱及水 | Mass | kg | 保留收到状态湿质量及分别测定的干固体／活性分数／自由水。声明分析分母。真实存在的纱上油剂和水分保留在供货状态净纱质量中；不得套用通用回潮率或未经另行声明换算即扣除。不得重复采购制剂组分 |
| `meter_units` | 公用工程及物种 | Energy; volume; mass | kWh; m3; kg | 保留仪表单位；1 kWh = 3.6 MJ。实测积分水／气体体积已是期间总量，不再乘时间。实测流率只乘一次匹配时长；气体质量须独立明确压力、温度、组成及换算。保留每个实测排放物种与介质 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 长丝工厂接收已聚合并稳定化的外购原生纤维级 PP 颗粒、单一已指定 PP 载体色母粒及整份供货油剂 |
| starting_condition_role | 聚合物加工前景；上游丙烯链增长聚合保留在树脂供应中 |
| product_classification_scope | 仅 35520 中已声明的非零售、非缝纫、单束 PP 平滑长丝子集 |
| recursive_input_rule | 内部熔体、初纺丝、拉伸丝、退回及返工均为批次转移，不是新增采购或额外验收产量。外购纱须另行界定加工路线，不得用其质量替代 PP 颗粒 |
| upstream_dataset_requirement | 连接相容的原生 PP 聚合／颗粒、实际色母粒和油剂制剂、电力及各包装供应且各计一次；native 纱线身份不是背景供应者或数量 |
| disclosure | 从工厂接收到已包装首次质量放行的门到门加工；披露实际场址、区间、工艺配置、上游链接、仓储／发运纳入情况与遗漏。native PP 纱没有 locationOfSupply 或 CAS；其错误针织物分类 28190 不能证明织物结构。路线标签为 aggregation／spinning／stretching（中文为聚合／纺丝／拉伸）；本方法的聚合位于上游，不是现场反应 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `route_gate` | 制造 | 纳入原料接收、计量、熔体均化／过滤、喷丝、冷却空气调节、油剂配制／施加、初次卷绕、独立退绕／拉伸、气流交络、最终收卷、分等、称重、包装及首次验收。交络使单束中的长丝纠缠，不授权变形或合并独立纱线 | `chemosvit-pp-2016`; `lohia-pp-sdw` |
| `supply_gate` | 终端门 | Q 为本群组唯一新增正质量放行的已包装净纱 kg，位于重复仓库出库之前。未验收初纺或拉伸筒纱为 WIP，不默认是独立销售 POY；不得隐含增加、遗漏或重复计入后续拉伸／变形 | `chemosvit-pp-2016`; `chemosvit-pp-list-2024` |
| `stock_services` | WIP 和成品仓库 | 保留失败／零产出期间、开车、清洁、返工、退回及所有实际纳入的包装、仓储、搬运和发运原始负荷。保留期初／期末 WIP 及其结转负荷。新增放行生产账只记录一次 Q，绝不将同批已放行 Q 的期末库存再加作产品输出。成品仓储与发运分账，保留期初／期末 kg 及结转负荷；合并账时抵消内部交接。退回再验收不生成新 Q；后续交付数据集须另设已交付分母并结转未交付库存负荷 |  |
| `external_internal` | 制剂与公用工程 | 整份外购色母粒及整份油剂制剂各计一次。其颜料／聚合物／活性组分／载体水分析为子账，不是额外采购。仅把单独取得的稀释水列为外部水输入。纳入现场调配损失／能耗。现场压缩空气及循环冷却水为内部公用工程转移；其实测电力、补水、排污及损失各计一次。完成数据集前，为每项真实存在的燃料、外购热、清洗剂、制冷剂泄漏、过滤耗材或废物分别添加原子交换及协议 | `goulston-filament-finish` |
| `physical_chemistry` | 质量及排放核算 | 熔融／凝固及分子取向不产生聚合反应水。PP 链增长位于上游。分别守恒总物理质量以及聚合物／颜料／油剂／水子账；真实存在降解、氧化、水解或其他副反应时，以独立物种证据记录。不得根据闭合残差或 COD 推算反应水、VOC 物种或出口质量。测量实际物种与介质；不默认零或通用排放因子 |  |
| `native_limits` | 参考身份 | 该 UUID 是工厂端生产混合的广泛 PP 长丝 Product flow，带上游聚合／纺丝／拉伸措辞；不认证 POY／FDY、颜色、纤度、长丝数、供应者、实测收率、配方、特定国家或交付范围。其无 CAS 且地理对象为空。英文 aggregation 措辞与针织物分类 28190 为已披露的元数据债务；双语 basename 及注释的 PP 长丝物理身份一致。仅用于本方法已声明的较窄平滑拉伸路线，独立核实原生树脂供应，并逐项复核后续背景供应者的实际牌号、路线、场址、期间与系统边界 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | PP 熔融纺丝、拉伸、交络及包装放行 | required | 已声明原生 PP 平滑拉伸工业路线 | 含实测内部阶段及服务的一个相连前景 | 每 1 kg 参考流 |

固定路线采用独立纺丝／卷绕后拉伸，未验收初纺筒纱为内部 WIP。集成纺丝—拉伸—卷绕线须另行声明路线并复核；不得按 FDY 标签合并其公用工程或收率记录。内部熔体／初纺／拉伸转移保留在批次／WIP 账中。不暗含中间正产品输出。每项适用的额外供应、废物或物种须独立原子行和测量；数据缺失不等于零。

### 过程：PP 长丝制造（`manufacture`）

#### 输入

##### 产品流

###### 原生 PP 纺丝颗粒 (`pp_granulate`)

已聚合的外购 PP；记录树脂牌号、熔体流动试验、稳定化、供应批次、水分及实际领用净质量。预掺稳定剂属于该供应，不是重复外部组分

- 选定流: 原生纤维级聚丙烯颗粒
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_material 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `chemosvit-pp-2016`

###### PP 载体色母粒 (`colour_masterbatch`)

实际色号的一种已识别整份商业色母粒制剂；颜料与 PP 载体分析作为子账保留。不暗含另外采购颜料或载体。额外特种功能及聚合物共混牌号超出范围

- 选定流: PP 载体颜料母粒
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_material 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `chemosvit-pp-2016`

###### PP 平滑长丝纺丝油剂 (`spin_finish`)

一种实际采购的相容油剂制剂，包含其供货载体水。须有供应商制剂／SDS、活性／不挥发物与水分分析及批次验收；通用油剂证据不能确立供应商配方、PP 相容性或施用量。现场稀释使用单独计量的稀释水行

- 选定流: PP 平滑长丝纺丝油剂制剂
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_material 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `goulston-filament-finish`

###### 油剂稀释水 (`dilution_water`)

仅为油剂稀释实际单独供应的水；排除已含于外购油剂的水及内部回用乳液。不发生稀释时须证明不存在

- 选定流: 除盐水
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_material 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源:

###### 冷却回路补水 (`cooling_makeup`)

实际冷却系统的外部补水，不是总循环流量。跟踪排污、蒸发、泄漏与期初／期末水库存；体积转质量只用实测密度

- 选定流: 冷却补充水
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_material 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源:

###### 前景电力 (`electricity`)

测量进料／熔融／纺丝／拉伸／卷绕／包装电力以及应归属的压缩机、冷却空气调节、冷却、油剂调配、通风、开车、失败运行与返工。现场气源只计一次压缩机电力，不再为同一服务叠加外购压缩空气。记录实际电压／场址／供应者与仪表分配

- 选定流: 电力
- 流属性/单位: 能量 / kWh
- 数量规则: 按 cp_energy 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `lohia-pp-sdw`

###### 纸筒管 (`paper_tube`)

实际纸筒管质量，单独称皮重；目录 3 型尺寸不能确立皮重。回用／退回须有实测领退与寿命归属，不得每次周转均收取完整回用筒管负荷

- 选定流: 纸卷绕筒管
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_pack 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_pack`
- 来源: `chemosvit-pp-list-2024`

###### 单筒包装袋 (`pe_bag`)

一种实际单筒 PE 袋供应；测量该确切袋的数量与代表性皮重

- 选定流: 聚乙烯筒纱袋
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_pack 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_pack`
- 来源: `chemosvit-pp-list-2024`

###### 运输纸箱 (`corrugated_box`)

实际已识别的瓦楞纸箱结构；核实供应组成及实测皮重，仅在真实采用时纳入目录双箱选项。不得由尺寸推定箱重

- 选定流: 瓦楞运输纸箱
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_pack 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_pack`
- 来源: `chemosvit-pp-list-2024`

###### 运输托盘 (`wood_pallet`)

仅在实际选用时计入木托盘；europallet 一词本身不能证明木材、皮重或回用负荷。其他材质托盘须有独立原子行，不使用本行

- 选定流: 木质运输托盘
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_pack 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_pack`
- 来源: `chemosvit-pp-list-2024`

###### 托盘裹膜 (`stretch_film`)

实际托盘裹膜卷领用减核实余料退回；裹膜皮重与纱质量分开

- 选定流: 聚乙烯拉伸膜
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_pack 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_pack`
- 来源: `chemosvit-pp-list-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次质量放行平滑拉伸纱 (`released_yarn`)

终端 Product 输出为新增放行已包装的单束实心圆截面原生 PP 平滑交络纱，无施加捻度、无变形、无并股／缆线，且无缝纫／零售规格。native 身份更广泛：工厂端生产混合；路线 aggregation／spinning／stretching（中文聚合／纺丝／拉伸）；无 CAS、无地理／locationOfSupply、无确切牌号、FDY 状态、配方、颜色、供应商或交付基准。其针织物分类 28190 和英文 aggregation 措辞为已披露的元数据债务，不是织物或现场聚合步骤的证据。连接实际上游原生 PP 供应并独立核实每个后续供应背景。Q 排除筒管／包装，按已声明供货状态包含实际保留的油剂／水分；只计唯一首次放行

- 选定流: 丙纶长丝 `26f0ce1c-fd85-402c-8993-4e843df4f762`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_release`
- 来源: `chemosvit-pp-2016`; `chemosvit-pp-list-2024`

##### 废物流

###### 废弃 PP 清机料与长丝 (`pp_scrap`)

同一已声明处置／回收路线的一种富聚合物废物流，实测颜料／油剂／水分含量。实质不同处理路线分别列行。内部退回／重熔不是外部废物，其负荷经 WIP 结转；可售联产品须独立产品身份及分配

- 选定流: 废聚丙烯
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_balance 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_balance`
- 来源:

###### 废弃油剂乳液 (`spent_finish`)

按其水／活性组分测量的实际废弃油剂乳液；不得将该整份废物质量再次计作排水或排放

- 选定流: 废纺丝油剂乳液
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_balance 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_balance`
- 来源:

###### 冷却回路废水 (`cooling_purge`)

实际离开前景并送指定处理的废水；不是基本水排放，也不是整个内部冷却循环。与油剂乳液分开

- 选定流: 冷却排污废水
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_balance 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_balance`
- 来源:

##### 基本流

###### 向空气蒸发的水 (`water_vapour`)

油剂干燥、进料水分或冷却产生的实际水蒸气；保留独立支持的来源及空气介质。物理蒸发不是化学反应水。不得将无法解释的平衡残差当作排放测量

- 选定流: 向空气排放的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_emission 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emission`
- 来源:

###### 向空气排放的 PP 颗粒 (`pp_dust`)

仅实测未捕集而向空气释放的 PP 颗粒物；已捕集 PP 粉尘属于实际废物账。带颜料或化学组成不同的颗粒须采用正确的独立物种身份

- 选定流: 向空气排放的聚丙烯颗粒物
- 流属性/单位: 质量 / kg
- 数量规则: 按 cp_emission 完成单位换算及群组／WIP 归属后，以匹配原始 A_e / Q 报告；使用第 8 节唯一报告除法
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_emission`
- 来源:

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | 制造及内部循环 | 优先按批次／子表细分；保留开车失败、内部返工及 WIP 结转负荷。内部退回不是联产品销售。真实可售降级品须有独立身份和实测数量。在有依据选择归因分配而非替代时，先逐交换采用决定性物理因果关系与虚拟细分，仅剩余未能确定物理关系的负荷再按同一工序门市场价值分配；记录实际驱动、匹配数量／价值及敏感性。不默认分配比例，废物处理不自动获得替代产品信用 | `ilcd-attributional-allocation-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

各 collection_method 保留未除的原始期间分子及完整库存／结转负荷。aggregation_rule 列仅声明最终报告基准。卡片 A_e/Q、汇总基准及 normalize_once 均指换算和 cohort_burden 之后同一次计算，绝非顺序重复除法。Q 仅由首次放行负责人定义。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | 首次放行纱 | 验收与称重 | 批次及唯一筒号; 首次验收／拒收／退回状态; 毛重 kg; 筒管／袋／箱／托盘／裹膜皮重 kg; 调湿; 油剂和水分分析; dtex; 长丝数; 捻度／IPM; 拉伸强度伸长收缩试验; Q | 生产质量负责人依据实际订单／TDS 及经校准净重称量签署首次正验收，再识别唯一放行 kg。独立记录整门供货状态水／油剂条件及所有包装皮重；核对重复标识、撤销、退回与未验收 WIP。保留原始净 kg；此处不对输入分子执行除法 | kg | 每筒及每批 | 完整匹配核算期间 | 已声明工厂及相同牌号／路线／状态群组 | 每 1 kg 参考流 | 秤校准; 皮重试验; 批次 TDS; 验收及退回记录 |
| cp_material | manufacture | 外购物料及水 | 接收领用及库存 | 逐项供应标识; 整份接收／领用／退回 kg; 树脂／色母粒／油剂分析; 水表; 制剂批次; 原料期初／期末库存; 内部转移 | 物料仓储与配制负责人保留原始期间总供应记录及实测领退／库存值，含失败运行和现场调配损失。组分分析子账分开；仅单独取得的稀释水为外部水。任何报告除法之前保留实测体积／温度／密度换算；此处无 A/Q | kg | 每次供应领用及仪表区间 | 同一完整期间，含停机及返工 | 已声明工厂制造 | 每 1 kg 参考流 | 发票; 经校准天平／仪表; SDS／分析; 批次核对 |
| cp_energy | manufacture | 前景电力 | 仪表与服务归属 | 期初／期末 kWh 仪表; 子表期间; 压缩机／冷却空气／冷却／熔融／拉伸／包装负荷; 开车／零产出／返工时长; 共用服务分配驱动量 | 公用工程负责人保留全部未除的仪表差值及有依据的共用服务分配，覆盖闲置／失败／返工、调配与包装等真实操作。内部压缩空气／冷却服务负荷各只取得一次。保留库存／结转负荷链接；采集时绝不除以 Q | kWh | 仪表区间及期末 | 完整匹配期间 | 已声明工厂制造与归属公用工程 | 每 1 kg 参考流 | 校准; 仪表时间戳; 服务分配证据 |
| cp_pack | manufacture | 各包装制品 | 包装称重领退 | 独立筒管／袋／箱／托盘／裹膜身份; 毛重／皮重 kg; 数量; 退回; 周转次数; 破损包装; 包装期初／期末库存 | 包装负责人称量每种实际制品，或核实该确切制品／批次的代表皮重与实测数量；保留完整原始质量及含拒收、返工、退回的回用归属。此为与 cp_release 净纱皮重分开的采购／消耗证据；此处无 A/Q | kg | 每批及每次包装领用 | 完整匹配期间 | 制造包装边界 | 每 1 kg 参考流 | 皮重研究; 采购; 回用及破损记录; 包装标识 |
| cp_balance | manufacture | 物理质量、WIP、废物及结转负荷 | 批次平衡与工作含量账 | 各物态期初／期末 WIP kg 及累积交换负荷; 内部熔体／初纺／拉伸转移; 失败; 退回／返工; 废物 kg／组成／处理; 产品 kg; 水／油剂／颜料子账 | 生产核算负责人按各期初／期末 WIP 状态保留完整原始质量／元素平衡及有依据的工作含量负荷；不移除任何零产出运行。跟踪实际废物处置与独立出口／物种测量；调查并披露未解释闭合量，绝不分配为虚构物种或反应水。保留原始未除记录 | kg | 批次转移及各期间边界 | 完整期间及期初负荷来源 | 同一相连制造群组 | 每 1 kg 参考流 | 分物态盘点; 转移收据; 独立质量／元素／物种检查 |
| cp_emission | manufacture | 各基本排放 | 物种与介质监测 | 物种身份; 介质; 浓度及基准; 积分气／液体体积或真实流率／时长; 温度／压力; 捕集; 收集水; 空白; 检出限 | 环境负责人保留全期间实测排放、控制／捕集性能及不确定性，含失败／返工期间。归一化前按所记录条件换算实测物种；积分体积不再乘时间。通用聚合物或油剂说明不能确立实际化学物种。每种额外实测物种／介质添加独立原子卡；不用通用 VOC／COD 或未知水残差 | kg | 监测区间及期间 | 完整匹配期间 | 实际制造排放 | 每 1 kg 参考流 | 校准; 实验室方法; 原始监测数据; 独立物种证据 |
| cp_stock | manufacture | 成品仓储搬运与发运桥接 | 独立仓库账 | 期初已放行库存 kg 及结转负荷; 新放行接收标识; 发运及退回标识／kg; 期末已放行库存 kg 及负荷; 仓储时长; 实际包装／搬运／发运负荷; 内部交接 | 仓库负责人将成品库存期初／期末及结转负荷与生产 WIP 和首次放行 Q 分开记录。按批次归属保留所有实际纳入的仓储、包装、搬运和发运服务。核对接收／出库／退回，不把再验收作为新制造。合并账时抵消内部产品交接；采集保留全部未除值 | kg; kWh; tonne-km | 每次移动及期间边界 | 匹配群组至所披露仓储／发运区间 | 已声明工厂及任何纳入的仓库／发运 | 每 1 kg 参考流 | 库存盘点; 负荷来源; 发运／退回标识; 服务记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cohort_burden` | 所有清单行 | 对交换 e，A_e = 期初 WIP 结转负荷_e + 完整当期负荷_e - 期末 WIP 结转负荷_e - 单独分配给联产品的负荷_e。采用分物态工作含量与批次链接；保留失败／返工。物理废物出口数量仍为实测量，不是负荷残差。仅加入另有依据归属于本新增放行群组的仓储／发运服务份额；其他已放行库存负荷在 cp_stock 结转。报告前抵消内部交接 | opening_WIP_burden_e; period_burden_e; closing_WIP_burden_e; coproduct_burden_e; cp_balance; cp_stock | A_e |  |
| `normalize_once` | 所有清单行 | q_e = A_e / Q；Q 为 cp_release 下正的唯一首次质量放行已包装供货状态净纱 kg。此为原始单位换算及群组／WIP 归属之后的唯一报告除法；卡片数量与协议汇总均指同一次操作，绝不再次相除。放行参考输出为 1 kg。Q 为零时保留全部负荷及有依据的 WIP／后续群组结转，不生成每 kg 结果 | A_e; Q; cp_release | q_e |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | 参考及供应者 | 用实际订单／试验核实原生 PP、单束平滑拉伸状态、圆截面、颜色、无加捻／变形及非缝纫／零售门。来源目录最大筒重、dtex 及典型聚合物属性不是批次实测质量、密度、收率或过程能耗 | 订单／TDS; 批次验收; 供应记录; native 限制披露 |
| `measurement` | 原始数据及分母 | 独立测量纱 kg、皮重、油剂／水分及线密度／长丝数。声明仪器不确定性、采样和调湿。唯一归一化前保留全部原始分子；不默认收率、消耗、能耗、密度或回潮率 | 校准; 分析; 原始数据; 单次计算链 |
| `completeness` | 期间及库存 | 匹配实际完整期间、工厂、路线及群组。分别保留失败／零产出／返工负荷、WIP 期初／期末工作含量及成品库存结转。独立闭合物理与元素账，不虚构物种。每项适用但缺失的测量／供应背景链接均须披露并在声称数据集完整前解决 | cp_balance 和 cp_stock; 来源／分析／监测记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `scope_match` | 参考流 | 要求全部已声明限定信息和实际订单／TDS 验收。拒绝替代为 POY、DTY、加捻／并股纱、缝纫线、零售包装、单丝、扁带或其他聚合物。仅气流交络不意味着膨体变形或多股纱 | `chemosvit-pp-2016`; `chemosvit-pp-list-2024` |
| `basis_and_stock` | 清单 | 要求 Q > 0、唯一新增放行净 kg，且换算后只执行一次 A_e/Q；不得把期末成品库存叠加到 Q 输出、不得替换为发运 Q、不得由再验收产生新产量。核对完整 WIP／成品库存 kg 与负荷账并抵消内部交接。对缺失失败／零产出／返工或真实纳入服务负荷提出问题 |  |
| `chemistry_and_units` | 质量、公用工程及排放 | 要求整份制剂采购与组分子账分开、纱质量／线密度／皮重／调湿独立、物理及元素检查、独立支持的物种／反应水。拒绝从 dtex 推密度、积分体积再乘时长、猜测反应水或从 COD／残差导出物种。最终数据集完整前测量额外适用原子交换 |  |
| `native_and_evidence` | 身份与下游使用 | 在参考卡及规范上下文保留广泛 native 身份限制和分类／措辞债务。确切流身份不认证供应者清单、地理、排放因子或方法批准。分别保留来源原件、实际供应／测量证据与未解决匹配 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为相同牌号／状态平滑拉伸 PP 长丝的质量基准输入，用于后续纺织加工 |
| allowed_use | 匹配牌号、颜色、场址、期间、供货状态 kg 及上游链接的相同已声明原生 PP 平滑交络单束工业纱 |
| excluded_use | 整个 CPC 覆盖、POY／DTY／缝纫／零售或并股纱、其他聚合物、功能／再生牌号、未完成上游即声称摇篮到大门、仅凭生产 Q 声称实际交付 |
| required_metadata | 全部参考限定信息; 过程／边界; 原始／群组归一化; 来源／测量／供应背景链接; WIP 和成品库存负荷来源 |
| required_quality_disclosure | 不确定性、全期间覆盖、质量／元素／物种闭合、原始制剂核算、native 元数据债务、缺失数量／UUID／供应背景匹配及排除阶段 |
| update_trigger | 聚合物来源、配方、形状、拉伸／变形／捻度／股数状态、验收、包装、库存门、场址、公用工程、供应背景或来源证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| chemosvit-pp-2016 | handbook | Chemosvit Fibrochem, Polypropylene Multifilament Yarn PROLEN Technical Information, June 2016, pp. 1–2; https://prolen.sk/wp-content/uploads/2020/01/Technical-Information-about-PP-Yarn.pdf | 颗粒／色母粒熔融及平滑拉伸 H／HP 分支、不同变形／加捻分支、分等／包装；仅描述产品组合，不是批次数量或验收限值 |
| chemosvit-pp-list-2024 | handbook | Chemosvit Fibrochem, PROLEN Yarns Product List and Functionalities, 03/2024 Issue 4, pp. 1–2; https://prolen.sk/wp-content/uploads/2024/04/Prolen%C2%AE-Yarns-Product-ListFunctionalities-2024-1.pdf | 工业 HP 330 dtex／66 根实心圆截面选项、FDY／交络身份、筒管／PE 袋／箱／托盘裹膜及仓储；6000 g 仅为目录上限；须有 TDS 和批次试验；产品组合场址不是批次产地或交付证明 |
| lohia-pp-sdw | handbook | Lohia Corp, Multifilament – Spin-Draw-Wind Lines for PP Multifilament Yarn; https://www.lohiagroup.com/products/multifilament | 独立工业 PP FDY 纺丝／拉伸及长丝／交络控制；仅为集成设备能力，不是所选独立阶段路线、Chemosvit 设备、实际速度、能耗或收率证据 |
| goulston-filament-finish | handbook | Goulston Technologies, Filament Spin Finishes; https://www.goulston.com/fiber-filament.php | 长丝表面油剂及常见含水乳液施用／蒸发；仅定性，不是选定 PP 供应配方、相容性证书、活性分数或剂量 |
| ilcd-attributional-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment - Detailed guidance, first edition March 2010, section 7.9.3, printed pp.257-258 (PDF pp.277-278); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅归因分配方法：决定性物理因果关系、虚拟细分及剩余工序门市场价值；不提供 PP 配方、因子、固定比例、替代信用或通用废物截断。 |
