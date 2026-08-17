---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-carded-or-combed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 梳理或精梳棉

## 1. 范围与适用性

本 PCR 适用于将棉纤维梳理或精梳后、以备纺天然纺织纤维形式交付的门到门前景生产。仅当交付形态、工艺路线及分类仍符合 CPC 3.0 子类 26160 时，产品才可为生条、经并条的普梳条、精梳条、棉卷、棉网或其他非纱线形态。

数据集必须声明 `route=carded` 或 `route=combed`，并声明棉纤维类型和来源，至少包括已知时的陆地棉或超长绒棉/皮马棉、原生或再生/回收来源，以及相应等级或供应商规格。普梳与精梳路线、实质不同的棉纤维类型、原生与再生/回收原料必须分别建模，不得形成无条件类别平均。只有在保留分路线/纤维类型数据集和加权期间的前提下，才可另行报告产量加权汇总结果。

再生/回收棉仅在交付输出经确认仍属于梳理或精梳棉、而不是棉废料或回丝时纳入。仅当分选、切割、撕裂、开松或回丝加工在报告场址内实施时才纳入边界。参考产品不包括棉/化纤混合条、尚未梳理的原棉或轧花棉、按废物或回丝销售的棉废料、粗纱、纱线、织物、湿法前处理、染色、后整理、种植、采收和轧花。

本候选 PCR 用于生成可审计前景数据，不提供默认行业平均清单，不替代法律分类、职业合规评估或环境产品声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-carded-or-combed |
| classification_refs | CPC 3.0：26160，Cotton, carded or combed，exact generic 参考；最终分类仍取决于声明的物理状态和市场形态 |
| covered_products | 100% 棉纤维、经梳理或精梳并备纺的输出；原生陆地棉和超长绒棉/皮马棉；仅在确认分类为 CPC 26160 时的再生/回收棉 |
| excluded_products | 原棉或仅经轧花的棉；棉短绒；作为棉废料或回丝销售的材料；化学短纤维；棉/化纤混合纤维；粗纱；纱线；线；织物；成品纺织品 |
| representative_product | 一个已声明生产批次的备纺棉，按普梳或精梳路线以及棉纤维类型/来源分别报告 |
| production_route | 接收与调湿；开松、清洁和批次特定混棉；梳棉；交付状态所需时并条；仅精梳输出包含成卷/条准备、精梳和精梳后并条；可归属的吸风、除尘、调湿、内部输送、检验和包装 |
| market_state | 报告场址门口的干态备纺棉纤维，尚未纺纱；声明形态、水分或商业质量基准、包装、路线及纤维类型/来源 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过声明的普梳或精梳路线实现纤维分离、清洁、平行并备于后续纺纱的棉纤维 |
| How much | 按声明的实测质量或商业质量基准计 1 kg 交付产品 |
| How well | 符合声明的路线、棉纤维类型/来源、形态、水分或回潮约定、批次规格及适用质量属性 |
| How long or cycle | 场址门口的一个生产批次；不适用使用寿命 |
| reference_flow_link | 参考产品是声明路线在可归属损失之后、纺纱之前的最终可销售梳理或精梳棉输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Cotton, carded or combed `93976740-418a-40e3-8901-dbc34f0acdc6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 普梳或精梳路线；交付形态；棉种/类型或商业类别；已知时的陆地棉或超长绒棉/皮马棉；原生或再生/回收来源；适用时的再生含量计算基准；输入和输出等级/规格；可获得时的纤维长度及整齐度；马克隆值或声明的细度/成熟度指标；可获得时的强度；相关时的色泽和含杂/异性物指标；水分及实测/商业质量约定；生产场址、技术、批次、期间、包装及分配状态 |

构建前景数据包时，`必需限定信息` 中每项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明；仅可在给出理由时标为不适用。经核验的天工数据行为 generic exact 产品流身份：version `01.01.000`、`state_code=100`、Product flow、CPC 26160。PCR 仅存储 UUID `93976740-418a-40e3-8901-dbc34f0acdc6`；此处版本仅用于披露身份核验上下文，不构成版本锁定或定量证据。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `meas_reference_mass` | 参考产品和棉物料流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景数量归一化至 1 kg 交付的梳理或精梳棉；保留未舍入批次质量及换算过程。 |
| `meas_moisture_basis` | 棉输入、中间品、输出、落棉及纤维废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明每一质量是接收态、调湿态、绝干态或商业质量，不得混用。记录实测水分以及准确的约定回潮率/商业允差或换算方法；不得填入通用回潮率。ISO 6741-1 仅适用于其声明的同质单一通用纤维种类货批范围。 |
| `meas_route_separation` | 普梳和精梳产品路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别计量或分配至普梳和精梳路线。只有在保留分解记录时才可另报产量加权汇总视图。 |
| `meas_fibre_type_separation` | 实质不同的棉纤维类型和来源 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 当得率、能耗、废物、质量或工艺条件存在实质差异时，原生陆地棉、原生超长绒棉/皮马棉及再生/回收棉分别记录。 |
| `meas_energy` | 电力和燃料 | 能量及载体特定属性 | kWh、MJ 或发票原始单位 | 保留计量单位和换算因子；记录电网组合、供应商产品、场内发电、燃料低位/高位热值基准及共享公用工程分配。 |
| `meas_dust` | 捕集纤维/粉尘和直接颗粒物排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 可行时称量捕集物；采用有文件依据的环境排放方法量化有组织或无组织释放。没有实测风量、时间、捕集和排口数据时，不得把职业棉尘浓度换算成环境质量排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 棉原料抵达制备场址时的状态；声明包/批身份、物理形态、纤维类型/来源、等级或供应商规格、水分/质量基准及先前加工状态 |
| starting_condition_role | 门到门输入条件；上游种植、采收、轧花、废旧纺织品收集及场外原料制备以链接的上游数据集表示，不得隐含吸收到本前景过程 |
| product_classification_scope | 输出须确认为备纺的梳理或精梳棉；再生/回收路线仅在输出不以棉废料或回丝分类销售时纳入 |
| recursive_input_rule | 同类别梳理或精梳棉作为输入跨越前景边界时，将其作为显式技术圈投入并链接上游数据集，不递归重建其此前制备；披露该操作属于复并、复梳、混棉或再加工 |
| upstream_dataset_requirement | 对棉花种植/轧花或回收纺织品制备、电力、燃料、水、每种命名助剂、每种包装材料和废物处理使用地理、时间、技术及纤维类型有代表性的上游数据集；识别代理和数据缺口 |
| disclosure | 披露路线、纤维类型/来源、再生含量基准、输入状态、纳入设备、共享服务分配、水分/质量约定、产品/共产品/废物分类、除尘边界、各包装材料、地理、技术、生产期间及所有排除或外供操作 |

### 规范性系统边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground_system | 纳入从声明接收状态到开松/清洁/混棉、梳棉、路线所需并条、条件性精梳准备和精梳、吸风除尘、内部转移、质检及包装的全部可归属场内操作。 | `un-cpc-3-2025`; `eu-jrc-txt-bref-2023`; `osha-1910-262-textiles` |
| `sb_route_condition` | production_route | 两条路线均必须梳棉；仅精梳输出纳入成卷/条准备、精梳及精梳后并条，不得把精梳损失或能耗分配给普梳输出。 | `eu-jrc-txt-bref-2023`; `osha-1910-262-textiles` |
| `sb_fibre_condition` | fibre_type_origin | 实质不同的棉纤维类型及原生/再生原料应作为独立前景分层，不得无条件平均。 | `usda-ams-cotton-classing`; `eu-pef-2021-2279` |
| `sb_recycled_route` | reclaimed_recycled_cotton | 仅当场内实际实施且交付产品分类经确认时纳入分选、切割、撕裂、开松、回丝加工或额外清洁；场外制备用上游数据集报告。 | `osha-1910-1043-cotton-dust`; `osha-1910-262-textiles`; `un-cpc-3-2025` |
| `sb_upstream_exclusion` | upstream_supply | 从门到门前景过程排除种植、采收、轧花、进厂运输和场外再生原料制备；建立下游生命周期模型时必须显式链接上游产品流/数据集。 | `un-cpc-3-2025`; `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | downstream_operations | 排除粗纱、纺纱、加捻、络筒、湿法前处理、染色、印花、后整理、织物制造、分销、使用和寿命终结；更宽研究须将其作为独立下游过程。 | `eu-jrc-txt-bref-2023`; `un-cpc-3-2025` |
| `sb_dust_and_waste` | emissions_and_waste | 纳入捕集纤维、非纤维杂质、捕集粉尘、直接颗粒物释放、精梳落棉、各原子包装废物及处理路线；职业暴露测量与环境排放清单分开。 | `osha-1910-1043-cotton-dust`; `eu-jrc-txt-bref-2023` |
| `sb_atomic_flows` | all_inventory_rows | 每种物料、能源载体、命名化学品、产品、废物及基本流释放必须各占一个原子流行。电力行不得包含蒸汽、天然气、柴油、LPG、压缩空气服务、制冷剂补充或热。此 PCR 不假定类别通用化学品；场址若使用调理剂、润滑剂、清洁剂、燃料、制冷剂或其他载体，必须为每种物质/载体新增独立条件行，并分别给出数量、单位、协议、来源状态和 UUID 状态。 | `eu-pef-2021-2279` |
| `sb_no_hidden_cutoff` | inventory_completeness | 不得因缺少默认因子而省略物料或能量流；记录前景要求、代理、排除或未解决缺口并评估重要性。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_conditioning` | 原料接收与调湿 | required | 始终表示；此前加工状态和水分/质量基准随批次变化 | 建立输入身份、质量和品质 | 按声明路线和纤维类型分层验收的棉原料 kg |
| `opening_cleaning_blending` | 开松、清洁和批次特定混棉 | required | 仅当声明的接收输入已等效开松/清洁时，相关设备步骤才可为零，并须披露 | 开包或开松再生纤维、去除异物、形成声明棉配组 | 转入梳棉的清洁开松棉 kg |
| `carding_drawing` | 梳棉及路线所需并条 | required | 梳棉始终适用；交付状态或精梳准备需要时并条 | 分离并平行纤维；形成普梳输出或精梳中间品 | 普梳棉输出/中间品 kg |
| `combing_preparation` | 成卷/条准备、精梳及精梳后并条 | conditional | 仅 `route=combed` 纳入 | 去除短纤和棉结、平行长纤并形成精梳棉 | 精梳棉输出 kg |
| `site_services_packaging` | 可归属场址服务、除尘、检验和包装 | required | 包装材料按实际交付形态逐种条件纳入；调湿、场内燃料或制冷剂仅实际使用时按原子流新增 | 提供公用工程、捕集粉尘、检验并准备可售输出 | 1 kg 交付参考产品 |

### 过程：原料接收与调湿（`receiving_conditioning`）

#### 输入

##### 产品流

###### 原生陆地轧花棉原料（`virgin_upland_cotton_feedstock`）

仅用于声明的原生陆地棉分层；普梳和精梳目的路线仍分别记录。

- 流名称：原生陆地轧花棉纤维
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅原生陆地棉；同一投入质量与其他原料行互斥
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同路线、原生陆地棉分层的交付产品
- 单位：kg
- 数值、公式或规则：按声明水分/商业质量方法修正的实测验收质量
- 范围或不确定性：下列路线特定暂定 `reasoned_estimate`；取得经审查批次质量平衡后替换
- 数据源 id：`cp_lot_mass_quality`
- 来源 id 或状态：`iso-6741-1-1989`; `usda-ams-cotton-classing`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：原生陆地轧花棉纤维；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明水分/商业质量方法修正的实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同路线和原生陆地棉分层的交付梳理或精梳棉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`iso-6741-1-1989`; `usda-ams-cotton-classing`
- 数量范围：原生陆地棉普梳路线暂定投入筛选估计；取得经审查批次质量平衡或更强路线证据后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1.00
  - 上限：1.30
  - 单位：kg
  - 基准：每 1 kg 交付普梳棉，仅原生陆地棉分层
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 数量范围：原生陆地棉精梳路线暂定投入筛选估计；取得经审查批次质量平衡或更强路线证据后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1.05
  - 上限：1.70
  - 单位：kg
  - 基准：每 1 kg 交付精梳棉，仅原生陆地棉分层
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 原生超长绒轧花棉原料（包括皮马棉）（`virgin_els_pima_cotton_feedstock`）

仅用于声明的原生超长绒棉/皮马棉分层，不借用陆地棉筛选范围。

- 流名称：原生超长绒轧花棉纤维（包括皮马棉）
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅原生超长绒棉/皮马棉；同一投入质量与其他原料行互斥
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同路线和原生超长绒棉/皮马棉分层的交付产品
- 单位：kg
- 数值、公式或规则：按声明水分/商业质量方法修正的实测验收质量
- 范围或不确定性：不主张类别通用数值范围；必须使用前景批次质量平衡
- 数据源 id：`cp_lot_mass_quality`
- 来源 id 或状态：`iso-6741-1-1989`; `usda-ams-cotton-classing`; UUID unresolved；要求前景记录
- 选定流：原生超长绒轧花棉纤维（包括皮马棉）；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明水分/商业质量方法修正的实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同路线和超长绒棉/皮马棉分层的交付梳理或精梳棉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`iso-6741-1-1989`; `usda-ams-cotton-classing`

###### 再生棉纤维原料（`reclaimed_cotton_feedstock`）

仅当回收输入为单一声明棉纤维流，且分类审查确认交付输出仍为 CPC 26160 而不是棉废料或回丝时使用。

- 流名称：再生棉纤维原料
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅再生/回收棉路线；同一投入质量与原生原料行互斥
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同再生棉路线和纤维类型分层的交付产品
- 单位：kg
- 数值、公式或规则：按声明水分/商业质量方法修正的实测验收质量
- 范围或不确定性：下列暂定再生棉筛选范围；分类审查和路线批次记录后替换
- 数据源 id：`cp_lot_mass_quality`
- 来源 id 或状态：`cp_lot_mass_quality`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：再生棉纤维原料；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明水分/商业质量方法修正的实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同再生棉路线和纤维类型分层的交付梳理或精梳棉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`osha-1910-1043-cotton-dust`
- 数量范围：再生/回收棉路线暂定筛选估计；分类审查和经审查路线批次质量平衡后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1.05
  - 上限：2.50
  - 单位：kg
  - 基准：每 1 kg 交付梳理或精梳棉，仅再生/回收分层
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 转入开清棉的调湿原料（`conditioned_feedstock`）

将称量、已识别的批次转入相同路线/纤维类型生产记录，不改变其分层。

- 流名称：单一声明纤维类型分层的调湿棉原料
- 方向：输出（`outputs`）
- 流类型：产品（`product`）
- 适用条件：一个独立识别的路线/纤维类型批次；不得汇总实质不同分层
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每接收批次及每 1 kg 交付参考产品
- 单位：kg
- 数值、公式或规则：验收原料质量减去分别计量的接收废物和取样损失
- 范围或不确定性：由同批次记录计算；不主张类别通用数值范围
- 数据源 id：`cp_lot_mass_quality`
- 来源 id 或状态：`iso-6741-1-1989`; `cp_lot_mass_quality`; UUID unresolved
- 选定流：调湿棉原料；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：验收原料质量减去分别记录的接收废物和取样损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每接收批次及每 1 kg 交付参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_lot_mass_quality`
- 来源：`iso-6741-1-1989`

### 过程：开松、清洁和批次特定混棉（`opening_cleaning_blending`）

#### 输入

##### 产品流

###### 供开松和清洁的调湿棉（`opening_cotton_input`）

转移质量须携带路线目的地和纤维类型/来源分层。

- 流名称：单一声明纤维类型分层的调湿棉原料
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：一个独立识别的路线/纤维类型批次；不得汇总实质不同分层
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同分层的开松棉输出
- 单位：kg
- 数值、公式或规则：生产批次转入开松/清洁的实测质量
- 范围或不确定性：要求前景批次记录；不主张类别通用数值范围
- 数据源 id：`cp_opening_route_records`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_opening_route_records`; UUID unresolved
- 选定流：调湿棉原料；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次转入开松/清洁的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同分层开松棉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_opening_route_records`
- 来源：`eu-jrc-txt-bref-2023`

###### 开松、清洁、输送和混棉用电，低于 1 kV（`opening_electricity_lt1kv`）

记录同一运行期间的分表电量或有文件依据的设备级分配。

- 流名称：交流电，低于 1 kV，消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅开松、清洁、输送和混棉所用电力；声明供电点电压低于 1 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 单一声明路线/纤维类型分层的开松棉输出
- 单位：kWh
- 数值、公式或规则：计量电力或设备级因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性分表或设备记录后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，低于 1 kV，消费组合 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：可归属于开松、清洁、输送和混棉的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 开松棉输出，按目的路线和纤维类型分别记录
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：开清棉电力暂定筛选估计；取得代表性分表或设备记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：2.00
  - 单位：kWh
  - 基准：每 1 kg 单一纤维类型分层的开松棉输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 开松、清洁、输送和混棉用电，1–35 kV（`opening_electricity_1_35kv`）

记录同一运行期间的分表电量或有文件依据的设备级分配。

- 流名称：交流电，1–35 kV，消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅开松、清洁、输送和混棉所用电力；声明供电点电压为 1–35 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 单一声明路线/纤维类型分层的开松棉输出
- 单位：kWh
- 数值、公式或规则：计量电力或设备级因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性分表或设备记录后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，1–35 kV，消费组合 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：可归属于开松、清洁、输送和混棉的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 开松棉输出，按目的路线和纤维类型分别记录
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：开清棉电力暂定筛选估计；取得代表性分表或设备记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：2.00
  - 单位：kWh
  - 基准：每 1 kg 单一纤维类型分层的开松棉输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 开松、清洁、输送和混棉用电，35–330 kV（`opening_electricity_35_330kv`）

记录同一运行期间的分表电量或有文件依据的设备级分配。

- 流名称：交流电，35–330 kV，送达用户的消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅开松、清洁、输送和混棉所用电力；声明供电点电压为 35–330 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 单一声明路线/纤维类型分层的开松棉输出
- 单位：kWh
- 数值、公式或规则：计量电力或设备级因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性分表或设备记录后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，35–330 kV，送达用户的消费组合 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：可归属于开松、清洁、输送和混棉的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 开松棉输出，按目的路线和纤维类型分别记录
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：开清棉电力暂定筛选估计；取得代表性分表或设备记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：2.00
  - 单位：kWh
  - 基准：每 1 kg 单一纤维类型分层的开松棉输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 转入梳棉的开松清洁棉（`opened_cleaned_cotton`）

转移记录须识别配棉包组、纤维类型/来源、开清线和目的路线。

- 流名称：单一声明纤维类型分层的开松清洁棉
- 方向：输出（`outputs`）
- 流类型：产品（`product`）
- 适用条件：一个独立识别的路线/纤维类型批次；不得汇总实质不同分层
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每开松/清洁批次
- 单位：kg
- 数值、公式或规则：转入梳棉的实测合格输出
- 范围或不确定性：要求前景批次记录；不主张类别通用数值范围
- 数据源 id：`cp_opening_route_records`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_opening_route_records`; UUID unresolved
- 选定流：开松和清洁棉；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入梳棉的实测合格输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每开松/清洁批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_opening_route_records`
- 来源：`eu-jrc-txt-bref-2023`

##### 废物流

###### 开松清洁产生的棉株碎屑废物（`opening_nonfibrous_trash`）

称量开松清洁过程中去除的棉株碎屑，不与矿物杂质、外来制成品、不可用棉纤维、捕集粉尘、包装废物或直接大气排放合并。实际去除的每一种其他材料必须新增独立原子废物流行。

- 流名称：开松清洁棉株碎屑废物
- 方向：输出（`outputs`）
- 流类型：废物（`waste`）
- 适用条件：去除非纤维杂质时
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同分层开松棉输出
- 单位：kg
- 数值、公式或规则：按处理去向计量的棉株碎屑废物质量
- 范围或不确定性：下列暂定 QA 筛选；经审查分层质量平衡后替换
- 数据源 id：`cp_waste_and_dust_records`
- 来源 id 或状态：`cp_waste_and_dust_records`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：开松清洁棉株碎屑废物；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向计量的棉株碎屑废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同分层开松棉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_dust_records`
- 来源：`eu-jrc-txt-bref-2023`; `osha-1910-1043-cotton-dust`
- 数量范围：非纤维开清杂质暂定 QA 筛选；经审查分层质量平衡后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.00
  - 单位：kg
  - 基准：每 1 kg 开松棉输出；不是典型值或允许值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 开松清洁去除的不可用棉纤维（`opening_unusable_cotton_fibre`）

仅报告作为废物离开前景系统的棉纤维；内部回用及作为产品转出的回收材料不得列入本行。

- 流名称：开松清洁不可用棉纤维
- 方向：输出（`outputs`）
- 流类型：废物（`waste`）
- 适用条件：棉纤维在开松/清洁环节作为废物丢弃时
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同分层开松棉输出
- 单位：kg
- 数值、公式或规则：按废物去向计量的不可用棉纤维质量，扣除有文件依据的内部回用
- 范围或不确定性：下列暂定 QA 筛选；经审查路线/纤维类型质量平衡后替换
- 数据源 id：`cp_waste_and_dust_records`
- 来源 id 或状态：`cp_waste_and_dust_records`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：开松清洁不可用棉纤维；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按废物去向计量的不可用纤维质量，扣除内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同分层开松棉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_dust_records`
- 来源：`eu-jrc-txt-bref-2023`; `osha-1910-1043-cotton-dust`
 - 数量范围：不可用棉纤维暂定 QA 筛选；经审查路线/纤维类型质量平衡后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.00
  - 单位：kg
  - 基准：每 1 kg 开松棉输出；不是典型值或允许值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
### 过程：梳棉及路线所需并条（`carding_drawing`）

#### 输入

##### 产品流

###### 供梳棉的开松棉（`carding_cotton_input`）

记录进入每条梳棉线的实际质量，并保留目的路线及纤维类型/来源分层。

- 流名称：单一声明纤维类型分层的开松清洁棉
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：一个独立识别的路线/纤维类型批次；不得汇总实质不同分层
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同分层普梳棉输出/中间品
- 单位：kg
- 数值、公式或规则：进入梳棉的实测棉质量
- 范围或不确定性：要求前景批次记录；不主张类别通用数值范围
- 数据源 id：`cp_carding_drawing_records`
- 来源 id 或状态：`osha-1910-262-textiles`; `eu-jrc-txt-bref-2023`; `cp_carding_drawing_records`; UUID unresolved
- 选定流：开松和清洁棉；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入梳棉的实测棉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同分层普梳棉输出/中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carding_drawing_records`
- 来源：`osha-1910-262-textiles`; `eu-jrc-txt-bref-2023`

###### 梳棉、并条、吸风和输送用电，低于 1 kV（`carding_electricity_lt1kv`）

纳入设备驱动、路线所需并条、可归属吸风和物料输送，且不得与场址服务重复。

- 流名称：交流电，低于 1 kV，消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅梳棉、路线所需并条、吸风和输送所用电力；声明供电点电压低于 1 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 单一声明路线/纤维类型分层的普梳棉输出/中间品
- 单位：kWh
- 数值、公式或规则：计量电力或设备级因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性分表或设备记录后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，低于 1 kV，消费组合 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：梳棉和路线所需并条的计量或设备分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 普梳棉输出/中间品，按目的路线和纤维类型分开
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：梳棉/并条电力暂定筛选估计；取得代表性分表或设备记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：2.00
  - 单位：kWh
  - 基准：每 1 kg 单一声明分层的普梳棉输出/中间品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 梳棉、并条、吸风和输送用电，1–35 kV（`carding_electricity_1_35kv`）

纳入设备驱动、路线所需并条、可归属吸风和物料输送，且不得与场址服务重复。

- 流名称：交流电，1–35 kV，消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅梳棉、路线所需并条、吸风和输送所用电力；声明供电点电压为 1–35 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 单一声明路线/纤维类型分层的普梳棉输出/中间品
- 单位：kWh
- 数值、公式或规则：计量电力或设备级因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性分表或设备记录后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，1–35 kV，消费组合 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：梳棉和路线所需并条的计量或设备分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 普梳棉输出/中间品，按目的路线和纤维类型分开
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：梳棉/并条电力暂定筛选估计；取得代表性分表或设备记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：2.00
  - 单位：kWh
  - 基准：每 1 kg 单一声明分层的普梳棉输出/中间品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 梳棉、并条、吸风和输送用电，35–330 kV（`carding_electricity_35_330kv`）

纳入设备驱动、路线所需并条、可归属吸风和物料输送，且不得与场址服务重复。

- 流名称：交流电，35–330 kV，送达用户的消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅梳棉、路线所需并条、吸风和输送所用电力；声明供电点电压为 35–330 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 单一声明路线/纤维类型分层的普梳棉输出/中间品
- 单位：kWh
- 数值、公式或规则：计量电力或设备级因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性分表或设备记录后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，35–330 kV，送达用户的消费组合 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：梳棉和路线所需并条的计量或设备分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 普梳棉输出/中间品，按目的路线和纤维类型分开
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：梳棉/并条电力暂定筛选估计；取得代表性分表或设备记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：2.00
  - 单位：kWh
  - 基准：每 1 kg 单一声明分层的普梳棉输出/中间品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 普梳棉输出或精梳中间品（`carded_cotton_output`）

对 `route=carded`，若无后续交付状态过程，本行为可售参考产品；对 `route=combed`，本行为中间品，不计为额外最终产品。

- 流名称：Cotton, carded or combed
- 方向：输出（`outputs`）
- 流类型：产品（`product`）
- 适用条件：仅 `route=carded` 时为最终参考产品；`route=combed` 时仅为内部中间品
- UUID 状态：confirmed generic product flow
- 数量基准：每梳棉批次及每 1 kg 声明路线最终产品
- 单位：kg
- 数值、公式或规则：实测合格普梳输出；仅作为交付产品时固定为 1 kg
- 范围或不确定性：要求前景计量；不主张类别通用数值范围
- 数据源 id：`cp_carding_drawing_records`
- 来源 id 或状态：`un-cpc-3-2025`; `osha-1910-262-textiles`; confirmed UUID `93976740-418a-40e3-8901-dbc34f0acdc6`
- 选定流：Cotton, carded or combed `93976740-418a-40e3-8901-dbc34f0acdc6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格普梳输出；仅作为交付产品时最终参考量固定为 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每梳棉批次及每 1 kg 声明路线最终产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carding_drawing_records`
- 来源：`osha-1910-262-textiles`; `un-cpc-3-2025`

##### 废物流

###### 梳棉产生的不可用短棉纤维（`card_short_fibre_waste`）

仅报告作为废物离开前景系统的棉纤维；内部回用或作为产品销售的回收纤维不列入本行。

- 流名称：梳棉不可用短棉纤维
- 方向：输出（`outputs`）
- 流类型：废物（`waste`）
- 适用条件：短棉纤维从梳棉/并条作为废物丢弃时
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同分层普梳棉输出/中间品
- 单位：kg
- 数值、公式或规则：按去向计量的短纤维废物质量，扣除有文件依据的内部回用
- 范围或不确定性：下列暂定 QA 筛选；经审查路线/纤维类型质量平衡后替换
- 数据源 id：`cp_waste_and_dust_records`
- 来源 id 或状态：`cp_waste_and_dust_records`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：梳棉不可用短棉纤维；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向计量的短纤维废物质量，扣除内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同分层普梳棉输出/中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_dust_records`
- 来源：`osha-1910-1043-cotton-dust`
- 数量范围：梳棉短纤维废物暂定 QA 筛选；经审查路线/纤维类型质量平衡后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.00
  - 单位：kg
  - 基准：每 1 kg 普梳棉输出/中间品；不是典型值或允许值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 梳棉和并条捕集棉尘（`carding_captured_cotton_dust`）

将梳棉/并条抽风系统捕集粉尘与短纤维废物、直接排入空气的颗粒物分别称量。

- 流名称：梳棉和并条捕集棉尘
- 方向：输出（`outputs`）
- 流类型：废物（`waste`）
- 适用条件：梳棉/并条抽风或清扫系统捕集粉尘时
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同分层普梳棉输出/中间品
- 单位：kg
- 数值、公式或规则：按收集器和废物去向计量的捕集棉尘质量
- 范围或不确定性：下列暂定 QA 筛选；取得收集器特定称量记录后替换
- 数据源 id：`cp_waste_and_dust_records`
- 来源 id 或状态：`osha-1910-1043-cotton-dust`; `cp_waste_and_dust_records`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：梳棉和并条捕集棉尘；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按收集器和去向计量的捕集棉尘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 同分层普梳棉输出/中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_dust_records`
- 来源：`osha-1910-1043-cotton-dust`
- 数量范围：捕集棉尘暂定 QA 筛选；取得收集器特定称量记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.00
  - 单位：kg
  - 基准：每 1 kg 普梳棉输出/中间品；不是典型值或允许值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：成卷/条准备、精梳及精梳后并条（`combing_preparation`）

#### 输入

##### 产品流

###### 供精梳准备的普梳棉中间品（`combing_cotton_input`）

本行仅适用于 `route=combed`，保留来源梳棉批次和纤维类型/来源分层。

- 流名称：单一声明纤维类型分层的普梳棉中间品
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅 `route=combed`；一个独立识别纤维类型批次
- UUID 状态：unresolved；requires foreground mapping as an intermediate
- 数量基准：每 1 kg 同分层精梳棉输出
- 单位：kg
- 数值、公式或规则：转入成卷/条准备和精梳的实测普梳棉质量
- 范围或不确定性：要求前景批次记录；不主张类别通用数值范围
- 数据源 id：`cp_combing_records`
- 来源 id 或状态：`osha-1910-262-textiles`; `eu-jrc-txt-bref-2023`; `cp_combing_records`; UUID unresolved
- 选定流：普梳棉中间品；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入成卷/条准备和精梳的实测普梳棉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同分层精梳棉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_combing_records`
- 来源：`osha-1910-262-textiles`; `eu-jrc-txt-bref-2023`

###### 精梳准备、精梳、并条和吸风用电，低于 1 kV（`combing_electricity_lt1kv`）

仅精梳路线记录，并与梳棉用电分开。

- 流名称：交流电，低于 1 kV，消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅 `route=combed`；精梳准备、精梳、精梳后并条、吸风和输送用电；声明供电点电压低于 1 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 单一声明纤维类型分层的精梳棉输出
- 单位：kWh
- 数值、公式或规则：计量电力或设备级因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性精梳线记录后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，低于 1 kV，消费组合 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：精梳准备、精梳、精梳后并条、吸风和输送的计量或设备分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 声明纤维类型分层的精梳棉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：精梳路线电力暂定筛选估计；取得代表性精梳线记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：3.00
  - 单位：kWh
  - 基准：每 1 kg 单一声明纤维类型分层的精梳棉输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 精梳准备、精梳、并条和吸风用电，1–35 kV（`combing_electricity_1_35kv`）

仅精梳路线记录，并与梳棉用电分开。

- 流名称：交流电，1–35 kV，消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅 `route=combed`；精梳准备、精梳、精梳后并条、吸风和输送用电；声明供电点电压为 1–35 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 单一声明纤维类型分层的精梳棉输出
- 单位：kWh
- 数值、公式或规则：计量电力或设备级因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性精梳线记录后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，1–35 kV，消费组合 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：精梳准备、精梳、精梳后并条、吸风和输送的计量或设备分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 声明纤维类型分层的精梳棉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：精梳路线电力暂定筛选估计；取得代表性精梳线记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：3.00
  - 单位：kWh
  - 基准：每 1 kg 单一声明纤维类型分层的精梳棉输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 精梳准备、精梳、并条和吸风用电，35–330 kV（`combing_electricity_35_330kv`）

仅精梳路线记录，并与梳棉用电分开。

- 流名称：交流电，35–330 kV，送达用户的消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅 `route=combed`；精梳准备、精梳、精梳后并条、吸风和输送用电；声明供电点电压为 35–330 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 单一声明纤维类型分层的精梳棉输出
- 单位：kWh
- 数值、公式或规则：计量电力或设备级因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性精梳线记录后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，35–330 kV，送达用户的消费组合 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：精梳准备、精梳、精梳后并条、吸风和输送的计量或设备分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 声明纤维类型分层的精梳棉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：精梳路线电力暂定筛选估计；取得代表性精梳线记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：3.00
  - 单位：kWh
  - 基准：每 1 kg 单一声明纤维类型分层的精梳棉输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 精梳棉参考产品（`combed_cotton_output`）

输出在最后纳入的并条/调湿之后、纺纱之前计量。

- 流名称：Cotton, carded or combed
- 方向：输出（`outputs`）
- 流类型：产品（`product`）
- 适用条件：仅 `route=combed` 的最终参考产品
- UUID 状态：confirmed generic product flow
- 数量基准：每精梳生产批次及固定 1 kg 参考量
- 单位：kg
- 数值、公式或规则：实测可售精梳棉输出并归一化至 1 kg
- 范围或不确定性：要求前景计量；不主张类别通用数值范围
- 数据源 id：`cp_combing_records`
- 来源 id 或状态：`un-cpc-3-2025`; `osha-1910-262-textiles`; confirmed UUID `93976740-418a-40e3-8901-dbc34f0acdc6`
- 选定流：Cotton, carded or combed `93976740-418a-40e3-8901-dbc34f0acdc6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可售精梳棉输出并归一化至固定 1 kg 参考量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每精梳生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_combing_records`
- 来源：`un-cpc-3-2025`; `osha-1910-262-textiles`

###### 具有功能价值的回收精梳落棉（`comber_noils_product`）

仅在精梳落棉被有意回收并作为具有文件化功能和去向的产品转出时使用；否则使用互斥废物流。

- 流名称：回收棉精梳落棉
- 方向：输出（`outputs`）
- 流类型：产品（`product`）
- 适用条件：`route=combed` 且落棉具有产品状态；与 `comber_noils_waste` 互斥
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同批次、同纤维类型分层的精梳棉输出
- 单位：kg
- 数值、公式或规则：作为产品转出的实测回收落棉质量
- 范围或不确定性：下列暂定 QA 筛选；经审查精梳批次质量平衡后替换
- 数据源 id：`cp_combing_records`
- 来源 id 或状态：`osha-1910-262-textiles`; `eu-pef-2021-2279`; `cp_combing_records`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：回收棉精梳落棉；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：作为产品转出的实测回收落棉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同批次、同纤维类型分层的精梳棉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_combing_records`
- 来源：`osha-1910-262-textiles`; `eu-pef-2021-2279`
- 数量范围：落棉产品暂定 QA 筛选；经审查精梳批次质量平衡后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.00
  - 单位：kg
  - 基准：每 1 kg 精梳棉输出；不是典型值或允许值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 作为废物处置的精梳落棉（`comber_noils_waste`）

仅当材料在报告交易中无产品状态并进入废物管理路线时使用，不得与产品流重复。

- 流名称：作为废物处置的棉精梳落棉
- 方向：输出（`outputs`）
- 流类型：废物（`waste`）
- 适用条件：`route=combed` 且落棉具有废物状态；与 `comber_noils_product` 互斥
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 同批次、同纤维类型分层的精梳棉输出
- 单位：kg
- 数值、公式或规则：按废物去向计量的落棉质量
- 范围或不确定性：下列暂定 QA 筛选；经审查精梳批次质量平衡后替换
- 数据源 id：`cp_combing_records`
- 来源 id 或状态：`osha-1910-262-textiles`; `cp_combing_records`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：棉精梳落棉废物；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按废物去向计量的落棉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同批次、同纤维类型分层的精梳棉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_combing_records`
- 来源：`osha-1910-262-textiles`
- 数量范围：落棉废物暂定 QA 筛选；经审查精梳批次质量平衡后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.00
  - 单位：kg
  - 基准：每 1 kg 精梳棉输出；与作为产品报告的回收落棉互斥
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：可归属场址服务、除尘、检验和包装（`site_services_packaging`）

#### 输入

##### 产品流

###### 未在生产设备中分配的共享电力，低于 1 kV（`shared_electricity_lt1kv`）

仅记录未计入设备行的可归属照明、HVAC/调湿、压缩空气设备、除尘、检验和包装用电。

- 流名称：交流电，低于 1 kV，消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅所列共享服务的剩余电力；本行不包含蒸汽、燃料、压缩空气伪流或制冷剂；声明供电点电压低于 1 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 交付产品，按路线和纤维类型分层
- 单位：kWh
- 数值、公式或规则：分表电量，或按运行时间、风量、设备功率进行因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性分表及分配证据后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，低于 1 kV，消费组合 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：分表共享电力，或按运行时间、风量、功率等因果驱动分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付产品，按路线和纤维类型分层
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`; `eu-pef-2021-2279`
- 数量范围：共享电力暂定筛选估计；取得代表性分表和因果分配证据后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2.00
  - 单位：kWh
  - 基准：每 1 kg 单一声明路线/纤维类型分层的交付产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未在生产设备中分配的共享电力，1–35 kV（`shared_electricity_1_35kv`）

仅记录未计入设备行的可归属照明、HVAC/调湿、压缩空气设备、除尘、检验和包装用电。

- 流名称：交流电，1–35 kV，消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅所列共享服务的剩余电力；本行不包含蒸汽、燃料、压缩空气伪流或制冷剂；声明供电点电压为 1–35 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 交付产品，按路线和纤维类型分层
- 单位：kWh
- 数值、公式或规则：分表电量，或按运行时间、风量、设备功率进行因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性分表及分配证据后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，1–35 kV，消费组合 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：分表共享电力，或按运行时间、风量、功率等因果驱动分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付产品，按路线和纤维类型分层
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`; `eu-pef-2021-2279`
- 数量范围：共享电力暂定筛选估计；取得代表性分表和因果分配证据后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2.00
  - 单位：kWh
  - 基准：每 1 kg 单一声明路线/纤维类型分层的交付产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未在生产设备中分配的共享电力，35–330 kV（`shared_electricity_35_330kv`）

仅记录未计入设备行的可归属照明、HVAC/调湿、压缩空气设备、除尘、检验和包装用电。

- 流名称：交流电，35–330 kV，送达用户的消费组合
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅所列共享服务的剩余电力；本行不包含蒸汽、燃料、压缩空气伪流或制冷剂；声明供电点电压为 35–330 kV 且供应地为 CN；与本过程其他电压行互斥
- UUID 状态：经天工直接读取确认；版本 `01.01.003`；`state_code=100`；Product flow
- 数量基准：每 1 kg 交付产品，按路线和纤维类型分层
- 单位：kWh
- 数值、公式或规则：分表电量，或按运行时间、风量、设备功率进行因果分配
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性分表及分配证据后替换
- 数据源 id：`cp_energy_and_services`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_energy_and_services`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed
- 选定流：交流电，35–330 kV，送达用户的消费组合 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：分表共享电力，或按运行时间、风量、功率等因果驱动分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付产品，按路线和纤维类型分层
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_services`
- 来源：`eu-jrc-txt-bref-2023`; `eu-pef-2021-2279`
- 数量范围：共享电力暂定筛选估计；取得代表性分表和因果分配证据后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2.00
  - 单位：kWh
  - 基准：每 1 kg 单一声明路线/纤维类型分层的交付产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调湿和纤维调理用水（`conditioning_water`）

仅纳入声明过程中实际消耗或排放的水，不得为通常干法制备路线推定湿法加工。

- 流名称：工艺用水（Process Water）
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：仅实际计量调湿或纤维调理用水；排除湿法前处理
- UUID 状态：经天工直接读取确认；版本 `01.01.001`；`state_code=100`；Product flow
- 数量基准：每 1 kg 所服务路线/纤维类型分层的交付产品
- 单位：kg
- 数值、公式或规则：计量补充水减去适用时的实测回水
- 范围或不确定性：下列暂定 `reasoned_estimate`；取得代表性水表记录后替换
- 数据源 id：`cp_water_auxiliary_packaging`
- 来源 id 或状态：`eu-jrc-txt-bref-2023`; `cp_water_auxiliary_packaging`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed；范围为 `reasoned_estimate`
- 选定流：工艺用水（Process Water）`94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量补充水减去适用时的实测回水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 所服务路线/纤维类型分层的交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_auxiliary_packaging`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：干法路线调湿水暂定筛选估计；取得代表性水表记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.00
  - 单位：kg
  - 基准：每 1 kg 交付产品；不含湿法前处理
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付产品用聚乙烯膜包装（`polyethylene_film_packaging`）

仅在聚乙烯膜/袋随产品出厂时记录，不与纸、木或钢包装合并。

- 流名称：聚乙烯膜（Polyethylene film）
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：交付产品使用 PE 膜或袋时
- UUID 状态：经天工直接读取确认；版本 `01.01.001`；`state_code=100`；Product flow
- 数量基准：每 1 kg 交付产品
- 单位：kg
- 数值、公式或规则：分配至发运批次的实测或采购盘点 PE 膜/袋质量
- 范围或不确定性：下列暂定包装筛选；取得物料清单或发运记录后替换
- 数据源 id：`cp_water_auxiliary_packaging`
- 来源 id 或状态：`cp_water_auxiliary_packaging`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed；范围为 `reasoned_estimate`
- 选定流：聚乙烯膜（Polyethylene film）`e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至发运批次的实测或采购盘点 PE 膜/袋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_auxiliary_packaging`
- 来源：`eu-pef-2021-2279`
- 数量范围：PE 膜包装质量暂定筛选估计；取得物料清单或发运记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.20
  - 单位：kg
  - 基准：每 1 kg 交付产品；0 仅适用于无包装散装交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付产品用瓦楞纸板包装（`corrugated_paperboard_packaging`）

仅实际使用时记录瓦楞纸板，不与聚乙烯、木或钢包装合并。

- 流名称：瓦楞纸板（Corrugated cardboard）
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：交付产品使用瓦楞纸板，且匹配已核验平台流身份：C、E 或 F 型；纤维含量至少 80%；多层；含再生材料；可回收。否则须为实际纸板新增或映射独立原子行。
- UUID 状态：经天工直接读取确认；版本 `01.01.001`；`state_code=100`；Product flow
- 数量基准：每 1 kg 交付产品
- 单位：kg
- 数值、公式或规则：分配至发运批次的实测或采购盘点瓦楞纸板质量
- 范围或不确定性：不主张类别通用数值范围；必须使用物料清单或发运记录
- 数据源 id：`cp_water_auxiliary_packaging`
- 来源 id 或状态：`cp_water_auxiliary_packaging`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed；要求前景记录
- 选定流：瓦楞纸板（Corrugated cardboard）`8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至发运批次的实测或采购盘点瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_auxiliary_packaging`
- 来源：`eu-pef-2021-2279`

###### 交付产品用木托盘（`wooden_pallet_packaging`）

仅木托盘随产品出厂时记录托盘质量及复用次数。

- 流名称：木托盘（Wooden pallets）
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：交付产品使用木托盘时
- UUID 状态：经天工直接读取确认；版本 `01.01.001`；`state_code=100`；Product flow
- 数量基准：每 1 kg 交付产品及声明托盘复用周期
- 单位：kg
- 数值、公式或规则：托盘质量除以有文件依据的装载产品质量和适用复用次数
- 范围或不确定性：不主张类别通用数值范围；必须使用发运和复用记录
- 数据源 id：`cp_water_auxiliary_packaging`
- 来源 id 或状态：`cp_water_auxiliary_packaging`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed；要求前景计算
- 选定流：木托盘（Wooden pallets）`e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按装载产品质量和有文件依据复用次数分配托盘质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_auxiliary_packaging`
- 来源：`eu-pef-2021-2279`

###### 交付产品用钢制打包带（`steel_bale_strap_packaging`）

仅钢制打包带/扎带随交付产品出厂时记录。

- 流名称：钢制打包带（Steel baling band）
- 方向：输入（`inputs`）
- 流类型：产品（`product`）
- 适用条件：交付产品使用钢制打包带或扎带，且匹配已核验平台组成 99% Fe、1% C。否则须为实际钢带新增或映射独立原子行。
- UUID 状态：经天工直接读取确认；版本 `01.01.001`；`state_code=100`；Product flow
- 数量基准：每 1 kg 交付产品
- 单位：kg
- 数值、公式或规则：分配至发运批次的实测或采购盘点钢带/扎带质量
- 范围或不确定性：不主张类别通用数值范围；必须使用物料清单或发运记录
- 数据源 id：`cp_water_auxiliary_packaging`
- 来源 id 或状态：`cp_water_auxiliary_packaging`；flow-hybrid-search 候选经天工 CLI `flow get` 核验；UUID confirmed；要求前景记录
- 选定流：钢制打包带（Steel baling band）`56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至发运批次的实测或采购盘点钢带/扎带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_auxiliary_packaging`
- 来源：`eu-pef-2021-2279`

#### 输出

##### 基本流

###### 直接排入空气的棉颗粒物（`cotton_particulate_to_air`）

按有组织和无组织排放点报告实测或质量平衡得到的环境释放，不得用职业暴露浓度替代排放质量。

- 流名称：排入空气的棉颗粒物
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 适用条件：纳入的棉处理过程产生直接有组织或无组织环境释放时
- UUID 状态：unresolved；requires foreground elementary-flow mapping
- 数量基准：每 1 kg 所监测路线/纤维类型分层的交付产品
- 单位：kg
- 数值、公式或规则：实测排放，或浓度 × 风量 × 时间并进行方法一致的条件修正
- 范围或不确定性：下列暂定 QA 筛选；取得环境排放测量和捕集数据后替换
- 数据源 id：`cp_environmental_dust_release`
- 来源 id 或状态：`osha-1910-1043-cotton-dust`; `eu-jrc-txt-bref-2023`; `cp_environmental_dust_release`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：棉处理颗粒物排入空气；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：环境排放测量，或由入口负荷、捕集效率、风量和运行时间计算释放粉尘
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 所监测路线/纤维类型分层的交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_environmental_dust_release`
- 来源：`osha-1910-1043-cotton-dust`; `eu-jrc-txt-bref-2023`
- 数量范围：颗粒物排放暂定 QA 筛选；取得环境排放测量和捕集数据后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg
  - 基准：每 1 kg 交付产品；不是职业限值或允许排放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废聚乙烯膜（`waste_polyethylene_film`）

按实际回收或处理路线分别报告废 PE 膜/袋。

- 流名称：废聚乙烯膜
- 方向：输出（`outputs`）
- 流类型：废物（`waste`）
- 适用条件：PE 包装在前景边界内成为废物时
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 交付产品
- 单位：kg
- 数值、公式或规则：扣除有文件依据场内复用后的实测废 PE 膜/袋质量
- 范围或不确定性：下列暂定筛选；取得废物联单和包装平衡后替换
- 数据源 id：`cp_water_auxiliary_packaging`
- 来源 id 或状态：`cp_water_auxiliary_packaging`; UUID unresolved；范围为 `reasoned_estimate`
- 选定流：废聚乙烯膜；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除有文件依据场内复用后的实测废 PE 膜/袋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_auxiliary_packaging`
- 来源：`eu-pef-2021-2279`
- 数量范围：废 PE 膜暂定 QA 筛选；取得代表性废物联单和包装平衡后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg
  - 基准：每 1 kg 交付产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废瓦楞纸板（`waste_corrugated_paperboard`）

按实际回收或处理路线单独报告废瓦楞纸板。

- 流名称：废瓦楞纸板
- 方向：输出（`outputs`）
- 流类型：废物（`waste`）
- 适用条件：瓦楞纸板在前景边界内成为废物时
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 交付产品
- 单位：kg
- 数值、公式或规则：扣除有文件依据场内复用后的实测废瓦楞纸板质量
- 范围或不确定性：不主张类别通用数值范围；要求废物联单或质量平衡
- 数据源 id：`cp_water_auxiliary_packaging`
- 来源 id 或状态：`cp_water_auxiliary_packaging`; UUID unresolved；要求前景记录
- 选定流：废瓦楞纸板；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除有文件依据场内复用后的实测废瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_auxiliary_packaging`
- 来源：`eu-pef-2021-2279`

###### 废弃木托盘（`discarded_wooden_pallet`）

将在边界内废弃的木托盘与仍在循环使用的可复用托盘分开报告。

- 流名称：废弃木托盘
- 方向：输出（`outputs`）
- 流类型：废物（`waste`）
- 适用条件：木托盘在前景边界内废弃时
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 交付产品
- 单位：kg
- 数值、公式或规则：分配至所服务产品批次的实测废弃托盘质量
- 范围或不确定性：不主张类别通用数值范围；要求废物及托盘循环记录
- 数据源 id：`cp_water_auxiliary_packaging`
- 来源 id 或状态：`cp_water_auxiliary_packaging`; UUID unresolved；要求前景记录
- 选定流：废弃木托盘；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至所服务产品批次的实测废弃托盘质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_auxiliary_packaging`
- 来源：`eu-pef-2021-2279`

###### 废钢制打包带（`waste_steel_bale_strap`）

按实际回收或处理路线单独报告废钢制打包带/扎带。

- 流名称：废钢制打包带
- 方向：输出（`outputs`）
- 流类型：废物（`waste`）
- 适用条件：钢制打包带或扎带在前景边界内成为废物时
- UUID 状态：unresolved；requires foreground mapping
- 数量基准：每 1 kg 交付产品
- 单位：kg
- 数值、公式或规则：扣除有文件依据场内复用后的实测废钢带/扎带质量
- 范围或不确定性：不主张类别通用数值范围；要求废物联单或质量平衡
- 数据源 id：`cp_water_auxiliary_packaging`
- 来源 id 或状态：`cp_water_auxiliary_packaging`; UUID unresolved；要求前景记录
- 选定流：废钢制打包带；天工 UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除有文件依据场内复用后的实测废钢带/扎带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_auxiliary_packaging`
- 来源：`eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | multi_route_and_multi_fibre_production | 优先通过细分普梳/精梳路线、实质不同的棉纤维类型/来源以及分别计量的操作来避免分配；保留分解前景记录。 | `eu-pef-2021-2279` |
| `alloc_internal_return` | internally_returned_fibre | 返回同一生产系统的纤维按内部循环处理：从总废物中扣除，不另建第二产品或避免负担抵扣；记录循环质量和新增加工能耗。 | `eu-pef-2021-2279` |
| `alloc_noils_status` | comber_noils_and_recovered_fibre | 根据实际交易、功能和去向确定并记录产品或废物状态；使用互斥清单行，不得把同一质量同时计作产品和废物。 | `osha-1910-262-textiles`; `eu-pef-2021-2279` |
| `alloc_physical_then_economic` | inseparable_coproducts | 细分不能解决负担时，仅在反映因果过程时使用有文件依据的物理关系；否则使用同一代表期间价格的经济分配并披露敏感性结果；不得采用无解释固定比例。 | `eu-pef-2021-2279` |
| `alloc_shared_services` | electricity_hvac_dust_collection_and_packaging | 用计量消耗、设备功率与运行时间、风量、加工质量或包装物料清单等因果驱动分配共享服务；只有缺少更好驱动时才可按产量质量，并披露局限。 | `eu-pef-2021-2279`; `eu-jrc-txt-bref-2023` |
| `alloc_recycling_boundary` | recovered_inputs_and_outputs | 在前景边界记录再生棉投入和回收输出，不给予避免负担抵扣；更宽生命周期研究可在本门到门数据集外采用其声明回收方法，但不得重复计算。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_quality` | `receiving_conditioning` | 三种互斥棉原料及同分层调湿转移 | 秤单；包/批记录；水分试验；供应商/分级证书 | 批次 id；包 id；目的路线；纤维类型/来源；原生/再生状态；输入形态；毛/皮/净重；水分；商业质量规则；等级/规格；品质字段 | 经校准秤及有文件依据的抽样/试验方法 | kg；%；声明品质单位 | 每接收批次和每次转移 | 与参考输出相同生产期间 | 对数据集有贡献的全部原料批次 | 保留批次分层；仅在等同路线/纤维类型/质量基准内汇总 | 校准；抽样计划；监管链；供应商/分级记录；水分方法 |
| `cp_opening_route_records` | `opening_cleaning_blending` | 开松清洁棉、非纤维杂质和不可用棉纤维 | 生产单；喂棉/秤记录；废物联单 | 批次 id；设备线；纤维类型/来源；目的路线；输入质量；开松输出质量；各原子废物质量；内部回用；运行时间 | 核对产线记录与校准质量测量 | kg；h | 每批次或生产单 | 与参考输出相同生产期间 | 所有纳入开清线 | 仅对等同分层质量加权；普梳/精梳目的地和纤维类型分开 | 校准；路线追溯；物料核对；废物去向 |
| `cp_carding_drawing_records` | `carding_drawing` | 普梳输出/中间品及短纤维废物 | 生产单；条筒/棉条质量；设备记录；废物联单 | 批次 id；梳棉/并条线；目的路线；纤维类型/来源；输入；输出；内部回用；短纤维废物；运行时间；质量检查 | 校准质量记录与设备/转移记录核对 | kg；h；声明品质单位 | 每批次或生产单 | 与参考输出相同生产期间 | 所有纳入梳棉和并条线 | 保留路线/纤维类型分层；精梳中间品不作为第二最终产品 | 校准；质量平衡；产线追溯；质量记录 |
| `cp_combing_records` | `combing_preparation` | 精梳输出、回收落棉产品或落棉废物 | 生产单；棉卷/棉条记录；秤单；去向文件 | 来源梳棉批次；纤维类型/来源；输入质量；精梳输出；落棉；其他原子废物；产品/废物状态；去向；运行时间；质量检查 | 核对精梳线质量及转移记录 | kg；h；声明品质单位 | 每精梳批次 | 与参考输出相同生产期间 | 所有纳入精梳准备、精梳及精梳后并条设备 | 不与普梳路线汇总；落棉产品和废物行互斥 | 校准；批次链接；质量平衡；去向/状态证据；质量记录 |
| `cp_energy_and_services` | `opening_cleaning_blending`; `carding_drawing`; `combing_preparation`; `site_services_packaging` | 各过程电力；其他实际能源载体须新增独立原子流 | 电表；发票；设备功率/运行时间；燃料记录 | 仪表 id；载体；起止读数；损失；发电；电网/供应商组合；设备功率；运行时间；服务过程；分配驱动 | 优先分表；否则使用有文件依据的因果工程分配 | kWh；MJ；燃料原始单位 | 连续或班次读数；月度发票核对 | 与产品记录一致的代表期间 | 边界内全部设备和共享服务 | 优先直接归属；因果分配剩余共享用量；路线/纤维类型分开 | 仪表校准；发票核对；分配工作表；换算因子来源 |
| `cp_waste_and_dust_records` | `opening_cleaning_blending`; `carding_drawing` | 每种原子废物、捕集棉尘和内部回用纤维 | 秤；收集容器日志；废物转移联单 | 来源过程；原子物料名称；毛/皮/净重；内部回用；产品回收；废物去向；水分基准 | 每次移除或代表容器称量并核对 | kg | 每次移除或每班；月度核对 | 与参考输出相同生产期间 | 每条纳入产线和除尘器 | 内部回用仅扣除一次；外部去向分开 | 秤校准；容器皮重；转移文件；物料分类 |
| `cp_water_auxiliary_packaging` | `site_services_packaging` | 调湿水、每种命名助剂、PE 膜、瓦楞纸板、木托盘、钢带及对应原子废物 | 水表；采购记录；配方；物料清单；发运记录；废物联单 | 水表读数；每种助剂身份/质量；每种包装材料/质量；复用次数；发运质量；每种包装废物/去向 | 直接计量/称量或采购-库存核对 | kg；m3；件数 | 可行时逐批；月度核对 | 与产品记录一致的代表期间 | 所有纳入公用工程和包装 | 每种物料独立平衡；因果分配至服务路线/产品 | 仪表/秤校准；发票；库存平衡；物料清单；废物联单 |
| `cp_environmental_dust_release` | `site_services_packaging` | 环境颗粒物排放 | 烟道/无组织测试；风量；除尘器记录；维护日志 | 排口；方法；浓度；风量；时长；捕集效率；入口/出口负荷；停机；服务过程；职业监测标志 | 认可环境排放方法或有文件依据质量平衡；职业样品分开保留 | kg；mg/m3；m3/h；h | 法规要求频率及物料/过程/控制变更后；否则代表性监测活动 | 与参考输出相同生产期间 | 全部相关排口和无组织路线 | 仅用有文件依据的因果数据按路线/纤维类型运行份额计算 | 方法报告；校准；检出限；风量；除尘器检查；明确不以职业 PEL 作排放因子 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground amounts | 归一化数量 = 分层数量 / 同一声明质量基准的交付参考产品质量 | 路线/纤维类型数量；交付输出质量；水分/商业质量换算 | 每 1 kg 参考产品数量 | `iso-6741-1-1989` |
| `calc_process_mass_balance` | each material process | 棉输入 + 其他质量投入 = 合格转移/输出 + 外转共产品 + 各原子废物 + 实测释放 + 有文件依据库存变化；残差单独报告 | 校准投入/输出/废物质量；水分基准；库存变化 | 过程残差及核对百分比 |  |
| `calc_route_energy` | equipment and shared energy | 优先直接电表归属；剩余共享电力 = 共享总量 × 有文件依据因果驱动份额 | 电表读数；运行时间/功率/风量或其他驱动；各分层输出质量 | 每路线/纤维类型分层的 kWh 或 MJ | `eu-pef-2021-2279`; `eu-jrc-txt-bref-2023` |
| `calc_noils_allocation` | recovered noils product | 细分后负担遵循有文件依据的物理因果关系；若无可辩护物理关系，使用一致期间经济价值并报告敏感性 | 过程负担；合格输出/落棉质量；因果参数或代表价格 | 各产品输出分配负担 | `eu-pef-2021-2279` |
| `calc_particulate_release` | direct cotton particulate to air | 释放质量 = 实测浓度 × 干态或实际风量 × 运行时间，并按方法进行单位和状态修正；或使用经验证除尘器入口/出口质量平衡 | 环境浓度；风量；时长；状态修正；捕集记录 | 排放颗粒物 kg | `osha-1910-1043-cotton-dust`; `eu-jrc-txt-bref-2023` |
| `calc_weighted_additional_view` | optional portfolio result | 附加加权结果 = sum（分解分层清单 × 分层交付质量）/ 声明期间总交付质量 | 独立普梳/精梳及纤维类型数据集；交付质量；期间 | 可选产量加权视图 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 确认产品为备纺梳理或精梳棉，而不是纱线、混纺纤维、棉废料或回丝；声明形态和市场分类。 | 产品规格；发票；分类审查；批次照片或检验记录 |
| `dq_route` | production route | 保留区分普梳/精梳路线的过程图和生产记录，显示实际实施的每项条件操作。 | 生产单；设备清单；路线图；产线记录 |
| `dq_fibre_type` | cotton feedstock and output | 识别纤维类型/来源，将实质不同的陆地棉、超长绒棉/皮马棉、原生和再生/回收分层。 | 供应商/分级证书；包/批身份；回收含量监管链 |
| `dq_measurement` | mass, energy, water, waste, and emissions | 使用校准仪器或有文件依据的核对；保留原始读数、检出限、换算因子和质量基准。 | 校准证书；仪表/秤记录；实验室或排放报告；计算工作表 |
| `dq_temporal` | foreground activity data | 使用有代表性的连续生产期间或足以覆盖常规波动的批次；披露起止日期、停机、异常事件和样本覆盖。 | 生产日历；批次清单；仪表覆盖；异常日志 |
| `dq_completeness` | process and flow coverage | 核对各过程棉质量，并计入电力、实际使用的水/每种命名助剂、各包装材料、回收产品、每种废物、捕集棉尘和直接释放。 | 质量平衡；公用工程核对；废物联单；排放清单；完整性清单 |
| `dq_geography_technology` | upstream and foreground data | 匹配场址地理、电网/燃料供应、梳棉/精梳技术、除尘和纤维类型；披露所有代理及局限。 | 场址元数据；设备清单；供应商数据；数据集元数据；代理理由 |
| `dq_range_replacement` | provisional reasoned estimates | 每个 `reasoned_estimate` 仅作临时筛选；取得经审查路线/纤维类型批次、审计供应商数据或更强官方/同行评审定量来源后必须替换，原范围仅留在审查历史。 | 审查记录；替换来源；版本差异；代表批次分析 |
| `dq_source_limits` | external evidence | 保留来源范围：CPC 仅支持分类；BREF 支持描述性过程候选和环境相关性但不是 CPC 特定 BAT 声明；OSHA 支持设备/棉尘控制和职业监测但不是环境排放因子；USDA 字段是质量描述符而非通用产品限值。 | 来源用途矩阵；建模说明；审查签字 |
| `dq_atomic_flows` | process inventory | 确认没有清单行合并多种能源载体、水、化学品、包装材料、产品、废物、废水、残余物或排放。本通用 PCR 未列但场址适用的每种燃料、蒸汽/热载体、命名助剂、制冷剂补充、废水流和包装材料，在声称符合前必须新增独立条件前景行。 | 原子流审计；流映射登记；采集协议；UUID 状态登记 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_uuid` | reference_flow | 确认产品流 UUID `93976740-418a-40e3-8901-dbc34f0acdc6`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg；若被替换或把版本文本存入 UUID 则失败。 |  |
| `val_required_qualifiers` | dataset_identity | 路线、形态、纤维类型/来源、水分/质量基准、场址、技术、期间或产品/废物状态缺失时判定不完整。 | `un-cpc-3-2025`; `usda-ams-cotton-classing`; `iso-6741-1-1989` |
| `val_route_separation` | process_inventory | 确认精梳过程、能耗和落棉仅出现在 `route=combed`；确认普梳和精梳记录未被无条件平均。 | `eu-jrc-txt-bref-2023`; `osha-1910-262-textiles` |
| `val_fibre_separation` | process_inventory | 确认实质不同棉纤维类型/来源被分开，或有文件化重要性评估支持汇总；未保留分层的通用类别平均失败。 | `usda-ams-cotton-classing`; `eu-pef-2021-2279` |
| `val_mass_basis` | mass_inventory | 确认所有棉、落棉和废物质量使用同一水分/商业质量基准或具有可追溯换算。 | `iso-6741-1-1989` |
| `val_mass_balance` | each_process_and_total | 核对各过程及总路线；报告残差并调查实质不平衡，不得通过改变参考输出来强行归零。 |  |
| `val_energy_no_double_count` | energy_inventory | 确认设备电力和共享服务覆盖同一生产期间且不重复，保留因果分配证据。 | `eu-pef-2021-2279`; `eu-jrc-txt-bref-2023` |
| `val_noils_exclusivity` | coproduct_and_waste_inventory | 确认精梳落棉按回收产品或废物报告而非两者兼有，且分配方法遵循声明层级。 | `eu-pef-2021-2279`; `osha-1910-262-textiles` |
| `val_dust_evidence` | cotton_dust_and_particulate | 确认捕集粉尘和直接释放分别报告；没有风量、时长及排口证据时，拒绝把职业浓度或 PEL 换算为环境排放质量。 | `osha-1910-1043-cotton-dust` |
| `val_reasoned_estimates` | quantitative_ranges | 确认每个推理估算标为暂定，不被当作允许值或行业典型区间，仅用于声明路线/纤维类型分层，并有替换触发器。 |  |
| `val_source_scope` | modelling_claims | 确认来源未超出声明用途/局限，且 source id 均解析至数据源表。 |  |
| `val_atomic_flows` | process_inventory | 清单行若为集合或类别型伪流则失败，包括合并能源载体、水和化学品、废水和残余物、通用包装或成组排放。确认每行具有一个流名称、方向、流类型、数量基准、单位、数值/公式/规则、范围/不确定性、采集协议或数据源 id、来源/状态，以及 confirmed 或 unresolved UUID 状态。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按路线、纤维类型、技术、场址和期间特定的梳理或精梳棉前景生产数据集 |
| downstream_use | 完成方法审查、UUID 补全、来源审查、代表性前景采集和独立质量检查后，可作为 `secondary_dataset` 或 `background_dataset` 发布 |
| allowed_use | 需要纺纱厂门口备纺棉纤维的供应链和生命周期模型；在路线、纤维类型/来源、质量基准、地理、技术、分配和边界一致时作情景比较 |
| excluded_use | 无条件全球或类别平均；替代原棉/轧花棉、棉废料、混合短纤维、纱线、织物或成品；跨不匹配水分基准或纤维类型比较；法律合规声明；仅由职业棉尘数据作环境声明 |
| required_metadata | canonical PCR id；产品 UUID；CPC 上下文；路线；形态；纤维类型/来源；再生含量方法；质量规格；水分/商业质量基准；场址/地理；技术；期间；过程覆盖；分配；上游数据集/代理；每种包装材料；除尘配置；产品/共产品/废物状态 |
| required_quality_disclosure | 批次及生产覆盖；仪表/秤覆盖和校准；质量平衡残差；路线/纤维类型分层；分配驱动；来源局限；未解析 UUID；代理；暂定推理估算及替换状态；环境与职业棉尘证据区分；原子流审计 |
| update_trigger | 产品身份或分类、普梳/精梳路线或设备、棉纤维类型/来源组合、再生原料制备、水分/质量约定、物料得率、能源或除尘系统、分配或产品/废物状态、包装、代表期间、天工 UUID，或出现更强定量证据时 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，*Central Product Classification (CPC) Version 3.0, Explanatory Notes*，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-12） | 官方类别名称和层级：第 26 节、组 261、子类 26160；不提供路线级清单数量 |
| `eu-jrc-txt-bref-2023` | official_guidance | European Commission Joint Research Centre, Roth 等，*Best Available Techniques (BAT) Reference Document for the Textiles Industry*，EUR 31392 EN，2023，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf（检索于 2026-08-12） | 棉纤维制备和纺纱顺序描述；开松/清洁、梳棉、精梳、并条、能耗和除尘相关性；BAT 范围不是 CPC 26160 产品 PCR |
| `osha-1910-262-textiles` | standard | 美国职业安全与健康管理局，29 CFR 1910.262，*Textiles*，https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.262（检索于 2026-08-12） | 梳棉机、精梳机、精梳机械、成卷准备、开棉机/清棉机和回丝加工设备定义；不是定量 LCA 证据 |
| `osha-1910-1043-cotton-dust` | standard | 美国职业安全与健康管理局，29 CFR 1910.1043，*Cotton dust*，https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1043（检索于 2026-08-12） | 从开松至纱线制造的棉尘相关性、废棉加工定义、监测和控制记录；职业限值不是环境排放因子 |
| `usda-ams-cotton-classing` | official_guidance | 美国农业部农业营销局，*Cotton Classing Services*，https://www.ams.usda.gov/services/grading/cotton-classing（检索于 2026-08-12） | 批次质量候选字段：棉类别、色泽、含杂/异性物、马克隆值、长度、整齐度和强度；美国分级字段为描述符，不是通用符合性限值 |
| `iso-6741-1-1989` | standard | ISO 6741-1:1989，*Textiles — Fibres and yarns — Determination of commercial mass of consignments — Part 1: Mass determination and calculations*，https://www.iso.org/standard/13199.html（检索于 2026-08-12） | 同质单一通用纤维种类货批的商业质量测定和计算；标准不适用于混合纤维，本 PCR 不从中虚构通用棉回潮率 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 of 15 December 2021 on Environmental Footprint methods，含附件 I 的官方合并文本，http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-12） | 功能单位/参考流结构、生命周期清单完整性、原始数据、分配层级、代表性分层、数据质量、电力和回收披露；为通用方法，不是产品特定定量证据 |
